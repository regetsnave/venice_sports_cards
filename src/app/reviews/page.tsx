import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import RatingStars from "@/components/ui/RatingStars";
import ReviewCard from "@/components/ui/ReviewCard";
import { ButtonLink } from "@/components/ui/Button";
import { business } from "@/lib/constants";
import { ratingSummary, reviewExcerpts } from "@/data/reviews";

export const metadata: Metadata = {
  title: "Customer Reviews",
  description: "See what customers are saying about Venice Sports Cards & Collectibles in Venice, FL.",
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="Customer Reviews"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Reviews" }]}
      />

      <section className="bg-black py-16 sm:py-20">
        <Container className="flex flex-col gap-12">
          <div className="flex flex-col items-center text-center gap-3 border border-charcoal-border bg-charcoal px-8 py-10">
            <div className="flex items-center gap-3">
              <RatingStars value={ratingSummary.value} size="size-6" />
              <span className="font-display text-2xl font-bold text-cream">{ratingSummary.value.toFixed(1)}</span>
            </div>
            <p className="text-sm text-gray-400">Based on {ratingSummary.count} reviews</p>
            {ratingSummary.isPlaceholder && (
              <p className="text-xs text-gray-500 italic max-w-md mt-1">{ratingSummary.sourceNote}</p>
            )}
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              <ButtonLink href={business.googleSearchUrl} variant="secondary" target="_blank" rel="noopener noreferrer">
                Read More Reviews on Google
              </ButtonLink>
              <ButtonLink href={business.googleSearchUrl} variant="primary" target="_blank" rel="noopener noreferrer">
                Leave a Google Review
              </ButtonLink>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {reviewExcerpts.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

          <p className="text-xs text-gray-500 italic max-w-2xl mx-auto text-center">
            Review excerpts above are genuine customer feedback found via public business
            listings (not fabricated), each attributed to the listing it was found on.
            They could not be independently verified as verbatim Google review text, so
            they are presented as general customer reviews rather than a direct Google
            feed.
          </p>
        </Container>
      </section>
    </>
  );
}
