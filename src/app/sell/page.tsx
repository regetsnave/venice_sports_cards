import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import SellForm from "@/components/sell/SellForm";
import { business } from "@/lib/constants";
import { MapPinIcon, PhoneIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Sell Your Cards",
  description:
    "Bring your collection to Venice Sports Cards & Collectibles for evaluation — sports cards, Pokémon, One Piece, singles, and graded slabs.",
};

export default function SellPage() {
  return (
    <>
      <PageHero
        eyebrow="Sell"
        title="Sell Your Cards"
        description="Bring your collection to Venice Sports Cards & Collectibles for evaluation — we look at singles, graded slabs, sealed product, and full collections."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Sell" }]}
      />

      <section className="bg-black py-16 sm:py-20">
        <Container className="grid lg:grid-cols-5 gap-14">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <SectionHeading eyebrow="How It Works" title="Get Your Cards Evaluated" align="left" />
            <p className="text-sm text-gray-300 leading-relaxed">
              Fill out a few details about your collection below and the shop can follow
              up to schedule an evaluation. Prefer to skip the form? Bring your cards in
              during store hours and the team can take a look in person.
            </p>
            <div className="flex flex-col gap-4 pt-2">
              <div className="flex items-start gap-3">
                <MapPinIcon className="size-5 text-gold shrink-0 mt-0.5" />
                <span className="text-sm text-cream/90">{business.address.full}</span>
              </div>
              <a href={business.phone.href} className="flex items-center gap-3 text-gold hover:text-gold-light transition-colors">
                <PhoneIcon className="size-5 shrink-0" />
                <span className="font-display text-lg font-semibold">{business.phone.display}</span>
              </a>
            </div>
            <div className="border border-gold/25 bg-charcoal px-4 py-3 mt-2">
              <p className="text-xs text-gray-400 leading-relaxed">
                This form is a front-end demo for the new website design. It is not yet
                connected to email or a database &mdash; integration is pending.
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <SellForm />
          </div>
        </Container>
      </section>
    </>
  );
}
