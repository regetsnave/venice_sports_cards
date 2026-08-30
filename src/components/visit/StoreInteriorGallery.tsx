"use client";

import { useState } from "react";
import PhotoCard from "@/components/ui/PhotoCard";
import Lightbox from "@/components/ui/Lightbox";
import type { RealCardPhoto } from "@/data/realCardPhotos";

/** Store-interior photo strip for the Visit page — see CardGallery for the card/slab equivalent. */
export default function StoreInteriorGallery({ photos }: { photos: RealCardPhoto[] }) {
  const [active, setActive] = useState<{ photo: RealCardPhoto; trigger: HTMLButtonElement } | null>(null);
  const altLabel = "Inside Venice Sports Cards & Collectibles";

  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {photos.map((photo) => (
          <PhotoCard
            key={photo.id}
            thumbSrc={photo.thumbSrc}
            alt={altLabel}
            onOpen={(trigger) => setActive({ photo, trigger })}
          />
        ))}
      </div>
      {active ? (
        <Lightbox
          src={active.photo.src}
          alt={altLabel}
          width={active.photo.width}
          height={active.photo.height}
          onClose={() => setActive(null)}
          returnFocusEl={active.trigger}
        />
      ) : null}
    </>
  );
}
