import Container from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export default function AboutSection() {
  return (
    <section className="bg-cream text-black py-20 sm:py-28" aria-labelledby="about-heading">
      <Container className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[26rem] sm:h-[30rem]">
          <ImagePlaceholder className="row-span-2" label="Inside the shop" />
          <ImagePlaceholder label="Card inventory" />
          <ImagePlaceholder label="Storefront" />
        </div>

        <div>
          <Eyebrow>About Us</Eyebrow>
          <h2
            id="about-heading"
            className="mt-5 font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold uppercase tracking-tight text-black text-balance leading-[1.05]"
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
            <ButtonLink href="/about" variant="secondary" className="border-black/30 text-black hover:border-gold-dark hover:bg-gold/10">
              Learn More About Us
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
