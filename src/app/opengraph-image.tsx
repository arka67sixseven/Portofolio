import { ImageResponse } from "next/og";

export const alt = "Rafif Arkana Putra — portofolio web developer Yogyakarta";
export const size = {
  width: 1200,
  height: 630,
};
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
          justifyContent: "space-between",
          background: "#050505",
          color: "#E6E6E6",
          padding: "64px",
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            fontSize: "20px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#8A8A8A",
          }}
        >
          <div
            style={{
              width: "16px",
              height: "16px",
              background: "#00FF88",
            }}
          />
          rafif@portfolio:~ / portofolio 2026
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            fontSize: "88px",
            fontWeight: 700,
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
            color: "#00FF88",
          }}
        >
          <span>$ whoami</span>
          <span style={{ color: "#E6E6E6", fontSize: "72px" }}>
            rafif arkana putra
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #1F1F1F",
            paddingTop: "22px",
            fontSize: "20px",
            color: "#8A8A8A",
          }}
        >
          <span>siswa RPL · web developer · Yogyakarta</span>
          <span>next.js · typescript · tailwind</span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}