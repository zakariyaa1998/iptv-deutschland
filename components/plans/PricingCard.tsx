import { PlanCard } from "@/components/plans/PlanCard";
import { discountPercent, homePlanFeatures, type DeviceTier, type PricingDuration } from "@/lib/plans";

type PricingCardProps = {
  tier: DeviceTier;
  duration: PricingDuration;
  recommended?: boolean;
};

export function PricingCard({ tier, duration, recommended }: PricingCardProps) {
  return (
    <PlanCard
      title={duration.label}
      subtitle={tier.label}
      badge={recommended ? "Empfohlen" : undefined}
      featured={Boolean(duration.featured && recommended)}
      price={tier.price}
      monthly={tier.monthly}
      // The struck-through price is the same period booked as monthly plans,
      // labelled as such — not a fictitious former price.
      compare={{ price: tier.originalPrice, discount: discountPercent(tier.originalPrice, tier.price) }}
      features={homePlanFeatures}
      whatsappLink={tier.whatsappLink}
    />
  );
}
