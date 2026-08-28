import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Trade With Us",
  description: "Trade your cards toward something new at Venice Sports Cards & Collectibles in Venice, FL.",
};

const steps = [
  {
    number: "01",
    title: "Bring Your Cards In",
    description: "Stop by the shop with the cards or collection you'd like to trade.",
  },
  {
    number: "02",
    title: "Staff Evaluates Them",
    description: "Our team takes a look and talks through what you've got.",
  },
  {
    number: "03",
    title: "Discuss Value & Options",
    description: "We'll walk through fair trade value and what's available in store.",
  },
  {
    number: "04",
    title: "Trade Toward Something New",
    description: "Put that value toward cards, slabs, or sealed product you actually want.",
  },
];

export default function TradePage() {
  return (
    <>
      <PageHero
        eyebrow="Trade"
        title="Trade With Us"
        description="Looking to trade instead of sell outright? Here's how it works at Venice Sports Cards & Collectibles."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Trade" }]}
      />

      <section className="bg-black py-16 sm:py-24">
        <Container className="flex flex-col gap-14">
          <SectionHeading eyebrow="The Process" title="How Trading Works" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col gap-3 border border-charcoal-border bg-charcoal p-6">
                <span className="font-display text-3xl font-bold text-gold/40">{step.number}</span>
                <h3 className="font-display text-base font-semibold uppercase tracking-wide text-cream">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-6 text-center border-t border-charcoal-border pt-14">
            <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase text-cream">
              Ready to Trade?
            </h2>
            <p className="text-gray-300 max-w-lg">
              Trades happen in person so we can evaluate your cards on the spot. Come by
              the shop during store hours.
            </p>
            <ButtonLink href="/visit">Visit The Store</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
