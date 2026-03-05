import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FrameIQ - Pro Screen Capture & Recording for macOS",
  description:
    "Capture screenshots, record your screen, annotate with pro tools, and share instantly. The powerful Snagit alternative built natively for macOS.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
