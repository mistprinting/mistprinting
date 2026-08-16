# Mist Printing site state

## Current build

- Status: complete and validated; GitHub Pages deployment workflow included
- Visual direction: deep charcoal canvas, warm white contrast, cyan/magenta/yellow accents
- Brand logo: owner-approved transparent PNG at `public/mist-logo.png`, used in the shared header, footer, and Organization structured data
- Framework: static-first Vinext/React export, GitHub Pages-compatible, no PHP
- Primary CTA: confirmed external Notion quote form at `https://inky-hair-385.notion.site/37776252de67800da15cf4138026e7b0?pvs=105`
- Media source: `C:\Users\andy\Downloads\MistWebsite\gallery`
- Media policy: all 15 optimized gallery images and all 7 supplied process videos remain in `public/work/` and ship with the repository
- Hosting decision: the owner will configure and publish with GitHub Pages; Codex should not deploy this project to another platform unless explicitly requested
- Deployment: `.github/workflows/deploy-pages.yml` builds and validates the site on pushes to `main`, then publishes only `dist/client` through GitHub Actions
- GitHub Pages setting: the publishing source must be `GitHub Actions`, not the repository root or `/docs`
- Custom domain: `https://mistprinting.com`
- Public path: the custom-domain build is served from `/`; `SITE_BASE_PATH` must remain empty so styles, media, and internal links resolve at the domain root
- Rendering: every route is build-time server-rendered to complete static HTML; the production site does not require JavaScript for content or navigation
- Heading treatment: no eyebrow text or small uppercase section labels anywhere on the site; headings stand on their own

## Routes

- `/` — implemented
- `/services` — implemented
- `/our-work` — implemented with complete image and video gallery
- `/about` — implemented
- `/service-area` — implemented
- `/contact` — implemented with active Notion form handoff; awaiting public business contact details
- `/privacy` — implemented with an accurate Notion disclosure and interim privacy inquiry route through the form; dedicated privacy email still needed

## Confirmed facts

- Business name: Mist Printing
- Core offerings: DTF apparel printing, stickers, decals
- Embroidery: not offered yet
- Local markets: Boise, Meridian, Nampa, Caldwell, Idaho; Ontario, Oregon
- Fulfillment: local/regional service plus nationwide shipping
- Audiences: businesses, family reunions, churches, sporting events, schools, teams, and community groups
- Capacity positioning: capable of large-scale orders

## Needed owner inputs

- Public phone and email
- Address or service-area-only wording
- Business hours
- Turnaround guidance
- Minimum quantities, if any
- Garment sourcing rules
- Shipping and pickup details
- Social links
- Real testimonials, if desired

## Update rule

Update this file whenever a confirmed fact, route status, dependency, or site-wide decision changes.
