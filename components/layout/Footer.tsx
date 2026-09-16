import Link from "next/link";
import { BrandLogo } from "@/components/logo/BrandLogo";
import { WHATSAPP_DEFAULT_LINK } from "@/lib/whatsapp";

const footerLinks = {
  Unternehmen: [
    { href: "/", label: "Startseite" },
    { href: "/about", label: "Über uns" },
    { href: "/plans", label: "Preise" },
    { href: "/blog", label: "Blog" },
    { href: "/iptv-service", label: "IPTV kaufen" },
    { href: "/best-iptv-service", label: "Bester IPTV Anbieter" },
    { href: "/iptv-anbieter-deutschland", label: "IPTV Anbieter" },
    { href: "/iptv-germany", label: "IPTV Germany 2026" },
    { href: "/iptv-smart-tv", label: "IPTV Smart TV" },
    { href: "/iptv-fire-tv-stick", label: "IPTV Fire TV Stick" },
    { href: "/iptv-android-tv", label: "IPTV Android TV" },
    { href: "/europe-iptv", label: "Europe IPTV" },
  ],
  Support: [
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Kontakt" },
    { href: WHATSAPP_DEFAULT_LINK, label: "WhatsApp Support", external: true },
  ],
  Rechtliches: [
    { href: "/privacy-policy", label: "Datenschutzerklärung" },
    { href: "/terms", label: "AGB" },
    { href: "/refund-policy", label: "Rückerstattung" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-background-elevated">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 sm:px-8 lg:grid-cols-[1.2fr_1fr_1fr_1fr] lg:px-10">
        <div className="flex flex-col gap-4">
          <BrandLogo />
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            Deutschland IPTV ist Ihr IPTV Anbieter für Deutschland — stabile Server, Tausende
            Sender und persönlicher Support, sieben Tage die Woche.
          </p>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title} className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-foreground">
              {title}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {links.map((link) => (
                <li key={link.label}>
                  {"external" in link && link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted transition-colors hover:text-aqua"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className="text-sm text-muted transition-colors hover:text-aqua">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p>© {new Date().getFullYear()} Deutschland IPTV. Alle Rechte vorbehalten.</p>
          <p>zerotv.support@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}
