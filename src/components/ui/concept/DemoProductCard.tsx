import Link from "next/link";
import GradedSlab from "./GradedSlab";
import RawCard from "./RawCard";
import SealedPackArt from "./SealedPackArt";
import DemoBadge from "./DemoBadge";
import { GRADING_BRAND, formatPrice, primaryCategoryFor, type DemoProduct } from "@/data/demoInventory";

export default function DemoProductCard({ card }: { card: DemoProduct }) {
  return (
    <Link
      href={`/products/${primaryCategoryFor(card)}/${card.id}`}
      className="group relative flex flex-col border border-charcoal-border bg-charcoal hover:border-gold/50 transition-colors duration-300"
    >
      <div className="relative aspect-[5/7] p-3 bg-gradient-to-br from-black to-charcoal-light/40">
        <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-[1.03]">
          {card.condition === "graded" && <GradedSlab card={card} />}
          {card.condition === "raw" && <RawCard card={card} />}
          {card.condition === "sealed" && <SealedPackArt card={card} />}
        </div>
      </div>

      <div className="flex flex-col gap-1.5 px-3.5 py-4">
        <DemoBadge variant="inline" />
        <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-cream truncate mt-0.5">
          {card.title}
        </h3>
        <p className="text-xs text-gray-500 truncate">
          {card.condition === "graded" && card.grade
            ? `${card.grade.word} ${card.grade.value} · ${GRADING_BRAND}`
            : card.condition === "sealed"
              ? "Sealed Product"
              : "Raw / Ungraded"}
        </p>
        <p className="font-display text-base font-bold text-gold mt-1">{formatPrice(card.price)}</p>
      </div>
    </Link>
  );
}
