"use client";

type IconType = "square" | "triangle" | "circle" | "diamond" | "hex" | "star" | "bars" | "arc";

interface BrandLogo {
  name: string;
  color: string;
  icon: IconType;
}

const LOGOS: BrandLogo[] = [
  { name: "Keystone", color: "#2a54d6", icon: "square" },
  { name: "Northwind", color: "#7c5bff", icon: "triangle" },
  { name: "Axis & Co.", color: "#19c7c2", icon: "circle" },
  { name: "Meridian", color: "#148f5e", icon: "diamond" },
  { name: "Foundry 42", color: "#c78210", icon: "hex" },
  { name: "Brightline", color: "#c43b2d", icon: "star" },
  { name: "Lattice", color: "#2a54d6", icon: "bars" },
  { name: "Heron", color: "#7c5bff", icon: "arc" },
];

function LogoIcon({ type, color }: { type: IconType; color: string }) {
  switch (type) {
    case "square":
      return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
          <rect x="2" y="2" width="18" height="18" rx="4" fill={color} />
          <rect x="6" y="6" width="10" height="10" rx="2" fill="#fff" />
        </svg>
      );
    case "triangle":
      return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
          <path d="M11 2l9 17H2z" fill={color} />
        </svg>
      );
    case "circle":
      return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
          <circle cx="11" cy="11" r="9" fill={color} />
          <circle cx="11" cy="11" r="4" fill="#fff" />
        </svg>
      );
    case "diamond":
      return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
          <path d="M11 2l9 9-9 9-9-9z" fill={color} />
        </svg>
      );
    case "hex":
      return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
          <path d="M11 2l8 4.5v9L11 20l-8-4.5v-9z" fill={color} />
        </svg>
      );
    case "star":
      return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
          <path
            d="M11 2l2.6 6.3 6.8.5-5.2 4.4 1.7 6.6L11 16.3 5.1 19.8l1.7-6.6L1.6 8.8l6.8-.5z"
            fill={color}
          />
        </svg>
      );
    case "bars":
      return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
          <rect x="3" y="10" width="3" height="9" fill={color} />
          <rect x="9" y="6" width="3" height="13" fill={color} />
          <rect x="15" y="2" width="3" height="17" fill={color} />
        </svg>
      );
    case "arc":
      return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
          <path d="M3 18a8 8 0 0116 0" stroke={color} strokeWidth="3" strokeLinecap="round" />
          <circle cx="11" cy="18" r="2.5" fill={color} />
        </svg>
      );
  }
}

export function LogosMarquee() {
  const pool = [...LOGOS, ...LOGOS];
  return (
    <section className="logos-wrap" style={{ padding: "48px 0" }}>
      <div className="container">
        <div className="logos-head">Trusted by 300+ bookkeeping firms</div>
        <div className="logos-marquee">
          <div className="logos-track">
            {pool.map((l, i) => (
              <div className="logo-cell" key={`${l.name}-${i}`}>
                <LogoIcon type={l.icon} color={l.color} />
                <span>{l.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
