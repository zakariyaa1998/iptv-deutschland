import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

type StripItem = { src: string; alt: string };

// Every path below points at a real file inside the four asset folders you
// provided (spaces URL-encoded as %20) — nothing invented, nothing outside
// those folders. Folder name is "serian pictures" on disk (not "serien").
const filmeItems: StripItem[] = Array.from({ length: 10 }, (_, i) => ({
  src: `/images/filme%20pictures/Filme${i + 1}.jpg`,
  alt: `Filmposter ${i + 1} aus der Deutschland IPTV Filmbibliothek`,
}));

// File #5 in this folder is actually named "Serirn5.jpg" (typo in the source
// asset) rather than "Serien5.jpg" — kept exactly as-is since that's the real
// filename on disk.
const serienItems: StripItem[] = [1, 2, 3, 4, 6, 7, 8, 9, 10].map((n) => ({
  src: `/images/serian%20pictures/Serien${n}.jpg`,
  alt: `Serienposter ${n} aus der Deutschland IPTV Serienbibliothek`,
}));
serienItems.splice(4, 0, {
  src: "/images/serian%20pictures/Serirn5.jpg",
  alt: "Serienposter 5 aus der Deutschland IPTV Serienbibliothek",
});

const kinderItems: StripItem[] = Array.from({ length: 10 }, (_, i) => ({
  src: `/images/kinder%20pictures/Kinder${i + 1}.jpg`,
  alt: `Kinderprogramm-Poster ${i + 1} von Deutschland IPTV`,
}));

// This folder's numbering has a gap — #17 doesn't exist on disk — so it's
// simply skipped rather than guessed at.
const sportNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19, 20, 21];
const sportItems: StripItem[] = sportNumbers.map((n) => ({
  src: `/images/sport%20picture/Sport${n}.jpg`,
  alt: `Live-Sport Vorschaubild ${n} von Deutschland IPTV`,
}));

// Cycles a list until it comfortably exceeds one screen width, so the
// "render the sequence twice, scroll one copy's width" loop below never
// shows a gap, even on very wide monitors.
function repeatToMinLength(items: StripItem[], minLength: number): StripItem[] {
  const out: StripItem[] = [];
  while (out.length < minLength) out.push(...items);
  return out;
}

type Strip = {
  key: string;
  label: string;
  items: StripItem[];
  direction: "marquee" | "marquee-reverse";
  /** Fixed card size per breakpoint — every image in a row shares this exact
   *  box, chosen to match that category's real, measured aspect ratio. */
  cardSize: string;
};

const strips: Strip[] = [
  {
    key: "filme",
    label: "Filme",
    items: repeatToMinLength(filmeItems, 16),
    direction: "marquee",
    // Real Filme assets measure ~2:3 (e.g. 640×960, 1000×1500).
    cardSize: "h-[150px] w-[100px] sm:h-[195px] sm:w-[130px]",
  },
  {
    key: "serien",
    label: "Serien",
    items: repeatToMinLength(serienItems, 16),
    direction: "marquee-reverse",
    // Real Serien assets also measure ~2:3 (e.g. 2000×3000, 667×1000).
    cardSize: "h-[150px] w-[100px] sm:h-[195px] sm:w-[130px]",
  },
  {
    key: "kinder",
    label: "Kinder",
    items: repeatToMinLength(kinderItems, 16),
    direction: "marquee",
    // Real Kinder assets run slightly wider, ~3:4 (e.g. 2250×3000, 540×810).
    cardSize: "h-[144px] w-[108px] sm:h-[180px] sm:w-[135px]",
  },
  {
    key: "sport",
    label: "Sport",
    items: repeatToMinLength(sportItems, 16),
    direction: "marquee-reverse",
    // Real Sport assets are landscape, ~4:3 (e.g. 1824×1360, 1080×810).
    cardSize: "h-[120px] w-[160px] sm:h-[150px] sm:w-[200px]",
  },
];

export function StreamingCategories() {
  return (
    <section className="overflow-hidden border-b border-border py-20 sm:py-28">
      <Container className="flex flex-col items-center gap-14">
        <SectionHeading
          title="Eine neue Welt des Streamings"
          description="Erleben Sie Top-Unterhaltung und Live-Sport in 4K mit Deutschland IPTV — Premium-TV, wo auch immer Sie sind."
        />
      </Container>

      <div className="flex w-full flex-col gap-10 sm:gap-12">
        {strips.map((strip, index) => {
          const trackItems = [...strip.items, ...strip.items];

          return (
            <ScrollReveal key={strip.key} delay={((index % 4) + 1) as 1 | 2 | 3 | 4} className="flex flex-col gap-4">
              <Container>
                <h3 className="text-center text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                  {strip.label}
                </h3>
              </Container>

              <div className="marquee-fade w-full overflow-hidden">
                <div
                  className={`marquee-track animate-${strip.direction} flex w-max gap-3 rounded-2xl border border-aqua/15 bg-background-elevated/40 p-3 shadow-[0_0_30px_rgba(75,235,30,0.06)] sm:gap-4 sm:p-4`}
                >
                  {trackItems.map((item, itemIndex) => (
                    <div
                      key={`${strip.key}-${itemIndex}`}
                      className={`group relative shrink-0 overflow-hidden rounded-xl border border-border shadow-lg transition-shadow duration-300 hover:shadow-xl hover:shadow-aqua/10 ${strip.cardSize}`}
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        loading="lazy"
                        decoding="async"
                        sizes="200px"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
