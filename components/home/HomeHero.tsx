import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_TEST_LINK } from "@/lib/whatsapp";

const heroPoints = ["Keine automatische Verlängerung", "1, 2 oder 3 Geräte", "HD, Full HD und 4K", "Kostenloser Test auf Anfrage"];

// Animated hero (2026-11): pure CSS, no photo — the old poster-wall image showed real
// film/series artwork (copyright risk) and was only 1080px wide. Scenes are abstract
// gradients with generic genre labels; never show real channel logos or posters here.
// All motion lives in app/globals.css (.hero-*) and stops under prefers-reduced-motion.
const scenes = [
  { label: "Live-TV", sub: "Laufendes Programm", className: "hero-scene-a" },
  { label: "Filme", sub: "Auf Abruf", className: "hero-scene-b" },
  { label: "Serien", sub: "Staffel für Staffel", className: "hero-scene-c" },
  { label: "Mediathek", sub: "Verpasstes nachholen", className: "hero-scene-d" },
];

const guide = [
  { time: "20:00", title: "Nachrichten", width: "w-[38%]" },
  { time: "20:15", title: "Spielfilm", width: "w-[62%]" },
  { time: "21:45", title: "Dokumentation", width: "w-[48%]" },
];

// Circuit-board traces for the hero background (viewBox 1440×800). Each trace is drawn
// faintly, then a short light pulse runs along it (see .hero-circuit-* in globals.css).
const traces = [
  "M0 120 H220 L260 160 H520 L560 120 H760",
  "M0 260 H140 L180 300 H380 L420 340 H600",
  "M0 520 H180 L230 470 H420 L460 430 H640",
  "M0 680 H260 L300 640 H520",
  "M1440 90 H1240 L1200 130 H980 L940 170 H800",
  "M1440 230 H1300 L1260 190 H1080 L1040 230 H900",
  "M1440 420 H1320 L1280 460 H1100 L1060 500 H880",
  "M1440 600 H1220 L1180 640 H1000 L960 600 H820",
  "M1440 740 H1280 L1240 700 H1060",
  "M700 0 V80 L740 120 V220",
  "M1000 800 V700 L960 660 V560",
  "M420 800 V720 L460 680 V600",
];

const nodes = [
  [760, 120], [600, 340], [640, 430], [520, 640], [800, 170], [900, 230],
  [880, 500], [820, 600], [1060, 700], [740, 220], [960, 560], [460, 600],
  [260, 160], [420, 340], [230, 470], [1200, 130], [1280, 460], [1180, 640],
];

function CircuitBackground() {
  return (
    <svg
      className="hero-circuit absolute inset-0 h-full w-full"
      viewBox="0 0 1440 800"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      {traces.map((d) => (
        <path key={`base-${d}`} d={d} className="hero-circuit-trace" pathLength={1000} />
      ))}
      {traces.map((d, index) => (
        <path
          key={`pulse-${d}`}
          d={d}
          className="hero-circuit-pulse"
          pathLength={1000}
          style={{ animationDuration: `${5 + (index % 4) * 1.5}s`, animationDelay: `${-index * 0.9}s` }}
        />
      ))}
      {nodes.map(([cx, cy], index) => (
        <g key={`${cx}-${cy}`}>
          <circle cx={cx} cy={cy} r={6} className="hero-circuit-pad" />
          <circle
            cx={cx}
            cy={cy}
            r={2.5}
            className="hero-circuit-dot"
            style={{ animationDelay: `${-index * 0.6}s` }}
          />
        </g>
      ))}
    </svg>
  );
}

function HeroVisual() {
  return (
    <div aria-hidden className="relative mx-auto w-full max-w-[560px] select-none">
      {/* TV */}
      <div className="hero-float relative rounded-[22px] border border-aqua/40 bg-[#120c20] p-2.5 shadow-[0_0_80px_rgba(124,58,237,0.35)] sm:p-3">
        <div className="relative aspect-video overflow-hidden rounded-[14px] bg-black">
          {scenes.map((scene, index) => (
            <div
              key={scene.label}
              className={`hero-scene ${scene.className} absolute inset-0 flex flex-col justify-center p-5 pt-14 sm:p-8 sm:pt-16`}
              style={{ animationDelay: `${index * 3}s` }}
            >
              <span className="hero-scene-orb" />
              <span className="relative text-2xl font-bold tracking-tight text-white sm:text-4xl">{scene.label}</span>
              <span className="relative text-xs font-medium text-white/75 sm:text-sm">{scene.sub}</span>
            </div>
          ))}

          <div className="absolute left-3 top-3 flex items-center gap-2 sm:left-4 sm:top-4">
            <span className="flex items-center gap-1.5 rounded-full bg-black/55 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur sm:text-xs">
              <span className="hero-live-dot h-2 w-2 rounded-full bg-red-500" />
              Live
            </span>
            <span className="rounded-md border border-white/25 bg-black/40 px-2 py-0.5 text-[10px] font-bold text-white backdrop-blur sm:text-xs">
              4K
            </span>
          </div>

          <div className="absolute inset-x-0 bottom-0 h-1 bg-white/10">
            <div className="hero-progress h-full bg-aqua" />
          </div>
        </div>
      </div>
      <div className="mx-auto h-5 w-24 bg-gradient-to-b from-[#2a2040] to-transparent sm:h-7" />
      <div className="mx-auto -mt-1 h-1.5 w-40 rounded-full bg-[#2a2040]" />

      {/* Programme guide card */}
      <div className="hero-float-slow absolute -bottom-6 -left-2 hidden w-60 rounded-2xl border border-border bg-background-elevated/90 p-4 shadow-2xl backdrop-blur sm:block lg:-left-10">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-aqua">Programmführer</p>
        <ul className="flex flex-col gap-2.5">
          {guide.map((row) => (
            <li key={row.time} className="flex flex-col gap-1">
              <div className="flex justify-between text-xs">
                <span className="font-semibold text-foreground">{row.title}</span>
                <span className="text-muted">{row.time}</span>
              </div>
              <div className="h-1 rounded-full bg-white/10">
                <div className={`h-full rounded-full bg-aqua/70 ${row.width}`} />
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Phone */}
      <div className="hero-float-alt absolute -right-1 -top-8 hidden w-24 rounded-[18px] border border-aqua/40 bg-[#120c20] p-1.5 shadow-2xl sm:block lg:-right-8">
        <div className="hero-scene-b flex aspect-[9/17] flex-col items-center justify-center gap-2 rounded-[13px]">
          <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
          <span className="hero-eq flex h-4 items-end gap-0.5">
            <span />
            <span />
            <span />
            <span />
          </span>
        </div>
      </div>
    </div>
  );
}

export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-border bg-black">
      {/* Animated background: black base with moving circuit traces. */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <CircuitBackground />
        <div className="hero-beam" />
        <div className="hero-grain absolute inset-0" />
      </div>

      <Container className="grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-2 lg:gap-10 lg:py-24">
        <div className="flex max-w-xl flex-col gap-6">
          <h1 className="animate-fade-up text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl xl:text-6xl">
            <span className="text-gradient-aqua box-decoration-clone">IPTV Deutschland – Fernsehen ohne Schüssel und Kabel</span>
          </h1>

          <div aria-hidden className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-aqua" />
            <span className="h-1.5 w-1.5 rounded-full bg-aqua" />
            <span className="h-1.5 w-1.5 rounded-full bg-aqua" />
            <span className="ml-1 h-1 w-24 rounded-full bg-aqua" />
          </div>

          <p className="animate-fade-up-delay-1 text-base leading-relaxed text-white/85 sm:text-lg">
            Mit IPTV Deutschland kommen Live-TV, Filme und Serien über Ihre Internetleitung — auf
            Smart TV, Stick oder Smartphone. Laufzeit und Geräteanzahl wählen, fertig.
          </p>

          <ul className="animate-fade-up-delay-2 grid gap-2 text-sm font-medium text-white sm:grid-cols-2">
            {heroPoints.map((point) => (
              <li key={point} className="flex items-center gap-2">
                <span aria-hidden className="text-aqua">✓</span>
                {point}
              </li>
            ))}
          </ul>

          <div className="animate-fade-up-delay-3 flex flex-col gap-3 pt-1 sm:flex-row">
            <Button href="/tarife" variant="primary" className="px-8 py-4 text-base">
              Tarife ansehen
            </Button>
            <Button href={WHATSAPP_TEST_LINK} external variant="whatsapp-white" className="px-8 py-4 text-base">
              Kostenlosen Test anfragen
            </Button>
          </div>
        </div>

        <HeroVisual />
      </Container>
    </section>
  );
}
