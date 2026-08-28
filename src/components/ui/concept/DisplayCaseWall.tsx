import GradedSlab from "./GradedSlab";
import { demoInventory } from "@/data/demoInventory";

/**
 * Concept "display case" composition — original card-shop-inspired
 * visual built from the same demo slab renders used elsewhere.
 * Not a photo of any real store.
 */
export default function DisplayCaseWall({ className = "" }: { className?: string }) {
  const items = demoInventory.filter((c) => c.condition === "graded").slice(0, 3);

  return (
    <div className={`relative w-full h-full overflow-hidden bg-gradient-to-b from-charcoal-light via-charcoal to-black ${className}`}>
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-1/2 opacity-70"
        style={{ background: "radial-gradient(65% 100% at 50% 0%, rgba(198,161,91,0.22) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div className="relative h-full flex items-center justify-center gap-3 sm:gap-4 px-5 sm:px-7 pb-8">
        <div className="w-[26%] aspect-[5/7] -rotate-6 translate-y-3">
          <GradedSlab card={items[0]} />
        </div>
        <div className="w-[30%] aspect-[5/7] z-10 -translate-y-2">
          <GradedSlab card={items[1]} />
        </div>
        <div className="w-[26%] aspect-[5/7] rotate-6 translate-y-3">
          <GradedSlab card={items[2]} />
        </div>
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-8 h-px opacity-30"
        style={{
          backgroundImage: "linear-gradient(90deg, transparent 0%, var(--color-gold) 50%, transparent 100%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -inset-y-10 -left-1/4 w-1/4 opacity-[0.09] rotate-12"
        style={{ background: "linear-gradient(90deg, transparent, #fff, transparent)" }}
        aria-hidden="true"
      />
      <span className="absolute bottom-2.5 left-2.5 text-[0.55rem] font-display uppercase tracking-widest text-gray-400 bg-black/60 px-2 py-1">
        Concept Display
      </span>
    </div>
  );
}
