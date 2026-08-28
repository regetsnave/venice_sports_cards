import Container from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
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
        <div className="text-center mx-auto" id="why-shop-heading">
          <Eyebrow>Why Shop With Us</Eyebrow>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {points.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex flex-col items-center text-center gap-4">
              <span className="flex items-center justify-center size-16 border border-gold/40 text-gold">
                <Icon className="size-7" />
              </span>
              <h3 className="font-display text-base font-semibold uppercase tracking-wide text-cream">
                {title}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed max-w-[16rem]">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
