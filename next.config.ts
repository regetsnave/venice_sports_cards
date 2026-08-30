import type { NextConfig } from "next";

// GitHub Pages serves this repo at /venice_sports_cards/, so all
// internal links and static assets need that base path baked in.
const repoBasePath = "/venice_sports_cards";

const nextConfig: NextConfig = {
  output: "export",
  basePath: repoBasePath,
  assetPrefix: `${repoBasePath}/`,
  trailingSlash: true,
  // Exposes the base path to app code (see src/lib/basePath.ts) so plain
  // <img> references to /public assets can be prefixed correctly — next/image's
  // default loader isn't available under `output: "export"`, so we don't use it.
  env: {
    NEXT_PUBLIC_BASE_PATH: repoBasePath,
  },
};

export default nextConfig;
