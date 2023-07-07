import { defineConfig } from "astro/config";
import pandacss from "@pandacss/dev/astro";
import sitemap from "@astrojs/sitemap";
import { SITE_CONFIG } from "./src/lib/consts";

// https://astro.build/config
export default defineConfig({
  integrations: [pandacss(), sitemap({})],
  site: SITE_CONFIG.url,
});
