#!/usr/bin/env node
/**
 * One-time asset pipeline: pulls Venice Sports Cards & Collectibles' own
 * real shop photography from their current live site, and produces
 * optimized local copies for the new site.
 *
 * Run manually: `node scripts/fetch-cards.mjs`
 *
 * What this does NOT do, on purpose (see /Users/evan/.claude/plans/vectorized-drifting-whisper.md):
 *   - no cropping, no straightening, no geometry changes of any kind
 *   - no automated background removal / segmentation / attention-crop
 *   - no per-image or AI-generated metadata — the manifest only records
 *     category + generated file paths + real pixel dimensions
 *
 * Processing applied to every image, uniformly:
 *   EXIF auto-orient -> mild brightness/contrast/saturation -> gentle
 *   sharpen -> resize (never upscaled) -> re-encode as WebP.
 */
import { mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const SITE = "https://venicesportscardsand1481.live-website.com";
const ROOT = path.resolve(import.meta.dirname, "..");
const SOURCE_DIR = path.join(ROOT, "source-assets", "venice-cards");
const PUBLIC_DIR = path.join(ROOT, "public", "cards");
const MANIFEST_PATH = path.join(ROOT, "src", "data", "realCardPhotos.ts");

// Section heading (as it appears on the live site) -> our category slug.
const SECTION_MAP = [
  { heading: "Inside the Store", category: "store-interior" },
  { heading: "Sports Cards", category: "sports-cards" },
  { heading: "Holy Grail Pokémon", category: "pokemon", featured: true },
  { heading: "One Piece", category: "one-piece" },
  { heading: "In-Store Pulls", category: "in-store-pulls" },
];

const THUMB_BOX = 640;
const FULL_BOX = 1600;

async function fetchHomepageSections() {
  const res = await fetch(`${SITE}/`, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; VeniceSiteRebuild/1.0)" },
  });
  if (!res.ok) throw new Error(`Failed to fetch homepage: ${res.status}`);
  const html = await res.text();

  // Split on <h2> headings, same grouping the live site itself uses.
  const parts = html.split(/(<h2[^>]*>[^<]*<\/h2>)/);
  const sections = new Map(); // heading text -> url[]
  let current = null;
  const imgRe = /https:\/\/venicesportscardsand1481\.live-website\.com\/wp-content\/uploads\/[^"'\)]*\.(?:jpe?g|png|webp)/gi;

  for (const part of parts) {
    const headingMatch = part.match(/<h2[^>]*>([^<]*)<\/h2>/);
    if (headingMatch) {
      current = headingMatch[1].trim();
      if (!sections.has(current)) sections.set(current, []);
      continue;
    }
    if (!current) continue;
    const found = part.match(imgRe) ?? [];
    sections.get(current).push(...found);
  }

  const categorized = [];
  for (const { heading, category, featured } of SECTION_MAP) {
    const urls = [...new Set(sections.get(heading) ?? [])];
    for (const url of urls) categorized.push({ url, category, featured: !!featured, heading });
  }
  return categorized;
}

function slugFor(url) {
  return path.basename(new URL(url).pathname).replace(/\.(jpe?g|png|webp)$/i, "").toLowerCase();
}

async function downloadOriginal(url, destPath) {
  if (existsSync(destPath)) return; // already have it from a previous run
  const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0 (compatible; VeniceSiteRebuild/1.0)" } });
  if (!res.ok) throw new Error(`Failed to download ${url}: ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(destPath, buf);
}

/** Uniform, conservative, non-destructive correction — same for every photo. */
function correct(image) {
  return image
    .rotate() // auto-orient from EXIF, then strip the tag so browsers can't re-rotate it again
    .modulate({ brightness: 1.04, saturation: 1.04 })
    .linear(1.04, -6) // very mild contrast lift
    .sharpen({ sigma: 0.6 });
}

async function processOne({ url, category, featured }) {
  const slug = slugFor(url);
  const sourceDir = path.join(SOURCE_DIR, category);
  const publicDir = path.join(PUBLIC_DIR, category);
  await mkdir(sourceDir, { recursive: true });
  await mkdir(publicDir, { recursive: true });

  const originalPath = path.join(sourceDir, `${slug}.jpg`);
  await downloadOriginal(url, originalPath);

  const fullPath = path.join(publicDir, `${slug}-full.webp`);
  const thumbPath = path.join(publicDir, `${slug}-thumb.webp`);

  const fullMeta = await correct(sharp(originalPath))
    .resize({ width: FULL_BOX, height: FULL_BOX, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 88 })
    .toFile(fullPath);

  await correct(sharp(originalPath))
    .resize({ width: THUMB_BOX, height: THUMB_BOX, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(thumbPath);

  return {
    id: slug,
    category,
    featured,
    src: `/cards/${category}/${slug}-full.webp`,
    thumbSrc: `/cards/${category}/${slug}-thumb.webp`,
    width: fullMeta.width,
    height: fullMeta.height,
  };
}

async function pool(items, size, worker) {
  const results = new Array(items.length);
  let i = 0;
  async function run() {
    while (i < items.length) {
      const idx = i++;
      results[idx] = await worker(items[idx]);
    }
  }
  await Promise.all(Array.from({ length: size }, run));
  return results;
}

function writeManifest(entries) {
  const byCategory = entries.reduce((acc, e) => {
    (acc[e.category] ??= []).push(e);
    return acc;
  }, {});

  const body = `/**
 * GENERATED FILE — do not hand-edit.
 * Produced by scripts/fetch-cards.mjs from Venice Sports Cards &
 * Collectibles' own real shop photography. Deliberately carries no
 * product metadata (no price/player/set/grade/caption) — see
 * /Users/evan/.claude/plans/vectorized-drifting-whisper.md for why.
 */

export type RealPhotoCategory =
  | "sports-cards"
  | "pokemon"
  | "one-piece"
  | "in-store-pulls"
  | "store-interior";

export interface RealCardPhoto {
  id: string;
  category: RealPhotoCategory;
  /** Two Holy Grail Pokémon photos flagged for an optional in-gallery highlight. */
  featured: boolean;
  /** Root-relative path — pass through withBasePath() before rendering. */
  src: string;
  thumbSrc: string;
  width: number;
  height: number;
}

export const realCardPhotos: RealCardPhoto[] = ${JSON.stringify(entries, null, 2)};

export function getPhotosByCategory(category: RealPhotoCategory): RealCardPhoto[] {
  return realCardPhotos.filter((p) => p.category === category);
}
`;
  return { body, byCategory };
}

async function main() {
  console.log("Fetching homepage and mapping photo sections...");
  const categorized = await fetchHomepageSections();
  console.log(`Found ${categorized.length} source photos across ${SECTION_MAP.length} sections.`);

  const entries = await pool(categorized, 6, async (item) => {
    try {
      const entry = await processOne(item);
      console.log(`  ok   ${item.category}/${entry.id}`);
      return entry;
    } catch (err) {
      console.error(`  FAIL ${item.category} ${item.url}: ${err.message}`);
      return null;
    }
  });

  const ok = entries.filter(Boolean);
  const failed = categorized.length - ok.length;

  const { body, byCategory } = writeManifest(ok);
  await writeFile(MANIFEST_PATH, body);

  console.log("\nBy category:");
  for (const [cat, items] of Object.entries(byCategory)) {
    console.log(`  ${cat}: ${items.length}`);
  }
  console.log(`\nTotal processed: ${ok.length}${failed ? `, failed: ${failed}` : ""}`);
  console.log(`Manifest written to ${path.relative(ROOT, MANIFEST_PATH)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
