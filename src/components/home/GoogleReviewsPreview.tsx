import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import RatingStars from "@/components/ui/RatingStars";
import ReviewCard from "@/components/ui/ReviewCard";
import { ButtonLink } from "@/components/ui/Button";
import { ratingSummary, reviewExcerpts } from "@/data/reviews";

export default function GoogleReviewsPreview() {
  const featured = reviewExcerpts.slice(0, 3);

  return (
    <section className="bg-charcoal py-20 sm:py-24 border-y border-charcoal-border" aria-labelledby="reviews-heading">
      <Container className="flex flex-col gap-12">
        <Reveal className="flex flex-col items-center text-center gap-4" id="reviews-heading">
          <SectionHeading eyebrow="What Collectors Say" title="Customer Reviews" />
          <div className="flex items-center gap-3">
            <RatingStars value={ratingSummary.value} size="size-5" />
            <span className="font-display text-lg font-bold text-cream">{ratingSummary.value.toFixed(1)}</span>
            <span className="text-sm text-gray-400">&middot; {ratingSummary.count} reviews</span>
          </div>
          {ratingSummary.isPlaceholder && (
            <p className="text-xs text-gray-500 italic max-w-md">{ratingSummary.sourceNote}</p>
          )}
        </Reveal>

        <Reveal className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
          {featured.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </Reveal>

        <div className="flex justify-center">
          <ButtonLink href="/reviews" variant="secondary">
            See All Reviews
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
