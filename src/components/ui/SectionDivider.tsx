/**
 * Thin gold hairline marking an intentional seam between contrasting
 * (dark/light) sections.
 */
export default function SectionDivider({
  tone = "dark",
}: {
  tone?: "dark" | "light";
}) {
  return (
    <div
      className="h-px w-full"
      style={{
        backgroundImage:
          "linear-gradient(90deg, transparent 0%, var(--color-gold) 50%, transparent 100%)",
        opacity: tone === "dark" ? 0.55 : 0.4,
      }}
      aria-hidden="true"
    />
  );
}
