import { SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export function MapPinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4.5 4h3.6l1.6 4.4-2.1 1.7a12 12 0 0 0 5.3 5.3l1.7-2.1 4.4 1.6v3.6c0 1-.9 1.7-1.8 1.5A17 17 0 0 1 3 5.8C2.8 4.9 3.5 4 4.5 4Z" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function StoreIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 10v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9" />
      <path d="M3 4h18l1.2 4.8A2 2 0 0 1 20.2 11H3.8a2 2 0 0 1-2-2.2L3 4Z" />
      <path d="M9 20v-5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v5" />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-8.1h2.7l.4-3.2h-3.1V7.7c0-.9.3-1.6 1.6-1.6h1.7V3.2C16.5 3.1 15.5 3 14.4 3c-2.4 0-4 1.4-4 4.1v2.6H7.7v3.2h2.7V21h3.1Z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.8l2.7 5.7 6.2.7-4.6 4.3 1.2 6.2-5.5-3-5.5 3 1.2-6.2-4.6-4.3 6.2-.7L12 2.8Z" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5 5 6.2v5.6c0 4.6 3 8 7 9 4-1 7-4.4 7-9V6.2L12 3.5Z" />
      <path d="m9 12 2 2 4-4.3" />
    </svg>
  );
}

export function ExpertIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="8.5" r="3.5" />
      <path d="M5 20c0-3.6 3.1-6.5 7-6.5s7 2.9 7 6.5" />
      <path d="m9.5 8 1.7 1.7L14.5 6.5" />
    </svg>
  );
}

export function QualityIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5 5 6.2v5.6c0 4.6 3 8 7 9 4-1 7-4.4 7-9V6.2L12 3.5Z" />
      <circle cx="12" cy="10" r="2.2" />
      <path d="M9.5 12.5 8 17l4-2 4 2-1.5-4.5" />
    </svg>
  );
}

export function CommunityIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="8.5" cy="9" r="2.6" />
      <circle cx="16" cy="9.5" r="2.1" />
      <path d="M3.5 19c.5-3 2.5-5 5-5s4.5 2 5 5" />
      <path d="M14 14.3c2.1.3 3.7 2.1 4.1 4.7" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4.5 7 7.5 6 7.5-6" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function FootballIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <ellipse cx="12" cy="12" rx="8" ry="5.2" transform="rotate(-40 12 12)" />
      <path d="M8.3 15.7 15.7 8.3M9.5 9.5l1.4 1.4M13.1 13.1l1.4 1.4M8.9 12.5l1.4 1.4M11.7 9.7l1.4 1.4" />
    </svg>
  );
}

export function BasketballIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5v17" />
      <path d="M5.8 5.8a11.9 11.9 0 0 1 0 12.4M18.2 5.8a11.9 11.9 0 0 0 0 12.4" />
    </svg>
  );
}

export function BaseballIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M6.8 6.2c1.6 2 1.6 9.6 0 11.6M17.2 6.2c-1.6 2-1.6 9.6 0 11.6" />
    </svg>
  );
}

export function PokeballIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h5.3M15.2 12h5.3" />
      <circle cx="12" cy="12" r="2.3" />
    </svg>
  );
}

export function CollectiblesIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 4 7.5 12 12l8-4.5L12 3Z" />
      <path d="M4 12l8 4.5 8-4.5M4 16.5 12 21l8-4.5" />
    </svg>
  );
}

export function GradedCardIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="5" y="3" width="14" height="18" rx="1.5" />
      <rect x="7.3" y="5.3" width="9.4" height="9" rx="0.5" />
      <path d="M7.3 16.5h9.4M7.3 18.5h5.5" />
    </svg>
  );
}
