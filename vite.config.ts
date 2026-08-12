import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { imagetools } from "vite-imagetools";

export default defineConfig({
  plugins: [imagetools()],
  nitro: {
    preset: "vercel",
  },
  vite: {
    server: {
      allowedHosts: [
        "homolog.hrzenergia.com.br",
        "dev.hrzenergia.com.br",
        "hrzenergia.com.br",
      ],
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            "vendor-react": ["react", "react-dom"],
            "vendor-router": ["@tanstack/react-router", "@tanstack/react-start"],
            "vendor-motion": ["motion"],
            "vendor-i18n": ["i18next", "react-i18next"],
            "vendor-ui": [
              "@radix-ui/react-dialog",
              "@radix-ui/react-dropdown-menu",
              "@radix-ui/react-accordion",
              "@radix-ui/react-tabs",
              "@radix-ui/react-select",
              "@radix-ui/react-tooltip",
            ],
          },
        },
      },
    },
  },
});
