import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

/**
 * Ready to be wired to the real product catalog. Renders an honest
 * empty state instead of fabricated inventory until that data exists.
 */
export default function LatestArrivals() {
  const placeholderSlots = Array.from({ length: 4 });

  return (
    <section className="bg-black py-20 sm:py-24" aria-labelledby="latest-arrivals-heading">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div id="latest-arrivals-heading">
            <SectionHeading eyebrow="Fresh In Stock" title="Latest Arrivals" align="left" />
          </div>
          <ButtonLink href="/products" variant="ghost" className="px-0 py-0">
            View All Products &rarr;
          </ButtonLink>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {placeholderSlots.map((_, i) => (
            <div key={i} className="flex flex-col gap-3">
              <ImagePlaceholder className="aspect-[5/7]" label="Product photo" />
              <div className="h-3 w-3/4 bg-charcoal-light" aria-hidden="true" />
              <div className="h-3 w-1/3 bg-charcoal-light" aria-hidden="true" />
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 italic">
          New inventory listings are coming soon &mdash; check back or visit us in
          store to see what&rsquo;s in the case today.
        </p>
      </Container>
    </section>
  );
}
