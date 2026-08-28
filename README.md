# Venice Sports Cards & Collectibles — Website

Production website for **Venice Sports Cards & Collectibles**, a local sports
card, Pokémon, graded card, and collectibles shop in Venice, Florida.

- **Address:** 2357 Tamiami Trail S, Unit 9, Venice, FL 34293
- **Phone:** (941) 218-4541

This is a standalone project, independent of any other site in this
workspace (including the Ascend project). Nothing here references or
depends on files outside this folder.

## Tech Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- Google Fonts via `next/font` (Oswald, Playfair Display, Inter) — no
  external font requests at runtime
- No CMS/database yet — see "Architecture & next steps" below

## Getting Started

```bash
npm install   # already run during scaffolding
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # run the production build locally
npm run lint    # ESLint
```

## Project Structure

```
src/
  app/
    layout.tsx        Root layout: fonts, global <head> metadata, Header/Footer shell
    page.tsx           Homepage — composes the section components below
    globals.css         Design tokens (colors, fonts) + global styles
    sitemap.ts          Dynamic sitemap.xml
    robots.ts           robots.txt rules
  components/
    layout/              Site chrome: TopBar, Header (incl. mobile nav), Footer, SkipToContent
    home/                 Homepage sections (Hero, CategoryGrid, AboutSection, etc.)
    ui/                    Reusable primitives: Button, Container, SectionHeading, icons, ImagePlaceholder
  lib/
    constants.ts          Single source of truth for business info, nav, and categories
public/                    Static assets (currently empty — add real photos/logo here)
```

Sections are broken into small, single-purpose components under
`components/home/` and composed in `app/page.tsx`, rather than one large
page file — new pages (Buy, Sell, Trade, product detail, etc.) can reuse the
same layout, UI primitives, and section components.

## Design

Premium, collector-focused aesthetic: black/charcoal backgrounds, gold
accents, light text, minimal border radius, and restrained motion (a subtle
shimmer on hero card art, hover transitions — everything respects
`prefers-reduced-motion`). Color and font tokens live in
`src/app/globals.css`; update them there to re-theme the whole site.

## Content & Placeholder Policy

Only business facts explicitly confirmed by the owner (name, address, phone)
are hard-coded as real content. Everything else the business hasn't
provided yet is rendered as an **obvious, easy-to-find placeholder** instead
of invented content:

| Item | Status | Where to fix |
| --- | --- | --- |
| Store hours | Placeholder — not yet confirmed | `src/lib/constants.ts` → `business.hours` |
| Public email address | Placeholder — not yet confirmed | `src/lib/constants.ts` → `business.email` |
| Social media links | Empty — no accounts provided | `src/lib/constants.ts` → `business.social` |
| Product photography / store photos | Styled placeholder blocks | `src/components/ui/ImagePlaceholder.tsx` |
| Latest Arrivals inventory | Empty state, no fake products/prices | `src/components/home/LatestArrivals.tsx` |
| Customer reviews | Empty state, no fake reviews | `src/components/home/CustomerReviews.tsx` |
| Production domain | Placeholder URL | `src/lib/constants.ts` → `siteUrl` |

Search the codebase for `TODO(business)` and `TODO(integration)` to find
every spot that needs real data or a backend connection before launch.

## Architecture & Next Steps

The project is structured so it can grow into a full e-commerce site without
a rewrite:

- **Product catalog & detail pages** — add `app/products/[category]/page.tsx`
  and `app/products/[category]/[slug]/page.tsx`; reuse `ImagePlaceholder`
  until real photos exist, and swap in a real data source (CMS or DB).
- **Search & filters** — add a catalog state/query layer once real product
  data exists.
- **Sell Your Cards / Trade Inquiry / Contact forms** — front-end forms
  already exist for the contact and newsletter flows
  (`ContactSection.tsx`, `Newsletter.tsx`); they currently only manage local
  UI state and are marked `TODO(integration)` — wire to an API route + email
  service or a form provider before launch.
- **Online purchasing** — introduce a cart/checkout flow and a payment
  provider (e.g. Stripe) once a catalog exists.
- **Google Maps** — `StoreLocation.tsx` already embeds a live map using the
  real store address (no API key required for the basic embed used here).
- **Inventory management** — pick a CMS or admin tool and replace the static
  `categories`/product placeholders with real data fetching.
- **Analytics** — add an analytics provider (e.g. GA4, Plausible) in
  `app/layout.tsx` when ready.
- **Mobile navigation** — already implemented in `components/layout/Header.tsx`.

## Deployment

Not deployed yet, intentionally. When ready, this is a standard Next.js app
and can be deployed to any Node-compatible host (Vercel, etc.).
