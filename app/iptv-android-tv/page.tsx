import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactCTA } from "@/components/sections/ContactCTA";

// Primary keyword: "IPTV Android TV" (commercial: device compatibility + setup
// overview). Must NOT compete with "beste IPTV Geräte 2026" (owned by the
// cross-device comparison /blog/best-iptv-devices-2026) — see
// docs/seo/keyword-architecture.md.
export const metadata: Metadata = {
  title: "IPTV Android TV – Installation & Anleitung",
  description:
    "IPTV Android TV und Android-Boxen nutzen: Kompatibilität, APK-Installation und Tipps für flüssiges 4K-Streaming mit Deutschland IPTV.",
  keywords: [
    "IPTV Android TV",
    "IPTV auf Android TV",
    "IPTV App Android TV",
    "IPTV Player Android TV",
    "IPTV Android Box",
  ],
  alternates: {
    canonical: "/iptv-android-tv",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Deutschland IPTV",
    url: "/iptv-android-tv",
    title: "IPTV Android TV – Installation & Anleitung | Deutschland IPTV",
    description: "Deutschland IPTV auf Android TV und Android-Boxen installieren — mit Tipps zur richtigen Hardware.",
    images: [{ url: "https://deutschland-iptv.online/images/android-tv-box.png" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://deutschland-iptv.online/images/android-tv-box.png"],
    title: "IPTV Android TV – Installation & Anleitung | Deutschland IPTV",
    description: "Deutschland IPTV auf Android TV und Android-Boxen installieren — mit Tipps zur richtigen Hardware.",
  },
};

const faqItems = [
  {
    question: "Brauche ich eine Google-zertifizierte Android TV Box oder reicht eine einfache Android-Box?",
    answer:
      "Beides funktioniert. Google-zertifizierte Android TV Geräte bieten die offizielle TV-Oberfläche und garantierten Play-Store-Zugriff; günstigere Android-Boxen laufen meist mit einer angepassten Android-Version, auf der sich IPTV Apps aber ebenso per APK installieren lassen.",
  },
  {
    question: "Wie installiere ich eine IPTV App per APK auf Android TV?",
    answer:
      "Aktivieren Sie in den Einstellungen die Installation aus unbekannten Quellen, laden Sie die APK-Datei der gewünschten App herunter (etwa über einen Dateimanager oder Downloader) und öffnen Sie sie anschließend zur Installation.",
  },
  {
    question: "Wie viel RAM benötigt eine Android-Box für flüssiges 4K-Streaming?",
    answer:
      "Für ein flüssiges Erlebnis empfehlen wir mindestens 2 GB RAM sowie ein aktuelles Android TV OS mit zuverlässigem HEVC-Decoder — beides wirkt sich direkt auf ruckelfreies 4K-Streaming und Sport mit hoher Bildrate aus.",
  },
  {
    question: "Funktioniert IPTV auch auf älteren Android-TV-Boxen?",
    answer:
      "In der Regel ja, sofern das Gerät mindestens 2 GB RAM hat und eine aktuelle IPTV App unterstützt. Bei sehr alter oder schwacher Hardware kann es bei 4K-Inhalten jedoch zu Rucklern kommen — HD oder Full HD laufen meist trotzdem stabil.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function IptvAndroidTvPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "IPTV Android TV", href: "/iptv-android-tv" }]} />

      <section className="py-16 sm:py-24">
        <Container className="flex flex-col items-center gap-14">
          <SectionHeading
            as="h1"
            eyebrow="Android TV"
            title="IPTV Android TV: Installation auf TV & Android-Box"
            description="Die flexibelste Plattform für IPTV: voller Zugriff auf den Play Store und direkte APK-Installation."
          />

          <div className="mx-auto flex w-full max-w-3xl flex-col gap-10">
            <p className="text-base leading-relaxed text-muted">
              Android TV und klassische Android-Boxen bieten den größten Funktionsumfang unter den
              IPTV Playern: vollen Zugriff auf den Google Play Store, direkte APK-Installation und
              meist ein besseres Preis-Leistungs-Verhältnis als vergleichbare Markengeräte. Eine
              Wie Sie IPTV Deutschland zunächst bestellen, zeigt unsere Seite{" "}
              <Link href="/iptv-service" className="text-aqua underline underline-offset-4">
                IPTV kaufen
              </Link>
              .
            </p>

            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border">
              <Image
                src="/images/android-tv-box.png"
                alt="IPTV Android TV Box am Fernseher angeschlossen für die APK-Installation"
                fill
                loading="lazy"
                decoding="async"
                sizes="(max-width: 768px) 100vw, 700px"
                className="object-cover"
              />
            </div>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Android TV im Vergleich zur generischen Android-Box
              </h2>
              <p className="text-base leading-relaxed text-muted">
                „Android TV“ bezeichnet Googles offizielles Betriebssystem für Fernseher und
                Streaming-Boxen, mit einheitlicher Oberfläche und Play-Store-Zertifizierung.
                Günstigere „Android-Boxen“ anderer Hersteller laufen oft mit einer angepassten
                Android-Version ohne die offizielle TV-Oberfläche — IPTV Apps lassen sich darauf aber
                meist trotzdem problemlos per APK installieren.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Worauf Sie bei der Hardware achten sollten
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Die Leistung unterscheidet sich stark zwischen den Modellen. Für ein flüssiges
                Erlebnis empfehlen wir mindestens 2 GB RAM und ein aktuelles Android TV OS mit
                zuverlässigem HEVC-Decoder — besonders wichtig für 4K-Inhalte und Sport mit hoher
                Bildrate.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                IPTV Android TV: Installation in Kürze
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Laden Sie eine IPTV App wie TiviMate oder IBO Player aus dem Play Store oder per APK
                herunter, geben Sie Ihre Deutschland IPTV Zugangsdaten ein, und die Senderliste lädt
                automatisch. Die ausführliche Schritt-für-Schritt-Anleitung finden Sie unter{" "}
                <Link href="/blog/iptv-device-setup-guide" className="text-aqua underline underline-offset-4">
                  IPTV auf Ihren Geräten einrichten
                </Link>
                , einen direkten App-Vergleich in{" "}
                <Link
                  href="/blog/tivimate-vs-ibo-player"
                  className="text-aqua underline underline-offset-4"
                >
                  TiviMate vs. IBO Player
                </Link>
                , oder einen breiteren Überblick über alle gängigen Apps in{" "}
                <Link
                  href="/blog/best-iptv-apps-2026"
                  className="text-aqua underline underline-offset-4"
                >
                  Die beste IPTV App 2026
                </Link>
                .
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">Andere Geräte im Vergleich</h2>
              <p className="text-base leading-relaxed text-muted">
                Nicht sicher, ob Android TV das Richtige für Sie ist? Einen direkten Vergleich mit
                Fire TV Stick und Apple TV finden Sie in{" "}
                <Link
                  href="/blog/best-iptv-devices-2026"
                  className="text-aqua underline underline-offset-4"
                >
                  Die besten Geräte für IPTV
                </Link>
                . Deutschland IPTV läuft genauso zuverlässig auf einem{" "}
                <Link href="/iptv-fire-tv-stick" className="text-aqua underline underline-offset-4">
                  IPTV Fire TV Stick
                </Link>{" "}
                oder einem{" "}
                <Link href="/iptv-smart-tv" className="text-aqua underline underline-offset-4">
                  IPTV Smart TV
                </Link>
                . Den passenden Tarif finden Sie auf unserer Seite{" "}
                <Link href="/plans" className="text-aqua underline underline-offset-4">
                  IPTV Preise
                </Link>
                .
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Den richtigen IPTV Anbieter für Android TV finden
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Auch auf Android TV entscheidet der Anbieter über die Streaming-Qualität, nicht nur
                die Hardware. Worauf Sie bei der Anbieterwahl generell achten sollten, erfahren Sie
                unter{" "}
                <Link href="/iptv-providers" className="text-aqua underline underline-offset-4">
                  IPTV Anbieter Deutschland
                </Link>{" "}
                und in unserem Vergleich{" "}
                <Link href="/best-iptv-service" className="text-aqua underline underline-offset-4">
                  Bester IPTV Anbieter
                </Link>
                .
              </p>
            </section>

            <section className="flex flex-col gap-5 rounded-3xl border border-border bg-background-elevated p-7">
              <h2 className="text-xl font-semibold text-foreground">Häufig gestellte Fragen</h2>
              <div className="flex flex-col gap-4">
                {faqItems.map((item) => (
                  <details key={item.question} className="group rounded-xl border border-border bg-background p-5">
                    <summary className="cursor-pointer list-none text-sm font-semibold text-foreground marker:content-none">
                      {item.question}
                    </summary>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
