import type { FaqItem } from "@/lib/faq-data";

/** Accordion list plus its matching FAQPage JSON-LD. */
export function FaqList({ items, withJsonLd = true }: { items: FaqItem[]; withJsonLd?: boolean }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <div className="flex w-full flex-col divide-y divide-border rounded-2xl border border-border bg-background-elevated">
      {withJsonLd ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      ) : null}
      {items.map((item) => (
        <details key={item.question} className="group px-6 py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-foreground marker:content-none">
            {item.question}
            <span aria-hidden className="shrink-0 text-xl leading-none text-aqua transition-transform duration-300 group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-muted">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
