import { Button } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/CheckIcon";
import { discountPercent, pricingFeatures, type DeviceTier, type PricingDuration } from "@/lib/plans";

type PricingCardProps = {
  tier: DeviceTier;
  duration: PricingDuration;
  recommended?: boolean;
};

export function PricingCard({ tier, duration, recommended }: PricingCardProps) {
  const discount = discountPercent(tier.originalPrice, tier.price);
  const highlight = Boolean(duration.featured && recommended);

  return (
    <div
      className={`relative flex h-full flex-col gap-6 rounded-3xl border bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.14)] sm:p-9 ${
        // This card sits on a white surface, where the primary brand green is too
        // light to read as a border — "aqua-dim" is the same green family, tuned dark
        // enough for solid contrast against white.
        highlight
          ? "border-2 border-aqua-dim shadow-[0_8px_40px_rgba(75,235,30,0.25)] lg:scale-105"
          : recommended
            ? "border-aqua-dim hover:border-aqua-dim"
            : "border-black/10 hover:border-aqua-dim/50"
      }`}
    >
      {recommended ? (
        <span className="absolute left-1/2 top-0 z-10 w-max max-w-[88%] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-aqua px-3.5 py-1.5 text-center text-[10px] font-bold uppercase leading-tight tracking-wide text-black shadow-[0_4px_16px_rgba(75,235,30,0.4)] sm:px-4 sm:text-xs">
          Empfohlen
        </span>
      ) : null}

      <div className="flex flex-col items-center gap-2 text-center">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-[#4b5563]">{tier.label}</h3>
        <div className="mt-1 flex flex-col items-center gap-1">
          <span className="text-base text-[#6b7280] line-through decoration-2">{tier.originalPrice}€</span>
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-bold text-[#111111]">{tier.price}€</span>
            <span className="rounded-full bg-aqua px-2.5 py-1 text-xs font-bold text-black shadow-[0_2px_10px_rgba(75,235,30,0.35)]">
              -{discount}%
            </span>
          </div>
        </div>
      </div>

      <ul className="flex flex-col gap-3">
        {pricingFeatures.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-[#4b5563]">
            <CheckIcon className="text-aqua-dim" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-col items-center gap-4 pt-2">
        <ul className="flex flex-col items-center gap-1 text-xs text-[#4b5563]">
          <li>✔ Keine automatische Verlängerung</li>
          <li>✔ Gleicher Funktionsumfang in jedem Tarif</li>
          <li>✔ Bestellung per WhatsApp</li>
        </ul>

        <div className="flex w-full flex-col items-center gap-2">
          <Button href={tier.whatsappLink} external variant="primary" className="w-full">
            Per WhatsApp bestellen
          </Button>
          <p className="text-xs text-[#6b7280]">Preis für die gesamte Laufzeit</p>
        </div>
      </div>
    </div>
  );
}
