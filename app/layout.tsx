import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";

const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-anton", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://frameiq.app"),
  title: { default: "FrameIQ — News, explained through evidence", template: "%s · FrameIQ" },
  description:
    "Calm, evidence-based explainers on crashes, disasters, science, and technology. Watch FrameIQ, explore the sources, and put the numbers in context.",
  openGraph: {
    type: "website",
    siteName: "FrameIQ",
    locale: "en_US",
    title: "FrameIQ — News, explained through evidence",
    description: "Calm explainers. Visible sources. A clearer picture.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "FrameIQ — News, explained through evidence" }],
  },
  twitter: { card: "summary_large_image" },
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
      <body className={`${anton.variable} ${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
