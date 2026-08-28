export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 justify-center">
      <span className="h-px w-8 bg-gold/60" aria-hidden="true" />
      <span className="font-display text-xs sm:text-sm font-semibold tracking-[0.25em] text-gold uppercase">
        {children}
      </span>
      <span className="h-px w-8 bg-gold/60" aria-hidden="true" />
    </div>
  );
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
}) {
  const alignCls = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";
  const titleTone = tone === "light" ? "text-cream" : "text-black";
  const descTone = tone === "light" ? "text-gray-300" : "text-charcoal";

  return (
    <div className={`flex flex-col gap-4 max-w-2xl ${alignCls}`}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2
        className={`font-display text-3xl sm:text-4xl lg:text-[2.85rem] font-bold uppercase tracking-tight text-balance leading-[1.05] ${titleTone}`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`text-base sm:text-lg leading-relaxed ${descTone}`}>{description}</p>
      ) : null}
    </div>
  );
}
