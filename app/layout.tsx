import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Faisal Aqdas — Full Stack & AI Automation Engineer",
  description:
    "Portfolio of Faisal Aqdas, a Full Stack & AI Automation Engineer with 8+ years of experience building scalable SaaS platforms, AI-powered systems, and modern React/Next.js applications.",
  keywords: [
    "Full Stack Developer",
    "AI Automation Engineer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Portfolio",
  ],
  openGraph: {
    title: "Faisal Aqdas — Full Stack & AI Automation Engineer",
    description:
      "8+ years building scalable SaaS platforms and AI-powered automation systems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faisal Aqdas — Full Stack & AI Automation Engineer",
    description:
      "8+ years building scalable SaaS platforms and AI-powered automation systems.",
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
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-bg-primary font-sans text-text-primary">
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Faisal Aqdas",
              jobTitle: "Full Stack & AI Automation Engineer",
              email: "faisalaqdas@gmail.com",
              url: "https://www.linkedin.com/in/faisalaqdas",
              sameAs: ["https://www.linkedin.com/in/faisalaqdas"],
              knowsAbout: [
                "React",
                "Next.js",
                "Node.js",
                "TypeScript",
                "AI Automation",
                "Claude API",
                "OpenAI",
                "Vapi",
                "n8n",
                "GCP",
                "PostgreSQL",
                "Redis",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
