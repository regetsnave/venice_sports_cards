"use client";

import { HTMLAttributes, ReactNode, useEffect, useRef, useState } from "react";

/**
 * Restrained scroll-triggered fade/slide-up, applied once per element.
 * Falls back to fully visible immediately if IntersectionObserver is
 * unavailable, and is a no-op under prefers-reduced-motion (see .reveal
 * in globals.css).
 */
export default function Reveal({
  children,
  className = "",
  as: Tag = "div",
  ...rest
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "section";
} & Omit<HTMLAttributes<HTMLDivElement>, "className" | "children">) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      // A low threshold with no negative margin so tall sections (e.g. the
      // product grid) reveal as soon as they start entering the viewport,
      // rather than needing a large fraction of their own height visible.
      { threshold: 0.01, rootMargin: "0px 0px -20px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Comp = Tag as "div";

  return (
    <Comp ref={ref} className={`reveal ${visible ? "reveal-visible" : ""} ${className}`} {...rest}>
      {children}
    </Comp>
  );
}
