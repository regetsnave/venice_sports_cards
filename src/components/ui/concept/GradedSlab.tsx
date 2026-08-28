import TradingCardArt from "./TradingCardArt";
import { GRADING_BRAND, isVintage, type DemoProduct } from "@/data/demoInventory";

/**
 * Original fictional "graded slab" render — an invented grading brand
 * ("Lumen Grade") and an original label layout. Not modeled on PSA,
 * BGS, CGC, SGC, or any real grading company's design.
 */

const subMetrics = ["CENTERING", "CORNERS", "EDGES", "SURFACE"] as const;

/** Small deterministic jitter so sub-grades read as real inspection values, not a copy-pasted number. */
function subGradeFor(cert: string, index: number, base: number): string {
  const seed = cert.split("").reduce((sum, ch, i) => sum + ch.charCodeAt(0) * (i + 1), 0) + index * 7;
  const jitter = [0, -0.5, 0, -1, 0.5][seed % 5];
  const value = Math.min(10, Math.max(6, base + jitter));
  return value % 1 === 0 ? String(value) : value.toFixed(1);
}

export default function GradedSlab({
  card,
  className = "",
}: {
  card: DemoProduct;
  className?: string;
}) {
  const grade = card.grade ?? { word: "UNGRADED", value: "—" };
  const gradeNum = grade.value === "—" ? 8 : parseFloat(grade.value);

  return (
    <div className={`relative w-full h-full ${className}`} style={{ containerType: "inline-size" }}>
      {/* physical thickness illusion: a darker offset duplicate behind the slab */}
      <div
        className="absolute inset-0 translate-x-[3%] translate-y-[3%] bg-black/70 rounded-[3px]"
        aria-hidden="true"
      />

      <div
        className="relative w-full h-full flex flex-col bg-gradient-to-br from-charcoal-light via-charcoal to-black rounded-[3px]"
        style={{
          boxShadow:
            "0 3px 0 rgba(0,0,0,0.9), 0 28px 55px -14px rgba(0,0,0,0.8), 0 0 0 1px rgba(198,161,91,0.35), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        {/* broad glass sheen, slightly cool-tinted like gallery lighting on acrylic */}
        <div
          className="pointer-events-none absolute inset-0 opacity-70 z-20"
          style={{
            background: "linear-gradient(155deg, rgba(225,235,255,0.11) 0%, rgba(225,235,255,0) 28%)",
          }}
          aria-hidden="true"
        />
        {/* soft diagonal sweep */}
        <div
          className="pointer-events-none absolute -inset-y-4 -left-1/3 w-1/4 opacity-[0.14] z-20 rotate-12"
          style={{ background: "linear-gradient(90deg, transparent, #fff, transparent)" }}
          aria-hidden="true"
        />
        {/* sharp specular highlight streak */}
        <div
          className="pointer-events-none absolute top-0 left-[8%] w-[3%] h-full opacity-[0.5] z-20"
          style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.85), transparent 60%)" }}
          aria-hidden="true"
        />
        {/* two asymmetric specular hotspots, like real photographed glass */}
        <div
          className="pointer-events-none absolute z-20 rounded-full"
          style={{
            top: "6%",
            right: "18%",
            width: "14%",
            height: "7%",
            background: "radial-gradient(ellipse, rgba(255,255,255,0.55) 0%, transparent 70%)",
            filter: "blur(1.5px)",
          }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute z-20 rounded-full"
          style={{
            bottom: "12%",
            left: "22%",
            width: "9%",
            height: "5%",
            background: "radial-gradient(ellipse, rgba(255,255,255,0.3) 0%, transparent 70%)",
            filter: "blur(1.5px)",
          }}
          aria-hidden="true"
        />

        {/* label strip */}
        <div className="relative z-10 flex items-stretch gap-[3%] px-[6%] py-[3.5%] border-b border-gold/25 bg-black/50">
          <div className="flex-1 min-w-0 flex flex-col justify-center gap-[1.6%]">
            <span
              className="flex items-center gap-[4%] font-display font-semibold uppercase text-gold tracking-[0.1em] truncate"
              style={{ fontSize: "clamp(0.42rem, 6.5cqw, 0.62rem)" }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0"
                style={{ width: "1.1em", height: "1.1em" }}
                aria-hidden="true"
              >
                <path d="M12 3.5 5 6.2v5.6c0 4.6 3 8 7 9 4-1 7-4.4 7-9V6.2L12 3.5Z" />
                <path d="m9 12 2 2 4-4.3" />
              </svg>
              {GRADING_BRAND}
            </span>
            <span
              className="font-display font-medium uppercase text-cream/90 leading-tight truncate"
              style={{ fontSize: "clamp(0.4rem, 6cqw, 0.58rem)" }}
            >
              {card.title}
            </span>
            <span
              className="uppercase text-gray-500 leading-tight truncate"
              style={{ fontSize: "clamp(0.34rem, 5cqw, 0.48rem)", letterSpacing: "0.02em" }}
            >
              {card.year} &middot; {card.setName}
            </span>

            {card.cert && (
              <>
                <div className="flex items-center justify-between gap-[4%]">
                  <span
                    className="font-mono text-gray-500/80 leading-tight truncate"
                    style={{ fontSize: "clamp(0.32rem, 4.6cqw, 0.44rem)" }}
                  >
                    CERT {card.cert}
                  </span>
                  {/* decorative barcode — generic pattern, not a scannable/branded code */}
                  <span
                    className="shrink-0 flex items-end gap-[1px] opacity-70"
                    style={{ height: "clamp(0.35rem, 5cqw, 0.5rem)" }}
                    aria-hidden="true"
                  >
                    {[2, 1, 3, 1, 2, 1, 1, 3, 2, 1].map((w, i) => (
                      <span key={i} className="bg-gray-400" style={{ width: `${w}px`, height: "100%" }} />
                    ))}
                  </span>
                </div>

                {card.grade && (
                  <div className="flex items-center gap-[3%] mt-[1%] pt-[1%] border-t border-white/10">
                    {subMetrics.map((label, i) => (
                      <span key={label} className="flex flex-col items-start leading-none">
                        <span
                          className="text-gray-500 tracking-[0.04em]"
                          style={{ fontSize: "clamp(0.24rem, 3.4cqw, 0.34rem)" }}
                        >
                          {label}
                        </span>
                        <span
                          className="text-cream/70 font-semibold"
                          style={{ fontSize: "clamp(0.3rem, 4.6cqw, 0.42rem)" }}
                        >
                          {subGradeFor(card.cert!, i, gradeNum)}
                        </span>
                      </span>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>

          <div className="flex flex-col items-center justify-center shrink-0">
            <div
              className="flex items-center justify-center rounded-full border-2 border-gold text-gold font-display font-bold"
              style={{
                width: "clamp(1.2rem, 20cqw, 2.1rem)",
                height: "clamp(1.2rem, 20cqw, 2.1rem)",
                fontSize: "clamp(0.55rem, 11cqw, 1rem)",
                boxShadow: "0 0 0 3px rgba(198,161,91,0.12)",
              }}
            >
              {grade.value}
            </div>
            <span
              className="mt-[6%] font-display uppercase text-gold-light/90 text-center leading-none whitespace-nowrap"
              style={{ fontSize: "clamp(0.28rem, 4.4cqw, 0.4rem)", letterSpacing: "0.06em" }}
            >
              {grade.word}
            </span>
          </div>
        </div>

        {/* card window */}
        <div
          className="relative flex-1 p-[4%]"
          style={{ boxShadow: "inset 0 6px 10px -6px rgba(0,0,0,0.6)" }}
        >
          <TradingCardArt
            theme={card.theme}
            faceLabel={card.faceLabel}
            year={card.year}
            setName={card.setName}
            vintage={isVintage(card)}
          />
        </div>

        {/* bottom margin, like a real slab */}
        <div className="h-[3%] shrink-0 border-t border-black/40" aria-hidden="true" />
      </div>
    </div>
  );
}
