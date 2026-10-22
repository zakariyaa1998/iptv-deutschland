export const WHATSAPP_NUMBER = "971505743472";

export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hallo, ich habe eine Frage zu IPTV Deutschland. Können Sie mir weiterhelfen?";

export const WHATSAPP_DEFAULT_LINK = buildWhatsAppLink(WHATSAPP_DEFAULT_MESSAGE);

export const WHATSAPP_ORDER_MESSAGE =
  "Hallo, ich möchte ein IPTV Deutschland Abo bestellen. Welche Schritte sind nötig?";

export const WHATSAPP_ORDER_LINK = buildWhatsAppLink(WHATSAPP_ORDER_MESSAGE);
