"use client";

import Link from "next/link";
import { useState } from "react";
import { BrandLogo } from "@/components/logo/BrandLogo";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "/", label: "Startseite" },
  { href: "/tarife", label: "Tarife" },
  { href: "/blog", label: "Blog" },
  { href: "/fragen-antworten", label: "FAQ" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <Link href="/" aria-label="Deutschland IPTV Startseite">
          <BrandLogo />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Hauptnavigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-aqua"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/tarife" variant="primary" className="text-sm">
            Tarife ansehen
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5" aria-hidden="true">
            {open ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <nav
          aria-label="Mobile Navigation"
          className="flex flex-col gap-1 border-t border-border bg-background px-5 py-4 lg:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-sm font-medium text-muted transition-colors hover:bg-background-elevated hover:text-aqua"
            >
              {link.label}
            </Link>
          ))}
          <Button href="/tarife" variant="primary" className="mt-2 w-full">
            Tarife ansehen
          </Button>
        </nav>
      ) : null}
    </header>
  );
}
