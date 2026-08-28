/**
 * Small, unmistakable "this is a mockup, not real inventory" marker.
 * Used on every piece of concept card art across the site.
 */
export default function DemoBadge({
  variant = "corner",
  label = "Concept",
}: {
  variant?: "corner" | "inline";
  label?: string;
}) {
  if (variant === "inline") {
    return (
      <span className="self-start inline-flex items-center gap-1 font-display text-[0.6rem] font-semibold uppercase tracking-widest text-gold/80 border border-gold/30 px-1.5 py-0.5">
        {label}
      </span>
    );
  }

  return (
    <span className="absolute top-2 left-2 z-30 bg-black/85 border border-gold/40 text-gold text-[0.55rem] font-display font-semibold uppercase tracking-widest px-2 py-1">
      {label}
    </span>
  );
}
