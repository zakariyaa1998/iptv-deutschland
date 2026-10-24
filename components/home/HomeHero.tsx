import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_TEST_LINK } from "@/lib/whatsapp";

export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-border">
      <Image
        src="/images/hero-filme-serien.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      {/* Dark only behind the text column; the poster wall stays bright on the right. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/80 to-background/10 lg:via-background/60 lg:to-transparent"
      />
      <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-background to-transparent" />

      <Container className="flex min-h-[440px] items-center py-16 sm:min-h-[520px] sm:py-20">
        <div className="flex max-w-xl flex-col gap-6">
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.6)] sm:text-5xl lg:text-6xl">
            <span className="text-aqua">IPTV Deutschland</span> – Fernsehen ohne Schüssel und Kabel
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
