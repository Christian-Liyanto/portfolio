import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "react-router";
import ProjectExternalLink from "./ProjectExternalLink";
import ProjectStackTags from "./ProjectStackTags";
import type { Project } from "../data/projects";
import { withBase } from "../lib/paths";

type Props = { project: Project };

export default function ProjectCard({ project }: Props) {
  const mediaRef = useRef<HTMLAnchorElement>(null);
  const { scrollYProgress } = useScroll({
    target: mediaRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const detailsHref = `/projects/${project.slug}/`;
  const extraLink =
    project.links.find((link) => link.priority === "primary") ??
    project.links[0];

  return (
    <motion.article
      className="project-card-motion group flex h-full flex-col overflow-hidden rounded-[1.35rem] bg-ink-2 ring-1 ring-white/10 transition-shadow duration-300 hover:ring-accent/60 focus-within:ring-accent/60"
      initial={{ opacity: 0.86, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        ref={mediaRef}
        to={detailsHref}
        className="relative block aspect-16/10 overflow-hidden"
      >
        <motion.div
          className="project-card-parallax absolute inset-x-0 top-[-12%] h-[124%] w-full"
          style={{ y: imageY }}
        >
          <img
            src={withBase(project.poster)}
            alt={`${project.title} gameplay`}
            className={`h-full w-full object-cover transition-[scale,filter] duration-500 group-hover:scale-[1.04] group-focus-within:scale-[1.04] group-hover:brightness-105 group-focus-within:brightness-105 ${
              project.orientation === "portrait" ? "object-top" : "object-center"
            }`}
          />
        </motion.div>
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-ink-2 via-ink-2/45 to-transparent" />
        <h3 className="absolute inset-x-0 bottom-4 px-4 text-center font-sans text-xl font-extrabold uppercase tracking-[0.06em] text-white sm:text-[1.35rem]">
          {project.title}
        </h3>
      </Link>
      <div className="flex flex-1 flex-col px-6 pb-6 pt-3">
        <ProjectStackTags tags={project.stack.slice(0, 3)} />
        <p className="mt-4 flex-1 text-center text-sm leading-relaxed text-slate-300">
          {project.tagline}
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-2">
          <Link
            to={detailsHref}
            className="inline-flex items-center rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink-2"
          >
            View Details →
          </Link>
          {extraLink && (
            <ProjectExternalLink
              link={extraLink}
              variant="secondary"
              size="compact"
            />
          )}
        </div>
      </div>
    </motion.article>
  );
}
