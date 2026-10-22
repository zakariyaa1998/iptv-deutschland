import Image from "next/image";

type BrandLogoProps = {
  className?: string;
};

// Main brand lockup (TV icon + "Deutschland IPTV" wordmark), used in the header
// and footer. Source file is 1684×312, rendered at a fixed 32px height.
export function BrandLogo({ className }: BrandLogoProps) {
  return (
    <Image
      src="/images/main-logo.png"
      alt="Deutschland IPTV"
      width={173}
      height={32}
      priority
      className={`h-8 w-auto ${className ?? ""}`}
    />
  );
}
