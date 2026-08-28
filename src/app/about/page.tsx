import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import WhyShopWithUs from "@/components/home/WhyShopWithUs";
import DisplayCaseWall from "@/components/ui/concept/DisplayCaseWall";
import CardBoxStack from "@/components/ui/concept/CardBoxStack";
import StoreSignArt from "@/components/ui/concept/StoreSignArt";
import { business } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Venice Sports Cards & Collectibles is a local sports card, Pokémon, and One Piece TCG shop in Venice, Florida.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A Local Shop, Built For Collectors"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      <section className="bg-cream text-black py-16 sm:py-24">
        <Container className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div className="relative">
            <div className="pointer-events-none absolute -inset-3 border border-gold-dark/25" aria-hidden="true" />
            <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[26rem] sm:h-[30rem] shadow-[0_30px_60px_-25px_rgba(0,0,0,0.35)]">
              <DisplayCaseWall className="row-span-2" />
              <CardBoxStack />
              <StoreSignArt />
            </div>
            <p className="mt-3 text-xs text-charcoal/50 italic">
              Concept visuals for website design purposes &mdash; final photography to be provided by the shop.
            </p>
          </div>

          <div>
            <Eyebrow>Who We Are</Eyebrow>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-black leading-[1.05]">
              Collectors, Serving Collectors
            </h2>
            <div className="mt-6 flex flex-col gap-4 text-base sm:text-lg text-charcoal leading-relaxed max-w-xl">
              <p>
                Venice Sports Cards &amp; Collectibles is a local shop in Venice, Florida,
                built around sports cards and trading card games &mdash; from singles and
                sealed product to graded slabs.
              </p>
              <p>
                Whether you&rsquo;re chasing a rookie card, building out a Pok&eacute;mon or
                One Piece collection, opening wax, or just getting started in the hobby,
                the team is here to buy, sell, and trade with you.
              </p>
              <p>
                It&rsquo;s a shop built around the local Venice collector community &mdash;
                a place to come talk cards, not just transact.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/visit" className="!bg-gold !text-black hover:!bg-gold-light">
                Visit Our Store
              </ButtonLink>
              <ButtonLink
                href="/buy"
                variant="secondary"
                className="!border-black/25 !text-black hover:!border-gold-dark hover:!bg-gold/10 hover:!text-gold-dark"
              >
                Shop Now
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <WhyShopWithUs />

      <section className="bg-charcoal py-16 sm:py-20">
        <Container className="flex flex-col items-center gap-4 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase text-cream">
            Come Say Hello
          </h2>
          <p className="text-gray-300">{business.address.full}</p>
          <a href={business.phone.href} className="font-display text-lg font-semibold text-gold hover:text-gold-light transition-colors">
            {business.phone.display}
          </a>
        </Container>
      </section>
    </>
  );
}
