import Container from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { GradedCardIcon, PokeballIcon, StarIcon } from "@/components/ui/icons";

function CardPlaceholder({
  className = "",
  icon,
  label,
}: {
  className?: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div
      className={`absolute aspect-[5/7] w-40 sm:w-48 rounded-sm border border-gold/40 bg-gradient-to-br from-charcoal-light via-charcoal to-black shadow-2xl shadow-black/60 overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_35%,rgba(201,162,39,0.18)_50%,transparent_65%)] bg-[length:250%_250%] animate-shimmer motion-reduce:animate-none" />
      <div className="absolute inset-2.5 border border-gold/25" />
      <div className="relative h-full flex flex-col items-center justify-center gap-3 text-gold/70">
        {icon}
        <span className="font-display text-[0.6rem] tracking-[0.2em] uppercase text-cream/40">
          {label}
        </span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black border-b border-charcoal-border">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(60% 55% at 78% 30%, rgba(201,162,39,0.16) 0%, rgba(201,162,39,0) 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, transparent 0 90px, rgba(201,162,39,0.6) 90px 91px)",
        }}
        aria-hidden="true"
      />

      <Container className="relative py-20 sm:py-28 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
        <div className="max-w-xl">
          <div className="mb-6">
            <Eyebrow>Buy &middot; Sell &middot; Trade</Eyebrow>
          </div>
          <h1 className="font-display font-bold uppercase leading-[0.95] text-5xl sm:text-6xl xl:text-7xl text-cream text-balance">
            Venice Sports
            <span className="block text-gold mt-1">Cards &amp; Collectibles</span>
          </h1>
          <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-lg">
            Your local destination in Venice, Florida for sports cards, Pok&eacute;mon
            cards, graded cards, sealed product, and collectibles &mdash; buy, sell,
            and trade with people who know the hobby.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <ButtonLink href="/sell">Sell Your Cards</ButtonLink>
            <ButtonLink href="/products" variant="secondary">
              Browse Products
            </ButtonLink>
          </div>
        </div>

        <div className="relative hidden lg:block h-[26rem]">
          <CardPlaceholder
            className="left-2 top-10 -rotate-6"
            icon={<PokeballIcon className="size-10" />}
            label="Pok&eacute;mon"
          />
          <CardPlaceholder
            className="left-1/2 -translate-x-1/2 top-0 z-10"
            icon={<StarIcon className="size-9" />}
            label="Featured Card"
          />
          <CardPlaceholder
            className="right-2 top-10 rotate-6"
            icon={<GradedCardIcon className="size-10" />}
            label="Graded"
          />
        </div>
      </Container>
    </section>
  );
}
