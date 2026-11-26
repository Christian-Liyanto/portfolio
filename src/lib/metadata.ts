type PageMetadata = {
  title: string;
  description: string;
  url: string;
  image: string;
};

export const notFoundDescription = "The work lives on the home page.";

export function pageMetadata({ title, description, url, image }: PageMetadata) {
  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:image", content: image },
    { name: "twitter:card", content: "summary_large_image" },
  ];
}

export function notFoundMetadata() {
  return [
    { title: "Not found — Christian Liyanto" },
    { name: "description", content: notFoundDescription },
  ];
}
