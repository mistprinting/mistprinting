---
name: mist-site-orchestrator
description: Coordinate Mist Printing website changes across routes, shared components, brand rules, SEO, content, and page-specific skills. Use for multi-page changes, navigation changes, shared design decisions, new routes, site-wide copy changes, or when deciding which Mist page skill is authoritative.
---

# Mist Site Orchestrator

Treat this repository and its page skills as the durable source of truth for the Mist Printing website.

## Workflow

1. Read `references/site-state.md` before editing the site.
2. Identify every affected route and read its page skill completely.
3. Preserve the shared brand, conversion, SEO, accessibility, and performance rules below.
4. Update the page skill whenever a decision changes the page purpose, section order, primary copy, CTA, metadata, or content dependencies.
5. Update `references/site-state.md` when status, unresolved inputs, routes, or site-wide decisions change.
6. Validate links, metadata, structured data, responsive behavior, and the production build.

## Page ownership

- `/`: `mist-home-page`
- `/services`: `mist-services-page`
- `/our-work`: `mist-work-page`
- `/about`: `mist-about-page`
- `/service-area`: `mist-service-area-page`
- `/contact`: `mist-contact-page`
- `/privacy`: `mist-privacy-page`

Shared header, footer, metadata, JSON-LD, sitemap, robots, and visual tokens belong to this orchestrator.

## Non-negotiable rules

- Present Mist Printing as a Boise-area DTF print shop serving the Treasure Valley and shipping nationally.
- Use deep charcoal as the primary canvas, warm white for contrast, and cyan, magenta, and yellow as deliberate accents.
- Keep navigation and ordering simple. Make the primary CTA `Get a quote` or `Start your quote`.
- When `siteConfig.notionQuoteUrl` is configured, primary quote CTAs open that exact external Notion form in a new tab. Keep `/contact` available as the quote-preparation and guidance page.
- Never claim embroidery is available. Mist currently specializes in DTF apparel, stickers, and decals.
- Never invent prices, turnaround promises, minimums, testimonials, addresses, hours, or customer identities.
- Use the supplied logo and real project media. Do not replace them with generic stock printing imagery.
- Keep pages static-first. Lazy-load below-the-fold images and all video; use responsive media and minimal client JavaScript.
- Do not use eyebrow text or small uppercase section labels anywhere on the site. Let each section heading stand on its own, and preserve essential information in normal heading or body text.
- The production export must contain complete visible content, navigation, metadata, and structured data in HTML. Search engines and visitors must not require JavaScript to read or navigate the site.
- Use people-first local language. Do not create thin, duplicated city landing pages.
- Keep visible copy and structured data consistent.

## Change protocol

Update implementation and its page skill together. When implementation and a skill conflict, reconcile the skill first; do not silently treat stale code as authority.
