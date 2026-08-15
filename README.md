# Mist Printing website

A fast, static-first marketing website for Mist Printing: DTF apparel, stickers, decals, bulk orders, Treasure Valley service, and nationwide shipping.

## Local development

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000/`.

## Production build

```bash
npm run build
npm test
```

The production command validates the Vinext application, renders every route to plain HTML, removes client-side application JavaScript, and writes the deployable site to `dist/client`. Gallery images and all seven process videos are included in that output.

## GitHub Pages deployment

The production build targets the custom domain at `https://mistprinting.com` and serves the site from `/`:

```bash
npm run build
```

The workflow at `.github/workflows/deploy-pages.yml` builds the project on every push to `main`, validates the generated pages, and publishes only the static files in `dist/client`. The exporter includes `.nojekyll`, so GitHub Pages serves generated files without Jekyll processing.

In the repository's **Settings > Pages** screen, set **Source** to **GitHub Actions**. Do not publish from the repository root because GitHub Pages will render this README instead of the generated website.

Keep `SITE_BASE_PATH` empty for the custom domain. `SITE_URL` is set to `https://mistprinting.com` so canonical URLs, Open Graph metadata, robots, and the sitemap all use the public domain.

## Content configuration

Business-wide facts and the active Notion quote URL live in `app/site-config.ts`. Page requirements live under `.agents/skills`; begin with `.agents/skills/mist-site-orchestrator/SKILL.md` and its `references/site-state.md` file before changing the site.

Do not invent contact details, prices, turnaround times, minimum quantities, or embroidery availability.
