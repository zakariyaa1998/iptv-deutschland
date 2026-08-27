import { ImageResponse } from "next/og";
import { LogoMark } from "@/components/logo/LogoMark";

export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

// A square, high-resolution brand logo used as schema.org Organization/Article
// `publisher.logo` (Google's Rich Results guidelines require a real image URL
// of at least 112x112px here — the dynamic favicon in app/icon.tsx is only 32x32).
export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#000000",
          borderRadius: 64,
        }}
      >
        <LogoMark size={320} />
      </div>
    ),
    { ...size }
  );
}
