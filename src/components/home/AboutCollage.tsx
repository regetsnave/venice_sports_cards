import { getPhotosByCategory } from "@/data/realCardPhotos";
import { withBasePath } from "@/lib/basePath";

/** Hand-picked, varied store-interior shots for the About page's 2x2 photo collage. */
const COLLAGE_IDS = ["img_2768", "img_2769", "img_2789", "img_2799"];

/** Real store-interior photography — used on both the homepage About section and the standalone /about page. */
export default function AboutCollage({ className = "" }: { className?: string }) {
  const storePhotos = getPhotosByCategory("store-interior");
  const photos = COLLAGE_IDS.map((id) => storePhotos.find((p) => p.id === id)).filter(
    (p): p is NonNullable<typeof p> => Boolean(p)
  );

  return (
    <div className={`grid grid-cols-2 grid-rows-2 gap-4 ${className}`}>
      {photos.map((photo) => (
        <div key={photo.id} className="relative overflow-hidden rounded-lg border border-charcoal-border/40 shadow-lg shadow-black/30">
          <img
            src={withBasePath(photo.thumbSrc)}
            alt="Inside Venice Sports Cards & Collectibles"
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
