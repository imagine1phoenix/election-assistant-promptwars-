import type { Metadata } from "next";
import { Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AccessibilityMenu } from "@/components/AccessibilityMenu";
import { AIAssistant } from "@/components/ai/AIAssistant";
import "@/lib/firebase/config"; // Initialize Firebase Google Service
import { GoogleAnalytics } from "@next/third-parties/google";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export const viewport: import("next").Viewport = {
  themeColor: "#5D4432",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ElectionGuide India — Voter Registration Made Simple",
    template: "%s | ElectionGuide India",
  },
  description:
    "Complete guide to voter registration in India. Check eligibility, find requirements, locate your constituency, and register to vote. Interactive wizard, timeline, and FAQ for every citizen.",
  keywords: [
    "voter registration india",
    "how to vote in india",
    "epic card",
    "election commission",
    "voter id",
    "NVSP",
    "Form 6",
    "polling booth",
    "constituency finder",
    "मतदाता पंजीकरण",
  ],
  authors: [{ name: "ElectionGuide Team" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://electionguide.in",
    title: "ElectionGuide India — Your Complete Voting Guide",
    description:
      "Navigate the Indian election process with ease. Registration, timelines, requirements, and a personalized wizard to guide every citizen.",
    siteName: "ElectionGuide India",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ElectionGuide India — Empowering Your Vote",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ElectionGuide India",
    description: "Voter registration made simple. Your complete guide to voting in India.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
};

function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "GovernmentService",
    name: "Voter Registration Guide — ElectionGuide India",
    description:
      "A comprehensive, interactive guide to voter registration and the election process in India.",
    serviceType: "Electoral Service",
    provider: {
      "@type": "GovernmentOrganization",
      name: "Election Commission of India",
      url: "https://eci.gov.in",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    url: "https://electionguide.in",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Root Layout Component
 * 
 * Defines the global HTML structure, fonts, accessibility wrappers, 
 * navigation, and footer for the entire application.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - The page content to render
 * @returns {React.ReactElement} The root HTML document
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${jetbrainsMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <StructuredData />
      </head>
      <body className="min-h-full flex flex-col relative selection:bg-secondary selection:text-text bg-[var(--background)] text-[var(--foreground)]">
        {/* Skip to content link for keyboard accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        {/* India tricolor stripe at top */}
        <div className="india-stripe" aria-hidden="true" />

        <Navbar />
        <main
          id="main-content"
          className="flex-1 pt-28 pb-16 z-0 relative flex flex-col max-w-7xl mx-auto w-full px-4"
          role="main"
        >
          {children}
        </main>
        <Footer />
        <AccessibilityMenu />
        <AIAssistant />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || "G-XYZ1234567"} />
      </body>
    </html>
  );
}
