import { ImageResponse } from "next/og";

export const alt = "FrameIQ — News, explained through evidence";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", background: "#081827", color: "white", padding: "64px", borderTop: "8px solid #62D9EF" }}>
      <div style={{ display: "flex", fontSize: 48, fontWeight: 700 }}>Frame<span style={{ color: "#62D9EF" }}>IQ</span></div>
      <div style={{ display: "flex", flexDirection: "column", fontSize: 78, fontWeight: 700, letterSpacing: "-3px", lineHeight: 1.1 }}><span>News, explained</span><span style={{ color: "#62D9EF" }}>through evidence.</span></div>
      <div style={{ display: "flex", color: "#A9BAC9", fontSize: 24 }}>CRASHES / DISASTERS / SCIENCE / TECHNOLOGY</div>
    </div>,
    size,
  );
}
