import Container from "@/components/ui/Container";
import Breadcrumbs, { type Crumb } from "@/components/ui/Breadcrumbs";
import { Eyebrow } from "@/components/ui/SectionHeading";

/** Compact dark banner used at the top of every secondary page. */
export default function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden bg-black border-b border-charcoal-border">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(60% 70% at 85% 0%, rgba(198,161,91,0.14) 0%, rgba(198,161,91,0) 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "repeating-linear-gradient(115deg, transparent 0 90px, rgba(198,161,91,0.6) 90px 91px)",
        }}
        aria-hidden="true"
      />
      <Container className="relative py-12 sm:py-16 flex flex-col gap-5">
        <Breadcrumbs items={breadcrumbs} />
        <div className="flex flex-col gap-3 max-w-2xl">
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <h1 className="font-display text-3xl sm:text-4xl lg:text-[2.85rem] font-bold uppercase tracking-tight text-cream text-balance leading-[1.05]">
            {title}
          </h1>
          {description ? <p className="text-base sm:text-lg text-gray-300 leading-relaxed">{description}</p> : null}
        </div>
      </Container>
    </section>
  );
}
