"use client";

import { withBasePath } from "@/lib/basePath";

/**
 * Environmental/store photography tile — visually related to CardShowcase
 * (same border/shadow/radius language) but intentionally simpler: natural
 * `object-cover` cropping is fine here since these are storefront photos,
 * not collectibles whose physical edges must stay fully visible.
 */
export default function PhotoCard({
  thumbSrc,
  alt,
  onOpen,
}: {
  thumbSrc: string;
  alt: string;
  onOpen: (trigger: HTMLButtonElement) => void;
}) {
  return (
    <button
      type="button"
      onClick={(e) => onOpen(e.currentTarget)}
      aria-label={`${alt} — view larger`}
      className="group relative block w-full aspect-[4/3] overflow-hidden rounded-xl border border-charcoal-border bg-charcoal shadow-md shadow-black/30 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-gold/30 hover:shadow-xl hover:shadow-black/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
    >
      <img
        src={withBasePath(thumbSrc)}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
      />
    </button>
  );
}
