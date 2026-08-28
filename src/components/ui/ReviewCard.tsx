import type { ReviewExcerpt } from "@/data/reviews";
import { StarIcon } from "@/components/ui/icons";

export default function ReviewCard({ review }: { review: ReviewExcerpt }) {
  return (
    <div className="flex flex-col gap-4 border border-charcoal-border bg-charcoal p-6 sm:p-7">
      <div className="flex items-center gap-1 text-gold" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} className="size-4" />
        ))}
      </div>
      <p className="text-sm sm:text-base text-cream/90 leading-relaxed">&ldquo;{review.quote}&rdquo;</p>
      <div className="flex items-center justify-between gap-3 mt-auto pt-2 border-t border-charcoal-border">
        <span className="font-display text-sm font-semibold uppercase tracking-wide text-cream">
          {review.reviewer}
        </span>
        <span className="text-[0.65rem] uppercase tracking-widest text-gray-500">{review.source}</span>
      </div>
    </div>
  );
}
