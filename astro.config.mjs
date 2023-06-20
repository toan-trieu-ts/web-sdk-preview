import { defineConfig } from "astro/config";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://toan-trieu-ts.github.io",
  base: "/web-sdk-preview",
  integrations: [svelte()]
});