import { defineConfig } from "astro/config";
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless"; 

export default defineConfig({
  output: "server", 
  adapter: vercel({
    runtime: 'nodejs22.x', 
  }),
  integrations: [
    tailwind(), 
    icon(),
    sitemap(),
  ],
});
