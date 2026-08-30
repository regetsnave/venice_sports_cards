"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import CardGallery from "@/components/ui/CardGallery";
import type { RealCardPhoto, RealPhotoCategory } from "@/data/realCardPhotos";

const TABS: { key: RealPhotoCategory; label: string; altLabel: string }[] = [
  { key: "sports-cards", label: "Sports Cards", altLabel: "Sports card from Venice Sports Cards & Collectibles" },
  { key: "pokemon", label: "Pokémon", altLabel: "Pokémon card from Venice Sports Cards & Collectibles" },
  { key: "one-piece", label: "One Piece", altLabel: "One Piece card from Venice Sports Cards & Collectibles" },
  {
    key: "in-store-pulls",
    label: "In-Store Pulls",
    altLabel: "In-store pull at Venice Sports Cards & Collectibles",
  },
];

/**
 * Only the active tab's CardGallery is mounted — switching tabs swaps the
 * whole grid rather than toggling CSS visibility on all four at once, so
 * inactive categories never load images or sit in the DOM.
 */
/** Deep-link support: `/gallery?tab=pokemon` opens straight to that tab; anything unrecognized falls back to Sports Cards. */
function isGalleryCategory(value: string | null): value is RealPhotoCategory {
  return TABS.some((t) => t.key === value);
}

export default function GalleryTabs({
  photosByCategory,
}: {
  photosByCategory: Partial<Record<RealPhotoCategory, RealCardPhoto[]>>;
}) {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab");
  const [active, setActive] = useState<RealPhotoCategory>(
    isGalleryCategory(initialTab) ? initialTab : "sports-cards"
  );
  const tab = TABS.find((t) => t.key === active)!;
  const photos = photosByCategory[active] ?? [];
  const holyGrail = active === "pokemon" ? photos.filter((p) => p.featured) : [];
  const rest = active === "pokemon" ? photos.filter((p) => !p.featured) : photos;

  return (
    <div className="flex flex-col gap-10 sm:gap-12">
      <div role="tablist" aria-label="Photo category" className="flex flex-wrap gap-2.5 sm:gap-3">
        {TABS.map((t) => (
          <button
            key={t.key}
            type="button"
            role="tab"
            aria-selected={active === t.key}
            onClick={() => setActive(t.key)}
            className={`rounded-full border px-5 py-3 font-display text-xs uppercase tracking-[0.08em] transition-colors sm:text-sm ${
              active === t.key
                ? "border-gold bg-gold/10 text-gold"
                : "border-charcoal-border text-cream/75 hover:border-gold/40 hover:text-gold"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {holyGrail.length > 0 ? (
        <div className="flex flex-col gap-5">
          <p className="font-display text-xs uppercase tracking-[0.2em] text-gold">Holy Grail</p>
          <CardGallery
            photos={holyGrail}
            altLabel="Holy Grail Pokémon card from Venice Sports Cards & Collectibles"
          />
        </div>
      ) : null}

      {rest.length > 0 ? (
        <CardGallery key={active} photos={rest} altLabel={tab.altLabel} />
      ) : (
        <p className="text-sm text-gray-500">No photos in this category yet.</p>
      )}
    </div>
  );
}
