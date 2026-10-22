import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_ORDER_LINK } from "@/lib/whatsapp";

const facts = [
  "Laufzeit zwischen 1 Monat und 2 Jahren",
  "1, 2 oder 3 Geräte pro Abo",
  "Keine automatische Verlängerung",
  "Hilfe per WhatsApp und E-Mail",
];

export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-border">
      <Image
        src="/images/premium-home-cinema.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-center opacity-45"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/85 to-background/30" />

      <Container className="flex flex-col gap-12 py-20 sm:py-28 lg:py-36">
        <div className="flex max-w-2xl flex-col gap-6">
          <span className="w-fit border-l-2 border-aqua pl-3 text-xs font-semibold uppercase tracking-[0.2em] text-aqua">
            Fernsehen über das Internet
          </span>
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            IPTV Deutschland: Live-TV, Filme und Serien ohne Schüssel und Kabel
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Ein Zugang, eine App, Ihre vorhandenen Geräte. Mit IPTV Deutschland kommt das
            Fernsehprogramm über Ihre Internetleitung auf Smart TV, Stick oder Smartphone — Sie
            wählen nur Laufzeit und Geräteanzahl.
          </p>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <Button href="/tarife" variant="primary" className="px-8 py-4 text-base">
              Tarife vergleichen
            </Button>
            <Button href={WHATSAPP_ORDER_LINK} external variant="whatsapp-white" className="px-8 py-4 text-base">
              Per WhatsApp anfragen
            </Button>
          </div>
        </div>

        <ul className="grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact) => (
            <li
              key={fact}
              className="rounded-xl border border-border bg-background/70 px-4 py-3 text-sm font-medium text-foreground backdrop-blur-sm"
            >
              <span aria-hidden className="mr-2 text-aqua">●</span>
              {fact}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
