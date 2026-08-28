import TradingCardArt from "./TradingCardArt";
import { isVintage, type DemoProduct } from "@/data/demoInventory";

/** Ungraded ("raw") card render — just the card art with a thin edge and drop shadow. */
export default function RawCard({ card, className = "" }: { card: DemoProduct; className?: string }) {
  return (
    <div className={`relative w-full h-full ${className}`}>
      <div className="absolute inset-0 translate-x-[2%] translate-y-[2%] bg-black/60 rounded-[2px]" aria-hidden="true" />
      <div
        className="relative w-full h-full rounded-[2px]"
        style={{
          boxShadow:
            "0 2px 0 rgba(0,0,0,0.85), 0 16px 32px -10px rgba(0,0,0,0.65), 0 0 0 1px rgba(198,161,91,0.3)",
        }}
      >
        <TradingCardArt
          theme={card.theme}
          faceLabel={card.faceLabel}
          year={card.year}
          setName={card.setName}
          vintage={isVintage(card)}
        />
      </div>
    </div>
  );
}
