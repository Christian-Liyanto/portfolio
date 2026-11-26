export type StackCategory = "core" | "platform" | "gameplay" | "other";

export const stackCategories: {
  id: StackCategory;
  label: string;
  headingClassName: string;
  badgeClassName: string;
}[] = [
  {
    id: "core",
    label: "Core tech",
    headingClassName: "text-white",
    badgeClassName: "border-cyan-400/60 bg-cyan-400/40 text-white",
  },
  {
    id: "platform",
    label: "Platforms & integrations",
    headingClassName: "text-white",
    badgeClassName: "border-blue-400/60 bg-blue-400/40 text-white",
  },
  {
    id: "gameplay",
    label: "Gameplay systems",
    headingClassName: "text-white",
    badgeClassName: "border-violet-400/60 bg-violet-400/40 text-white",
  },
  {
    id: "other",
    label: "Other tools",
    headingClassName: "text-white",
    badgeClassName: "border-white/40 bg-white/20 text-white",
  },
];

const stackTagCategories: Record<string, StackCategory> = {
  "a* pathfinding": "gameplay",
  "behavior trees": "gameplay",
  "browser extension": "platform",
  "c#": "core",
  combat: "gameplay",
  devvit: "platform",
  "gameplay ui": "gameplay",
  "hybrid casual": "gameplay",
  idle: "gameplay",
  "idle rpg": "gameplay",
  kaia: "platform",
  "line mini dapp": "platform",
  localization: "gameplay",
  mobile: "platform",
  pathfinding: "gameplay",
  pwa: "platform",
  react: "core",
  reddit: "platform",
  "unity / web": "core",
  unity: "core",
  webgl: "platform",
  web: "platform",
  "x / twitter": "platform",
  windows: "platform",
};

export function getStackCategory(tag: string): StackCategory {
  return stackTagCategories[tag.trim().toLowerCase()] ?? "other";
}
