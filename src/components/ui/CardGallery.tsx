"use client";

import { useState } from "react";
import CardShowcase from "@/components/ui/CardShowcase";
import Lightbox from "@/components/ui/Lightbox";
import type { RealCardPhoto } from "@/data/realCardPhotos";

/**
 * Responsive grid of CardShowcase tiles with a shared lightbox. Renders
 * only the photos it's given — the /gallery page mounts one category's
 * CardGallery at a time rather than keeping every tab's images in the DOM.
 */
export default function CardGallery({
  photos,
  altLabel,
}: {
  photos: RealCardPhoto[];
  altLabel: string;
}) {
  const [active, setActive] = useState<{ photo: RealCardPhoto; trigger: HTMLButtonElement } | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 xl:grid-cols-4">
        {photos.map((photo) => (
          <CardShowcase
            key={photo.id}
            thumbSrc={photo.thumbSrc}
            width={photo.width}
            height={photo.height}
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
