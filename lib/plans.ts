import { buildWhatsAppLink } from "./whatsapp";

/** Rounds to the nearest whole-percent discount between an original and current price. */
export function discountPercent(originalPrice: number, price: number): number {
  return Math.round(100 - (price / originalPrice) * 100);
}

export type DeviceTier = {
  id: string;
  devices: 1 | 2 | 3;
  label: string;
  originalPrice: number;
  price: number;
  /** Price per month, German-formatted ("3,75"). */
  monthly: string;
  whatsappLink: string;
};

export type PricingDuration = {
  id: string;
  label: string;
  months: number;
  badge?: string;
  featured?: boolean;
  tiers: DeviceTier[];
};

// Kept deliberately free of channel/film counts and uptime promises — only what
// every plan verifiably includes.
export const pricingFeatures: string[] = [
  "Live-TV, Filme und Serien in einem gemeinsamen Zugang",
  "Wiedergabe in HD und Full HD, bei passenden Inhalten auch in 4K",
  "Elektronischer Programmführer (EPG) für die Live-Sender",
  "Nutzbar auf Smart TV, Fire TV, Android TV, Apple TV, MAG-Box, PC und Smartphone",
  "Zugangsdaten und Anleitung kommen per WhatsApp",
  "Hilfe bei Einrichtung und Fragen per WhatsApp und E-Mail",
];

/** Monthly-plan price per device count — the reference for every discount below. */
const MONTHLY_PRICE: Record<1 | 2 | 3, number> = { 1: 12, 2: 19, 3: 26 };

// originalPrice is what the same period would cost in monthly plans
// (monthly price × months), so the shown discount compares against our own tariff.
function buildTiers(
  durationLabel: string,
  months: number,
  entries: { devices: 1 | 2 | 3; price: number }[]
): DeviceTier[] {
  return entries.map(({ devices, price }) => ({
    id: `${durationLabel}-${devices}`,
    devices,
    label: devices === 1 ? "1 Gerät" : `${devices} Geräte`,
    originalPrice: MONTHLY_PRICE[devices] * months,
    price,
    monthly: formatEuro(price / months),
    whatsappLink: buildWhatsAppLink(
      `Hallo, ich möchte das IPTV Deutschland Abo "${durationLabel}" für ${devices} Gerät${
        devices > 1 ? "e" : ""
      } (${price}€) bestellen.`
    ),
  }));
}

/** 2.5 → "2,50" (German decimal comma). */
function formatEuro(value: number): string {
  return value.toFixed(2).replace(".", ",");
}

export const pricingDurations: PricingDuration[] = [
  {
    id: "1-month",
    label: "1 Monat",
    months: 1,
    tiers: buildTiers("1 Monat", 1, [
      { devices: 1, price: 12 },
      { devices: 2, price: 19 },
      { devices: 3, price: 26 },
    ]),
  },
  {
    id: "3-months",
    label: "3 Monate",
    months: 3,
    tiers: buildTiers("3 Monate", 3, [
      { devices: 1, price: 20 },
      { devices: 2, price: 35 },
      { devices: 3, price: 45 },
    ]),
  },
  {
    id: "6-months",
    label: "6 Monate",
    months: 6,
    tiers: buildTiers("6 Monate", 6, [
      { devices: 1, price: 30 },
      { devices: 2, price: 50 },
      { devices: 3, price: 70 },
    ]),
  },
  {
    id: "1-year",
    label: "1 Jahr",
    months: 12,
    badge: "Unsere Empfehlung",
    featured: true,
    tiers: buildTiers("1 Jahr", 12, [
      { devices: 1, price: 45 },
      { devices: 2, price: 70 },
      { devices: 3, price: 100 },
    ]),
  },
  {
    id: "2-years",
    label: "2 Jahre",
    months: 24,
    badge: "Längste Laufzeit",
    tiers: buildTiers("2 Jahre", 24, [
      { devices: 1, price: 65 },
      { devices: 2, price: 105 },
      { devices: 3, price: 145 },
    ]),
  },
];

// Homepage plan cards: the three longer durations, single-device price. Order and
// wording deliberately differ from the operator's other sites.
export const homePlanFeatures: string[] = [
  "Ein Zugang für Live-TV, Filme und Serien",
  "Programmführer (EPG) für die Live-Sender",
  "Für Smart TV, Stick, Box, Handy und PC",
  "HD und Full HD, 4K bei passenden Inhalten",
  "Endet automatisch, keine Verlängerung",
  "Hilfe per WhatsApp und E-Mail",
];

const HOME_PLAN_IDS = new Set(["6-months", "1-year", "2-years"]);

export const homePlans = pricingDurations
  .filter((duration) => HOME_PLAN_IDS.has(duration.id))
  .map((duration) => {
    const tier = duration.tiers[0];
    return {
      id: duration.id,
      label: duration.label,
      badge: duration.badge,
      featured: duration.featured,
      price: tier.price,
      monthly: tier.monthly,
      whatsappLink: tier.whatsappLink,
    };
  });
