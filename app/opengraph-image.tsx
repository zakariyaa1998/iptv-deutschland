import { ImageResponse } from "next/og";
import { LogoMark } from "@/components/logo/LogoMark";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#000000",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(75, 235, 30,0.3), transparent 45%), radial-gradient(circle at 80% 80%, rgba(75, 235, 30,0.18), transparent 50%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 96,
              height: 96,
              borderRadius: 24,
              border: "2px solid #4BEB1E",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <LogoMark size={64} />
          </div>
          <div style={{ display: "flex", fontSize: 84, fontWeight: 700, color: "#FFFFFF" }}>
            Deutschland&nbsp;<span style={{ color: "#4BEB1E" }}>IPTV</span>
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 28, fontSize: 32, color: "#B3B3B3" }}>
          Premium IPTV aus Deutschland
        </div>
      </div>
    ),
    { ...size }
  );
}
