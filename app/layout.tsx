import type { Metadata } from "next";
import { Fraunces, Space_Grotesk } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ridwan Abdulkareem — AI Automation, Full-Stack & Data",
  description:
    "Ridwan Abdulkareem builds AI automations, full-stack web apps, data dashboards, and interfaces — available for remote work.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Ridwan Abdulkareem — Portfolio",
    description:
      "AI Automation Specialist · Full-Stack Developer · Data Analyst · Graphics Designer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${spaceGrotesk.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
