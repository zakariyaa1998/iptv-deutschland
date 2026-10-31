import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "whatsapp"
  | "whatsapp-white"
  | "telegram"
  | "outline-dark";

type BaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

const variantClasses: Record<ButtonVariant, string> = {
  // Solid brand-violet fill: dark enough to carry white text.
  primary:
    "bg-aqua-fill text-white hover:brightness-110 shadow-[0_0_0_1px_rgba(124,58,237,0.4)] hover:shadow-[0_0_30px_rgba(124,58,237,0.35)]",
  secondary:
    "bg-background-elevated text-foreground border border-border hover:border-aqua/60 hover:text-aqua",
  outline:
    "bg-transparent text-foreground border border-aqua/50 hover:bg-aqua/10 hover:border-aqua",
  whatsapp: "bg-[#25D366] text-black hover:brightness-110",
  "whatsapp-white":
    "bg-white text-black hover:bg-white/90 shadow-[0_0_0_1px_rgba(255,255,255,0.35)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]",
  telegram: "bg-white text-gray-900 hover:bg-gray-100",
  // Outline treatment for use ON WHITE CARDS: the sitewide "outline" variant defaults to
  // white text (text-foreground), which disappears against a white surface — this variant
  // uses dark text instead. It also borrows the darker "aqua-dim" brand-violet shade rather
  // than the light accent violet, which is too light-toned to read clearly on white.
  "outline-dark":
    "bg-transparent text-[#111111] border border-aqua-dim/60 hover:bg-aqua-dim/10 hover:border-aqua-dim hover:text-aqua-dim",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold tracking-tight transition-all duration-300 ease-out";

type ButtonAsLink = BaseProps & {
  href: string;
  external?: boolean;
};

export function Button({ href, external, variant = "primary", className, children }: ButtonAsLink) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className ?? ""}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
