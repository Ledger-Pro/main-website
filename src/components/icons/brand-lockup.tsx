/** Full Ledge lockup (icon + wordmark) for light surfaces. */
export function BrandLockup({
  className,
  height = 28,
}: {
  className?: string;
  height?: number;
}) {
  const width = Math.round((height * 289) / 118);
  return (
    // eslint-disable-next-line @next/next/no-img-element -- brand asset; avoid Next Image crop quirks
    <img
      className={className}
      src="/brand/ledge-logo-dark-green.png"
      alt="ledge"
      width={width}
      height={height}
      decoding="async"
    />
  );
}
