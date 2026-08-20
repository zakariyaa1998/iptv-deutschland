import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  // Plain title (no manual brand suffix) — see app/plans/page.tsx for why.
  title: "Über uns",
  description:
    "Lernen Sie Deutschland IPTV kennen: unsere Vision, warum Kunden uns vertrauen, und wie Sie noch heute mit Premium-Streaming starten.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Deutschland IPTV",
    url: "/about",
    title: "Über uns | Deutschland IPTV",
    description: "Unsere Vision und warum Kunden Deutschland IPTV vertrauen.",
    images: [{ url: "https://deutschland-iptv.online/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://deutschland-iptv.online/opengraph-image"],
    title: "Über uns | Deutschland IPTV",
    description: "Unsere Vision und warum Kunden Deutschland IPTV vertrauen.",
  },
};

const reasons = [
  {
    title: "Zuverlässige Server",
    description:
      "Unsere Infrastruktur ist auf Stabilität ausgelegt — auch bei hoher Auslastung während großer Live-Sportereignisse.",
  },
  {
    title: "Transparente Preise",
    description: "Klare Laufzeiten und feste Preise ohne versteckte Kosten oder Kleingedrucktes.",
  },
  {
    title: "Schnelle Aktivierung",
    description: "Nach Bestätigung Ihrer Bestellung erhalten Sie Ihre Zugangsdaten meist innerhalb weniger Minuten.",
  },
  {
    title: "Persönlicher Support",
    description: "Unser Team ist über WhatsApp erreichbar und hilft Ihnen persönlich bei Einrichtung und Fragen.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "Über uns", href: "/about" }]} />

      <section className="py-16 sm:py-24">
        <Container className="flex flex-col items-center gap-14">
          <SectionHeading
            as="h1"
            eyebrow="Über uns"
            title="IPTV, wie es sein sollte"
            description="Deutschland IPTV wurde mit einem einfachen Ziel gegründet: modernes, zuverlässiges Streaming für den deutschen Markt — ohne Kompromisse bei Qualität, Preis oder Support."
          />

          <div className="mx-auto flex w-full max-w-3xl flex-col gap-10">
            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">Unsere Vision</h2>
              <p className="text-base leading-relaxed text-muted">
                Klassisches Fernsehen bindet Nutzer an feste Sendezeiten, teure Zusatzpakete und starre
                Vertragslaufzeiten. Wir glauben, dass Streaming einfacher, flexibler und fairer sein kann: ein
                einziges Abo, das Live-TV, Sport, Filme und Serien in HD, Full HD und 4K auf jedem Gerät
                zusammenbringt — von Smart TV über Fire TV Stick bis zum Smartphone.
              </p>
              <p className="text-base leading-relaxed text-muted">
                Genau das ist unser Antrieb: eine Plattform aufzubauen, die technisch stabil läuft, transparent
                kommuniziert und von echten Menschen betreut wird, statt von einem anonymen Callcenter.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Warum Kunden sich für uns entscheiden
              </h2>
              <div className="grid gap-5 sm:grid-cols-2">
                {reasons.map((reason) => (
                  <div
                    key={reason.title}
                    className="flex flex-col gap-2 rounded-2xl border border-border bg-background-elevated p-6"
                  >
                    <h3 className="text-base font-semibold text-foreground">{reason.title}</h3>
                    <p className="text-sm leading-relaxed text-muted">{reason.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="flex flex-col items-center gap-5 rounded-3xl border border-aqua/30 bg-aqua/5 p-8 text-center">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Bereit, es selbst zu erleben?
              </h2>
              <p className="max-w-lg text-base leading-relaxed text-muted">
                Vergleichen Sie unsere Tarife und finden Sie die Laufzeit, die zu Ihnen passt — mit voller
                Zufriedenheitsgarantie.
              </p>
              <Button href="/plans" variant="primary" className="px-8 py-4 text-base">
                Tarife ansehen
              </Button>
            </section>
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
