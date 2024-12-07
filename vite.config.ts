import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        short_name: "sp",
        name: "Super Paperclips",
        icons: [
          {
            src: "/super-paperclips/super-paperclips-192x192.svg",
            type: "image/svg+xml",
            sizes: "192x192",
          },
          {
            src: "/super-paperclips/super-paperclips-256x256.svg",
            type: "image/svg+xml",
            sizes: "256x256",
          },
          {
            src: "/super-paperclips/super-paperclips-384x384.svg",
            type: "image/svg+xml",
            sizes: "384x384",
          },
          {
            src: "/super-paperclips/super-paperclips-512x512.svg",
            type: "image/svg+xml",
            sizes: "512x512",
          },
        ],
        start_url: "/super-paperclips/",
        background_color: "#1d1d1f",
        display: "standalone",
        theme_color: "#fcfbfe",
        description:
          "A game based on the idea of artificial intelligence (AI) optimized for a single task: making paperclips!",
      },
    }),
  ],
  base: "/super-paperclips",
  resolve: {
    alias: {
      "@": path.resolve("./src"),
    },
  },
});
