"use client";

import { useState } from "react";
import { PricingCard } from "@/components/plans/PricingCard";
import { pricingDurations } from "@/lib/plans";

const DEFAULT_DURATION_ID = "1-year";

export function PricingTabs() {
  const [activeId, setActiveId] = useState(DEFAULT_DURATION_ID);

  const activeDuration = pricingDurations.find((duration) => duration.id === activeId) ?? pricingDurations[0];

  return (
    <div className="flex w-full flex-col items-center gap-10">
      <div
        role="tablist"
        aria-label="Laufzeit auswählen"
        className="flex flex-wrap items-center justify-center gap-1.5 rounded-full border border-border bg-background-elevated/60 p-1.5"
      >
        {pricingDurations.map((duration) => {
          const isActive = duration.id === activeId;
          return (
            <button
              key={duration.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(duration.id)}
              className={`rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-300 sm:px-5 ${
                isActive
                  ? "bg-aqua text-black shadow-[0_0_20px_rgba(75,235,30,0.35)]"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {duration.label}
            </button>
          );
        })}
      </div>

      {activeDuration.badge ? (
        <span
          key={`badge-${activeDuration.id}`}
          className="animate-fade-up inline-flex items-center gap-2 rounded-full bg-aqua px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-black shadow-[0_4px_16px_rgba(75,235,30,0.4)]"
        >
          {activeDuration.badge}
        </span>
      ) : null}

      <div key={activeDuration.id} className="animate-fade-up grid w-full items-stretch gap-6 lg:grid-cols-3">
        {activeDuration.tiers.map((tier) => (
          <PricingCard key={tier.id} tier={tier} duration={activeDuration} recommended={tier.devices === 2} />
        ))}
      </div>
    </div>
  );
}
