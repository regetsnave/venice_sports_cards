import { BoxIcon } from "@/components/ui/icons";
import type { DemoProduct, SportTheme } from "@/data/demoInventory";

const sealedGradient: Record<SportTheme, string> = {
  pokemon: "linear-gradient(160deg, #2c1758 0%, #180d34 45%, #0a0514 100%)",
  "one-piece": "linear-gradient(160deg, #163a4c 0%, #0d2530 45%, #050d12 100%)",
  football: "linear-gradient(160deg, #1e442a 0%, #102716 45%, #060b08 100%)",
  basketball: "linear-gradient(160deg, #4a3115 0%, #291809 45%, #0a0603 100%)",
  baseball: "linear-gradient(160deg, #1c2c50 0%, #0f192c 45%, #05070d 100%)",
  hockey: "linear-gradient(160deg, #263748 0%, #141f2a 45%, #05090d 100%)",
};

/** Stylized sealed-product (booster box) mockup — original design, no real brand packaging. */
export default function SealedPackArt({ card, className = "" }: { card: DemoProduct; className?: string }) {
  return (
    <div className={`relative w-full h-full ${className}`} style={{ containerType: "inline-size" }}>
      {/* physical thickness illusion */}
      <div className="absolute inset-0 translate-x-[2%] translate-y-[2%] bg-black/60 rounded-[2px]" aria-hidden="true" />

      <div
        className="relative w-full h-full overflow-hidden rounded-[2px]"
        style={{
          background: sealedGradient[card.theme],
          boxShadow:
            "0 2px 0 rgba(0,0,0,0.85), 0 20px 40px -12px rgba(0,0,0,0.7), 0 0 0 1px rgba(198,161,91,0.3)",
        }}
      >
        {/* studio-light vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 70% at 50% -10%, rgba(255,255,255,0.14) 0%, transparent 55%), radial-gradient(120% 90% at 50% 115%, rgba(0,0,0,0.5) 0%, transparent 60%)",
          }}
          aria-hidden="true"
        />
        {/* halftone print texture */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.9) 0.5px, transparent 0.5px)",
            backgroundSize: "5px 5px",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 opacity-60 bg-[length:220%_220%] animate-shimmer motion-reduce:animate-none"
          style={{
            backgroundImage:
              "linear-gradient(115deg, transparent 25%, rgba(198,161,91,0.32) 42%, rgba(180,120,220,0.28) 52%, rgba(198,161,91,0.32) 62%, transparent 78%)",
          }}
          aria-hidden="true"
        />
        {/* sharp specular highlight streak */}
        <div
          className="pointer-events-none absolute top-0 left-[10%] w-[3%] h-full opacity-[0.45]"
          style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.85), transparent 60%)" }}
          aria-hidden="true"
        />

        <div className="absolute inset-[6%] border border-gold/40" aria-hidden="true" />

        <div className="absolute top-[10%] inset-x-0 flex justify-center">
          <span
            className="font-display uppercase text-cream/60 tracking-[0.16em]"
            style={{ fontSize: "clamp(0.4rem, 3.6cqw, 0.56rem)" }}
          >
            {card.year} &middot; {card.setName}
          </span>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="absolute rounded-full"
            style={{
              width: "55%",
              height: "55%",
              background: "radial-gradient(circle, rgba(198,161,91,0.35) 0%, transparent 70%)",
              filter: "blur(2px)",
            }}
            aria-hidden="true"
          />
          <BoxIcon
            className="relative"
            style={{ width: "32%", height: "32%", color: "#f0dca3", filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.5))" }}
          />
        </div>

        <div className="absolute top-[10%] right-[10%]">
          <span
            className="font-display font-semibold uppercase text-black bg-gold px-1.5 py-0.5"
            style={{ fontSize: "clamp(0.34rem, 3cqw, 0.48rem)", letterSpacing: "0.05em" }}
          >
            Sealed
          </span>
        </div>

        <div className="absolute bottom-[8%] inset-x-[8%] flex flex-col items-center">
          <div
            className="w-full flex flex-col items-center px-2 py-[6%]"
            style={{
              background: "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 100%)",
              borderTop: "1px solid rgba(198,161,91,0.5)",
              borderBottom: "1px solid rgba(198,161,91,0.5)",
            }}
          >
            <span
              className="font-display font-bold uppercase text-center text-cream"
              style={{ fontSize: "clamp(0.5rem, 4.4cqw, 0.7rem)", letterSpacing: "0.04em" }}
            >
              {card.faceLabel}
            </span>
          </div>
        </div>

        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "linear-gradient(155deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 26%)" }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
