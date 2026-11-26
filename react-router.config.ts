import type { Config } from "@react-router/dev/config";
import siteConfig from "./site.config.json";

export default {
  appDirectory: "src",
  basename: siteConfig.basePath,
  ssr: false,
  future: {
    v8_middleware: true,
    v8_splitRouteModules: true,
    v8_viteEnvironmentApi: true,
    v8_passThroughRequests: true,
    v8_trailingSlashAwareDataRequests: true,
  },
  prerender: [
    "/",
    "/404",
    "/projects/realm-hunter",
    "/projects/wonder-tales",
    "/projects/wonderbits",
    "/projects/wordcraft",
    "/projects/meowquest",
  ],
} satisfies Config;
