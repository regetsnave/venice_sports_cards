import { realCardPhotos, type RealCardPhoto } from "./realCardPhotos";

/**
 * Hand-picked for the homepage by visually reviewing the full collection —
 * sharp focus, minimal glare, clean framing, strong color. No quota per
 * category. None of these are cropped, straightened, or altered beyond the
 * same uniform correction applied to every photo in scripts/fetch-cards.mjs;
 * composition here is a *selection* criterion, never something fixed after
 * the fact. No caption or product metadata is attached anywhere below.
 */
const FEATURED_IDS = [
  "img_2911", // pokemon — 1999 Charizard, PSA-graded (Holy Grail case)
  "img_2921", // one-piece — ten-slab CGC display
  "img_2876", // sports-cards — autographed graded slab
  "img_2912", // pokemon — paired shadowless Charizard slabs (Holy Grail case)
  "img_2899", // sports-cards — 1986 Fleer rookie in a screw-down case
  "img_2933", // one-piece — alternate-art CGC slab
  "img_2895", // sports-cards — autographed rookie slab
  "img_2906", // sports-cards — numbered insert card
];

export const featuredCardPhotos: RealCardPhoto[] = FEATURED_IDS.map(
  (id) => realCardPhotos.find((p) => p.id === id)
).filter((p): p is RealCardPhoto => Boolean(p));
