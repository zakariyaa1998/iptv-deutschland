"use client";

import { useEffect, useRef, useState } from "react";

const DURATION_MS = 1800;

// Counts from 0 to `value` the first time it scrolls into view. Screen readers
// get the final value directly; the animated digits are hidden from them.
export function CountUp({ value, suffix = "", className }: { value: number; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const progress = reducedMotion ? 1 : Math.min((now - start) / DURATION_MS, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCurrent(progress === 1 ? value : Math.floor(eased * (value + 1)));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <span ref={ref} className={className}>
      <span className="sr-only">{`${value}${suffix}`}</span>
      <span aria-hidden className="tabular-nums">{`${current}${suffix}`}</span>
    </span>
  );
}
