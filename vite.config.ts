import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { imagetools } from "vite-imagetools";

export default defineConfig({
  plugins: [imagetools()],
  nitro: {
    preset: "vercel",
  },
  vite: {
    server: {
      allowedHosts: ["homolog.hrzenergia.com.br"],
    },
  },
});
