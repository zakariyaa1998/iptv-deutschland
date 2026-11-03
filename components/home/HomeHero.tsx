import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_TEST_LINK } from "@/lib/whatsapp";

const heroPoints = ["Keine automatische Verlängerung", "1, 2 oder 3 Geräte", "HD, Full HD und 4K", "Kostenloser Test auf Anfrage"];

export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-border">
      {/* From lg up the poster wall is shown whole (object-contain); a blurred copy
          fills whatever space the image leaves at the sides or top and bottom. */}
      <Image
        src="/images/purple_exact_v2.png"
        alt=""
        fill
        sizes="100vw"
        className="-z-30 hidden scale-110 object-cover opacity-60 blur-2xl lg:block"
      />
      <Image
        src="/images/purple_exact_v2.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-center lg:object-contain"
      />
      {/* Light shade behind the text only, so the whole poster wall stays visible. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-background/80 via-background/40 to-transparent lg:from-background/55 lg:via-background/15"
      />
      <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-10 bg-gradient-to-t from-background to-transparent" />

      <Container className="flex min-h-[440px] items-center py-16 sm:min-h-[520px] sm:py-20 lg:min-h-[44.2vw]">
        <div className="flex max-w-xl flex-col gap-6">
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.6)] sm:text-5xl lg:text-6xl">
            <span className="text-gradient-aqua box-decoration-clone">IPTV Deutschland – Fernsehen ohne Schüssel und Kabel</span>
          </h1>

          <div aria-hidden className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-aqua" />
            <span className="h-1.5 w-1.5 rounded-full bg-aqua" />
            <span className="h-1.5 w-1.5 rounded-full bg-aqua" />
            <span className="ml-1 h-1 w-24 rounded-full bg-aqua" />
          </div>

          <p className="text-base leading-relaxed text-white/85 drop-shadow-[0_1px_10px_rgba(0,0,0,0.6)] sm:text-lg">
            Live-TV, Filme und Serien über Ihre Internetleitung — auf Smart TV, Stick oder
            Smartphone. Laufzeit und Geräteanzahl wählen, fertig.
          </p>

          <ul className="grid gap-2 text-sm font-medium text-white sm:grid-cols-2">
            {heroPoints.map((point) => (
              <li key={point} className="flex items-center gap-2 drop-shadow-[0_1px_8px_rgba(0,0,0,0.7)]">
                <span aria-hidden className="text-aqua">✓</span>
                {point}
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 pt-1 sm:flex-row">
            <Button href="/tarife" variant="primary" className="px-8 py-4 text-base">
              Tarife ansehen
            </Button>
            <Button href={WHATSAPP_TEST_LINK} external variant="whatsapp-white" className="px-8 py-4 text-base">
              Kostenlosen Test anfragen
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
