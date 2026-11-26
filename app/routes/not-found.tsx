import { withBase } from "../lib/paths";

export function meta() {
  return [
    { title: "Not found — Christian Liyanto" },
    { name: "description", content: "The work lives on the home page." },
  ];
}

export default function NotFound() {
  return (
    <main id="main" className="mx-auto max-w-6xl px-5 py-24">
      <h1 className="font-display text-5xl">That page is not here.</h1>
      <p className="mt-4 text-muted">The work lives on the home page.</p>
      <a
        className="mt-8 inline-block text-accent underline underline-offset-4"
        href={withBase("")}
      >
        Back home
      </a>
    </main>
  );
}
