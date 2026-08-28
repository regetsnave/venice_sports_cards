import { StoreIcon } from "@/components/ui/icons";

/**
 * Stand-in for real store/product photography.
 * Replace with actual images once provided by the business —
 * this renders as an obvious placeholder, never a fake photo.
 */
export default function ImagePlaceholder({
  className = "",
  label = "Store photo placeholder",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden border border-gold/30 bg-gradient-to-br from-charcoal-light via-charcoal to-black flex items-center justify-center ${className}`}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent 0 14px, rgba(201,162,39,0.08) 14px 15px)",
        }}
        aria-hidden="true"
      />
      <div className="relative flex flex-col items-center gap-2 text-gold/50 px-4 text-center">
        <StoreIcon className="size-8" />
        <span className="font-display text-[0.6rem] tracking-[0.15em] uppercase text-cream/40">
          {label}
        </span>
      </div>
    </div>
  );
}
