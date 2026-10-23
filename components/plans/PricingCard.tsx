import { PlanCard } from "@/components/plans/PlanCard";
import { discountPercent, homePlanFeatures, type DeviceTier, type PricingDuration } from "@/lib/plans";

type PricingCardProps = {
  tier: DeviceTier;
  duration: PricingDuration;
  recommended?: boolean;
};

export function PricingCard({ tier, duration, recommended }: PricingCardProps) {
  const discount = discountPercent(tier.originalPrice, tier.price);

  return (
    <PlanCard
      title={`${duration.label} · ${tier.label}`}
      badge={recommended ? "Empfohlen" : undefined}
      featured={Boolean(duration.featured && recommended)}
      price={tier.price}
      details={
        <>
          <span>rechnerisch {tier.monthly}€ pro Monat</span>
          {/* The struck-through price is the same period booked as monthly plans,
              labelled as such — not a fictitious former price. */}
          {discount > 0 ? (
            <span>
              <span className="line-through">{tier.originalPrice}€</span> im Monatstarif ·{" "}
              <span className="font-semibold text-aqua">-{discount}%</span>
            </span>
          ) : null}
        </>
      }
      features={homePlanFeatures}
      whatsappLink={tier.whatsappLink}
    />
  );
}
