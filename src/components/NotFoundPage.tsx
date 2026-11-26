import { withBase } from "../lib/paths";
import { notFoundDescription } from "../lib/metadata";

export default function NotFoundPage() {
  return (
    <main id="main" className="mx-auto max-w-6xl px-5 py-24">
      <h1 className="font-display text-5xl">That page is not here.</h1>
      <p className="mt-4 text-muted">{notFoundDescription}</p>
      <a
        className="mt-8 inline-block text-accent underline underline-offset-4"
        href={withBase("")}
      >
        Back home
      </a>
    </main>
  );
}
