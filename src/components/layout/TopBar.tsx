import { business } from "@/lib/constants";
import { ClockIcon, FacebookIcon, InstagramIcon, MapPinIcon, PhoneIcon } from "@/components/ui/icons";

export default function TopBar() {
  return (
    <div className="hidden md:block bg-charcoal border-b border-charcoal-border text-xs">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-10 text-gray-300">
        <div className="flex items-center gap-6">
          <a
            href="https://www.google.com/maps/search/?api=1&query=2357+Tamiami+Trail+S+Unit+9+Venice+FL+34293"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-gold transition-colors"
          >
            <MapPinIcon className="size-3.5 text-gold shrink-0" />
            <span>{business.address.full}</span>
          </a>
          <a href={business.phone.href} className="flex items-center gap-1.5 hover:text-gold transition-colors">
            <PhoneIcon className="size-3.5 text-gold shrink-0" />
            <span>{business.phone.display}</span>
          </a>
        </div>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 text-gray-500">
            <ClockIcon className="size-3.5 text-gold shrink-0" />
            {business.hours.display}
          </span>
          <div className="flex items-center gap-3">
            {business.social.length > 0 ? (
              business.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="hover:text-gold transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.label === "Facebook" ? <FacebookIcon className="size-3.5" /> : <InstagramIcon className="size-3.5" />}
                </a>
              ))
            ) : (
              <span className="text-gray-500/70 italic" aria-hidden="true">
                social links coming soon
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
