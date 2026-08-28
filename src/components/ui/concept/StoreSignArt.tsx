/**
 * Concept illuminated-signage composition using the site's own wordmark —
 * an abstract branding visual, not a photo of the real storefront.
 */
export default function StoreSignArt({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full h-full overflow-hidden bg-black flex flex-col items-center justify-center gap-2 ${className}`}>
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(55% 55% at 50% 45%, rgba(198,161,91,0.22) 0%, transparent 72%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, transparent 0 20px, rgba(198,161,91,0.6) 20px 21px)",
        }}
        aria-hidden="true"
      />
      <span
        className="relative font-serif-display italic text-3xl sm:text-4xl text-gold"
        style={{ textShadow: "0 0 22px rgba(198,161,91,0.55)" }}
      >
        Venice
      </span>
      <span className="relative font-display text-[0.55rem] sm:text-[0.6rem] tracking-[0.32em] uppercase text-cream/75">
        Sports Cards &amp; Collectibles
      </span>
      <span className="relative text-[0.55rem] tracking-[0.2em] uppercase text-gray-500 mt-1">
        Venice, Florida
      </span>
      <span className="absolute bottom-2.5 left-2.5 text-[0.5rem] font-display uppercase tracking-widest text-gray-500 bg-black/60 px-2 py-1">
        Concept Signage
      </span>
    </div>
  );
}
