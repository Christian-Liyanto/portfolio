import tailwindcss from "@tailwindcss/vite";
import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import siteConfig from "./site.config.json";

export default defineConfig({
  base: siteConfig.basePath,
  plugins: [tailwindcss(), reactRouter()],
});
