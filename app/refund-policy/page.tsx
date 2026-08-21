import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { WHATSAPP_DEFAULT_LINK } from "@/lib/whatsapp";

export const metadata: Metadata = {
  // Plain title (no manual brand suffix) — see app/privacy-policy/page.tsx for why.
  title: "Rückerstattungsrichtlinie",
  description:
    "Erfahren Sie, innerhalb welcher Frist und unter welchen Bedingungen Sie bei Deutschland IPTV eine Rückerstattung beantragen können.",
  alternates: {
    canonical: "/refund-policy",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Deutschland IPTV",
    url: "/refund-policy",
    title: "Rückerstattungsrichtlinie | Deutschland IPTV",
    description: "Frist, Bedingungen und Ablauf für Rückerstattungsanfragen bei Deutschland IPTV.",
    images: [{ url: "https://deutschland-iptv.online/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://deutschland-iptv.online/opengraph-image"],
    title: "Rückerstattungsrichtlinie | Deutschland IPTV",
    description: "Frist, Bedingungen und Ablauf für Rückerstattungsanfragen bei Deutschland IPTV.",
  },
};

export default function RefundPolicyPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Startseite", href: "/" }, { label: "Rückerstattung", href: "/refund-policy" }]}
      />

      <section className="py-16 sm:py-24">
        <Container className="flex flex-col items-center gap-14">
          <SectionHeading
            as="h1"
            eyebrow="Rechtliches"
            title="Rückerstattungsrichtlinie"
            description="Wir möchten, dass Sie mit Deutschland IPTV zufrieden sind. Diese Seite erklärt, wann und wie Sie eine Rückerstattung beantragen können."
          />

          <div className="mx-auto flex w-full max-w-3xl flex-col gap-10">
            <p className="text-xs text-muted">Stand: 16. August 2026</p>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Unsere Zufriedenheitsgarantie
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Jeder Tarif auf unserer{" "}
                <Link href="/plans" className="text-aqua underline underline-offset-4">
                  Tarifseite
                </Link>{" "}
                kommt mit einer Zufriedenheitsgarantie. Funktioniert Ihr Zugang nicht wie beschrieben und
                unser Support kann das Problem nicht innerhalb angemessener Zeit beheben, erstatten wir Ihnen den
                Kaufpreis im Rahmen der folgenden Bedingungen zurück.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">Rückerstattungsfrist</h2>
              <p className="text-base leading-relaxed text-muted">
                Rückerstattungsanfragen können Sie innerhalb von <strong className="text-foreground">7 Tagen</strong>{" "}
                nach Aktivierung Ihres Zugangs stellen. Anfragen nach Ablauf dieser Frist können wir leider nicht
                mehr berücksichtigen.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Voraussetzungen und Ausnahmen
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Eine Rückerstattung setzen wir voraus, wenn ein technisches Problem auf unserer Seite vorliegt, das
                unser Support-Team nicht beheben konnte. In folgenden Fällen ist eine Rückerstattung
                ausgeschlossen:
              </p>
              <ul className="flex flex-col gap-2.5 text-base leading-relaxed text-muted">
                <li className="flex items-start gap-3">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-aqua" />
                  <span>Der Dienst wurde bereits über mehrere Tage hinweg umfangreich genutzt</span>
                </li>
                <li className="flex items-start gap-3">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-aqua" />
                  <span>Die Zugangsdaten wurden an Dritte weitergegeben oder missbräuchlich genutzt</span>
                </li>
                <li className="flex items-start gap-3">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-aqua" />
                  <span>
                    Das Problem liegt nachweislich außerhalb unseres Einflussbereichs — etwa eine unzureichende
                    Internetgeschwindigkeit oder ein nicht kompatibles Gerät
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-aqua" />
                  <span>
                    Sie haben vor dem Kauf eine Testphase genutzt und sich anschließend bewusst für den Kauf
                    entschieden
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-aqua" />
                  <span>Reiner Meinungswechsel ohne technischen Grund, nachdem der Dienst mehrere Tage lief</span>
                </li>
              </ul>
              <p className="text-base leading-relaxed text-muted">
                Wir empfehlen daher, vor einer längeren Laufzeit unsere kurze Testphase zu nutzen — mehr dazu
                erfahren Sie über unser{" "}
                <Link href="/contact" className="text-aqua underline underline-offset-4">
                  Support-Team
                </Link>
                .
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                So beantragen Sie eine Rückerstattung
              </h2>
              <ol className="flex flex-col gap-2.5 text-base leading-relaxed text-muted">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-aqua text-xs font-bold text-black">
                    1
                  </span>
                  <span>
                    Kontaktieren Sie unser Support-Team über{" "}
                    <a
                      href={WHATSAPP_DEFAULT_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-aqua underline underline-offset-4"
                    >
                      WhatsApp
                    </a>{" "}
                    oder unsere{" "}
                    <Link href="/contact" className="text-aqua underline underline-offset-4">
                      Kontaktseite
                    </Link>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-aqua text-xs font-bold text-black">
                    2
                  </span>
                  <span>Teilen Sie uns Ihre Bestelldaten und den Grund der Rückerstattung mit</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-aqua text-xs font-bold text-black">
                    3
                  </span>
                  <span>
                    Unser Team prüft die Anfrage und versucht zunächst, ein technisches Problem gemeinsam mit
                    Ihnen zu beheben
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-aqua text-xs font-bold text-black">
                    4
                  </span>
                  <span>Ist keine Lösung möglich, bestätigen wir die Rückerstattung und veranlassen sie</span>
                </li>
              </ol>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">Bearbeitungsdauer</h2>
              <p className="text-base leading-relaxed text-muted">
                Nach Bestätigung Ihrer Rückerstattungsanfrage bearbeiten wir diese in der Regel innerhalb von
                <strong className="text-foreground"> 5 bis 7 Werktagen</strong>. Die Rückerstattung erfolgt über
                den ursprünglich genutzten Zahlungsweg.
              </p>
            </section>

            <section className="flex flex-col gap-4 rounded-3xl border border-border bg-background-elevated p-7">
              <h2 className="text-xl font-semibold text-foreground">Kontakt</h2>
              <p className="text-sm leading-relaxed text-muted">
                Bei Fragen zu Ihrer Rückerstattung erreichen Sie uns unter{" "}
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
