import Link from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-display font-semibold uppercase tracking-wide text-sm px-7 py-3.5 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

const variants: Record<Variant, string> = {
  primary: "bg-gold text-black hover:bg-gold-light",
  secondary:
    "border border-gold/70 text-cream hover:border-gold hover:bg-gold/10",
  ghost: "text-cream/90 hover:text-gold",
};

type LinkProps = {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">;

export function ButtonLink({
  href,
  variant = "primary",
  children,
  className = "",
  ...rest
}: LinkProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </Link>
  );
}

type BtnProps = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">;

export function Button({
  variant = "primary",
  children,
  className = "",
  ...rest
}: BtnProps) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}
