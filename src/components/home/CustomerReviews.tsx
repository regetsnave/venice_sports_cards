import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { StarIcon } from "@/components/ui/icons";

/**
 * No real reviews have been provided yet. This renders an honest
 * placeholder state — swap in real testimonials once collected.
 */
export default function CustomerReviews() {
  return (
    <section className="bg-charcoal py-20 sm:py-24 border-y border-charcoal-border" aria-labelledby="reviews-heading">
      <Container className="flex flex-col items-center gap-10 text-center">
        <div id="reviews-heading">
          <SectionHeading eyebrow="What Collectors Say" title="Customer Reviews" />
        </div>

        <div className="flex items-center gap-1.5 text-gold/30" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} className="size-6" />
          ))}
        </div>

        <p className="max-w-md text-sm text-gray-400 italic">
          Customer reviews will be featured here once collected. This section
          is ready to connect to Google Reviews or a testimonials feed.
        </p>
      </Container>
    </section>
  );
}
