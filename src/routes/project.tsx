import { useParams } from "react-router";
import NotFoundPage from "../components/NotFoundPage";
import ProjectExternalLink from "../components/ProjectExternalLink";
import ProjectStackTags from "../components/ProjectStackTags";
import VideoBlock from "../components/VideoBlock";
import { getProject } from "../data/projects";
import { canonicalUrl, siteUrl, withBase } from "../lib/paths";
import { notFoundMetadata, pageMetadata } from "../lib/metadata";
import type { Route } from "./+types/project";

export function meta({ params }: Route.MetaArgs) {
  const project = getProject(params.slug);

  if (!project) {
    return notFoundMetadata();
  }

  const title = `${project.title} — Christian Liyanto`;
  const image = new URL(withBase(project.poster), siteUrl).href;
  const canonical = canonicalUrl(`/projects/${project.slug}/`);

  return [
    ...pageMetadata({
      title,
      description: project.tagline,
      url: canonical,
      image,
    }),
    { tagName: "link", rel: "canonical", href: canonical },
  ];
}

export default function ProjectRoute() {
  const { slug } = useParams();
  const project = getProject(slug);

  if (!project) return <NotFoundPage />;

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
      <div className="mt-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          My role
        </p>
        <p className="mt-1 text-lg font-semibold text-paper">{project.role}</p>
      </div>
      <p className="mt-4 max-w-2xl text-lg text-muted">{project.tagline}</p>

      <ProjectStackTags tags={project.stack} layout="grouped" />

      {project.links.length > 0 && (
        <div className="mt-7 flex flex-wrap gap-3">
          {[...project.links]
            .sort((a, b) =>
              a.priority === "primary"
                ? -1
                : b.priority === "primary"
                  ? 1
                  : 0,
            )
            .map((link) => (
              <ProjectExternalLink key={link.href} link={link} />
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
