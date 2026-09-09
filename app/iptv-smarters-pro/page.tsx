import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactCTA } from "@/components/sections/ContactCTA";

// Primary keyword: "IPTV Smarters Pro Deutschland" (commercial: app setup +
// compatibility overview). Companion to the device pages (/iptv-smart-tv,
// /iptv-fire-tv-stick, /iptv-android-tv) but centred on the app itself rather
// than the hardware — see docs/seo/keyword-architecture.md.
export const metadata: Metadata = {
  title: "IPTV Smarters Pro Deutschland: Einrichtung & Anleitung",
  description:
    "IPTV Smarters Pro in Deutschland einrichten: Installation auf Android, iOS, Smart TV & Firestick sowie Zugangsdaten eingeben – alle Funktionen im Überblick.",
  keywords: [
    "IPTV Smarters Pro",
    "IPTV Smarters Pro Deutschland",
    "IPTV Smarters Pro einrichten",
    "IPTV Smarters Pro Xtream Codes",
    "IPTV Smarters Pro App",
  ],
  alternates: {
    canonical: "/iptv-smarters-pro",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Deutschland IPTV",
    url: "/iptv-smarters-pro",
    title: "IPTV Smarters Pro Deutschland – Einrichtung & Anleitung | Deutschland IPTV",
    description:
      "IPTV Smarters Pro mit Deutschland IPTV einrichten — Installation, Xtream-Codes-Zugangsdaten und Funktionen im Überblick.",
    images: [{ url: "https://deutschland-iptv.online/images/streaming-app.png" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://deutschland-iptv.online/images/streaming-app.png"],
    title: "IPTV Smarters Pro Deutschland – Einrichtung & Anleitung | Deutschland IPTV",
    description:
      "IPTV Smarters Pro mit Deutschland IPTV einrichten — Installation, Xtream-Codes-Zugangsdaten und Funktionen im Überblick.",
  },
};

const faqItems = [
  {
    question: "Ist IPTV Smarters Pro kostenlos?",
    answer:
      "Die App selbst lässt sich kostenlos herunterladen. Um Sender zu empfangen, brauchen Sie zusätzlich ein aktives IPTV Abo wie Deutschland IPTV, dessen Zugangsdaten Sie in der App hinterlegen.",
  },
  {
    question: "Welche Zugangsdaten benötige ich für IPTV Smarters Pro?",
    answer:
      "Für die Einrichtung über Xtream Codes API brauchen Sie die Server-URL (Host), Ihren Benutzernamen und Ihr Passwort. Alternativ lässt sich auch eine M3U-Playlist-URL hinterlegen — beide Zugangsdaten erhalten Sie direkt nach Ihrer Bestellung von Deutschland IPTV.",
  },
  {
    question: "Auf welchen Geräten läuft IPTV Smarters Pro?",
    answer:
      "Die App ist für Android, iOS, Amazon Fire TV und Android TV Boxen verfügbar. Auf Samsung- und LG-Smart-TVs lässt sie sich in der Regel nicht direkt aus dem Store laden, läuft aber problemlos über einen angeschlossenen Fire TV Stick oder eine Android-TV-Box.",
  },
  {
    question: "Wie viele Geräte kann ich gleichzeitig mit IPTV Smarters Pro nutzen?",
    answer:
      "Das hängt vom gebuchten Tarif ab, nicht von der App selbst. Deutschland IPTV bietet Pakete mit mehreren gleichzeitigen Verbindungen an, sodass sich zum Beispiel Smartphone und Smart TV parallel nutzen lassen.",
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

export default function IptvSmartersProPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumbs
        items={[{ label: "Startseite", href: "/" }, { label: "IPTV Smarters Pro", href: "/iptv-smarters-pro" }]}
      />

      <section className="py-16 sm:py-24">
        <Container className="flex flex-col items-center gap-14">
          <SectionHeading
            as="h1"
            eyebrow="App-Anleitung"
            title="IPTV Smarters Pro Deutschland: Einrichtung & Anleitung"
            description="Eine der beliebtesten IPTV Apps überhaupt — so richten Sie Deutschland IPTV in IPTV Smarters Pro auf Ihrem Gerät ein, egal ob Smartphone, Fernseher oder Streaming-Stick."
          />

          <div className="mx-auto flex w-full max-w-3xl flex-col gap-10">
            <p className="text-base leading-relaxed text-muted">
              Kaum eine App zur Wiedergabe von IPTV Abonnements ist so weit verbreitet wie IPTV
              Smarters Pro — zahlreiche Anbieter weltweit empfehlen sie ihren Kunden. Statt sich mit
              technischen Details herumzuschlagen, tragen Sie einfach Ihre Zugangsdaten ein, und die
              komplette Senderliste samt Programmführer lädt von selbst. Eine allgemeine Einführung
              zu IPTV Deutschland kaufen finden Sie auf unserer Seite{" "}
              <Link href="/iptv-service" className="text-aqua underline underline-offset-4">
                IPTV kaufen
              </Link>
              .
            </p>

            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border">
              <Image
                src="/images/streaming-app.png"
                alt="IPTV Smarters Pro App mit Senderübersicht auf einem mobilen Gerät"
                fill
                loading="lazy"
                decoding="async"
                sizes="(max-width: 768px) 100vw, 700px"
                className="object-cover"
              />
            </div>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Was ist IPTV Smarters Pro?
              </h2>
              <p className="text-base leading-relaxed text-muted">
                IPTV Smarters Pro ist eine kostenlose App zur Wiedergabe von IPTV Abonnements über
                die gängigen Zugangsformate Xtream Codes API und M3U-Playlist. Statt für jeden
                Anbieter eine eigene App zu brauchen, funktioniert IPTV Smarters Pro geräteübergreifend
                mit praktisch jedem seriösen IPTV Service — die App selbst liefert keine Inhalte,
                sondern stellt lediglich die Senderliste, den Programmführer und die
                Wiedergabefunktionen bereit. Die eigentlichen Inhalte kommen ausschließlich von Ihrem
                gebuchten Abo, in diesem Fall von Deutschland IPTV.
              </p>
              <p className="text-base leading-relaxed text-muted">
                Die übersichtliche Oberfläche und die schnelle Einrichtung machen IPTV Smarters Pro
                besonders für Einsteiger attraktiv, während erfahrene Nutzer eher die umfangreichen
                Anpassungsoptionen für Kategorien, Favoriten und mehrere Profile zu schätzen wissen.
                Weil die App seit Jahren aktiv weiterentwickelt wird, läuft sie meist auch auf etwas
                älterer Hardware stabil — getragen von einer entsprechend großen Nutzerbasis.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Warum IPTV Smarters Pro so beliebt ist
              </h2>
              <ul className="flex flex-col gap-3 text-base leading-relaxed text-muted">
                <li>Kostenloser Download für nahezu jedes gängige Gerät — vom Smartphone bis zur TV-Box</li>
                <li>Übersichtliche Einrichtung über Xtream Codes API oder M3U-Playlist in wenigen Minuten</li>
                <li>Unterstützt EPG, mehrere Profile und Favoritenlisten für ein aufgeräumtes Seherlebnis</li>
                <li>Regelmäßige Updates und breite Kompatibilität mit den meisten seriösen IPTV Anbietern</li>
              </ul>
            </section>

            <section className="flex flex-col gap-6">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">Installation nach Gerät</h2>

              <div className="flex flex-col gap-3 rounded-2xl border border-border bg-background-elevated p-6">
                <h3 className="text-lg font-semibold text-foreground">Android (Smartphone & Tablet)</h3>
                <p className="text-sm leading-relaxed text-muted">
                  Laden Sie IPTV Smarters Pro direkt aus dem Google Play Store herunter und öffnen
                  Sie die App nach der Installation. Alternativ steht auch eine APK-Datei zum
                  Sideloading bereit, falls die App in Ihrer Region nicht im Store gelistet ist.
                  Nach dem ersten Start folgen Sie einfach dem Anmeldedialog, um Ihre Zugangsdaten
                  zu hinterlegen.
                </p>
              </div>

              <div className="flex flex-col gap-3 rounded-2xl border border-border bg-background-elevated p-6">
                <h3 className="text-lg font-semibold text-foreground">iOS (iPhone & iPad)</h3>
                <p className="text-sm leading-relaxed text-muted">
                  Auf iOS-Geräten laden Sie die App „IPTV Smarters Player“ aus dem Apple App Store
                  herunter — die Funktionsweise entspricht weitgehend der Android-Version, nur der
                  Name unterscheidet sich leicht.
                </p>
              </div>

              <div className="flex flex-col gap-3 rounded-2xl border border-border bg-background-elevated p-6">
                <h3 className="text-lg font-semibold text-foreground">Fire TV Stick & Firestick</h3>
                <p className="text-sm leading-relaxed text-muted">
                  IPTV Smarters Pro ist direkt im Amazon App Store verfügbar. Suchen Sie die App über
                  die Fernbedienung, installieren Sie sie und melden Sie sich anschließend mit Ihren
                  Deutschland IPTV Zugangsdaten an. Eine ausführliche Anleitung finden Sie unter{" "}
                  <Link href="/iptv-fire-tv-stick" className="text-aqua underline underline-offset-4">
                    IPTV Fire TV Stick
                  </Link>
                  .
                </p>
              </div>

              <div className="flex flex-col gap-3 rounded-2xl border border-border bg-background-elevated p-6">
                <h3 className="text-lg font-semibold text-foreground">Smart TV & Android TV Boxen</h3>
                <p className="text-sm leading-relaxed text-muted">
                  Auf Android TV Boxen lässt sich IPTV Smarters Pro über den Play Store oder per APK
                  installieren. Auf Samsung- und LG-Fernsehern fehlt die App im herstellereigenen
                  Store meist — hier empfiehlt sich der Umweg über einen angeschlossenen Fire TV
                  Stick oder eine Android-TV-Box. Details dazu finden Sie unter{" "}
                  <Link href="/iptv-smart-tv" className="text-aqua underline underline-offset-4">
                    IPTV Smart TV
                  </Link>{" "}
                  und{" "}
                  <Link href="/iptv-android-tv" className="text-aqua underline underline-offset-4">
                    IPTV Android TV
                  </Link>
                  .
                </p>
              </div>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Zugangsdaten eingeben: Xtream Codes API einrichten
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Nach dem ersten Start bietet Ihnen IPTV Smarters Pro mehrere Anmeldeoptionen an. Für
                Deutschland IPTV wählen Sie „Login with Xtream Codes API“ und tragen die folgenden
                Daten ein, die Sie direkt nach Ihrer Bestellung per E-Mail oder WhatsApp erhalten:
              </p>
              <ul className="flex flex-col gap-3 text-base leading-relaxed text-muted">
                <li>
                  <span className="font-semibold text-foreground">Server-URL (Host):</span> die
                  Adresse Ihres IPTV Servers, inklusive Portnummer
                </li>
                <li>
                  <span className="font-semibold text-foreground">Benutzername:</span> Ihr
                  persönlicher Login-Name für das Abo
                </li>
                <li>
                  <span className="font-semibold text-foreground">Passwort:</span> das dazugehörige
                  Passwort für den Zugriff
                </li>
              </ul>
              <p className="text-base leading-relaxed text-muted">
                Nach dem Speichern lädt die App die vollständige Senderliste samt Programmführer von
                selbst. Wer stattdessen eine M3U-Playlist-URL erhalten hat, wählt bei der Anmeldung
                einfach die Option „Load your playlist or file (M3U URL)“ und fügt die Adresse dort
                ein.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Tipps für eine stabile Wiedergabe
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Damit IPTV Smarters Pro flüssig läuft, empfiehlt sich eine stabile Internetverbindung
                mit mindestens 10 Mbit/s für HD-Inhalte und deutlich mehr für 4K. Nutzen Sie nach
                Möglichkeit eine LAN-Kabelverbindung statt WLAN, besonders bei Smart-TV-Boxen oder
                Streaming-Sticks. Ruckelt ein Sender doch einmal, hilft meist schon ein Neustart der
                App oder ein Wechsel des Streams innerhalb der Kanalübersicht. Bei anhaltenden
                Problemen unterstützt Sie unser Team gerne über die{" "}
                <Link href="/contact" className="text-aqua underline underline-offset-4">
                  Kontaktseite
                </Link>
                .
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Funktionen von IPTV Smarters Pro
              </h2>
              <ul className="flex flex-col gap-3 text-base leading-relaxed text-muted">
                <li>
                  <span className="font-semibold text-foreground">Elektronischer Programmführer (EPG):</span>{" "}
                  zeigt laufende und kommende Sendungen direkt in der Senderübersicht an, sofern Ihr
                  Anbieter EPG-Daten bereitstellt
                </li>
                <li>
                  <span className="font-semibold text-foreground">Mehrere Profile:</span> jedes
                  Haushaltsmitglied kann ein eigenes Profil mit individuellen Favoriten und
                  Kategorien anlegen
                </li>
                <li>
                  <span className="font-semibold text-foreground">Kindersicherung:</span> einzelne
                  Kategorien oder Sender lassen sich per PIN sperren, praktisch für Familien mit
                  Kindern
                </li>
                <li>
                  <span className="font-semibold text-foreground">Favoriten & Kategorien:</span>{" "}
                  Sender lassen sich frei sortieren und als Favoriten markieren, statt jedes Mal
                  durch die komplette Liste zu scrollen
                </li>
                <li>
                  <span className="font-semibold text-foreground">Catch-up-Funktion:</span> sofern
                  vom Anbieter unterstützt, lassen sich verpasste Sendungen im Nachhinein abrufen
                </li>
              </ul>
              <p className="text-base leading-relaxed text-muted">
                Diese Funktionen sind bewusst einsteigerfreundlich gehalten — wer noch mehr
                Anpassungsmöglichkeiten sucht, findet einen Vergleich mit weiteren Apps in unserem
                Artikel{" "}
                <Link href="/blog/tivimate-vs-ibo-player" className="text-aqua underline underline-offset-4">
                  TiviMate vs. IBO Player
                </Link>
                .
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Den passenden Tarif finden
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Ob Smartphone, Fire TV Stick oder Android-Box — IPTV Smarters Pro läuft mit jedem
                Deutschland IPTV Tarif zuverlässig zusammen. Alle Pakete mit den jeweiligen
                Laufzeiten und gleichzeitigen Verbindungen finden Sie auf unserer Seite{" "}
                <Link href="/plans" className="text-aqua underline underline-offset-4">
                  IPTV Preise
                </Link>
                . Antworten auf weitere Fragen rund um Einrichtung und Nutzung finden Sie in unseren{" "}
                <Link href="/faq" className="text-aqua underline underline-offset-4">
                  häufig gestellten Fragen
                </Link>
                , und bei individuellen Anliegen erreichen Sie unser Support-Team jederzeit über die{" "}
                <Link href="/contact" className="text-aqua underline underline-offset-4">
                  Kontaktseite
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
