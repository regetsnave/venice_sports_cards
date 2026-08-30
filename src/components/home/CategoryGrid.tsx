import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { categories } from "@/lib/constants";
import { getPhotosByCategory, type RealPhotoCategory } from "@/data/realCardPhotos";
import { withBasePath } from "@/lib/basePath";
import { ArrowRightIcon } from "@/components/ui/icons";

/** One representative real photo per real category, for the tile thumbnail. */
function representativePhoto(slug: RealPhotoCategory) {
  return getPhotosByCategory(slug)[0];
}

export default function CategoryGrid() {
  return (
    <section className="bg-black py-20 sm:py-24" aria-labelledby="shop-by-category">
      <Container className="flex flex-col gap-12">
        <Reveal>
          <div id="shop-by-category">
            <SectionHeading eyebrow="Shop By Category" title="Find Your Hobby" />
          </div>
        </Reveal>

        <Reveal className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((cat) => {
            const photo = representativePhoto(cat.slug);
            return (
              <Link
                key={cat.slug}
                href={`/gallery?tab=${cat.slug}`}
                className="group relative flex flex-col border border-charcoal-border bg-charcoal hover:border-gold/60 transition-colors duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-charcoal-light via-charcoal to-black flex items-center justify-center">
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        "radial-gradient(120% 100% at 50% 0%, rgba(198,161,91,0.16) 0%, rgba(198,161,91,0) 65%)",
                    }}
                    aria-hidden="true"
                  />
                  {photo ? (
                    <img
                      src={withBasePath(photo.thumbSrc)}
                      alt={`${cat.label} from Venice Sports Cards & Collectibles`}
                      width={photo.width}
                      height={photo.height}
                      loading="lazy"
                      decoding="async"
                      className="relative w-[46%] aspect-[5/7] object-contain -rotate-6 transition-transform duration-300 ease-out group-hover:-rotate-3 group-hover:scale-105 drop-shadow-[0_14px_22px_rgba(0,0,0,0.55)]"
                    />
                  ) : null}

                  <span className="absolute top-2.5 left-2.5 w-2.5 h-2.5 border-t border-l border-gold/40 group-hover:border-gold/80 transition-colors" aria-hidden="true" />
                  <span className="absolute bottom-2.5 right-2.5 w-2.5 h-2.5 border-b border-r border-gold/40 group-hover:border-gold/80 transition-colors" aria-hidden="true" />
                </div>

                <div className="flex items-center justify-between gap-2 px-4 sm:px-5 py-4 border-t border-charcoal-border group-hover:border-gold/30 transition-colors">
                  <span className="font-display text-sm sm:text-[0.95rem] font-semibold uppercase tracking-wide text-cream">
                    {cat.label}
                  </span>
                  <span className="flex items-center gap-1 text-[0.7rem] uppercase tracking-wide text-gray-500 group-hover:text-gold transition-colors">
                    View
                    <ArrowRightIcon className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            );
          })}
        </Reveal>
      </Container>
    </section>
  );
}
