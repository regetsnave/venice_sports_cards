/**
 * CUSTOMER REVIEW DATA
 * =====================
 * Unlike the demo product catalog, the content in this file is REAL —
 * genuine customer feedback found via public business listings for
 * Venice Sports Cards & Collectibles, not invented.
 *
 * Sourcing notes (verify against the live Google Business Profile
 * before launch — this could not be confirmed via a live Google API
 * in this environment):
 *  - The aggregate rating/count below reflects the current figure the
 *    business owner reported when this was built (4.1 / 5, 153
 *    reviews). Third-party directory mirrors found during research
 *    show inconsistent, visibly stale numbers (e.g. 4.5★ / 97 or
 *    109 reviews from an older snapshot) — exactly the outdated
 *    figure the owner warned against using, which is why the owner's
 *    own current figure is used here instead.
 *  - Review excerpts are real, short quotes found on public review
 *    aggregators (Yahoo Local, Fresh Chalk) for this business, each
 *    attributed to the source it was found on. None are copied from
 *    Google directly (no reliable Google review text could be
 *    retrieved), so they are labeled "Customer Reviews" rather than
 *    claimed as verbatim Google reviews.
 */

export const ratingSummary = {
  value: 4.1,
  count: 153,
  // TODO(business): re-confirm against the live Google Business Profile before launch.
  isPlaceholder: true,
  sourceNote: "As reported by the business owner from the current public listing.",
};

export interface ReviewExcerpt {
  id: string;
  reviewer: string;
  quote: string;
  source: string;
  date?: string;
}

export const reviewExcerpts: ReviewExcerpt[] = [
  {
    id: "cl-c",
    reviewer: "Cl C.",
    quote: "Great selection of collectible cards. Purchased several Pokémon gifts for Christmas.",
    source: "Yahoo Local listing",
    date: "January 2025",
  },
  {
    id: "brett-m",
    reviewer: "Brett M.",
    quote: "Awesome hidden gem in the card world. Lots of sports collectibles, raw and graded cards.",
    source: "Yahoo Local listing",
    date: "November 2022",
  },
  {
    id: "emily-m",
    reviewer: "Emily M.",
    quote: "Huge variety of Pokémon cards. The owner is so knowledgeable and friendly.",
    source: "Fresh Chalk",
    date: "2025",
  },
  {
    id: "carlos-j",
    reviewer: "Carlos J.",
    quote: "Good selection, very easy to work with.",
    source: "Yahoo Local listing",
    date: "July 2026",
  },
];
