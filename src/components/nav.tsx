"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BrandMark } from "./icons/brand-mark";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`} id="nav">
      <div className="container nav-inner">
        <Link className="brand" href="/">
          <BrandMark className="mark" />
          ledge
        </Link>
        <div className="nav-links">
          <Link href="/#how">How it works</Link>
          <Link href="/#features">Features</Link>
          <Link href="/#confidence">Confidence</Link>
          <Link href="/#compare">Compare</Link>
          <Link href="/#faq">FAQ</Link>
        </div>
        <div className="nav-cta">
          <Link href="/contact" className="btn btn-ghost btn-sm">
            Sign in
          </Link>
          <Link href="/#demo" className="btn btn-primary btn-sm">
            Book a demo
          </Link>
        </div>
      </div>
    </nav>
  );
}
