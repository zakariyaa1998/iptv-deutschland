type LogoMarkProps = {
  size?: number;
  className?: string;
  inkColor?: string;
  accentColor?: string;
};

// Brand mark: a bold geometric "D" monogram (for "Deutschland") built from
// exactly two shapes — a straight spine and a thick semicircular bowl. It is a
// custom, ownable letterform rather than a generic IPTV/play/wifi glyph, and
// stays legible at favicon sizes because it's just two bold strokes. The
// bowl's rounded, sweeping curve is the only "signal" cue — an abstract nod
// to a broadcast wave — without resorting to a play triangle, pause bars, or
// literal antenna/wifi icon.
//
// This exact path data is shared verbatim across every rendering of the
// mark — this inline component (used by BrandLogo), the favicon
// (app/icon.tsx), the schema.org publisher logo (app/logo/route.tsx), and
// the Open Graph image (app/opengraph-image.tsx) — so it's pixel-identical
// everywhere. Plain SVG primitives only (no CSS classes) so the same
// markup renders correctly both in the DOM and inside next/og's
// ImageResponse (satori), which cannot read Tailwind classes.
export function LogoMark({
  size = 28,
  className,
  inkColor = "#FFFFFF",
  accentColor = "#4BEB1E",
}: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M18 9 A15 15 0 0 1 33 24 A15 15 0 0 1 18 39"
        stroke={accentColor}
        strokeWidth="7"
        strokeLinecap="round"
      />
      <rect x="11" y="9" width="7" height="30" rx="3.5" fill={inkColor} />
    </svg>
  );
}
