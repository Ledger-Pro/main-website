export interface BrandMarkProps {
  className?: string;
  size?: number;
  /**
   * Visual variant of the mark.
   *  - `tile`   (default) — Forest tile with Gold square (favicon / nav register)
   *  - `square` — Standalone Gold square on transparent (use on solid surfaces)
   * Both render at the requested `size` in logical pixels.
   */
  variant?: "tile" | "square";
  /** Kept for API compatibility with prior gradient mark; no-op now. */
  includeDefs?: boolean;
}

/**
 * The Ledge brand mark.
 *
 * Source of truth: `docs/brand/DESIGN.md` §3.5.
 * The mark is a single Gold square `#E5A934`. The Gold never changes color.
 * - `variant="tile"`   places it on a Forest `#0F2D24` rounded tile (default).
 * - `variant="square"` renders just the square on transparent.
 */
export function BrandMark({
  className,
  size = 30,
  variant = "tile",
}: BrandMarkProps) {
  if (variant === "square") {
    return (
      <svg
        className={className}
        viewBox="0 0 32 32"
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="8" y="8" width="16" height="16" fill="#E5A934" />
      </svg>
    );
  }

  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="7" fill="#0F2D24" />
      <rect x="11" y="11" width="10" height="10" fill="#E5A934" />
    </svg>
  );
}
