"use client";

import { withBasePath } from "@/lib/basePath";

/**
 * Premium display tile for real card/slab/pull photography — a studio
 * presentation container, not an image editor. The photo itself is never
 * cropped or stretched: `object-contain` inside a fixed-aspect box keeps
 * every card/slab fully visible and gives a gallery of differently-shaped
 * source photos a consistent perceived size.
 */
export default function CardShowcase({
  thumbSrc,
  width,
  height,
  alt,
  onOpen,
}: {
  thumbSrc: string;
  width: number;
  height: number;
  alt: string;
  onOpen: (trigger: HTMLButtonElement) => void;
}) {
  return (
    <button
      type="button"
      onClick={(e) => onOpen(e.currentTarget)}
      aria-label={`${alt} — view larger`}
      className="group relative block w-full aspect-[3/4] rounded-2xl border border-charcoal-border bg-gradient-to-b from-charcoal-light to-black p-4 sm:p-5 shadow-lg shadow-black/40 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-xl hover:shadow-black/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
    >
      <span
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-70 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: "radial-gradient(58% 52% at 50% 36%, rgba(198,161,91,0.10) 0%, rgba(198,161,91,0) 72%)",
        }}
        aria-hidden="true"
      />
      <img
        src={withBasePath(thumbSrc)}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        className="relative h-full w-full object-contain transition-transform duration-300 ease-out group-hover:scale-[1.03] drop-shadow-[0_18px_28px_rgba(0,0,0,0.55)]"
      />
    </button>
  );
}
