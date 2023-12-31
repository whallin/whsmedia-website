import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";

import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  site: "https://whsmedia.se",
  integrations: [sitemap({
    i18n: {
      defaultLocale: "sv",
      locales: {
        sv: "sv-SE"
      }
    }
  }), tailwind(), partytown({
    config: {
      forward: ["dataLayer.push"]
    }
  }), prefetch({
    throttle: 3,
  })],
  image: {
    remotePatterns: [{
      protocol: "https"
    }]
  }
});