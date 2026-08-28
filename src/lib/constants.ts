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
  // TODO(business): confirm official hours with the owner and replace.
  hours: {
    isPlaceholder: true,
    display: "Hours coming soon — call to confirm",
  },
  // TODO(business): confirm a public contact email, if any.
  email: {
    isPlaceholder: true,
    display: null as string | null,
  },
  // TODO(business): add real, confirmed social profile URLs here.
  // Left empty on purpose — no accounts have been provided yet.
  social: [] as { label: string; href: string }[],
} as const;

export const categories = [
  { slug: "football", label: "Football" },
  { slug: "basketball", label: "Basketball" },
  { slug: "baseball", label: "Baseball" },
  { slug: "pokemon", label: "Pokémon" },
  { slug: "collectibles", label: "Collectibles" },
  { slug: "graded-cards", label: "Graded Cards" },
] as const;

export const primaryNav = [
  { label: "Home", href: "/" },
  { label: "Buy", href: "/buy" },
  { label: "Sell", href: "/sell" },
  { label: "Trade", href: "/trade" },
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const siteUrl = "https://www.venicesportscards.com"; // TODO(business): confirm final production domain
