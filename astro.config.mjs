import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://christian-liyanto.github.io",
  base: "/portfolio",
  vite: {
    plugins: [tailwindcss()],
  },
});
