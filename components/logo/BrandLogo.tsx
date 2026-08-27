import { LogoMark } from "./LogoMark";

type BrandLogoProps = {
  className?: string;
  textClassName?: string;
  markSize?: number;
};

// Icon + wordmark brand lockup, used consistently in the header, footer, and
// anywhere else the brand needs to appear. The mark (see LogoMark) is a
// geometric "D" monogram, not a play/pause control. "Deutschland" sits in
// the neutral foreground color and "IPTV" in the brand green, per the
// Black + #4BEB1E identity — the mark's bowl reuses the same green so it
// reads as one system rather than a decorative add-on.
export function BrandLogo({ className, textClassName = "text-lg", markSize = 24 }: BrandLogoProps) {
  return (
    <span className={`inline-flex items-center gap-2 ${className ?? ""}`}>
      <LogoMark size={markSize} />
      <span className={`font-display font-bold tracking-tight ${textClassName}`}>
        <span className="text-foreground">Deutschland</span> <span className="text-aqua">IPTV</span>
      </span>
    </span>
  );
}
