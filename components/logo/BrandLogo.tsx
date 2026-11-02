import Image from "next/image";

type BrandLogoProps = {
  className?: string;
};

// Main brand lockup (TV icon + "Deutschland IPTV" wordmark), used in the header
// and footer. Source file is 1162×312, rendered at a fixed 40px height.
export function BrandLogo({ className }: BrandLogoProps) {
  return (
    <Image
      src="/images/main-logo.png"
      alt="Deutschland IPTV"
      width={149}
      height={40}
      priority
      className={`h-10 w-auto ${className ?? ""}`}
    />
  );
}
