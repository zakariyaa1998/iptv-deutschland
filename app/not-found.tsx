import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

// Next.js renders this for any unmatched route and any notFound() call, and
// automatically serves it with a real HTTP 404 status — no robots meta needed.
// Replaces the framework's default unbranded, dead-end 404 with one that keeps
// visitors (and crawlers) inside the site instead of bouncing them out.
export const metadata: Metadata = {
  title: "Seite nicht gefunden",
  robots: {
    index: false,
    follow: true,
  },
};

const helpfulLinks = [
  { href: "/tarife", label: "Tarife ansehen" },
  { href: "/iptv-einrichten", label: "IPTV einrichten" },
  { href: "/fragen-antworten", label: "Fragen & Antworten" },
  { href: "/kontakt", label: "Kontakt aufnehmen" },
];

export default function NotFound() {
  return (
    <section className="py-16 sm:py-24">
      <Container className="flex flex-col items-center gap-10 text-center">
        <SectionHeading
          as="h1"
          eyebrow="404"
          title="Unter dieser Adresse gibt es keine Seite"
          description="Vielleicht war der Link fehlerhaft oder stammt von einer älteren Version dieser Website. Hier geht es weiter:"
        />

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="/" variant="primary" className="px-8 py-4 text-base">
            Zur Startseite
          </Button>
          <Button href="/kontakt" variant="outline" className="px-8 py-4 text-base">
            Support kontaktieren
          </Button>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
          {helpfulLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-aqua underline underline-offset-4 hover:text-aqua-dim">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
