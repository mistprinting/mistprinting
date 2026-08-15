const routes = ["/", "/services", "/our-work", "/about", "/service-area", "/contact", "/privacy"];

export async function GET(request: Request) {
  const origin = new URL(request.url).origin;
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((route) => `  <url><loc>${origin}${route}</loc><changefreq>${route === "/our-work" ? "monthly" : "yearly"}</changefreq><priority>${route === "/" ? "1.0" : "0.7"}</priority></url>`).join("\n")}
</urlset>`;
  return new Response(body, { headers: { "content-type": "application/xml; charset=utf-8", "cache-control": "public, max-age=3600" } });
}

