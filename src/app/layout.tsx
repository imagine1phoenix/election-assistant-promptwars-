import type { Metadata } from "next";
import { Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ElectionGuide India - Empowering Your Vote",
  description: "A cozy, interactive guide to understanding Indian elections - registration, timelines, voting process, and more.",
};

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
      <body className="min-h-full flex flex-col relative selection:bg-secondary selection:text-text bg-[var(--background)] text-[var(--foreground)]">
        <Navbar />
        <main className="flex-1 pt-28 pb-16 z-0 relative flex flex-col max-w-7xl mx-auto w-full px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
