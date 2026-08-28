import Link from "next/link";
import { business, categories, primaryNav } from "@/lib/constants";
import Container from "@/components/ui/Container";
import { FacebookIcon, InstagramIcon, MailIcon, MapPinIcon, PhoneIcon } from "@/components/ui/icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal border-t border-charcoal-border">
      <Container className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <Link href="/" className="flex flex-col leading-none">
            <span className="font-serif-display italic text-3xl text-gold">Venice</span>
            <span className="font-display text-[0.6rem] tracking-[0.3em] uppercase text-cream/80 mt-1">
              Sports Cards &amp; Collectibles
            </span>
          </Link>
          <p className="mt-4 text-sm text-gray-300 leading-relaxed max-w-xs">
            Your local destination for sports cards, Pok&eacute;mon, graded cards, and collectibles in Venice, Florida.
          </p>
          <div className="flex items-center gap-4 mt-5">
            {business.social.length > 0 ? (
              business.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-gold transition-colors"
                >
                  {s.label === "Facebook" ? <FacebookIcon className="size-5" /> : <InstagramIcon className="size-5" />}
                </a>
              ))
            ) : (
              <span className="text-xs text-gray-500 italic">Social links coming soon</span>
            )}
          </div>
        </div>

        <nav aria-label="Footer quick links">
          <h3 className="font-display text-xs font-semibold uppercase tracking-widest text-gold mb-4">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2.5">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-gray-300 hover:text-gold transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer shop categories">
          <h3 className="font-display text-xs font-semibold uppercase tracking-widest text-gold mb-4">
            Shop
          </h3>
          <ul className="flex flex-col gap-2.5">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/products/${c.slug}`} className="text-sm text-gray-300 hover:text-gold transition-colors">
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-display text-xs font-semibold uppercase tracking-widest text-gold mb-4">
            Store Info
          </h3>
          <ul className="flex flex-col gap-3 text-sm text-gray-300">
            <li className="flex items-start gap-2.5">
              <MapPinIcon className="size-4 text-gold shrink-0 mt-0.5" />
              <span>{business.address.full}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <PhoneIcon className="size-4 text-gold shrink-0" />
              <a href={business.phone.href} className="hover:text-gold transition-colors">
                {business.phone.display}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MailIcon className="size-4 text-gold shrink-0" />
              <span className="italic text-gray-500">Email coming soon</span>
            </li>
            <li className="text-gray-500">{business.hours.display}</li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-charcoal-border">
        <Container className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>
            &copy; {year} {business.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gold transition-colors">
              Terms of Service
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
