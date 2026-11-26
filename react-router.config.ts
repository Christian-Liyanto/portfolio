import type { Config } from "@react-router/dev/config";

export default {
  basename: "/portfolio",
  ssr: false,
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
