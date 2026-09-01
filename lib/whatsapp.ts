export const WHATSAPP_NUMBER = "971505743472";

export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hallo Deutschland IPTV Support, ich interessiere mich für ein IPTV Abo. Können Sie mir bitte weitere Informationen schicken?";

export const WHATSAPP_DEFAULT_LINK = buildWhatsAppLink(WHATSAPP_DEFAULT_MESSAGE);

export const WHATSAPP_ORDER_MESSAGE =
  "Hallo IPTV Deutschland, ich möchte gerne jetzt ein IPTV-Abo bestellen. Vielen Dank!";

export const WHATSAPP_ORDER_LINK = buildWhatsAppLink(WHATSAPP_ORDER_MESSAGE);
