/**
 * DEMO / CONCEPT INVENTORY — NOT REAL PRODUCTS
 * ==============================================
 * Everything below is fictional: card names, sets, grades, cert
 * numbers, and prices. It exists solely to demonstrate the website's
 * design and e-commerce structure to Venice Sports Cards & Collectibles
 * before their real product catalog exists. Venice Sports Cards does
 * not currently own or sell the specific items pictured here.
 *
 * The card art (see components/ui/concept/) is 100% original — no real
 * card designs, team logos, character likenesses, or grading-company
 * branding are reproduced anywhere in this system.
 *
 * TO REPLACE WITH REAL INVENTORY LATER:
 * Swap this file for a real data source (CMS query, database call, or
 * generated catalog feed) that returns the same DemoProduct shape, and
 * add real photography in place of the SVG/CSS art components. No page
 * or component needs to change shape.
 */

export type SportTheme = "pokemon" | "one-piece" | "football" | "baseball" | "basketball" | "hockey";
export type CardCondition = "graded" | "raw" | "sealed";
/** The 8 shop-by-category routes. "graded" and "sealed" cut across themes by condition. */
export type CategorySlug = SportTheme | "graded" | "sealed";

export interface DemoProduct {
  id: string;
  theme: SportTheme;
  condition: CardCondition;
  title: string;
  year: string;
  setName: string;
  /** Text rendered directly on the fictional card face. */
  faceLabel: string;
  grade?: { word: string; value: string };
  /** Fictional certification number for the fictional "Lumen Grade" slab. */
  cert?: string;
  /** Fictional demo price, in whole dollars, for layout/sorting purposes only. */
  price: number;
}

export const GRADING_BRAND = "Lumen Grade";

export const DEMO_DISCLAIMER =
  "Concept preview — fictional demo products created to illustrate the website design. Not real inventory, and not available for purchase.";

export function formatPrice(price: number): string {
  return `$${price.toLocaleString("en-US")}`;
}

export const demoInventory: DemoProduct[] = [
  // Pokémon
  {
    id: "flame-wing-holo-rare",
    theme: "pokemon",
    condition: "graded",
    title: "Flame-Wing Holo Rare",
    year: "2023",
    setName: "Ember Legends",
    faceLabel: "FLAME-WING · HOLO RARE",
    grade: { word: "GEM MINT", value: "10" },
    cert: "LG-10293847",
    price: 540,
  },
  {
    id: "frost-fox-full-art",
    theme: "pokemon",
    condition: "graded",
    title: "Frost Fox — Full Art",
    year: "2022",
    setName: "Glacier Skies",
    faceLabel: "FROST FOX · FULL ART",
    grade: { word: "MINT", value: "9" },
    cert: "LG-30124589",
    price: 265,
  },
  {
    id: "thunder-cub-promo",
    theme: "pokemon",
    condition: "raw",
    title: "Thunder Cub Promo",
    year: "2024",
    setName: "Spark Collection",
    faceLabel: "THUNDER CUB · PROMO",
    price: 45,
  },
  {
    id: "ember-legends-booster-box",
    theme: "pokemon",
    condition: "sealed",
    title: "Ember Legends Booster Box",
    year: "2023",
    setName: "Ember Legends",
    faceLabel: "SEALED BOOSTER BOX",
    price: 189,
  },

  // One Piece
  {
    id: "voyage-captain-alt-art",
    theme: "one-piece",
    condition: "graded",
    title: "Voyage Captain — Alternate Art",
    year: "2024",
    setName: "Grand Line Chronicles",
    faceLabel: "VOYAGE CAPTAIN · ALT ART",
    grade: { word: "GEM MINT", value: "10" },
    cert: "LG-55129384",
    price: 780,
  },
  {
    id: "first-mate-swordsman-rare",
    theme: "one-piece",
    condition: "graded",
    title: "First Mate Swordsman Rare",
    year: "2023",
    setName: "New World Saga",
    faceLabel: "FIRST MATE · SWORDSMAN",
    grade: { word: "MINT", value: "9" },
    cert: "LG-71938204",
    price: 410,
  },
  {
    id: "navigators-chart-parallel",
    theme: "one-piece",
    condition: "raw",
    title: "Navigator's Chart — Parallel",
    year: "2024",
    setName: "Grand Line Chronicles",
    faceLabel: "NAVIGATOR'S CHART",
    price: 65,
  },
  {
    id: "new-world-saga-booster-box",
    theme: "one-piece",
    condition: "sealed",
    title: "New World Saga Booster Box",
    year: "2023",
    setName: "New World Saga",
    faceLabel: "SEALED BOOSTER BOX",
    price: 210,
  },

  // Football
  {
    id: "gridiron-rookie-prospect",
    theme: "football",
    condition: "graded",
    title: "Gridiron Rookie Prospect",
    year: "2024",
    setName: "Series One Prospects",
    faceLabel: "ROOKIE QB · NO. 7",
    grade: { word: "GEM MINT", value: "10" },
    cert: "LG-04829371",
    price: 1250,
  },
  {
    id: "legacy-signature-rookie",
    theme: "football",
    condition: "graded",
    title: "Legacy Signature Rookie",
    year: "2023",
    setName: "Legacy Autograph Series",
    faceLabel: "SIGNATURE · WR NO. 14",
    grade: { word: "MINT", value: "9.5" },
    cert: "LG-92038475",
    price: 940,
  },
  {
    id: "gridiron-legacy-rookie",
    theme: "football",
    condition: "raw",
    title: "Gridiron Legacy Rookie",
    year: "2021",
    setName: "Legacy Prospects",
    faceLabel: "RUNNING BACK · NO. 28",
    price: 120,
  },
  {
    id: "series-one-hobby-box",
    theme: "football",
    condition: "sealed",
    title: "Series One Prospects Hobby Box",
    year: "2024",
    setName: "Series One Prospects",
    faceLabel: "SEALED HOBBY BOX",
    price: 145,
  },

  // Baseball
  {
    id: "vintage-diamond-legend",
    theme: "baseball",
    condition: "graded",
    title: "Vintage Diamond Legend",
    year: "1971",
    setName: "Classic Series",
    faceLabel: "OUTFIELD LEGEND",
    grade: { word: "NEAR MINT", value: "7" },
    cert: "LG-88213045",
    price: 2400,
  },
  {
    id: "modern-diamond-star",
    theme: "baseball",
    condition: "graded",
    title: "Modern Diamond Star",
    year: "2024",
    setName: "All-Star Series",
    faceLabel: "PITCHER · NO. 34",
    grade: { word: "GEM MINT", value: "10" },
    cert: "LG-77120945",
    price: 310,
  },
  {
    id: "rookie-season-debut",
    theme: "baseball",
    condition: "raw",
    title: "Rookie Season Debut",
    year: "2022",
    setName: "Prospect Series",
    faceLabel: "INFIELD · NO. 19",
    price: 38,
  },
  {
    id: "all-star-wax-box",
    theme: "baseball",
    condition: "sealed",
    title: "All-Star Series Wax Box",
    year: "2024",
    setName: "All-Star Series",
    faceLabel: "SEALED WAX BOX",
    price: 95,
  },

  // Basketball
  {
    id: "hardwood-debut-rookie",
    theme: "basketball",
    condition: "graded",
    title: "Hardwood Debut Rookie",
    year: "2023",
    setName: "Premier Draft Class",
    faceLabel: "POINT GUARD · NO. 23",
    grade: { word: "MINT", value: "9" },
    cert: "LG-11239850",
    price: 680,
  },
  {
    id: "downtown-legend-refractor",
    theme: "basketball",
    condition: "graded",
    title: "Downtown Legend Refractor",
    year: "2024",
    setName: "Premier Draft Class",
    faceLabel: "SHOOTING GUARD · REFRACTOR",
    grade: { word: "GEM MINT", value: "10" },
    cert: "LG-63820194",
    price: 890,
  },
  {
    id: "clutch-shot-numbered",
    theme: "basketball",
    condition: "raw",
    title: "Clutch Shot — Numbered /99",
    year: "2024",
    setName: "Premier Draft Class",
    faceLabel: "SHOOTING GUARD · NO. 11",
    price: 95,
  },
  {
    id: "premier-draft-hobby-box",
    theme: "basketball",
    condition: "sealed",
    title: "Premier Draft Class Hobby Box",
    year: "2024",
    setName: "Premier Draft Class",
    faceLabel: "SEALED HOBBY BOX",
    price: 260,
  },

  // Hockey
  {
    id: "frozen-pond-rookie",
    theme: "hockey",
    condition: "graded",
    title: "Frozen Pond Rookie",
    year: "2023",
    setName: "Winter Classic Series",
    faceLabel: "CENTER · NO. 9",
    grade: { word: "MINT", value: "9" },
    cert: "LG-40598213",
    price: 175,
  },
  {
    id: "original-six-legend",
    theme: "hockey",
    condition: "graded",
    title: "Original Six Legend",
    year: "1978",
    setName: "Vintage Ice Series",
    faceLabel: "GOALTENDER LEGEND",
    grade: { word: "NM-MT", value: "8" },
    cert: "LG-29471056",
    price: 920,
  },
  {
    id: "breakaway-rookie-parallel",
    theme: "hockey",
    condition: "raw",
    title: "Breakaway Rookie Parallel",
    year: "2024",
    setName: "Winter Classic Series",
    faceLabel: "WING · NO. 17",
    price: 28,
  },
  {
    id: "winter-classic-booster-box",
    theme: "hockey",
    condition: "sealed",
    title: "Winter Classic Series Booster Box",
    year: "2024",
    setName: "Winter Classic Series",
    faceLabel: "SEALED BOOSTER BOX",
    price: 110,
  },
];

export function getProductsByCategory(slug: CategorySlug): DemoProduct[] {
  if (slug === "graded") return demoInventory.filter((p) => p.condition === "graded");
  if (slug === "sealed") return demoInventory.filter((p) => p.condition === "sealed");
  return demoInventory.filter((p) => p.theme === slug);
}

export function getProductById(id: string): DemoProduct | undefined {
  return demoInventory.find((p) => p.id === id);
}

/** Cards from before 1990 get the vintage visual treatment automatically. */
export function isVintage(product: DemoProduct): boolean {
  return parseInt(product.year, 10) < 1990;
}

/** The category a product's own detail-page URL should live under. */
export function primaryCategoryFor(product: DemoProduct): CategorySlug {
  return product.theme;
}

/** Four cards for the hero: Pokémon, football, baseball/basketball, One Piece. */
export const heroPicks: DemoProduct[] = [
  getProductById("flame-wing-holo-rare")!,
  getProductById("gridiron-rookie-prospect")!,
  getProductById("modern-diamond-star")!,
  getProductById("voyage-captain-alt-art")!,
];

/** A varied 8-item spread for the homepage "Latest Arrivals" teaser. */
export const featuredProducts: DemoProduct[] = [
  getProductById("flame-wing-holo-rare")!,
  getProductById("voyage-captain-alt-art")!,
  getProductById("gridiron-rookie-prospect")!,
  getProductById("hardwood-debut-rookie")!,
  getProductById("vintage-diamond-legend")!,
  getProductById("original-six-legend")!,
  getProductById("clutch-shot-numbered")!,
  getProductById("ember-legends-booster-box")!,
];

/** One representative product per shop-by-category tile. */
export const categoryPicks: Record<CategorySlug, DemoProduct> = {
  pokemon: getProductById("flame-wing-holo-rare")!,
  "one-piece": getProductById("voyage-captain-alt-art")!,
  football: getProductById("gridiron-rookie-prospect")!,
  baseball: getProductById("vintage-diamond-legend")!,
  basketball: getProductById("hardwood-debut-rookie")!,
  hockey: getProductById("original-six-legend")!,
  graded: getProductById("vintage-diamond-legend")!,
  sealed: getProductById("ember-legends-booster-box")!,
};
