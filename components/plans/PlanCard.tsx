import Link from "next/link";

type PlanCardProps = {
  /** Duration, e.g. "1 Jahr". */
  title: string;
  /** Device count, e.g. "1 Gerät". */
  subtitle: string;
  badge?: string;
  featured?: boolean;
  price: number;
  /** Price per month, German-formatted ("3,75"). */
  monthly: string;
  /** Same period booked as monthly plans — our own tariff, not a fictitious former price. */
  compare?: { price: number; discount: number };
  features: string[];
  whatsappLink: string;
  footerLink?: { href: string; label: string };
};

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.04 21.5h-.01a9.43 9.43 0 01-4.8-1.32l-.35-.2-3.57.93.95-3.48-.22-.36a9.42 9.42 0 01-1.45-5.03c0-5.2 4.24-9.44 9.46-9.44a9.4 9.4 0 016.68 2.77 9.38 9.38 0 012.77 6.68c0 5.21-4.24 9.45-9.46 9.45zm8.04-17.49A11.3 11.3 0 0012.04.67C5.77.67.67 5.77.67 12.03c0 2 .52 3.96 1.52 5.68L.57 23.6l6.03-1.58a11.35 11.35 0 005.43 1.38h.01c6.26 0 11.36-5.1 11.36-11.36 0-3.03-1.18-5.89-3.32-8.03z" />
    </svg>
  );
}

/** Plan card shared by the homepage plan overview and the /tarife page. */
export function PlanCard({
  title,
  subtitle,
  badge,
  featured,
  price,
  monthly,
  compare,
  features,
  whatsappLink,
  footerLink,
}: PlanCardProps) {
  return (
    <div
      className={`group relative h-full rounded-[24px] p-px transition-transform duration-500 ease-out hover:-translate-y-1.5 ${
        featured
          ? "plan-border-animated shadow-[0_0_60px_rgba(124,58,237,0.35)]"
          : "bg-gradient-to-b from-white/20 via-white/5 to-aqua/20 hover:from-aqua/70 hover:to-aqua/40"
      }`}
    >
      <div className="relative flex h-full flex-col overflow-hidden rounded-[23px] bg-black p-7 sm:p-8">
        {/* Soft light at the top of the card */}
        <span
          aria-hidden
          className={`pointer-events-none absolute -top-28 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full blur-3xl transition-opacity duration-500 ${
            featured ? "bg-aqua-fill/45" : "bg-aqua-fill/15 group-hover:bg-aqua-fill/30"
          }`}
        />

        <div className="relative flex items-start justify-between gap-3">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua">{subtitle}</span>
            <h3 className="text-2xl font-bold tracking-tight text-white">{title}</h3>
          </div>
          {badge ? (
            <span className="rounded-full bg-gradient-to-r from-aqua-fill to-fuchsia-600 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-[0_4px_20px_rgba(192,38,211,0.4)]">
              {badge}
            </span>
          ) : null}
        </div>

        <div className="relative mt-7 flex items-end gap-1.5">
          <span className="text-gradient-aqua text-6xl font-extrabold leading-none tracking-tight">{price}</span>
          <span className="mb-1 text-2xl font-bold text-white">€</span>
          <span className="mb-1.5 ml-1 text-sm text-muted">/ {title}</span>
        </div>

        <div className="relative mt-4 flex flex-wrap items-center gap-2 text-xs">
          <span className="rounded-full border border-aqua/30 bg-aqua/10 px-3 py-1 font-semibold text-aqua-soft">
            rechnerisch {monthly}€ pro Monat
          </span>
          {compare && compare.discount > 0 ? (
            <>
              <span className="rounded-full bg-fuchsia-500/15 px-2.5 py-1 font-bold text-fuchsia-300">
                -{compare.discount}%
              </span>
              <span className="text-muted">
                statt <span className="line-through">{compare.price}€</span> im Monatstarif
              </span>
            </>
          ) : null}
        </div>

        <div aria-hidden className="relative my-7 h-px bg-gradient-to-r from-transparent via-aqua/40 to-transparent" />

        <ul className="relative flex flex-col gap-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm text-white/80">
              <span
                aria-hidden
                className="mt-px flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-aqua/15 text-aqua ring-1 ring-aqua/30"
              >
                <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={3}>
                  <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="relative mt-auto flex flex-col gap-3 pt-8">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition-all duration-300 ${
              featured
                ? "bg-gradient-to-r from-aqua-fill to-fuchsia-600 text-white shadow-[0_8px_30px_rgba(124,58,237,0.45)] hover:brightness-110"
                : "border border-white/15 bg-white/5 text-white hover:border-aqua hover:bg-aqua-fill"
            }`}
          >
            <WhatsAppIcon />
            Per WhatsApp bestellen
          </a>
          {footerLink ? (
            <Link
              href={footerLink.href}
              className="text-center text-xs text-muted underline underline-offset-4 hover:text-aqua"
            >
              {footerLink.label}
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}
