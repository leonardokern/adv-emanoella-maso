import { ImageResponse } from "next/og";

export const alt =
  "Emanoella Krauzer Maso — Advogada em Florianópolis · Direito Previdenciário, do Consumidor e Civil";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
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
          backgroundColor: "#1a1a1f",
          color: "#f4f1ea",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 36,
            left: 36,
            right: 36,
            bottom: 36,
            border: "2px solid #b08d57",
            display: "flex",
          }}
        />
        <div
          style={{
            width: 84,
            height: 84,
            border: "3px solid #b08d57",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 40,
            color: "#b08d57",
            marginBottom: 36,
          }}
        >
          EM
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 600,
            textAlign: "center",
            lineHeight: 1.1,
            display: "flex",
          }}
        >
          Emanoella Krauzer Maso
        </div>
        <div
          style={{
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#b08d57",
            marginTop: 22,
            display: "flex",
          }}
        >
          Advocacia & Consultoria
        </div>
        <div
          style={{
            fontSize: 24,
            color: "rgba(244,241,234,0.75)",
            marginTop: 30,
            display: "flex",
          }}
        >
          Advogada em Florianópolis/SC · Previdenciário · Consumidor · Civil
        </div>
      </div>
    ),
    size
  );
}
