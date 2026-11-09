import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import { about, profile } from "@/content";
import "./globals.css";

// Variable fonts: every weight is available, so no weight list is needed.
const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const SITE = "https://caliphridwan.vercel.app";
const TITLE =
  "Ridwan Abdulkareem — Full-stack developer, AI automation and data";
const DESCRIPTION =
  "Full-stack developer, AI automation specialist, data analyst and graphic designer in Ilorin, Nigeria. Open to remote roles and projects worldwide.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE,
    siteName: "Ridwan Abdulkareem",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Ridwan Abdulkareem" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#12112b" },
    { media: "(prefers-color-scheme: light)", color: "#f4f3fa" },
  ],
};

// Runs before first paint so the page never flashes the wrong theme.
// Uses the saved choice, otherwise the visitor's system setting.
const themeInit = `
(function(){try{
  var s=localStorage.getItem('theme');
  var t=(s==='light'||s==='dark')?s:(window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');
  document.documentElement.setAttribute('data-theme',t);
}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();
`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: SITE,
  jobTitle: "Full-stack developer and AI automation specialist",
  description: DESCRIPTION,
  email: profile.email,
  address: { "@type": "PostalAddress", addressLocality: "Ilorin", addressCountry: "NG" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Bayero University Kano" },
  knowsAbout: ["Next.js", "TypeScript", "PostgreSQL", "Workflow automation", "Data analysis", "Graphic design"],
  sameAs: profile.socials.map((s) => s.url),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${display.variable} ${body.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
