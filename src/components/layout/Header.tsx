"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import TopBar from "./TopBar";
import { categories, primaryNav } from "@/lib/constants";
import { ButtonLink } from "@/components/ui/Button";
import { ChevronDownIcon, CloseIcon, MenuIcon } from "@/components/ui/icons";

export default function Header() {
  const [open, setOpen] = useState(false);

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
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
          <Link href="/" className="flex flex-col leading-none shrink-0 group">
            <span className="font-serif-display italic text-3xl text-gold group-hover:text-gold-light transition-colors">
              Venice
            </span>
            <span className="font-display text-[0.6rem] tracking-[0.3em] uppercase text-cream/80 mt-1">
              Sports Cards &amp; Collectibles
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
            {primaryNav.map((item) =>
              item.label === "Products" ? (
                <div key={item.href} className="relative group">
                  <button
                    className="flex items-center gap-1 font-display text-sm font-medium uppercase tracking-wide text-cream/90 hover:text-gold transition-colors py-2"
                    aria-haspopup="true"
                  >
                    {item.label}
                    <ChevronDownIcon className="size-3.5" />
                  </button>
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible transition-all duration-150">
                    <ul className="w-56 bg-charcoal border border-charcoal-border shadow-xl shadow-black/40 py-2">
                      {categories.map((c) => (
                        <li key={c.slug}>
                          <Link
                            href={`/products/${c.slug}`}
                            className="block px-4 py-2.5 text-sm text-cream/85 hover:text-gold hover:bg-black/40 transition-colors"
                          >
                            {c.label}
                          </Link>
                        </li>
                      ))}
                      <li className="border-t border-charcoal-border mt-1 pt-1">
                        <Link
                          href="/products"
                          className="block px-4 py-2.5 text-sm font-semibold text-gold hover:text-gold-light transition-colors"
                        >
                          All Products
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-display text-sm font-medium uppercase tracking-wide text-cream/90 hover:text-gold transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:block">
            <ButtonLink href="/visit" variant="secondary" className="text-xs px-5 py-2.5">
              Visit Our Store
            </ButtonLink>
          </div>

          <button
            className="lg:hidden text-cream p-2 -mr-2"
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
        className={`lg:hidden fixed inset-x-0 top-[5rem] bottom-0 bg-black border-t border-charcoal-border transition-all duration-300 ease-out overflow-y-auto ${
          open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col px-6 py-6" aria-label="Mobile">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-display text-base uppercase tracking-wide text-cream/90 hover:text-gold transition-colors py-3.5 border-b border-charcoal-border"
            >
              {item.label}
            </Link>
          ))}
          <div className="py-3.5">
            <p className="font-display text-xs uppercase tracking-widest text-gray-500 mb-2">Shop by Category</p>
            <div className="flex flex-col">
              {categories.map((c) => (
                <Link
                  key={c.slug}
                  href={`/products/${c.slug}`}
                  onClick={() => setOpen(false)}
                  className="text-sm text-cream/80 hover:text-gold transition-colors py-2"
                >
                  {c.label}
                </Link>
              ))}
            </div>
          </div>
          <ButtonLink
            href="/visit"
            variant="primary"
            className="mt-4 w-full"
            onClick={() => setOpen(false)}
          >
            Visit Our Store
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
