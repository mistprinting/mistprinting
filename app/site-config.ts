const rawBasePath = (process.env.SITE_BASE_PATH ?? "").trim();

export const basePath = rawBasePath
  ? `/${rawBasePath.replace(/^\/+|\/+$/g, "")}`
  : "";

export const siteConfig = {
  name: "Mist Printing",
  siteUrl:
    process.env.SITE_URL?.replace(/\/$/, "") ??
    "https://mistprinting.com",
  description:
    "Custom DTF apparel, stickers, and decals for businesses, teams, churches, reunions, and events. Local Treasure Valley service with nationwide shipping.",
  notionQuoteUrl:
    "https://inky-hair-385.notion.site/37776252de67800da15cf4138026e7b0?pvs=105",
  serviceAreas: [
    "Boise, Idaho",
    "Meridian, Idaho",
    "Nampa, Idaho",
    "Caldwell, Idaho",
    "Ontario, Oregon",
  ],
};

export function assetPath(path: string) {
  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}

export function canonicalUrl(path = "/") {
  const normalized = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.siteUrl}${normalized}`;
}

export function absoluteAssetUrl(path: string) {
  return `${siteConfig.siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}
