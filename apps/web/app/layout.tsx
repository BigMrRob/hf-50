import { Inter } from "next/font/google";

import { ClerkProvider } from "@clerk/nextjs";
import "./global.css";
import type { Metadata } from "next";
import { Navigation } from "@/components/home-section/navigation";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "HF50 - One Platform for All Your Licenses",
  description:
    "Revolutionizing hunting and fishing licensing across America. One platform for all your outdoor adventure needs across all 50 states.",
  metadataBase: new URL("https://hf50.com"),
  openGraph: {
    title: "HF50 - One Platform for All Your Licenses",
    description:
      "Revolutionizing hunting and fishing licensing across America. One platform for all your outdoor adventure needs across all 50 states.",
    url: "https://hf50.com",
    siteName: "HF50",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "HF50 - Hunting and Fishing Licenses",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HF50 - One Platform for All Your Licenses",
    description:
      "Revolutionizing hunting and fishing licensing across America. One platform for all your outdoor adventure needs across all 50 states.",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${inter.variable} font-sans`}>
        <Navigation />
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
