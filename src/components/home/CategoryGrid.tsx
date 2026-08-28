import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { categories } from "@/lib/constants";
import {
  ArrowRightIcon,
  BaseballIcon,
  BasketballIcon,
  CollectiblesIcon,
  FootballIcon,
  GradedCardIcon,
  PokeballIcon,
} from "@/components/ui/icons";

const iconMap = {
  football: FootballIcon,
  basketball: BasketballIcon,
  baseball: BaseballIcon,
  pokemon: PokeballIcon,
  collectibles: CollectiblesIcon,
  "graded-cards": GradedCardIcon,
} as const;

export default function CategoryGrid() {
  return (
    <section className="bg-black py-20 sm:py-24" aria-labelledby="shop-by-category">
      <Container className="flex flex-col gap-12">
        <div id="shop-by-category">
          <SectionHeading eyebrow="Shop By Category" title="Find Your Hobby" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((cat) => {
            const Icon = iconMap[cat.slug];
            return (
              <Link
                key={cat.slug}
                href={`/products/${cat.slug}`}
                className="group relative flex flex-col items-center justify-center gap-4 aspect-square border border-charcoal-border bg-charcoal hover:border-gold/60 transition-colors duration-200 p-6"
              >
                <span
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "radial-gradient(120% 100% at 50% 0%, rgba(201,162,39,0.14) 0%, rgba(201,162,39,0) 65%)",
                  }}
                  aria-hidden="true"
                />
                <Icon className="relative size-10 sm:size-12 text-gold/80 group-hover:text-gold transition-colors" />
                <span className="relative font-display text-sm sm:text-base font-semibold uppercase tracking-wide text-cream">
                  {cat.label}
                </span>
                <span className="relative flex items-center gap-1.5 text-xs text-gray-500 group-hover:text-gold transition-colors">
                  Shop Now
                  <ArrowRightIcon className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
