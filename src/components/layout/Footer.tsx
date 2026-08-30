import Link from "next/link";
import { business, footerNav } from "@/lib/constants";
import Container from "@/components/ui/Container";
import SectionDivider from "@/components/ui/SectionDivider";
import { FacebookIcon, InstagramIcon, MailIcon, MapPinIcon, PhoneIcon } from "@/components/ui/icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal">
      <SectionDivider tone="dark" />
      <Container className="py-16 lg:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] gap-x-10 gap-y-12">
        <div>
          <Link href="/" className="flex flex-col leading-none w-fit group">
            <span className="font-serif-display italic text-3xl text-gold group-hover:text-gold-light transition-colors">
              Venice
            </span>
            <span className="font-display text-[0.6rem] tracking-[0.3em] uppercase text-cream/80 mt-1">
              Sports Cards &amp; Collectibles
            </span>
          </Link>
          <p className="mt-4 text-sm text-gray-300 leading-relaxed max-w-xs">
            Your local destination for sports cards, Pok&eacute;mon, One Piece, graded cards, and collectibles in Venice, Florida.
          </p>
          <div className="flex items-center gap-3 mt-6">
            {business.social.length > 0 ? (
              business.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center size-9 rounded-full border border-charcoal-border text-gray-300 hover:text-gold hover:border-gold/60 transition-colors"
                >
                  {s.label === "Facebook" ? <FacebookIcon className="size-4" /> : <InstagramIcon className="size-4" />}
                </a>
              ))
            ) : (
              <span className="text-xs text-gray-500 italic">Social links coming soon</span>
            )}
          </div>
        </div>

        <nav aria-label="Footer shop categories">
          <h3 className="font-display text-xs font-semibold uppercase tracking-[0.15em] text-gold mb-5">
            Shop
          </h3>
          <ul className="flex flex-col gap-3">
            {footerNav.shop.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-gray-300 hover:text-gold hover:translate-x-0.5 inline-block transition-all duration-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer store links">
          <h3 className="font-display text-xs font-semibold uppercase tracking-[0.15em] text-gold mb-5">
            Store
          </h3>
          <ul className="flex flex-col gap-3">
            {footerNav.store.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-gray-300 hover:text-gold hover:translate-x-0.5 inline-block transition-all duration-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-display text-xs font-semibold uppercase tracking-[0.15em] text-gold mb-5">
            Contact
          </h3>
          <ul className="flex flex-col gap-3.5 text-sm text-gray-300">
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
            <li className="flex items-center gap-2.5 text-gray-500">
              <span className="size-4 shrink-0" aria-hidden="true" />
              {business.hours.display}
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-charcoal-border">
        <Container className="py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500 text-center sm:text-left">
          <p>
            &copy; {year} {business.name}. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}
