import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { imagetools } from "vite-imagetools";

export default defineConfig({
  plugins: [imagetools()],
  nitro: {
    preset: process.env.VERCEL ? "vercel" : "node-server",
  },
  vite: {
    server: {
      allowedHosts: [
        "homolog.hrzenergia.com.br",
        "dev.hrzenergia.com.br",
        "hrzenergia.com.br",
      ],
    },
  },
});
