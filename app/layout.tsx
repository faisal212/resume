import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { Providers } from "./components/providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.faisalaqdas.com'),
  title: "Faisal Aqdas — Senior Frontend Engineer",
  description:
    "Senior Frontend Engineer with 8 years shipping React & TypeScript to Mercedes-Benz, Sonova, Thalia, and TBO Clothing. Multi-tenant architecture, Core Web Vitals under 2s, LLM-embedded AI features.",
  keywords: [
    "Senior Frontend Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "RTK Query",
    "Core Web Vitals",
    "AI automation",
    "multi-tenant",
    "design systems",
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Faisal Aqdas — Senior Frontend Engineer",
    description:
      "8 years shipping React & TypeScript to enterprise clients. Multi-tenant architecture, Core Web Vitals under 2s.",
    url: 'https://www.faisalaqdas.com',
    siteName: 'Faisal Aqdas',
    type: "website",
    locale: "en_US",
    images: [
      {
        url: '/assets/faisal-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Faisal Aqdas — Senior Frontend Engineer',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Faisal Aqdas — Senior Frontend Engineer",
    description:
      "8 years shipping React & TypeScript to enterprise clients. Multi-tenant architecture, Core Web Vitals under 2s.",
    images: ['/assets/faisal-hero.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <Providers>
          {children}
        </Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Faisal Aqdas",
              jobTitle: "Senior Frontend Engineer",
              email: "faisalaqdas@gmail.com",
              url: "https://www.faisalaqdas.com",
              sameAs: [
                "https://www.linkedin.com/in/faisalaqdas",
                "https://github.com/faisal212",
              ],
              knowsAbout: [
                "React",
                "Next.js",
                "TypeScript",
                "RTK Query",
                "Core Web Vitals",
                "AI automation",
                "Claude API",
                "OpenAI",
                "NestJS",
                "PostgreSQL",
                "Redis",
                "BullMQ",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
