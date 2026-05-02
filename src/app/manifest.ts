import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ElectionGuide India",
    short_name: "ElectionGuide",
    description: "Voter registration made simple. Your complete guide to voting in India.",
    start_url: "/",
    display: "standalone",
    background_color: "#F9F7F5",
    theme_color: "#5D4432",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      // In a real app, you'd add 192x192 and 512x512 icons here for true PWA support
      // {
      //   src: "/icon-192x192.png",
      //   sizes: "192x192",
      //   type: "image/png",
      // },
      // {
      //   src: "/icon-512x512.png",
      //   sizes: "512x512",
      //   type: "image/png",
      // }
    ],
  };
}
