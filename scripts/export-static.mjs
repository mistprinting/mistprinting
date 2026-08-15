import { spawn } from "node:child_process";
import { copyFile, mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outputRoot = resolve(projectRoot, "dist", "client");
const port = Number(process.env.STATIC_EXPORT_PORT ?? 4317);
const basePath = normalizeBasePath(process.env.SITE_BASE_PATH ?? "");
const siteUrl = (process.env.SITE_URL ?? "https://mistprinting.com").replace(/\/$/, "");
const routes = ["/", "/services", "/our-work", "/about", "/service-area", "/contact", "/privacy"];
const vinextCli = resolve(projectRoot, "node_modules", "vinext", "dist", "cli.js");
const serverOutput = [];
let exportOrigin = `http://localhost:${port}`;

function normalizeBasePath(value) {
  const trimmed = value.trim().replace(/^\/+|\/+$/g, "");
  return trimmed ? `/${trimmed}` : "";
}

function exportUrl(route) {
  return `${exportOrigin}${basePath}${route}`;
}

function outputFile(route) {
  return route === "/"
    ? resolve(outputRoot, "index.html")
    : resolve(outputRoot, route.slice(1), "index.html");
}

function cleanHtml(html) {
  const stylesheetHref = `${basePath}/styles.css`;
  return html
    .replace(/<script(?![^>]*type=["']application\/ld\+json["'])[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<link[^>]+rel=["']modulepreload["'][^>]*\/?>(?:\s*)/gi, "")
    .replace(/<link[^>]+href=["'][^"']*\/app\/globals\.css["'][^>]*\/?>(?:\s*)/gi, `<link rel="stylesheet" href="${stylesheetHref}"/>`)
    .replace(/\sdata-rsc-[\w-]+="[^"]*"/gi, "")
    .replace(/\sdata-nimg="[^"]*"/gi, "")
    .replace(/\sfetchPriority=/g, " fetchpriority=")
    .replace(/<\/body>\s*<\/html>\s*$/i, "</body></html>\n");
}

async function waitForServer(child) {
  const deadline = Date.now() + 30_000;
  while (Date.now() < deadline) {
    if (child.exitCode !== null) {
      const output = serverOutput.join("");
      const existingServer = output.match(/http:\/\/localhost:(\d+)/);
      if (existingServer) {
        exportOrigin = `http://localhost:${existingServer[1]}`;
        const response = await fetch(exportUrl("/"));
        if (response.ok) return;
      }
      throw new Error(`Preview server exited before export.\n${output}`);
    }
    try {
      const response = await fetch(exportUrl("/"));
      if (response.ok) return;
    } catch (error) {
      if (child.exitCode !== null) throw error;
    }
    await new Promise((resolveWait) => setTimeout(resolveWait, 200));
  }
  throw new Error(`Timed out waiting for the preview server.\n${serverOutput.join("")}`);
}

async function writeSeoFiles() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes
    .map((route) => `  <url><loc>${siteUrl}${route === "/" ? "" : route}</loc><changefreq>${route === "/our-work" ? "monthly" : "yearly"}</changefreq><priority>${route === "/" ? "1.0" : "0.7"}</priority></url>`)
    .join("\n")}\n</urlset>\n`;
  await writeFile(resolve(outputRoot, "sitemap.xml"), sitemap);
  await writeFile(resolve(outputRoot, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`);
}

const server = spawn(process.execPath, [vinextCli, "dev", "--port", String(port)], {
  cwd: projectRoot,
  env: process.env,
  stdio: ["ignore", "pipe", "pipe"],
  windowsHide: true,
});
server.stdout.on("data", (chunk) => serverOutput.push(chunk.toString()));
server.stderr.on("data", (chunk) => serverOutput.push(chunk.toString()));

try {
  await waitForServer(server);
  for (const route of routes) {
    const response = await fetch(exportUrl(route));
    if (!response.ok) throw new Error(`Unable to export ${route}: HTTP ${response.status}`);
    const destination = outputFile(route);
    await mkdir(dirname(destination), { recursive: true });
    await writeFile(destination, cleanHtml(await response.text()));
  }

  await copyFile(resolve(projectRoot, "app", "globals.css"), resolve(outputRoot, "styles.css"));
  await writeFile(resolve(outputRoot, ".nojekyll"), "");
  await writeSeoFiles();
  const deployedAssetRoot = basePath
    ? resolve(outputRoot, basePath.slice(1))
    : outputRoot;
  await rm(resolve(deployedAssetRoot, "_next"), { recursive: true, force: true });
  await rm(resolve(outputRoot, ".vite"), { recursive: true, force: true });
  await rm(resolve(outputRoot, "vinext-client-entry-manifest.json"), { force: true });
  console.log(`Static site exported to ${outputRoot}`);
} finally {
  if (server.exitCode === null) server.kill();
}
