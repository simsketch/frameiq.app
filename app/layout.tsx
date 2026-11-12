import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { PULSE_LOGO_OPTION } from "../lib/brand";
import "./globals.css";

const plexSans = IBM_Plex_Sans({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-plex-sans", display: "swap" });
const plexMono = IBM_Plex_Mono({ weight: "500", subsets: ["latin"], variable: "--font-plex-mono", display: "swap" });

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
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "FrameIQ — News, explained through evidence" }],
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: [{ url: `/brand/pulse/${PULSE_LOGO_OPTION}-favicon.svg`, type: "image/svg+xml" }, { url: "/brand/favicon.ico", sizes: "any" }],
    apple: "/brand/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${plexSans.variable} ${plexMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
