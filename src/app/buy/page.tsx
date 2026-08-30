import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import CardGallery from "@/components/ui/CardGallery";
import { ArrowRightIcon } from "@/components/ui/icons";
import { categories } from "@/lib/constants";
import { featuredCardPhotos } from "@/data/featuredCardPhotos";

export const metadata: Metadata = {
  title: "Buy Cards",
  description:
    "Buy sports card singles, graded slabs, sealed product, Pokémon, and One Piece cards at Venice Sports Cards & Collectibles.",
};

const buyCategories = [
  {
    title: "Singles",
    description: "Raw cards across football, baseball, basketball, hockey, Pokémon, and One Piece.",
  },
  {
    title: "Graded Slabs",
    description: "Professionally graded cards, from modern chase cards to vintage classics.",
  },
  {
    title: "Sealed Product",
    description: "Booster boxes, hobby boxes, and wax — sealed and ready to open.",
  },
  {
    title: "Collectibles",
    description: "Sports and TCG collectibles beyond the card itself.",
  },
];

export default function BuyPage() {
  return (
    <>
      <PageHero
        eyebrow="Buy"
        title="Buy Cards"
        description="Sports card singles, graded slabs, sealed product, Pok&eacute;mon, and One Piece &mdash; browse what's available or visit us in store."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Buy" }]}
      />

      <section className="bg-black py-16 sm:py-20">
        <Container className="flex flex-col gap-12">
          <SectionHeading eyebrow="What You Can Buy" title="A Little Bit of Everything" align="left" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {buyCategories.map((c) => (
              <div key={c.title} className="border border-charcoal-border bg-charcoal p-6 flex flex-col gap-2">
                <h3 className="font-display text-base font-semibold uppercase tracking-wide text-gold">
                  {c.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/gallery?tab=${c.slug}`}
                className="group flex items-center gap-1.5 border border-charcoal-border px-4 py-2 text-sm text-cream/85 hover:text-gold hover:border-gold/50 transition-colors"
              >
                {c.label}
                <ArrowRightIcon className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-charcoal border-y border-charcoal-border py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <SectionHeading eyebrow="Inventory Preview" title="A Look at What's In Stock" align="left" />
            <ButtonLink href="/gallery" variant="secondary">
              View Full Gallery
            </ButtonLink>
          </div>
          <CardGallery
            photos={featuredCardPhotos.slice(0, 4)}
            altLabel="Card from Venice Sports Cards & Collectibles"
          />
        </Container>
      </section>

      <section className="bg-black py-16 sm:py-20 text-center">
        <Container className="flex flex-col items-center gap-6">
          <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase text-cream">
            Prefer to Shop In Person?
          </h2>
          <p className="text-gray-300 max-w-lg">
            Stop by the shop in Venice to see the full case in person and talk with the team.
          </p>
          <ButtonLink href="/visit">Visit Our Store</ButtonLink>
        </Container>
      </section>
    </>
  );
}
