import { Link } from "react-router";
import type { Project } from "../data/projects";
import { withBase } from "../lib/paths";

type Props = { project: Project };

const tagClasses: Record<string, string> = {
  "C#": "bg-[#7c3aed] text-white",
  Unity: "bg-zinc-950 text-white",
  "Unity / Web": "bg-zinc-950 text-white",
  WebGL: "bg-[#1d4ed8] text-white",
  React: "bg-[#38bdf8] text-zinc-950",
  Mobile: "bg-[#334155] text-white",
  "Idle RPG": "bg-[#7c3aed] text-white",
  Idle: "bg-[#7c3aed] text-white",
  Windows: "bg-[#1d4ed8] text-white",
  "Browser extension": "bg-[#334155] text-white",
};

export default function ProjectCard({ project }: Props) {
  const detailsHref = `/projects/${project.slug}/`;
  const extraLink = project.links[0];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.35rem] bg-ink-2 ring-1 ring-white/10">
      <Link
        to={detailsHref}
        className="relative block aspect-[16/10] overflow-hidden"
      >
        <img
          src={withBase(project.poster)}
          alt={`${project.title} gameplay`}
          className={`h-full w-full object-cover transition duration-500 group-hover:scale-[1.04] ${
            project.orientation === "portrait" ? "object-top" : "object-center"
          }`}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-2 via-ink-2/45 to-transparent" />
        <h3 className="absolute inset-x-0 bottom-4 px-4 text-center font-sans text-xl font-extrabold uppercase tracking-[0.06em] text-white sm:text-[1.35rem]">
          {project.title}
        </h3>
      </Link>
      <div className="flex flex-1 flex-col px-6 pb-6 pt-3">
        <ul className="flex flex-wrap justify-center gap-2">
          {project.stack.slice(0, 3).map((tag) => (
            <li
              key={tag}
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                tagClasses[tag] ?? "bg-[#273044] text-slate-200"
              }`}
            >
              {tag}
            </li>
          ))}
        </ul>
        <p className="mt-4 flex-1 text-center text-sm leading-relaxed text-slate-300">
          {project.tagline}
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-2">
          <Link
            to={detailsHref}
            className="inline-flex items-center rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-accent-2"
          >
            View Details →
          </Link>
          {extraLink && (
            <a
              href={extraLink.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white hover:border-white/45"
            >
              {extraLink.label}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
