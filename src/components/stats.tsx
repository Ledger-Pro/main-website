"use client";

import { useEffect, useRef } from "react";
import { Reveal } from "./reveal";

interface Stat {
  target: number;
  decimals?: number;
  prefix?: string;
  suffix: string;
  k: string;
}

const STATS: Stat[] = [
  { target: 60, prefix: "$", suffix: "B+", k: "US bookkeeping & accounting services market" },
  { target: 33, suffix: "M", k: "US small businesses needing monthly books" },
  { target: 82, suffix: "%", k: "of firms name staffing as their #1 constraint" },
  { target: 11, suffix: "d", k: "median time-to-close today — we target under 24h" },
];

/** Ease-out cubic — matches --ease-out's "starts fast, settles" shape for a numeric tween. */
function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export function Stats() {
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const nums = Array.from(grid.querySelectorAll<HTMLElement>(".stat .n"));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;

          nums.forEach((el, i) => {
            const stat = STATS[i];
            const unitEl = el.querySelector(".u");
            const unitHTML = unitEl ? unitEl.outerHTML : "";

            if (reduceMotion) {
              el.innerHTML = `${stat.prefix ?? ""}${stat.target}${unitHTML}`;
              return;
            }

            const duration = 1400;
            const start = performance.now();

            function frame(now: number) {
              const t = Math.min((now - start) / duration, 1);
              const value = Math.round(stat.target * easeOutCubic(t));
              el.innerHTML = `${stat.prefix ?? ""}${value}${unitHTML}`;
              if (t < 1) requestAnimationFrame(frame);
            }
            requestAnimationFrame(frame);
          });

          observer.disconnect();
          break;
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-sec">
      <div className="container">
        <Reveal className="stats">
          <div className="stats-inner">
            <div>
              <div className="eyebrow">Target market</div>
              <h2 className="h2" style={{ marginTop: 16 }}>
                Where the <span className="ital">money</span> is.
              </h2>
              <p
                className="lead"
                style={{
                  color: "color-mix(in oklab, var(--brand-cream) 72%, transparent)",
                  marginTop: 20,
                }}
              >
                Bookkeeping is a $60B+ service industry still priced by the hour. Ledge converts
                that hour into software margin — for both the firm and the client.
              </p>
            </div>
            <div className="stats-grid" ref={gridRef}>
              {STATS.map((s) => (
                <div className="stat" key={s.k}>
                  <div className="n">
                    {s.prefix}0<span className="u">{s.suffix}</span>
                  </div>
                  <div className="k">{s.k}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
