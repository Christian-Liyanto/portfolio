import siteConfig from "../../site.config.json";

export function withBase(path: string): string {
  const clean = path.replace(/^\//, "");
  const base = import.meta.env.BASE_URL;
  return `${base}${base.endsWith("/") ? "" : "/"}${clean}`;
}

export const siteUrl = new URL(siteConfig.basePath, siteConfig.origin).href.replace(/\/$/, "");

export function canonicalUrl(path: string): string {
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}
