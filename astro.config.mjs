import { defineConfig } from "astro/config";
import pandacss from "@pandacss/dev/astro";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [pandacss(), sitemap({})],
  site: "https://www.astro.build",
});
