import Image from "next/image";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
  image: { src: string; alt: string; width: number; height: number };
  actions?: ReactNode;
};

/** Two-column page opener (H1 + lead text beside an image) used by every content page. */
export function PageIntro({ eyebrow, title, children, image, actions }: PageIntroProps) {
  return (
    <section className="border-b border-border py-14 sm:py-20">
      <Container className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div className="flex flex-col gap-5">
          <span className="w-fit border-l-2 border-aqua pl-3 text-xs font-semibold uppercase tracking-[0.2em] text-aqua">
            {eyebrow}
          </span>
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <div className="flex flex-col gap-4 text-base leading-relaxed text-muted sm:text-lg">{children}</div>
          {actions ? <div className="flex flex-col gap-3 pt-2 sm:flex-row">{actions}</div> : null}
        </div>
        <div className="overflow-hidden rounded-2xl border border-border">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            priority
            sizes="(max-width: 1024px) 100vw, 560px"
            className="h-auto w-full object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
