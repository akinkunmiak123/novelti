"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

const nav = [
  { href: '/domestic-cleaning', label: 'Domestic' },
  { href: '/commercial-cleaning', label: 'Commercial' },
  { href: '/end-of-tenancy-cleaning', label: 'End of tenancy' },
  { href: '/specialised-cleaning', label: 'Specialised' },
  { href: '/areas', label: 'Areas we cover' },
  { href: '/contact', label: '0ur contact' },
]

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[15px] text-ink transition-colors hover:text-moss"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+447454265760"
            className="hidden text-[15px] font-semibold text-ink sm:block"
          >
            07454 265760
          </a>
          <Link
            href="/get-a-quote"
            className="bg-moss px-4 py-2.5 text-[15px] font-semibold text-white transition-colors hover:bg-moss-deep"
          >
            Get a quote
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="p-2 lg:hidden"
          >
            <span className="sr-only">
              {open ? "Close menu" : "Open menu"}
            </span>
            <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
              <path
                d={open ? "M4 4 L18 18 M18 4 L4 18" : "M3 6h16M3 11h16M3 16h16"}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="square"
                fill="none"
              />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-line bg-paper px-5 pb-5 lg:hidden"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-line py-3.5 text-ink"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:+447454265760"
            className="mt-4 block font-display text-lg font-bold text-moss"
          >
            Call 07454 265760
          </a>
        </nav>
      )}
    </header>
  );
}
