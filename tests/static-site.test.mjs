import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const outputRoot = new URL("../dist/client/", import.meta.url);
const routes = ["", "about/", "contact/", "our-work/", "privacy/", "service-area/", "services/"];

test("exports every public route as static HTML", async () => {
  for (const route of routes) {
    const html = await readFile(new URL(`${route}index.html`, outputRoot), "utf8");
    assert.match(html, /<title>[^<]*Mist Printing[^<]*<\/title>/i);
    assert.match(html, /<header class="site-header">/i);
    assert.match(html, /<footer class="site-footer">/i);
    assert.doesNotMatch(html, /class="eyebrow"/i);
    assert.doesNotMatch(html, /<script(?![^>]*application\/ld\+json)/i);
    assert.doesNotMatch(html, /@vite|_next\/static/i);
  }
});

test("keeps SEO files, real gallery media, and all process videos", async () => {
  await Promise.all([
    access(new URL("robots.txt", outputRoot)),
    access(new URL("sitemap.xml", outputRoot)),
    access(new URL("llms.txt", outputRoot)),
    access(new URL("og.png", outputRoot)),
    access(new URL("work/gallery/teaching-ministry-shirts.webp", outputRoot)),
  ]);

  const workHtml = await readFile(new URL("our-work/index.html", outputRoot), "utf8");
  for (let index = 1; index <= 6; index += 1) {
    assert.match(workHtml, new RegExp(`print-process-0${index}\\.mp4`));
  }
  assert.match(workHtml, /sticker-printing-process\.mp4/);
  assert.equal((workHtml.match(/preload="none"/g) ?? []).length, 7);
  await assert.rejects(access(new URL("mistprinting/_next/", outputRoot)));
});

test("includes local SEO, nationwide shipping, and structured data", async () => {
  const homeHtml = await readFile(new URL("index.html", outputRoot), "utf8");
  assert.match(
    homeHtml,
    /<h1>Custom printing<br\/>built to <em>show up\.<\/em><\/h1>/i,
  );
  assert.match(homeHtml, /Meridian/i);
  assert.match(homeHtml, /Nampa/i);
  assert.match(homeHtml, /Caldwell/i);
  assert.match(homeHtml, /Ontario/i);
  assert.match(homeHtml, /application\/ld\+json/i);
  assert.match(homeHtml, /FAQPage/);
});

test("uses the confirmed Notion form for primary quote calls to action", async () => {
  const notionUrl = "https://inky-hair-385.notion.site/37776252de67800da15cf4138026e7b0?pvs=105";
  const homeHtml = await readFile(new URL("index.html", outputRoot), "utf8");
  const contactHtml = await readFile(new URL("contact/index.html", outputRoot), "utf8");
  assert.match(homeHtml, new RegExp(notionUrl.replace(/[?]/g, "\\?")));
  assert.match(contactHtml, new RegExp(notionUrl.replace(/[?]/g, "\\?")));
  assert.match(contactHtml, /Open quote form/);
  assert.doesNotMatch(contactHtml, /Quote form coming soon/);
});
