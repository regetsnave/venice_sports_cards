import DemoProductCard from "@/components/ui/concept/DemoProductCard";
import { demoInventory, type DemoProduct } from "@/data/demoInventory";

export default function RelatedProducts({ current }: { current: DemoProduct }) {
  const related = demoInventory.filter((p) => p.theme === current.theme && p.id !== current.id).slice(0, 4);

  if (related.length === 0) return null;

  return (
    <div className="flex flex-col gap-6">
      <h2 className="font-display text-xl font-semibold uppercase tracking-wide text-cream">
        You May Also Like
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
        {related.map((p) => (
          <DemoProductCard key={p.id} card={p} />
        ))}
      </div>
    </div>
  );
}
