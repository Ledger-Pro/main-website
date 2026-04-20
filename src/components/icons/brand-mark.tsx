export interface BrandMarkProps {
  className?: string;
  size?: number;
  includeDefs?: boolean;
}

/**
 * The LedgerAI brand mark. The gradient is defined once (in the Nav) via
 * `includeDefs`; other instances reuse it through `fill="url(#markGrad)"`.
 */
export function BrandMark({ className, size = 30, includeDefs = false }: BrandMarkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {includeDefs && (
        <defs>
          <linearGradient id="markGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#2a54d6" />
            <stop offset="1" stopColor="#7c5bff" />
          </linearGradient>
        </defs>
      )}
      <rect x="1" y="1" width="30" height="30" rx="8" fill="url(#markGrad)" />
      <path
        d="M9 10h14M9 16h14M9 22h8"
        stroke="#fff"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="22.5" cy="22" r="2.5" fill="#fff" />
    </svg>
  );
}
