/**
 * Central source of truth for real business information.
 * Only values explicitly confirmed by the business owner belong here.
 * Anything not yet confirmed is marked isPlaceholder so the UI can
 * render it in an obviously-a-placeholder way until it's replaced.
 */

export const business = {
  name: "Venice Sports Cards & Collectibles",
  shortName: "Venice Sports Cards",
  tagline: "Buy · Sell · Trade",
  address: {
    line1: "2357 Tamiami Trail S, Unit 9",
    city: "Venice",
    state: "FL",
    zip: "34293",
    full: "2357 Tamiami Trail S, Unit 9, Venice, FL 34293",
  },
  phone: {
    display: "(941) 218-4541",
    href: "tel:+19412184541",
  },
  // Provided by the business owner as their current public listing hours.
  // TODO(business): confirm these still match the live Google listing before launch.
  hours: {
    isPlaceholder: false,
    display: "9:00 AM – 6:00 PM Daily",
    schedule: [
      { day: "Monday", hours: "9:00 AM – 6:00 PM" },
      { day: "Tuesday", hours: "9:00 AM – 6:00 PM" },
      { day: "Wednesday", hours: "9:00 AM – 6:00 PM" },
      { day: "Thursday", hours: "9:00 AM – 6:00 PM" },
      { day: "Friday", hours: "9:00 AM – 6:00 PM" },
      { day: "Saturday", hours: "9:00 AM – 6:00 PM" },
      { day: "Sunday", hours: "9:00 AM – 6:00 PM" },
    ],
  },
  // TODO(business): confirm a public contact email, if any.
  email: {
    isPlaceholder: true,
    display: null as string | null,
  },
  // TODO(business): add real, confirmed social profile URLs here.
  // Left empty on purpose — no accounts have been provided yet.
  social: [] as { label: string; href: string }[],
  // No confirmed Google Place ID yet, so this points to a search rather
  // than a guessed/fabricated direct review-write link.
  googleSearchUrl:
    "https://www.google.com/search?q=Venice+Sports+Cards+%26+Collectibles+Venice+FL+reviews",
} as const;

/**
 * Real photography categories — matches src/data/realCardPhotos.ts'
 * RealPhotoCategory exactly (minus "store-interior", which isn't a
 * shop-by-category concept). Sports cards aren't tagged by individual
 * sport in the real photo set (several shots show multiple sports at
 * once), so there's a single "Sports Cards" category rather than the
 * old fictional per-sport split.
 */
export const categories = [
  { slug: "sports-cards", label: "Sports Cards" },
  { slug: "pokemon", label: "Pokémon" },
  { slug: "one-piece", label: "One Piece" },
  { slug: "in-store-pulls", label: "In-Store Pulls" },
] as const;

export type CategorySlug = (typeof categories)[number]["slug"];

export const primaryNav = [
  { label: "Home", href: "/" },
  { label: "Buy", href: "/buy" },
  { label: "Sell", href: "/sell" },
  { label: "Trade", href: "/trade" },
  { label: "Gallery", href: "/gallery" },
  { label: "About Us", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNav = {
  shop: [
    { label: "Photo Gallery", href: "/gallery" },
    ...categories.map((c) => ({ label: c.label, href: `/gallery?tab=${c.slug}` })),
  ],
  store: [
    { label: "Buy", href: "/buy" },
    { label: "Sell", href: "/sell" },
    { label: "Trade", href: "/trade" },
    { label: "About Us", href: "/about" },
    { label: "Reviews", href: "/reviews" },
    { label: "Visit Us", href: "/visit" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export const siteUrl = "https://www.venicesportscards.com"; // TODO(business): confirm final production domain
