import type { MetadataRoute } from "next";
import { categories, siteUrl } from "@/lib/constants";
import { demoInventory, primaryCategoryFor } from "@/data/demoInventory";

export const dynamic = "force-static";

const staticRoutes = [
  "/",
  "/products",
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

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.8,
  }));

  const categoryEntries: MetadataRoute.Sitemap = categories.map((c) => ({
    url: `${siteUrl}/products/${c.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const productEntries: MetadataRoute.Sitemap = demoInventory.map((p) => ({
    url: `${siteUrl}/products/${primaryCategoryFor(p)}/${p.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticEntries, ...categoryEntries, ...productEntries];
}
