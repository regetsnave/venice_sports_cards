import Link from "next/link";
import { ChevronDownIcon } from "@/components/ui/icons";

export interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {item.href && !isLast ? (
                <Link href={item.href} className="text-gray-500 hover:text-gold transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "text-gold" : "text-gray-500"} aria-current={isLast ? "page" : undefined}>
                  {item.label}
                </span>
              )}
              {!isLast && (
                <ChevronDownIcon className="size-2.5 -rotate-90 text-gray-600 shrink-0" aria-hidden="true" />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
