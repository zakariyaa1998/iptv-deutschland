import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { WHATSAPP_DEFAULT_LINK, WHATSAPP_TEST_LINK } from "@/lib/whatsapp";
import { SUPPORT_EMAIL, noindexRobots, socialMetadata } from "@/lib/site";

// Rewritten 2026-11-10 in this site's own words (the old text was shared with
// another of the operator's sites). No guarantee wording: only what is actually done.
// The 7-day window is the one the live page already stated — change it only on the
// owner's instruction.
const REFUND_DAYS = 7;

const title = "Rückerstattung";
const description = "Wann Deutschland IPTV den Kaufpreis zurückzahlt und wie Sie eine Rückerstattung anfragen.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/refund-policy" },
  robots: noindexRobots,
  ...socialMetadata("/refund-policy", title, description),
};

const H2 = "text-2xl font-semibold tracking-tight text-foreground";
const P = "text-base leading-relaxed text-muted";
const LINK = "text-aqua underline underline-offset-4";

function Bullets({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="flex flex-col gap-2.5 text-base leading-relaxed text-muted">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-aqua" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function RefundPolicyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "Rückerstattung", href: "/refund-policy" }]} />

      <section className="py-16 sm:py-24">
        <Container className="flex flex-col items-center gap-14">
          <SectionHeading
            as="h1"
            eyebrow="Rechtliches"
            title="Rückerstattung"
            description="Kurz gesagt: erst testen, dann kaufen. Und wenn der gekaufte Zugang trotzdem nicht läuft und wir es nicht lösen können, bekommen Sie Ihr Geld zurück."
          />

          <div className="mx-auto flex w-full max-w-3xl flex-col gap-10">
            <p className="text-xs text-muted">Stand: 10. November 2026</p>

            <section className="flex flex-col gap-4">
              <h2 className={H2}>Vor dem Kauf: der Test</h2>
              <p className={P}>
                Sie können vor der Bestellung einen{" "}
                <a href={WHATSAPP_TEST_LINK} target="_blank" rel="noopener noreferrer" className={LINK}>
                  Testzugang per WhatsApp
                </a>{" "}
                anfragen. So sehen Sie auf Ihrem eigenen Gerät und an Ihrer eigenen Leitung, ob alles
                läuft, bevor Sie etwas bezahlen.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className={H2}>Wann wir den Kaufpreis zurückzahlen</h2>
              <p className={P}>
                Läuft Ihr gekaufter Zugang nicht und finden wir gemeinsam keine Lösung, zahlen wir den
                Kaufpreis zurück. Melden Sie sich dafür innerhalb von{" "}
                <strong className="text-foreground">{REFUND_DAYS} Tagen</strong> nach der Aktivierung.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className={H2}>Wann keine Rückzahlung möglich ist</h2>
              <Bullets
                items={[
                  "Der Zugang funktioniert, Sie möchten ihn aber nicht mehr nutzen.",
                  "Das Problem liegt bei Ihrer Internetleitung oder bei einem Gerät, das die App nicht unterstützt.",
                  "Die Zugangsdaten wurden an andere weitergegeben.",
                ]}
              />
            </section>

            <section className="flex flex-col gap-4">
              <h2 className={H2}>So fragen Sie an</h2>
              <Bullets
                items={[
                  <>
                    Schreiben Sie uns per{" "}
                    <a href={WHATSAPP_DEFAULT_LINK} target="_blank" rel="noopener noreferrer" className={LINK}>
                      WhatsApp
                    </a>{" "}
                    oder an{" "}
                    <a href={`mailto:${SUPPORT_EMAIL}`} className={LINK}>
                      {SUPPORT_EMAIL}
                    </a>
                    .
                  </>,
                  "Nennen Sie Ihre Bestellung, Ihr Gerät und was nicht funktioniert. Ein Screenshot hilft.",
                  "Wir versuchen zuerst, das Problem mit Ihnen zu lösen. Klappt das nicht, bestätigen wir die Rückzahlung über den Weg, auf dem Sie bezahlt haben.",
                ]}
              />
              <p className={P}>
                Weitere Wege zu uns finden Sie auf der Seite{" "}
                <Link href="/kontakt" className={LINK}>
                  Kontakt
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
