export function GET() {
  const body = `# Mist Printing

Mist Printing is a custom DTF apparel, sticker, and decal print shop serving Boise and the Treasure Valley locally and shipping orders nationwide.

## Core services
- DTF apparel printing
- Custom stickers and decals
- Bulk business, sporting event, church, school, family reunion, and community orders

## Service area
Boise, Meridian, Nampa, and Caldwell, Idaho; Ontario, Oregon; nationwide shipping within the United States.

## Important limitation
Mist Printing does not currently offer embroidery.

## Website
- /services — printing capabilities
- /our-work — real project gallery
- /about — company approach
- /service-area — local and national coverage
- /contact — quote request information
`;
  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8" } });
}

