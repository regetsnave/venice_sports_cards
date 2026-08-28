import Container from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/SectionHeading";
import GradedSlab from "@/components/ui/concept/GradedSlab";
import { heroPicks } from "@/data/demoInventory";

// heroPicks order: [pokemon, football, baseball, one-piece]. The
// baseball slab is treated as the primary, front-facing card; the
// other three fan out slightly behind it.
const cardPositions = [
  { className: "left-[2%] top-16 w-32 sm:w-40 -rotate-[13deg]", z: "z-0", delay: "420ms" },
  { className: "left-[24%] top-6 w-36 sm:w-44 -rotate-[6deg]", z: "z-10", delay: "480ms" },
  { className: "left-[44%] top-0 w-40 sm:w-52 rotate-[2deg]", z: "z-20", delay: "540ms" },
  { className: "left-[68%] top-10 w-32 sm:w-40 rotate-[12deg]", z: "z-10", delay: "600ms" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black border-b border-charcoal-border">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(65% 60% at 80% 25%, rgba(198,161,91,0.20) 0%, rgba(198,161,91,0) 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          background:
            "radial-gradient(50% 55% at 82% 55%, rgba(198,161,91,0.14) 0%, rgba(198,161,91,0) 75%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, transparent 0 90px, rgba(198,161,91,0.6) 90px 91px)",
        }}
        aria-hidden="true"
      />

      <Container className="relative py-20 sm:py-28 lg:py-36 grid lg:grid-cols-2 gap-16 items-center">
        <div className="max-w-xl">
          <div className="hero-in mb-6" style={{ animationDelay: "0ms" }}>
            <Eyebrow>Buy &middot; Sell &middot; Trade</Eyebrow>
          </div>
          <h1 className="hero-in font-display font-bold uppercase leading-[0.92] text-5xl sm:text-6xl xl:text-[5rem] text-cream text-balance tracking-tight" style={{ animationDelay: "90ms" }}>
            Venice Sports
            <span className="block text-gold mt-1">Cards &amp; Collectibles</span>
          </h1>
          <p className="hero-in mt-6 text-lg text-gray-300 leading-relaxed max-w-lg" style={{ animationDelay: "220ms" }}>
            Your local destination in Venice, Florida for sports cards, Pok&eacute;mon,
            One Piece, graded cards, sealed product, and collectibles &mdash; buy,
            sell, and trade with people who know the hobby.
          </p>
          <div className="hero-in mt-9 flex flex-col sm:flex-row gap-4" style={{ animationDelay: "340ms" }}>
            <ButtonLink href="/sell">Sell Your Cards</ButtonLink>
            <ButtonLink href="/products" variant="secondary">
              Browse Products
            </ButtonLink>
          </div>
        </div>

        <div className="relative hidden lg:block h-[28rem]">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: "radial-gradient(45% 50% at 50% 45%, rgba(198,161,91,0.18) 0%, rgba(198,161,91,0) 70%)",
              filter: "blur(4px)",
            }}
            aria-hidden="true"
          />
          {heroPicks.map((card, i) => (
            <div
              key={card.id}
              className={`hero-in absolute aspect-[5/7] ${cardPositions[i].className} ${cardPositions[i].z}`}
              style={{ animationDelay: cardPositions[i].delay }}
            >
              <GradedSlab card={card} />
            </div>
          ))}
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 z-30 text-[0.6rem] font-display uppercase tracking-widest text-gray-500 bg-black/60 px-2.5 py-1 whitespace-nowrap">
            Concept Preview &mdash; demo cards for illustration only
          </span>
        </div>
      </Container>
    </section>
  );
}
