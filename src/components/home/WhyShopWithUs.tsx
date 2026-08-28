import Container from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { CommunityIcon, ExpertIcon, QualityIcon, ShieldIcon } from "@/components/ui/icons";

const points = [
  {
    icon: ShieldIcon,
    title: "Fair & Honest Deals",
    description: "Transparent pricing and honest appraisals on everything we buy, sell, and trade.",
  },
  {
    icon: ExpertIcon,
    title: "Passionate Experts",
    description: "Our team lives the hobby and takes the time to get every deal right.",
  },
  {
    icon: QualityIcon,
    title: "Quality Products",
    description: "Cards and sealed product are inspected and handled with care.",
  },
  {
    icon: CommunityIcon,
    title: "Community Focused",
    description: "A local gathering place for Venice-area collectors of every level.",
  },
];

export default function WhyShopWithUs() {
  return (
    <section className="bg-black py-20 sm:py-24 border-y border-charcoal-border" aria-labelledby="why-shop-heading">
      <Container className="flex flex-col gap-14">
        <Reveal>
          <div className="text-center mx-auto" id="why-shop-heading">
            <Eyebrow>Why Shop With Us</Eyebrow>
          </div>
        </Reveal>

        <Reveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-charcoal-border">
          {points.map(({ icon: Icon, title, description }, i) => (
            <div
              key={title}
              className={`group flex flex-col items-center text-center gap-4 px-6 py-2 ${
                i > 0 ? "lg:pl-10" : ""
              } ${i < points.length - 1 ? "lg:pr-10" : ""}`}
            >
              <span className="flex items-center justify-center size-16 rounded-full border border-gold/40 text-gold transition-all duration-300 group-hover:border-gold group-hover:shadow-[0_0_24px_-6px_rgba(198,161,91,0.5)]">
                <Icon className="size-6" />
              </span>
              <h3 className="font-display text-base font-semibold uppercase tracking-wide text-cream">
                {title}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed max-w-[16rem]">{description}</p>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
