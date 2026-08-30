import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/constants";

export const dynamic = "force-static";

const staticRoutes = [
  "/",
  "/gallery",
  "/buy",
  "/sell",
  "/trade",
  "/about",
  "/contact",
  "/visit",
  "/reviews",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return staticRoutes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
