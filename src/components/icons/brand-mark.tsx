import Image from "next/image";

export interface BrandMarkProps {
  className?: string;
  size?: number;
  /**
   * Visual variant of the mark.
   *  - `icon`  (default) — dark-green mark for light surfaces
   *  - `tile` / `square` — aliases kept for API compatibility; both use icon
   */
  variant?: "tile" | "square" | "icon";
  /** Kept for API compatibility with prior gradient mark; no-op now. */
  includeDefs?: boolean;
}

/**
 * The Ledge brand mark (new geometric L).
 * Source assets: /brand/ledge-logo-icon-dark-green.png
 */
export function BrandMark({
  className,
  size = 30,
}: BrandMarkProps) {
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
