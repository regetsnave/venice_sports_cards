import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import CardGallery from "@/components/ui/CardGallery";
import { featuredCardPhotos } from "@/data/featuredCardPhotos";

/**
 * Real shop photography, hand-picked from the current inventory — see
 * src/data/featuredCardPhotos.ts. Deliberately carries no price or product
 * copy.
 */
export default function FeaturedCards() {
  return (
    <section className="bg-black py-20 sm:py-24" aria-labelledby="from-the-shop-heading">
      <Container className="flex flex-col gap-12">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div id="from-the-shop-heading">
              <SectionHeading
                eyebrow="Real Inventory"
                title="From the Shop"
                align="left"
                description="A look at cards and collectibles from Venice Sports Cards & Collectibles."
              />
            </div>
            <ButtonLink href="/gallery" variant="ghost" className="group px-0 py-0">
              <span className="border-b border-transparent pb-0.5 group-hover:border-gold">
                View Full Gallery
              </span>
              <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
                &rarr;
              </span>
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal>
          <CardGallery photos={featuredCardPhotos} altLabel="Card from Venice Sports Cards & Collectibles" />
        </Reveal>
      </Container>
    </section>
  );
}
