import Link from "next/link";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";

type PlanCardProps = {
  title: string;
  badge?: string;
  featured?: boolean;
  price: number;
  /** Line(s) under the price: monthly price, comparison to the monthly tariff. */
  details: ReactNode;
  features: string[];
  whatsappLink: string;
  footerLink?: { href: string; label: string };
};

/** Dark plan card shared by the homepage plan overview and the /tarife page. */
export function PlanCard({ title, badge, featured, price, details, features, whatsappLink, footerLink }: PlanCardProps) {
  return (
    <div
      className={`flex h-full flex-col gap-6 rounded-2xl border border-t-4 bg-background-elevated p-7 ${
        featured ? "border-aqua shadow-[0_0_40px_rgba(75,235,30,0.12)]" : "border-border border-t-aqua/40"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        {badge ? (
          <span className="rounded-md bg-aqua/15 px-2.5 py-1 text-xs font-semibold text-aqua">{badge}</span>
        ) : null}
      </div>

      <div className="flex flex-col gap-1">
        <p className="text-4xl font-bold text-foreground">{price}€</p>
        <div className="flex flex-col gap-0.5 text-sm text-muted">{details}</div>
      </div>

      <ul className="flex flex-col gap-2.5 border-t border-border pt-5">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-muted">
            <span aria-hidden className="mt-0.5 text-aqua">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-col gap-2 pt-2">
        <Button href={whatsappLink} external variant={featured ? "primary" : "outline"} className="w-full">
          Per WhatsApp bestellen
        </Button>
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
  );
}
