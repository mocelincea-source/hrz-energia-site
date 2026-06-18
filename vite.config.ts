// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// nitro.preset overrides the default Cloudflare preset when building outside
// the Lovable sandbox — targets a standalone Node.js server (PM2 / EC2).
export default defineConfig({
  nitro: {
    preset: "node-server",
    output: {
      dir: "dist",
    },
  },
  vite: {
    server: {
      allowedHosts: ["homolog.hrzenergia.com.br"],
    },
  },
});
