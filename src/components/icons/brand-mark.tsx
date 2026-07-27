import Image from "next/image";

export interface BrandMarkProps {
  className?: string;
  size?: number;
  /**
   * Visual variant of the mark.
   *  - `icon`  (default) — dark-green mark for light surfaces
   *  - `lockup` — icon + wordmark
   *  - `tile` / `square` — aliases kept for API compatibility; both use icon
   */
  variant?: "tile" | "square" | "icon" | "lockup";
  /** Kept for API compatibility with prior gradient mark; no-op now. */
  includeDefs?: boolean;
}

/**
 * The Ledge brand mark / lockup (new geometric L).
 * Light-surface assets: /brand/ledge-logo-*-dark-green.png
 */
export function BrandMark({
  className,
  size = 30,
  variant = "icon",
}: BrandMarkProps) {
  if (variant === "lockup") {
    const height = size;
    const width = Math.round((height * 289) / 118);
    return (
      <Image
        className={className}
        src="/brand/ledge-logo-dark-green.png"
        alt="ledge"
        width={width}
        height={height}
        priority
      />
    );
  }

  return (
    <Image
      className={className}
      src="/brand/ledge-logo-icon-dark-green.png"
      alt=""
      width={size}
      height={Math.round((size * 165) / 245)}
      aria-hidden="true"
      priority
    />
  );
}
