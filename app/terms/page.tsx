import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  // Plain title (no manual brand suffix) — see app/privacy-policy/page.tsx for why.
  title: "AGB – Allgemeine Geschäftsbedingungen",
  description:
    "Allgemeine Geschäftsbedingungen von Deutschland IPTV: Nutzung des Dienstes, Abo und Zahlung, Haftung, geistiges Eigentum und geltendes Recht.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Deutschland IPTV",
    url: "/terms",
    title: "AGB – Allgemeine Geschäftsbedingungen | Deutschland IPTV",
    description: "Nutzung des Dienstes, Abo und Zahlung, Haftung, geistiges Eigentum und geltendes Recht.",
    images: [{ url: "https://deutschland-iptv.online/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://deutschland-iptv.online/opengraph-image"],
    title: "AGB – Allgemeine Geschäftsbedingungen | Deutschland IPTV",
    description: "Nutzung des Dienstes, Abo und Zahlung, Haftung, geistiges Eigentum und geltendes Recht.",
  },
};

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "AGB", href: "/terms" }]} />

      <section className="py-16 sm:py-24">
        <Container className="flex flex-col items-center gap-14">
          <SectionHeading
            as="h1"
            eyebrow="Rechtliches"
            title="Allgemeine Geschäftsbedingungen"
            description="Diese AGB regeln die Nutzung von Deutschland IPTV. Mit der Bestellung eines Abos erkennen Sie die folgenden Bedingungen an."
          />

          <div className="mx-auto flex w-full max-w-3xl flex-col gap-10">
            <p className="text-xs text-muted">Stand: 16. August 2026</p>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                1. Geltungsbereich und Leistungsbeschreibung
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Deutschland IPTV stellt seinen Kunden im Rahmen eines zeitlich befristeten Abos Zugang zu einem
                IPTV Streaming-Dienst zur Verfügung, bestehend aus Live-Sendern, einer VOD-Bibliothek sowie einem
                elektronischen Programmführer (EPG). Diese AGB gelten für jede Nutzung unseres Dienstes durch
                Verbraucher und Unternehmer gleichermaßen, soweit nicht ausdrücklich anders angegeben.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">2. Vertragsschluss</h2>
              <p className="text-base leading-relaxed text-muted">
                Ein Vertrag kommt zustande, sobald Sie über WhatsApp, unser Kontaktformular oder E-Mail eine
                Bestellung aufgeben und wir diese bestätigen. Nach Zahlungseingang erhalten Sie Ihre persönlichen
                Zugangsdaten oder eine Playlist-URL, mit denen Sie den Dienst auf Ihrem Gerät einrichten können.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                3. Abonnement, Zahlung und Laufzeit
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Wir bieten Tarife mit unterschiedlichen Laufzeiten an, deren aktuelle Preise auf unserer{" "}
                <Link href="/plans" className="text-aqua underline underline-offset-4">
                  Tarifseite
                </Link>{" "}
                einsehbar sind. Die Zahlungsabwicklung wird individuell mit Ihnen über WhatsApp oder E-Mail
                abgestimmt. Ihr Abo{" "}
                <strong className="text-foreground">verlängert sich nicht automatisch</strong> — es endet mit
                Ablauf der gewählten Laufzeit. Möchten Sie den Dienst weiter nutzen, buchen Sie aktiv ein neues
                Abo.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                4. Nutzungsrechte und Pflichten
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Die überlassenen Zugangsdaten sind ausschließlich zur persönlichen Nutzung durch den Kunden
                bestimmt. Eine Weitergabe an Dritte, ein Weiterverkauf oder eine gewerbliche Nutzung der
                Zugangsdaten sind nicht gestattet. Der Kunde verpflichtet sich, den Dienst nur im Rahmen der
                geltenden Gesetze zu nutzen.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                5. Geistiges Eigentum
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Alle Inhalte, Marken, Logos und die Gestaltung unserer Website sowie unseres Dienstes sind
                Eigentum von Deutschland IPTV oder der jeweiligen Rechteinhaber und urheberrechtlich geschützt.
                Mit dem Abschluss eines Abos erhält der Kunde ein einfaches, nicht übertragbares Nutzungsrecht zum
                persönlichen Streamen der Inhalte — darüber hinaus werden keine Rechte eingeräumt.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                6. Haftungsbeschränkung
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Wir haften unbeschränkt bei Vorsatz und grober Fahrlässigkeit sowie nach den Vorschriften des
                Produkthaftungsgesetzes. Bei leicht fahrlässiger Verletzung wesentlicher Vertragspflichten ist die
                Haftung auf den vertragstypisch vorhersehbaren Schaden begrenzt. Für kurzzeitige Ausfälle, die auf
                Wartungsarbeiten, höhere Gewalt oder auf Umstände außerhalb unseres Einflussbereichs
                zurückzuführen sind — etwa Störungen bei Ihrem Internetanbieter oder beim ursprünglichen
                Sendersignal —, übernehmen wir keine Haftung. Eine weitergehende Haftung ist ausgeschlossen.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                7. Kündigung und Sperrung des Kontos
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Da unsere Abos nicht automatisch verlängert werden, ist keine gesonderte Kündigung erforderlich —
                der Zugang endet mit Ablauf der gebuchten Laufzeit von selbst. Bei einem Verstoß gegen diese AGB,
                insbesondere bei Weitergabe der Zugangsdaten an Dritte oder missbräuchlicher Nutzung, sind wir
                berechtigt, den Zugang mit sofortiger Wirkung zu sperren, ohne dass ein Anspruch auf
                Rückerstattung bereits genutzter Leistungszeiträume besteht.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">8. Änderungen der AGB</h2>
              <p className="text-base leading-relaxed text-muted">
                Wir behalten uns vor, diese AGB bei Bedarf anzupassen, etwa bei Änderungen unseres Angebots oder
                der Rechtslage. Für bestehende Abos gelten die AGB in der zum Zeitpunkt des Vertragsschlusses
                gültigen Fassung.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                9. Anwendbares Recht
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts. Sind Sie Verbraucher mit gewöhnlichem
                Aufenthalt in einem anderen EU-Mitgliedstaat, bleiben zwingende verbraucherschützende
                Bestimmungen dieses Staates hiervon unberührt.
              </p>
            </section>

            <section className="flex flex-col gap-4 rounded-3xl border border-border bg-background-elevated p-7">
              <h2 className="text-xl font-semibold text-foreground">10. Kontakt</h2>
              <p className="text-sm leading-relaxed text-muted">
                Fragen zu diesen AGB richten Sie bitte an{" "}
                <a href="mailto:zerotv.support@gmail.com" className="text-aqua underline underline-offset-4">
                  zerotv.support@gmail.com
                </a>{" "}
                oder über unsere{" "}
                <Link href="/contact" className="text-aqua underline underline-offset-4">
                  Kontaktseite
                </Link>
                .
              </p>
            </section>
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
