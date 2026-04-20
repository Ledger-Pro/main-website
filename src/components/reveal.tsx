"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Wraps children in a div that adds `.in` when it scrolls into view, matching
 * the `.reveal` → `.reveal.in` CSS transition from the original landing page.
 *
 * When used on grid containers (e.g. problem-grid, pipe-grid, feat-grid), the
 * component also applies a staggered `transition-delay` to each child.
 */
export function Reveal({
  children,
  className = "",
  stagger = false,
  as: As = "div",
  ...rest
}: {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
  as?: "div" | "section";
} & React.HTMLAttributes<HTMLElement>) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    // If stagger: apply delays to direct children, observe each child
    // independently so each reveals at its own intersection point.
    const targets = stagger ? (Array.from(root.children) as HTMLElement[]) : [root];
    if (stagger) {
      targets.forEach((child, i) => {
        child.style.transitionDelay = `${i * 80}ms`;
        child.classList.add("reveal");
      });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15 },
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [stagger]);

  return (
    <As ref={ref as never} className={`${stagger ? "" : "reveal "}${className}`} {...rest}>
      {children}
    </As>
  );
}
