import type { NextConfig } from "next";

// GitHub Pages serves this repo at /venice_sports_cards/, so all
// internal links and static assets need that base path baked in.
const repoBasePath = "/venice_sports_cards";

const nextConfig: NextConfig = {
  output: "export",
  basePath: repoBasePath,
  assetPrefix: `${repoBasePath}/`,
  trailingSlash: true,
};

export default nextConfig;
