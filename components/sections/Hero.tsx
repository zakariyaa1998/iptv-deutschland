import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { HeroBackground } from "@/components/home/HeroBackground";
import { WHATSAPP_ORDER_LINK } from "@/lib/whatsapp";

const stats = [
  { value: "20.000+", label: "Sender & Kanäle" },
  { value: "4K", label: "Ultra HD Streaming" },
  { value: "24/7", label: "Persönlicher Support" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <HeroBackground />

      <Container className="relative z-10 flex flex-col items-center gap-14 py-20 text-center sm:py-28 lg:py-32">
        <div className="flex w-full flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div className="flex max-w-2xl flex-col items-center gap-6 lg:items-start lg:text-left">
            <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-aqua/30 bg-aqua/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-aqua">
              Premium IPTV aus Deutschland
            </span>
            <h1 className="animate-fade-up-delay-1 text-gradient-aqua text-4xl font-bold leading-[1.1] tracking-tight drop-shadow-[0_2px_24px_rgba(0,0,0,0.55)] sm:text-5xl lg:text-6xl">
              IPTV Deutschland – Live-TV neu gedacht: grenzenlos, glasklar, sofort.
            </h1>
            <p className="animate-fade-up-delay-2 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Deutschland IPTV bringt Ihnen Tausende Sender, Filme und Serien in HD, Full HD und 4K —
              auf jedem Gerät, ohne Wartezeit, mit einem Support, der wirklich weiterhilft.
            </p>
          </div>

          <div className="animate-fade-up-delay-3 flex shrink-0 flex-col gap-4 sm:flex-row">
            <Button href="/plans" variant="primary" className="px-8 py-4 text-base">
              Tarife ansehen
            </Button>
            <Button
              href={WHATSAPP_ORDER_LINK}
              external
              variant="whatsapp-white"
              className="px-8 py-4 text-base"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.3-1.39a9.9 9.9 0 0 0 4.69 1.19h.01c5.46 0 9.9-4.45 9.9-9.9 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Z" />
              </svg>
              Jetzt bestellen
            </Button>
          </div>
        </div>

        <ScrollReveal className="grid w-full max-w-2xl grid-cols-3 gap-4 rounded-3xl border border-border bg-background-elevated/60 p-6 backdrop-blur-sm sm:p-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="text-2xl font-bold text-aqua sm:text-3xl">{stat.value}</span>
              <span className="text-xs text-muted sm:text-sm">{stat.label}</span>
            </div>
          ))}
        </ScrollReveal>
      </Container>
    </section>
  );
}
