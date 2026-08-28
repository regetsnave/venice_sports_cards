import {
  BaseballIcon,
  BasketballIcon,
  CompassIcon,
  CreatureIcon,
  FootballIcon,
  HockeyIcon,
} from "@/components/ui/icons";
import type { SportTheme } from "@/data/demoInventory";

const themeConfig: Record<
  SportTheme,
  { gradient: string; accent: string; glow: string; Icon: typeof FootballIcon }
> = {
  pokemon: {
    gradient: "linear-gradient(160deg, #33195a 0%, #1c0d38 45%, #0a0514 100%)",
    accent: "rgba(198,161,91,0.7)",
    glow: "rgba(180,120,220,0.5)",
    Icon: CreatureIcon,
  },
  "one-piece": {
    gradient: "linear-gradient(160deg, #17394a 0%, #0e222d 45%, #050d12 100%)",
    accent: "rgba(198,161,91,0.65)",
    glow: "rgba(88,180,210,0.4)",
    Icon: CompassIcon,
  },
  football: {
    gradient: "linear-gradient(160deg, #1b3d26 0%, #0d2013 45%, #060b08 100%)",
    accent: "rgba(198,161,91,0.65)",
    glow: "rgba(120,200,140,0.35)",
    Icon: FootballIcon,
  },
  basketball: {
    gradient: "linear-gradient(160deg, #45290f 0%, #22140a 45%, #0a0603 100%)",
    accent: "rgba(198,161,91,0.65)",
    glow: "rgba(230,150,80,0.4)",
    Icon: BasketballIcon,
  },
  baseball: {
    gradient: "linear-gradient(160deg, #17233e 0%, #0c1526 45%, #05070d 100%)",
    accent: "rgba(198,161,91,0.65)",
    glow: "rgba(110,150,220,0.35)",
    Icon: BaseballIcon,
  },
  hockey: {
    gradient: "linear-gradient(160deg, #21303e 0%, #101a24 45%, #05090d 100%)",
    accent: "rgba(198,161,91,0.65)",
    glow: "rgba(140,190,220,0.35)",
    Icon: HockeyIcon,
  },
};

function jerseyNumber(faceLabel: string): string | null {
  const m = faceLabel.match(/NO\.\s*(\d+)/i);
  return m ? m[1] : null;
}

export default function TradingCardArt({
  theme,
  faceLabel,
  year,
  setName,
  vintage = false,
  className = "",
}: {
  theme: SportTheme;
  faceLabel: string;
  year: string;
  setName: string;
  vintage?: boolean;
  className?: string;
}) {
  const cfg = themeConfig[theme];
  const Icon = cfg.Icon;
  const number = jerseyNumber(faceLabel);
  const [primaryLabel, secondaryLabel] = faceLabel.split(" · ");

  return (
    <div
      className={`relative w-full h-full overflow-hidden ${className}`}
      style={{
        background: vintage
          ? "linear-gradient(160deg, #443723 0%, #261f14 45%, #120e08 100%)"
          : cfg.gradient,
        containerType: "inline-size",
      }}
    >
      {/* studio-light vignette for photographic depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 70% at 50% -10%, rgba(255,255,255,0.14) 0%, transparent 55%), radial-gradient(120% 90% at 50% 115%, rgba(0,0,0,0.55) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      {/* halftone print texture */}
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.9) 0.5px, transparent 0.5px)",
          backgroundSize: "5px 5px",
        }}
        aria-hidden="true"
      />

      {/* motion streaks (sports themes only, subtle) */}
      {theme !== "pokemon" && theme !== "one-piece" && !vintage && (
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(115deg, transparent 0 18px, rgba(255,255,255,0.9) 18px 19.5px)",
          }}
          aria-hidden="true"
        />
      )}

      {(theme === "pokemon" || theme === "one-piece") && !vintage && (
        <div
          className="absolute inset-0 opacity-60 bg-[length:220%_220%] animate-shimmer motion-reduce:animate-none"
          style={{
            backgroundImage:
              "linear-gradient(115deg, transparent 20%, rgba(198,161,91,0.4) 38%, rgba(180,120,220,0.32) 50%, rgba(198,161,91,0.4) 62%, transparent 80%)",
          }}
          aria-hidden="true"
        />
      )}

      {vintage && (
        <div
          className="absolute inset-0 opacity-[0.2] mix-blend-overlay"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.4), transparent 60%), radial-gradient(circle at 70% 80%, rgba(0,0,0,0.5), transparent 55%)",
          }}
          aria-hidden="true"
        />
      )}

      {/* giant background jersey number */}
      {number && !vintage && (
        <span
          className="absolute -right-[4%] top-[6%] font-display font-bold select-none pointer-events-none"
          style={{
            fontSize: "clamp(2.5rem, 42cqw, 8rem)",
            color: "rgba(255,255,255,0.07)",
            lineHeight: 1,
          }}
          aria-hidden="true"
        >
          {number}
        </span>
      )}

      {/* frame */}
      <div
        className="absolute inset-[6%] border"
        style={{ borderColor: vintage ? "rgba(228,206,150,0.55)" : cfg.accent }}
        aria-hidden="true"
      />
      {vintage && <div className="absolute inset-[9%] border border-cream/15" aria-hidden="true" />}

      {/* top meta */}
      <div className="absolute top-[9%] inset-x-0 flex items-center justify-center px-2">
        <span
          className="font-display uppercase text-cream/60 tracking-[0.14em]"
          style={{ fontSize: "clamp(0.42rem, 3.6cqw, 0.6rem)" }}
        >
          {year} &middot; {setName}
        </span>
      </div>

      {/* centerpiece with radial aura */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="absolute rounded-full"
          style={{
            width: "60%",
            height: "60%",
            background: `radial-gradient(circle, ${cfg.glow} 0%, transparent 70%)`,
            filter: "blur(2px)",
          }}
          aria-hidden="true"
        />
        <Icon
          className="relative"
          style={{
            width: "38%",
            height: "38%",
            color: theme === "pokemon" && !vintage ? "#f0dca3" : "rgba(238,225,196,0.92)",
            filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.5))",
          }}
        />
      </div>

      {vintage && (
        <div className="absolute top-[9%] right-[9%]">
          <span
            className="font-display uppercase text-gold-light/80 border border-gold-light/30 px-1"
            style={{ fontSize: "clamp(0.36rem, 3cqw, 0.5rem)", letterSpacing: "0.08em" }}
          >
            VINTAGE
          </span>
        </div>
      )}

      {/* nameplate ribbon */}
      <div className="absolute bottom-[6%] inset-x-[8%] flex flex-col items-center gap-[2%]">
        <div
          className="w-full flex flex-col items-center px-2 py-[6%]"
          style={{
            background: "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 100%)",
            borderTop: `1px solid ${cfg.accent}`,
            borderBottom: `1px solid ${cfg.accent}`,
          }}
        >
          <span
            className="font-display font-bold uppercase text-center text-cream text-balance leading-tight"
            style={{ fontSize: "clamp(0.5rem, 4.8cqw, 0.74rem)", letterSpacing: "0.04em" }}
          >
            {primaryLabel}
          </span>
          {secondaryLabel && (
            <span
              className="font-display uppercase text-center text-gold-light/85 leading-tight mt-[2%]"
              style={{ fontSize: "clamp(0.4rem, 3.6cqw, 0.55rem)", letterSpacing: "0.1em" }}
            >
              {secondaryLabel}
            </span>
          )}
        </div>
      </div>

      {/* corner accents */}
      <span className="absolute top-2 left-2 w-2 h-2 border-t border-l" style={{ borderColor: cfg.accent }} aria-hidden="true" />
      <span className="absolute top-2 right-2 w-2 h-2 border-t border-r" style={{ borderColor: cfg.accent }} aria-hidden="true" />
      <span className="absolute bottom-2 left-2 w-2 h-2 border-b border-l" style={{ borderColor: cfg.accent }} aria-hidden="true" />
      <span className="absolute bottom-2 right-2 w-2 h-2 border-b border-r" style={{ borderColor: cfg.accent }} aria-hidden="true" />

      {/* glass/light sweep over everything for a photographed-under-light feel */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "linear-gradient(155deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 26%)" }}
        aria-hidden="true"
      />
    </div>
  );
}
