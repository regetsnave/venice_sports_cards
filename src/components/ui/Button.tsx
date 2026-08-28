import Link from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "sm";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-display font-semibold uppercase transition-all duration-200 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

const sizes: Record<Size, string> = {
  md: "text-sm tracking-wide px-7 py-3.5",
  sm: "text-xs tracking-wider px-5 py-2.5",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-gold text-black hover:bg-gold-light shadow-[0_0_0_rgba(198,161,91,0)] hover:shadow-[0_8px_28px_-8px_rgba(198,161,91,0.55)]",
  secondary:
    "border border-gold/50 text-cream hover:border-gold hover:bg-gold/10 hover:text-gold-light",
  ghost: "text-cream/90 hover:text-gold",
};

type LinkProps = {
  href: string;
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">;

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...rest
}: LinkProps) {
  return (
    <Link
      href={href}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
}

type BtnProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">;

export function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...rest
}: BtnProps) {
  return (
    <button className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}
