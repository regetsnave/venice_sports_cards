const boxes = ["Graded Submissions", "Sealed Wax", "Top Loaders & Sleeves"];

/**
 * Concept "storage / back-room inventory" composition — stylized
 * card-box stack. Not a photo of any real inventory.
 */
export default function CardBoxStack({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative w-full h-full overflow-hidden bg-gradient-to-br from-charcoal-light via-charcoal to-black flex flex-col justify-center gap-2.5 px-4 sm:px-5 py-6 ${className}`}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent 0 12px, rgba(198,161,91,0.06) 12px 13px)",
        }}
        aria-hidden="true"
      />
      {boxes.map((label, i) => (
        <div
          key={label}
          className="relative flex items-center gap-2.5 h-12 sm:h-14 border border-gold/25 bg-gradient-to-r from-charcoal to-charcoal-light px-3 shadow-[0_10px_20px_-10px_rgba(0,0,0,0.6)]"
          style={{ marginLeft: `${i * 6}px`, marginRight: `${(boxes.length - 1 - i) * 6}px` }}
        >
          <span className="w-1.5 self-stretch bg-gold/50 shrink-0" aria-hidden="true" />
          <span className="font-display text-[0.55rem] sm:text-[0.62rem] font-semibold uppercase tracking-widest text-cream/75 truncate">
            {label}
          </span>
        </div>
      ))}
      <span className="absolute bottom-2.5 right-2.5 text-[0.5rem] font-display uppercase tracking-widest text-gray-500 bg-black/60 px-2 py-1">
        Concept
      </span>
    </div>
  );
}
