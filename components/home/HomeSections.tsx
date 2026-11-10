import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CountUp } from "@/components/ui/CountUp";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PlanCard } from "@/components/plans/PlanCard";
import { homePlanFeatures, homePlans } from "@/lib/plans";
import { blogPosts } from "@/lib/blog";
import { WHATSAPP_TEST_LINK } from "@/lib/whatsapp";

function Heading({
  kicker,
  title,
  accent,
  text,
}: {
  kicker: string;
  title: string;
  /** Trailing part of the title, shown in the brand colour. */
  accent?: string;
  text?: string;
}) {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
      <span className="rounded-full border border-aqua/30 bg-aqua/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-aqua">
        {kicker}
      </span>
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        <span className="text-gradient-aqua box-decoration-clone">{title}{accent ? ` ${accent}` : ""}</span>
      </h2>
      {text ? <p className="text-base leading-relaxed text-muted sm:text-lg">{text}</p> : null}
    </div>
  );
}

function Icon({ path }: { path: string }) {
  return (
    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-aqua/30 bg-aqua/10 text-aqua">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
        <path d={path} />
      </svg>
    </span>
  );
}

const CARD = "rounded-2xl border border-border bg-gradient-to-br from-background-elevated to-background";

const stats = [
  { value: 36000, label: "Live-TV Sender", note: "aus über 60 Ländern" },
  { value: 150000, label: "Filme & Serien", note: "auf Abruf, jederzeit" },
  { value: 1000, suffix: "+", label: "zufriedene Kunden", note: "in DE, AT & CH" },
];

export function StatsBand() {
  return (
    <section className="border-b border-border py-14 sm:py-16">
      <Container className="grid gap-10 text-center sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-1">
            <CountUp value={stat.value} suffix={stat.suffix} className="text-gradient-aqua mx-auto w-fit text-5xl font-bold tracking-tight sm:text-4xl lg:text-6xl" />
            <span className="mt-2 text-base font-semibold text-foreground">{stat.label}</span>
            <span className="text-sm text-muted">{stat.note}</span>
          </div>
        ))}
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
        <Button href="/tarife" variant="secondary" className="mx-auto w-fit">
          Alle Tarife und Laufzeiten
        </Button>
      </Container>
    </section>
  );
}

const benefits = [
  {
    title: "IPTV Abo ohne automatische Verlängerung",
    text: "Sie zahlen einmal für die gewählte Laufzeit. Danach endet der Zugang von selbst, und Sie entscheiden, ob Sie weiterschauen möchten.",
    icon: "M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3zM9 12l2 2 4-4",
    wide: true,
  },
  {
    title: "Kein Receiver, keine Schüssel",
    text: "Das Programm kommt über Ihre Internetleitung. Eine App genügt.",
    icon: "M3 6h18v11H3zM8 21h8M12 17v4",
  },
  {
    title: "IPTV kostenlos testen",
    text: "Fragen Sie per WhatsApp einen Testzugang an, bevor Sie sich für einen Tarif entscheiden.",
    icon: "M5 3l14 9-14 9V3z",
  },
  {
    title: "Auf Ihren vorhandenen Geräten",
    text: "Smart TV, Fire TV Stick, Android TV, Apple TV, Smartphone oder PC.",
    icon: "M7 2h10v20H7zM11 18h2",
  },
  {
    title: "Hilfe auf Deutsch",
    text: "Fragen zur Einrichtung beantworten wir per WhatsApp und E-Mail.",
    icon: "M21 12a8 8 0 01-11.6 7.1L4 20l1-4.6A8 8 0 1121 12z",
  },
  {
    title: "Live-TV, Filme und Serien in einer App",
    text: "Deutsches Fernsehen im laufenden Programm mit Programmführer, dazu Filme und Serien zum Abrufen. Alles mit denselben Zugangsdaten.",
    icon: "M4 5h16v12H4zM9 9l5 3-5 3V9zM8 21h8",
    full: true,
  },
];

export function Benefits() {
  return (
    <section className="border-b border-border py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <Heading
          kicker="Ihre Vorteile"
          title="Warum IPTV Deutschland"
          accent="so unkompliziert ist"
          text="IPTV Deutschland braucht keine neue Technik im Haus. Das sind die Punkte, die im Alltag den Unterschied machen."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {benefits.map((item, index) => (
            <ScrollReveal
              key={item.title}
              delay={((index % 3) + 1) as 1 | 2 | 3}
              className={`${CARD} flex flex-col gap-4 p-7 transition-colors hover:border-aqua/50 ${item.full ? "md:col-span-3" : item.wide ? "md:col-span-2" : ""}`}
            >
              <Icon path={item.icon} />
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{item.text}</p>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

const aboutPoints = [
  "Empfang über die vorhandene Internetleitung",
  "Keine Verkabelung und kein Techniktermin",
  "Dieselbe App im Wohnzimmer und unterwegs",
  "Tarife ohne automatische Verlängerung",
];

export function WhatIsIptv() {
  return (
    <section className="border-b border-border py-20 sm:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <ScrollReveal className="flex flex-col gap-5">
          <span className="w-fit rounded-full border border-aqua/30 bg-aqua/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-aqua">
            Kurz erklärt
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Was ist <span className="text-aqua">IPTV Deutschland?</span>
          </h2>
          <p className="text-base leading-relaxed text-muted">
            IPTV bedeutet Fernsehen über das Internetprotokoll. Das Signal kommt nicht von der
            Schüssel auf dem Dach oder aus der Kabeldose, sondern als Datenstrom über Ihren
            Internetanschluss. Die Wiedergabe läuft in einer App auf dem Gerät Ihrer Wahl.
          </p>
          <p className="text-base leading-relaxed text-muted">
            Sie tragen Ihre Zugangsdaten einmal ein und rufen danach Live-Programme, Filme und Serien
            ab. Welche Programmarten Sie erwarten, zeigt die Seite{" "}
            <Link href="/deutsches-fernsehen-iptv" className="text-aqua underline underline-offset-4">
              deutsches Fernsehen per IPTV
            </Link>
            .
          </p>
          <p className="text-base leading-relaxed text-muted">
            Sie vergleichen gerade mehrere Angebote? Worauf es bei einem IPTV Anbieter in Deutschland
            ankommt, haben wir auf der Seite{" "}
            <Link href="/iptv-anbieter-deutschland" className="text-aqua underline underline-offset-4">
              IPTV Anbieter Deutschland
            </Link>{" "}
            zusammengefasst.
          </p>
          <ul className="flex flex-col gap-2.5 pt-1">
            {aboutPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-foreground">
                <span aria-hidden className="text-aqua">✓</span>
                {point}
              </li>
            ))}
          </ul>
        </ScrollReveal>
        <ScrollReveal delay={2} className="overflow-hidden rounded-2xl border border-aqua/20 shadow-[0_0_50px_rgba(124,58,237,0.1)]">
          <Image
            src="/images/iptv-deutschland-familie.jpg"
            alt="Familie schaut IPTV Deutschland auf dem Fernseher im Wohnzimmer"
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

const devices = ["Samsung Smart TV", "LG Smart TV", "Android TV", "Fire TV Stick", "Apple TV", "iPhone & iPad", "Android-Handy", "PC & Mac"];

export function DevicesOverview() {
  return (
    <section className="border-b border-border bg-background-elevated/30 py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <Heading
          kicker="Einrichtung"
          title="IPTV einrichten"
          accent="auf Ihrem Gerät"
          text="App installieren, Zugangsdaten eintragen, Senderliste laden. Wählen Sie Ihr Gerät, die Anleitung bekommen Sie mit den Zugangsdaten."
        />
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {devices.map((device) => (
            <li key={device}>
              <Link
                href="/iptv-einrichten"
                className={`${CARD} flex h-full items-center justify-center p-5 text-center text-sm font-semibold text-foreground transition-colors hover:border-aqua/60 hover:text-aqua`}
              >
                {device}
              </Link>
            </li>
          ))}
        </ul>
        <Button href="/iptv-einrichten" variant="outline" className="mx-auto w-fit">
          Zur Einrichtungsanleitung
        </Button>
      </Container>
    </section>
  );
}

export function BlogTeaser() {
  return (
    <section className="border-b border-border py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <Heading
          kicker="Ratgeber"
          title="Wissen rund um"
          accent="Fernsehen per Internet"
          text="Alternativen zum Kabelanschluss, deutsches Fernsehen im Ausland und stabiles WLAN."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={`${CARD} group flex flex-col overflow-hidden transition-colors hover:border-aqua/60`}
            >
              <Image
                src={post.image.src}
                alt={post.image.alt}
                width={1920}
                height={1280}
                sizes="(max-width: 768px) 100vw, 400px"
                className="aspect-[3/2] h-auto w-full object-cover"
              />
              <div className="flex flex-1 flex-col gap-3 p-6">
                <h3 className="text-base font-semibold leading-snug text-foreground group-hover:text-aqua">{post.title}</h3>
                <span className="mt-auto text-sm font-semibold text-aqua">Weiterlesen →</span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function TestBanner() {
  return (
    <section className="border-b border-border py-20 sm:py-24">
      <Container>
        <div className="flex flex-col items-center gap-5 rounded-3xl border border-aqua/30 bg-gradient-to-br from-aqua/15 via-background-elevated to-background p-10 text-center shadow-[0_0_60px_rgba(124,58,237,0.1)] sm:p-14">
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            IPTV Deutschland <span className="text-aqua">kostenlos testen</span>
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-muted">
            Schreiben Sie uns per WhatsApp, welches Gerät Sie nutzen. Wir melden uns mit den nächsten
            Schritten für Ihren Testzugang.
          </p>
          <Button href={WHATSAPP_TEST_LINK} external variant="primary" className="px-8 py-4 text-base">
            Test per WhatsApp anfragen
          </Button>
        </div>
      </Container>
    </section>
  );
}
