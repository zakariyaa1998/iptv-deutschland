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
  whatsappLink: string;
};

export type PricingDuration = {
  id: string;
  label: string;
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

function buildTiers(
  durationLabel: string,
  entries: { devices: 1 | 2 | 3; originalPrice: number; price: number }[]
): DeviceTier[] {
  return entries.map(({ devices, originalPrice, price }) => ({
    id: `${durationLabel}-${devices}`,
    devices,
    label: devices === 1 ? "1 Gerät" : `${devices} Geräte`,
    originalPrice,
    price,
    whatsappLink: buildWhatsAppLink(
      `Hallo, ich möchte das IPTV Deutschland Abo "${durationLabel}" für ${devices} Gerät${
        devices > 1 ? "e" : ""
      } (${price}€) bestellen.`
    ),
  }));
}

export const pricingDurations: PricingDuration[] = [
  {
    id: "1-month",
    label: "1 Monat",
    tiers: buildTiers("1 Monat", [
      { devices: 1, originalPrice: 15, price: 10 },
      { devices: 2, originalPrice: 22, price: 16 },
      { devices: 3, originalPrice: 29, price: 20 },
    ]),
  },
  {
    id: "3-months",
    label: "3 Monate",
    tiers: buildTiers("3 Monate", [
      { devices: 1, originalPrice: 35, price: 20 },
      { devices: 2, originalPrice: 49, price: 30 },
      { devices: 3, originalPrice: 59, price: 40 },
    ]),
  },
  {
    id: "6-months",
    label: "6 Monate",
    tiers: buildTiers("6 Monate", [
      { devices: 1, originalPrice: 49, price: 30 },
      { devices: 2, originalPrice: 69, price: 40 },
      { devices: 3, originalPrice: 89, price: 55 },
    ]),
  },
  {
    id: "1-year",
    label: "1 Jahr",
    badge: "Unsere Empfehlung",
    featured: true,
    tiers: buildTiers("1 Jahr", [
      { devices: 1, originalPrice: 79, price: 40 },
      { devices: 2, originalPrice: 99, price: 70 },
      { devices: 3, originalPrice: 129, price: 100 },
    ]),
  },
  {
    id: "2-years",
    label: "2 Jahre",
    badge: "Längste Laufzeit",
    tiers: buildTiers("2 Jahre", [
      { devices: 1, originalPrice: 119, price: 70 },
      { devices: 2, originalPrice: 149, price: 120 },
      { devices: 3, originalPrice: 199, price: 170 },
    ]),
  },
];

/** Single-device entry price per duration — used for the compact homepage overview. */
export const startingPrices = pricingDurations.map((duration) => ({
  id: duration.id,
  label: duration.label,
  badge: duration.badge,
  featured: duration.featured,
  price: duration.tiers[0].price,
}));
