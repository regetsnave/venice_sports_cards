import Container from "@/components/ui/Container";
import { business } from "@/lib/constants";
import { ClockIcon, MapPinIcon, PhoneIcon, StoreIcon } from "@/components/ui/icons";

const items = [
  {
    icon: MapPinIcon,
    label: "Locally Owned",
    value: "Venice, Florida",
  },
  {
    icon: ClockIcon,
    label: "Store Hours",
    value: business.hours.display,
  },
  {
    icon: PhoneIcon,
    label: "Call Us",
    value: business.phone.display,
    href: business.phone.href,
  },
  {
    icon: StoreIcon,
    label: "Visit Our Store",
    value: business.address.full,
    href: "https://www.google.com/maps/search/?api=1&query=2357+Tamiami+Trail+S+Unit+9+Venice+FL+34293",
  },
];

export default function StoreInfoStrip() {
  return (
    <section className="relative bg-charcoal border-b border-charcoal-border" aria-label="Store information">
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          backgroundImage:
            "linear-gradient(90deg, transparent 0%, var(--color-gold) 50%, transparent 100%)",
          opacity: 0.4,
        }}
        aria-hidden="true"
      />
      <Container className="py-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {items.map(({ icon: Icon, label, value, href }) => {
          const content = (
            <div className="group flex items-center gap-3.5">
              <span className="flex items-center justify-center size-11 shrink-0 rounded-full border border-gold/40 text-gold transition-colors group-hover:border-gold group-hover:bg-gold/10">
                <Icon className="size-[1.1rem]" />
              </span>
              <span className="flex flex-col min-w-0">
                <span className="font-display text-[0.65rem] font-semibold uppercase tracking-widest text-gold">
                  {label}
                </span>
                <span className="text-sm text-cream/90 truncate">{value}</span>
              </span>
            </div>
          );
          return href ? (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="transition-opacity"
            >
              {content}
            </a>
          ) : (
            <div key={label}>{content}</div>
          );
        })}
      </Container>
    </section>
  );
}
