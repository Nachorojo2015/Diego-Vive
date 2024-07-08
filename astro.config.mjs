import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@vercel/analytics";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [tailwind()],
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
});
