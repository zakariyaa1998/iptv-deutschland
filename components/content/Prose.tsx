import Link from "next/link";
import type { ReactNode } from "react";

/** Readable text column for long-form page content. */
export function Prose({ children }: { children: ReactNode }) {
  return <div className="mx-auto flex w-full max-w-3xl flex-col gap-12 py-14 sm:py-20">{children}</div>;
}

export function ProseSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{title}</h2>
      <div className="flex flex-col gap-4 text-base leading-relaxed text-muted">{children}</div>
    </section>
  );
}

export function ProseList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-aqua" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Steps({ items }: { items: { title: string; text: ReactNode }[] }) {
  return (
    <ol className="flex flex-col gap-5">
      {items.map((item, index) => (
        <li key={item.title} className="flex gap-4 rounded-2xl border border-border bg-background-elevated p-5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-aqua text-sm font-bold text-black">
            {index + 1}
          </span>
          <div className="flex flex-col gap-1.5">
            <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
            <p className="text-sm leading-relaxed text-muted">{item.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="text-aqua underline underline-offset-4 hover:text-aqua-soft">
      {children}
    </Link>
  );
}
