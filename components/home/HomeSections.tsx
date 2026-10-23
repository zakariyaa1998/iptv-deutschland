import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PlanCard } from "@/components/plans/PlanCard";
import { homePlanFeatures, homePlans } from "@/lib/plans";

function Heading({ kicker, title, text }: { kicker: string; title: string; text?: string }) {
  return (
    <div className="flex max-w-2xl flex-col gap-3">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua">{kicker}</span>
      <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{title}</h2>
      {text ? <p className="text-base leading-relaxed text-muted sm:text-lg">{text}</p> : null}
    </div>
  );
}

export function WhatIsIptv() {
  return (
    <section className="border-b border-border py-20 sm:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <ScrollReveal className="overflow-hidden rounded-2xl border border-border">
          <Image
            src="/images/satellit-vs-iptv.jpg"
            alt="Satellitenschüssel auf dem Dach im Vergleich zu einem Fernseher mit IPTV Empfang"
            width={1920}
            height={1280}
            sizes="(max-width: 1024px) 100vw, 600px"
            className="h-auto w-full object-cover"
          />
        </ScrollReveal>
        <ScrollReveal delay={2} className="flex flex-col gap-5">
          <Heading kicker="Kurz erklärt" title="Was ist IPTV Deutschland?" />
          <p className="text-base leading-relaxed text-muted">
            Beim klassischen Fernsehen hängt der Empfang an der Schüssel auf dem Dach oder an der
            Kabeldose in der Wand. IPTV Deutschland nutzt stattdessen die Internetleitung, die in
            fast jedem Haushalt ohnehin vorhanden ist. Das Programm wird als Datenstrom übertragen
            und in einer App wiedergegeben.
          </p>
          <p className="text-base leading-relaxed text-muted">
            Für Sie heißt das: kein Techniker, keine Verkabelung, kein Receiver. Sie tragen Ihre
            Zugangsdaten einmal in der App ein und können danach Live-Programme, Filme und Serien
            abrufen — im Wohnzimmer, im Schlafzimmer oder unterwegs auf dem Handy.
          </p>
          <p className="text-base leading-relaxed text-muted">
            Welche Programmarten Sie erwarten, beschreiben wir auf der Seite{" "}
            <Link href="/deutsches-fernsehen-iptv" className="text-aqua underline underline-offset-4">
              deutsches Fernsehen per IPTV
            </Link>
            .
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}

const steps = [
  {
    title: "Tarif auswählen",
    text: "Laufzeit und Anzahl der Geräte festlegen. Der Inhalt ist in jedem Tarif derselbe.",
  },
  {
    title: "Per WhatsApp bestellen",
    text: "Der Button öffnet eine fertige Nachricht. Wir antworten mit den Zahlungsinformationen.",
  },
  {
    title: "Zugangsdaten eintragen",
    text: "Nach Zahlungseingang kommen Zugangsdaten und Anleitung. Einmal in die App eingeben, fertig.",
  },
];

export function HowItWorks() {
  return (
    <section className="border-b border-border bg-background-elevated/40 py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <Heading
          kicker="Ablauf"
          title="In drei Schritten zu IPTV Deutschland"
          text="Kein Formular, kein Kundenkonto. Die Bestellung läuft komplett über einen WhatsApp-Chat."
        />
        <ScrollReveal>
          <ol className="grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step.title} className="flex h-full flex-col gap-3 border-t-2 border-aqua pt-5">
                <span className="text-sm font-bold tabular-nums text-aqua">Schritt {index + 1}</span>
                <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </ScrollReveal>
        <Link href="/iptv-bestellen" className="w-fit text-sm font-semibold text-aqua underline underline-offset-4">
          Bestellung im Detail ansehen →
        </Link>
      </Container>
    </section>
  );
}

const programmes = [
  {
    image: "/images/iptv-deutschland-familie.jpg",
    title: "Live-Fernsehen",
    text: "Nachrichten, Unterhaltung und Shows im laufenden Programm, mit Programmführer.",
  },
  {
    image: "/images/iptv-fussball-wohnzimmer.jpg",
    title: "Sport",
    text: "Spiele und Rennen live verfolgen, ohne Zusatzgerät am Fernseher.",
  },
  {
    image: "/images/iptv-sport-mehrere-spiele.jpg",
    title: "Filme & Serien",
    text: "Eine Mediathek zum Abrufen, wann immer Sie Zeit haben.",
  },
];

export function Programmes() {
  return (
    <section className="border-b border-border py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <Heading
          kicker="Inhalte"
          title="Was Sie mit IPTV Deutschland schauen"
          text="Live-Programm und Abruf-Inhalte liegen in derselben App. Sie wechseln mit der Fernbedienung zwischen beiden."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {programmes.map((item, index) => (
            <ScrollReveal
              key={item.title}
              delay={((index % 3) + 1) as 1 | 2 | 3}
              className="flex flex-col overflow-hidden rounded-2xl border border-border bg-background-elevated"
            >
              <Image
                src={item.image}
                alt={`${item.title} mit IPTV Deutschland auf dem Fernseher`}
                width={1920}
                height={1280}
                sizes="(max-width: 768px) 100vw, 400px"
                className="aspect-[3/2] h-auto w-full object-cover"
              />
              <div className="flex flex-col gap-2 p-6">
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

const deviceGroups = [
  { name: "Fernseher", list: "Samsung, LG, Android TV, Google TV" },
  { name: "Sticks & Boxen", list: "Fire TV Stick, Apple TV, MAG-Box, Android-Box" },
  { name: "Mobil & PC", list: "iPhone, Android-Smartphone, Tablet, Windows, macOS" },
];

export function DevicesOverview() {
  return (
    <section className="border-b border-border bg-background-elevated/40 py-20 sm:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
        <ScrollReveal className="flex flex-col gap-6">
          <Heading
            kicker="Geräte"
            title="Läuft auf dem, was Sie schon haben"
            text="Für IPTV Deutschland müssen Sie in der Regel nichts Neues kaufen. Ein Gerät mit Internetzugang und einer passenden App genügt."
          />
          <dl className="flex flex-col divide-y divide-border rounded-2xl border border-border bg-background">
            {deviceGroups.map((group) => (
              <div key={group.name} className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:gap-6">
                <dt className="w-36 shrink-0 text-sm font-semibold text-foreground">{group.name}</dt>
                <dd className="text-sm text-muted">{group.list}</dd>
              </div>
            ))}
          </dl>
          <Link href="/iptv-einrichten" className="w-fit text-sm font-semibold text-aqua underline underline-offset-4">
            Anleitung zum Einrichten →
          </Link>
        </ScrollReveal>
        <ScrollReveal delay={2} className="overflow-hidden rounded-2xl border border-border">
          <Image
            src="/images/iptv-geraete-stick-box.jpg"
            alt="Streaming-Stick und zwei TV-Boxen für IPTV Deutschland"
            width={1920}
            height={1280}
            sizes="(max-width: 1024px) 100vw, 600px"
            className="h-auto w-full object-cover"
          />
        </ScrollReveal>
      </Container>
    </section>
  );
}

export function PriceOverview() {
  return (
    <section className="border-b border-border py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <Heading
          kicker="Tarife"
          title="IPTV Deutschland Preise auf einen Blick"
          text="Drei Laufzeiten, jeweils für ein Gerät. Kürzere Laufzeiten und Tarife für zwei oder drei Geräte finden Sie auf der Tarifseite."
        />
        <div className="grid items-stretch gap-6 lg:grid-cols-3">
          {homePlans.map((plan, index) => (
            <ScrollReveal key={plan.id} delay={((index % 3) + 1) as 1 | 2 | 3} className="grid">
              <PlanCard
                title={plan.label}
                badge={plan.badge}
                featured={plan.featured}
                price={plan.price}
                details={<span>für 1 Gerät · rechnerisch {plan.monthly}€ pro Monat</span>}
                features={homePlanFeatures}
                whatsappLink={plan.whatsappLink}
                footerLink={{ href: "/tarife", label: "Für 2 oder 3 Geräte" }}
              />
            </ScrollReveal>
          ))}
        </div>
        <Button href="/tarife" variant="secondary" className="w-fit">
          Alle Tarife und Laufzeiten
        </Button>
      </Container>
    </section>
  );
}

export function Requirements() {
  return (
    <section className="border-b border-border py-20 sm:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <ScrollReveal className="overflow-hidden rounded-2xl border border-border">
          <Image
            src="/images/iptv-stabile-verbindung.jpg"
            alt="Laptop und Smartphone mit stabiler Internetverbindung für IPTV"
            width={1920}
            height={1280}
            sizes="(max-width: 1024px) 100vw, 600px"
            className="h-auto w-full object-cover"
          />
        </ScrollReveal>
        <ScrollReveal delay={2} className="flex flex-col gap-5">
          <Heading kicker="Voraussetzungen" title="Was Ihr Anschluss leisten sollte" />
          <p className="text-base leading-relaxed text-muted">
            Entscheidend ist weniger die Spitzengeschwindigkeit als eine gleichmäßige Verbindung.
            Ein gewöhnlicher Breitbandanschluss reicht für HD meist aus. Für 4K und für mehrere
            Geräte gleichzeitig brauchen Sie entsprechend mehr Bandbreite.
          </p>
          <p className="text-base leading-relaxed text-muted">
            Am Fernseher lohnt sich ein LAN-Kabel zum Router. Über WLAN kann das Bild schwanken,
            wenn das Signal durch mehrere Wände muss oder viele Geräte gleichzeitig online sind.
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}
