// astro.config.ts
// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://fmp9.github.io/helpingheads-portfolio-website/",
  base: "/helpingheads-portfolio-website/",
  vite: { plugins: [tailwindcss()] },
  integrations: [sitemap(), react()],
});
