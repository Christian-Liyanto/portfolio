import { useParams } from "react-router";
import VideoBlock from "../components/VideoBlock";
import { getProject } from "../data/projects";
import { canonicalUrl, siteUrl, withBase } from "../lib/paths";
import type { Route } from "./+types/project";

export function meta({ params }: Route.MetaArgs) {
  const project = getProject(params.slug);

  if (!project) {
    return [
      { title: "Not found — Christian Liyanto" },
      { name: "description", content: "The work lives on the home page." },
    ];
  }

  const title = `${project.title} — Christian Liyanto`;
  const image = new URL(withBase(project.poster), siteUrl).href;
  const canonical = canonicalUrl(`/projects/${project.slug}/`);

  return [
    { title },
    { name: "description", content: project.tagline },
    { property: "og:title", content: title },
    { property: "og:description", content: project.tagline },
    { property: "og:type", content: "website" },
    { property: "og:url", content: canonical },
    { property: "og:image", content: image },
    { name: "twitter:card", content: "summary_large_image" },
    { tagName: "link", rel: "canonical", href: canonical },
  ];
}

function NotFoundContent() {
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

export default function ProjectRoute() {
  const { slug } = useParams();
  const project = getProject(slug);

  if (!project) return <NotFoundContent />;

  return (
    <main id="main" className="mx-auto max-w-6xl px-5 py-16">
      <p className="text-sm text-muted">
        <a className="hover:text-paper" href={withBase("")}>
          Home
        </a>
        <span className="px-2">/</span>
        {project.title}
      </p>
      <p className="mt-6 text-sm uppercase tracking-[0.2em] text-accent">
        {project.year} · {project.kind}
      </p>
      <h1 className="mt-3 font-display text-5xl leading-tight">
        {project.title}
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">{project.tagline}</p>
      <p className="mt-3 text-sm text-paper">{project.role}</p>

      <ul className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((tag) => (
          <li
            key={tag}
            className="rounded-full bg-ink-2 px-3 py-1 text-xs font-semibold text-paper"
          >
            {tag}
          </li>
        ))}
      </ul>

      {project.links.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-3">
          {project.links.map((link) => (
            <a
              key={link.href}
              className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold hover:border-accent hover:text-accent"
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      {project.videos.length > 0 ? (
        <div
          className={`mt-12 grid gap-8 ${
            project.orientation === "portrait" ? "sm:grid-cols-2" : ""
          }`}
        >
          {project.videos.map((video) => (
            <VideoBlock
              key={video.src ?? video.youtube}
              {...video}
              orientation={project.orientation}
            />
          ))}
        </div>
      ) : (
        <img
          className="mt-12 w-full rounded-2xl ring-1 ring-line"
          src={withBase(project.poster)}
          alt=""
        />
      )}

      <article className="prose mt-12 max-w-2xl space-y-4 text-muted [&_a]:text-accent [&_a]:underline [&_a]:decoration-accent/40 [&_a]:underline-offset-4 [&_strong]:text-paper [&_h1]:hidden [&_li]:ml-5 [&_li]:list-disc">
        {project.content}
      </article>
    </main>
  );
}
