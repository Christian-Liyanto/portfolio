export function withBase(path: string): string {
  const clean = path.replace(/^\//, "");
  const base = import.meta.env.BASE_URL;
  return `${base}${base.endsWith("/") ? "" : "/"}${clean}`;
}

export const siteUrl = "https://christian-liyanto.github.io/portfolio";

export function canonicalUrl(path: string): string {
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}
