"use client";

import { useEffect, useRef } from "react";
import { CloseIcon } from "@/components/ui/icons";
import { withBasePath } from "@/lib/basePath";

/**
 * Dependency-free modal for a single full-size photo. Full collectible
 * always visible (`object-contain`), body scroll locked while open, focus
 * moves in on open and returns to the triggering tile on close.
 */
export default function Lightbox({
  src,
  alt,
  width,
  height,
  onClose,
  returnFocusEl,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  onClose: () => void;
  returnFocusEl?: HTMLElement | null;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKeyDown);
      returnFocusEl?.focus();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="animate-lightbox-fade fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 rounded-full p-2 text-cream/80 transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold sm:top-6 sm:right-6"
      >
        <CloseIcon className="size-7" />
      </button>
      <img
        src={withBasePath(src)}
        alt={alt}
        width={width}
        height={height}
        onClick={(e) => e.stopPropagation()}
        className="h-auto max-h-[88vh] w-auto max-w-full rounded-lg object-contain shadow-2xl shadow-black/80"
      />
    </div>
  );
}
