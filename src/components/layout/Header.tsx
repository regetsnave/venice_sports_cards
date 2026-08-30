"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import TopBar from "./TopBar";
import { categories, primaryNav } from "@/lib/constants";
import { ButtonLink } from "@/components/ui/Button";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";

function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`relative font-display text-[0.8rem] font-medium uppercase tracking-[0.08em] py-2 transition-colors ${
        active ? "text-gold" : "text-cream/85 hover:text-gold"
      }`}
    >
      {label}
      <span
        className={`absolute -bottom-0.5 left-0 h-px bg-gold transition-all duration-200 ${
          active ? "w-full" : "w-0 group-hover:w-full"
        }`}
        aria-hidden="true"
      />
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <TopBar />
      <div className="bg-black/95 backdrop-blur border-b border-charcoal-border">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[4.5rem]">
          <Link href="/" className="flex flex-col leading-none shrink-0 group">
            <span className="font-serif-display italic text-[1.7rem] text-gold group-hover:text-gold-light transition-colors">
              Venice
            </span>
            <span className="font-display text-[0.55rem] tracking-[0.32em] uppercase text-cream/75 mt-0.5">
              Sports Cards &amp; Collectibles
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-5 xl:gap-7" aria-label="Primary">
            {primaryNav.map((item) => (
              <div key={item.href} className="group">
                <NavLink href={item.href} label={item.label} active={pathname === item.href} />
              </div>
            ))}
          </nav>

          <div className="hidden lg:block">
            <ButtonLink href="/visit" variant="primary" size="sm">
              Visit Our Store
            </ButtonLink>
          </div>

          <button
            className="lg:hidden text-cream hover:text-gold transition-colors p-2 -mr-2"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`lg:hidden fixed inset-x-0 top-[4.5rem] md:top-[6.5rem] bottom-0 bg-black border-t border-charcoal-border transition-all duration-300 ease-out overflow-y-auto ${
          open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col px-6 py-6" aria-label="Mobile">
          {primaryNav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
              className={`font-display text-base uppercase tracking-wide py-3.5 border-b border-charcoal-border transition-all duration-300 ${
                pathname === item.href ? "text-gold" : "text-cream/90 hover:text-gold"
              } ${open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"}`}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-5 bg-charcoal border border-charcoal-border px-4 py-4">
            <p className="font-display text-[0.7rem] uppercase tracking-[0.2em] text-gold mb-3">
              Photo Gallery
            </p>
            <div className="flex flex-col divide-y divide-charcoal-border">
              {categories.map((c) => (
                <Link
                  key={c.slug}
                  href={`/gallery?tab=${c.slug}`}
                  onClick={() => setOpen(false)}
                  className="text-sm text-cream/80 hover:text-gold transition-colors py-2.5"
                >
                  {c.label}
                </Link>
              ))}
            </div>
          </div>
          <ButtonLink
            href="/visit"
            variant="primary"
            className="mt-6 w-full"
            onClick={() => setOpen(false)}
          >
            Visit Our Store
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
