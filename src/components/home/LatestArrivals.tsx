import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import DemoProductCard from "@/components/ui/concept/DemoProductCard";
import { featuredProducts, DEMO_DISCLAIMER } from "@/data/demoInventory";

/**
 * Populated with a curated spread of fictional demo products (see
 * src/data/demoInventory.ts) so the layout demonstrates a finished
 * product grid. Every card is clearly marked "Concept" and the section
 * is explicitly labeled demo inventory. Swap demoInventory.ts for a
 * real catalog source when ready — no component here needs to change shape.
 */
export default function LatestArrivals() {
  return (
    <section className="bg-black py-20 sm:py-24" aria-labelledby="latest-arrivals-heading">
      <Container className="flex flex-col gap-12">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div id="latest-arrivals-heading">
              <SectionHeading eyebrow="Fresh In Stock" title="Latest Arrivals" align="left" />
              <p className="mt-2 text-xs uppercase tracking-widest text-gray-500">
                Demo Inventory &mdash; fictional cards shown for layout purposes
              </p>
            </div>
            <ButtonLink href="/products" variant="ghost" className="px-0 py-0 group">
              <span className="border-b border-transparent group-hover:border-gold pb-0.5">
                View All Products
              </span>
              <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
                &rarr;
              </span>
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {featuredProducts.map((card) => (
            <DemoProductCard key={card.id} card={card} />
          ))}
        </Reveal>

        <p className="text-center text-sm text-gray-500 italic max-w-2xl mx-auto">{DEMO_DISCLAIMER}</p>
      </Container>
    </section>
  );
}
