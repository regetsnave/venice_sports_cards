export default function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-gold focus:text-black focus:px-4 focus:py-2 focus:font-display focus:font-semibold focus:uppercase focus:text-sm"
    >
      Skip to content
    </a>
  );
}
