"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const links = [
  { href: "/work", label: "Work" },
  { href: "/studio", label: "Studio" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-4 md:px-6">
      <div
        className={`mx-auto max-w-6xl rounded-full transition-all duration-300 ${
          scrolled
            ? "glass shadow-soft border border-line"
            : "bg-transparent border border-transparent"
        }`}
      >
        <div className="flex items-center justify-between h-16 md:h-[68px] px-4 md:px-6">
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <Image
              src="/afx-logo.png"
              alt="AFX Frames"
              width={185}
              height={195}
              className="h-16 w-auto"
              priority
            />
            {/* <span className="hidden sm:block font-display font-semibold text-[15px] tracking-tight text-ink">
              AFX Frames
            </span> */}
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-4 py-2 rounded-full text-sm font-medium text-ink/70 hover:text-ink hover:bg-surface transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-grad-primary text-white pl-5 pr-4 py-2.5 text-sm font-medium shadow-glow hover:shadow-softLg transition-shadow"
            >
              Start Your Transformation
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-surface transition-colors"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {open && (
          <nav className="md:hidden border-t border-line px-6 py-6 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-lg font-medium text-ink py-2"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-grad-primary text-white px-5 py-3 text-sm font-medium"
            >
              Start Your Transformation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
