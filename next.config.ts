import type { NextConfig } from "next";

const basePath = (process.env.SITE_BASE_PATH ?? "/mistprinting").replace(/\/$/, "");

const nextConfig: NextConfig = {
  trailingSlash: false,
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
