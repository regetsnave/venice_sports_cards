import Container from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SectionDivider from "@/components/ui/SectionDivider";
import DisplayCaseWall from "@/components/ui/concept/DisplayCaseWall";
import CardBoxStack from "@/components/ui/concept/CardBoxStack";
import StoreSignArt from "@/components/ui/concept/StoreSignArt";

export default function AboutSection() {
  return (
    <section className="bg-cream text-black" aria-labelledby="about-heading">
      <SectionDivider tone="light" />
      <Container className="py-20 sm:py-28 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <Reveal className="relative">
          <div
            className="pointer-events-none absolute -inset-3 border border-gold-dark/25"
            aria-hidden="true"
          />
          <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[26rem] sm:h-[30rem] shadow-[0_30px_60px_-25px_rgba(0,0,0,0.35)]">
            <DisplayCaseWall className="row-span-2" />
            <CardBoxStack />
            <StoreSignArt />
          </div>
          <p className="mt-3 text-xs text-charcoal/50 italic">
            Concept visuals for website design purposes &mdash; final photography to be provided by the shop.
          </p>
        </Reveal>

        <Reveal>
          <Eyebrow>About Us</Eyebrow>
          <h2
            id="about-heading"
            className="mt-5 font-display text-3xl sm:text-4xl lg:text-[2.85rem] font-bold uppercase tracking-tight text-black text-balance leading-[1.05]"
          >
            More Than a Hobby.
            <span className="block text-gold-dark">It&rsquo;s a Community.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-charcoal leading-relaxed max-w-xl">
            Venice Sports Cards &amp; Collectibles is a local shop built for
            collectors, by collectors. Whether you&rsquo;re chasing a rookie
            card, completing a set, opening wax, or just getting started, our
            team is here to help &mdash; with fair deals and honest advice
            every time you walk through the door.
          </p>
          <div className="mt-8">
            <ButtonLink
              href="/about"
              variant="secondary"
              className="!border-black/25 !text-black hover:!border-gold-dark hover:!bg-gold/10 hover:!text-gold-dark"
            >
              Learn More About Us
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
      <SectionDivider tone="light" />
    </section>
  );
}
