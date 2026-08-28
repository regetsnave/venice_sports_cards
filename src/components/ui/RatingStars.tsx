import { StarIcon } from "@/components/ui/icons";

/** Star rating display supporting fractional values (e.g. 4.1) via a clipped overlay. */
export default function RatingStars({ value, size = "size-4" }: { value: number; size?: string }) {
  const pct = Math.max(0, Math.min(5, value)) / 5;

  return (
    <span className="relative inline-flex" aria-hidden="true">
      <span className="flex items-center gap-0.5 text-charcoal-border">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} className={size} />
        ))}
      </span>
      <span
        className="absolute inset-0 flex items-center gap-0.5 text-gold overflow-hidden"
        style={{ width: `${pct * 100}%` }}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} className={size} />
        ))}
      </span>
    </span>
  );
}
