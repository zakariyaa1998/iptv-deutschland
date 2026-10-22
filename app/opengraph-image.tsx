import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  const logo = await readFile(join(process.cwd(), "public/images/main-logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

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
          background: "#141414",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(75, 235, 30,0.25), transparent 45%), radial-gradient(circle at 80% 80%, rgba(75, 235, 30,0.15), transparent 50%)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse needs a plain img */}
        <img src={logoSrc} width={842} height={156} alt="" />
        <div style={{ display: "flex", marginTop: 40, fontSize: 36, color: "#B3B3B3" }}>
          Fernsehen über das Internet
        </div>
      </div>
    ),
    { ...size }
  );
}
