# Mist Printing website

A fast, static-first marketing website for Mist Printing: DTF apparel, stickers, decals, bulk orders, Treasure Valley service, and nationwide shipping.

## Local development

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000/mistprinting/`.

## Production build

```bash
npm run build
npm test
```

The production command validates the Vinext application, renders every route to plain HTML, removes client-side application JavaScript, and writes the deployable site to `dist/client`. Gallery images and all seven process videos are included in that output.

## GitHub Pages deployment

For this repository's default GitHub Pages URL, the correct path and canonical URL are already the build defaults:

```bash
npm run build
```

The workflow at `.github/workflows/deploy-pages.yml` builds the project on every push to `main`, validates the generated pages, and publishes only the static files in `dist/client`. The exporter includes `.nojekyll`, so GitHub Pages serves generated files without Jekyll processing.

In the repository's **Settings > Pages** screen, set **Source** to **GitHub Actions**. Do not publish from the repository root because GitHub Pages will render this README instead of the generated website.

If a custom domain is connected later, leave `SITE_BASE_PATH` empty and set `SITE_URL` to the final `https://` origin before building. Update `public/robots.txt`, `public/sitemap.xml`, and `.agents/skills/mist-site-orchestrator/references/site-state.md` when the canonical domain changes.

## Content configuration

Business-wide facts and the future Notion quote URL live in `app/site-config.ts`. Page requirements live under `.agents/skills`; begin with `.agents/skills/mist-site-orchestrator/SKILL.md` and its `references/site-state.md` file before changing the site.

The contact page intentionally says `Quote form coming soon` until a real Notion URL is supplied. Do not invent contact details, prices, turnaround times, minimum quantities, or embroidery availability.
