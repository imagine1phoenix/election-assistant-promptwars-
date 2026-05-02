import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel automatically detects Next.js and sets output correctly
  // These are production optimizations
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
