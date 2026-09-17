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

// Runs before React hydrates so the page never flashes the wrong
// theme on load. Reads the saved preference (falls back to dark,
// this site's default) and sets it on <html> synchronously.
const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored === 'light' || stored === 'dark' ? stored : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
