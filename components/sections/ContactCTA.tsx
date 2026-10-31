import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_DEFAULT_LINK } from "@/lib/whatsapp";

const TELEGRAM_LINK = "https://t.me/+971505743472";

export function ContactCTA() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="flex flex-col gap-8 rounded-2xl border border-border bg-background-elevated p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex max-w-xl flex-col gap-3">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Noch eine Frage vor der Bestellung?
            </h2>
            <p className="text-base leading-relaxed text-muted">
              Schreiben Sie uns, welches Gerät Sie nutzen und wie viele Bildschirme Sie brauchen.
              Wir sagen Ihnen, welcher Tarif passt.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href={WHATSAPP_DEFAULT_LINK} external variant="whatsapp">
              WhatsApp
            </Button>
            <Button href={TELEGRAM_LINK} external variant="telegram">
              Telegram
            </Button>
            <Button href="/kontakt" variant="outline">
              Kontaktformular
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
