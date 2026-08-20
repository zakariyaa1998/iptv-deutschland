import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const reasons = [
  {
    title: "Zuverlässige Qualität",
    description:
      "Unsere Server sind auf konstante Stabilität ausgelegt — selbst bei Live-Sportereignissen mit hoher Nachfrage.",
  },
  {
    title: "Transparente Preise",
    description:
      "Keine versteckten Kosten, keine Überraschungen. Sie wissen von Anfang an genau, was Sie bekommen.",
  },
  {
    title: "Schnelle Aktivierung",
    description:
      "Nach Bestätigung Ihrer Bestellung erhalten Sie Ihre Zugangsdaten meist innerhalb weniger Minuten.",
  },
  {
    title: "Support, der antwortet",
    description:
      "Unser Team ist auf WhatsApp erreichbar und hilft Ihnen persönlich bei Einrichtung und allen Fragen.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden border-b border-border py-20 sm:py-28">
      {/* Deep-space nebula backdrop — local to this section only. A soft
          dark gradient sits above it purely for text legibility, letting
          the purple/emerald clouds show through strongest at mid-height.
          Filename case must match the file on disk exactly (public/images/
          Sadim.jpg) — this path is case-sensitive on Linux/Vercel even
          though it silently resolves either way on Windows. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[url('/images/Sadim.jpg')] bg-cover bg-center bg-no-repeat"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/45 to-background/70" />
      </div>

      <Container className="relative z-10 grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="flex max-w-xl flex-col gap-4">
          <h2 className="text-3xl font-bold tracking-tight text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.7)] sm:text-4xl lg:text-5xl">
            Ein Streaming-Partner, dem Sie vertrauen können
          </h2>
          <p className="text-base leading-relaxed text-white/80 drop-shadow-[0_1px_12px_rgba(0,0,0,0.6)] sm:text-lg">
            Wir haben Deutschland IPTV für Nutzer entwickelt, die Premium-Qualität, Zuverlässigkeit und echten
            Support erwarten — ganz ohne Kompromisse. Wie unser{" "}
            <Link href="/iptv-service" className="text-aqua underline underline-offset-4 hover:text-aqua-dim">
              IPTV Service
            </Link>{" "}
            im Detail funktioniert, erfahren Sie auf der verlinkten Seite.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {reasons.map((reason, index) => (
            <ScrollReveal
              key={reason.title}
              delay={((index % 4) + 1) as 1 | 2 | 3 | 4}
              className="flex flex-col gap-3 p-6"
            >
              {/* Glowing runic seal — transparent center, layered rings +
                  glow instead of a solid fill, numeral stays legible. */}
              <span className="relative flex h-11 w-11 shrink-0 items-center justify-center">
                <span aria-hidden className="absolute -inset-1.5 rounded-full border border-aqua/15" />
                <span
                  aria-hidden
                  className="absolute inset-0 rounded-full border border-aqua/60 shadow-[0_0_18px_rgba(75,235,30,0.5),inset_0_0_12px_rgba(75,235,30,0.25)]"
                />
                <span className="relative text-base font-bold text-aqua drop-shadow-[0_0_6px_rgba(75,235,30,0.65)]">
                  {index + 1}
                </span>
              </span>
              <h3 className="text-base font-semibold text-white drop-shadow-[0_1px_10px_rgba(0,0,0,0.65)]">
                {reason.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/75 drop-shadow-[0_1px_8px_rgba(0,0,0,0.55)]">
                {reason.description}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
