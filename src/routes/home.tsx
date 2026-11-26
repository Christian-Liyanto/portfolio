import ProjectCard from "../components/ProjectCard";
import { sortedProjects } from "../data/projects";
import { canonicalUrl, siteUrl, withBase } from "../lib/paths";
import { pageMetadata } from "../lib/metadata";

const featured = sortedProjects.filter((project) => project.featured);
const rest = sortedProjects.filter((project) => !project.featured);
const title = "Christian Liyanto";
const description = "Unity Engineer | Frontend Engineer";
const image = new URL(withBase("images/aboutme-photo.jpg"), siteUrl).href;
const skillGroups = [
  { label: "Programming Languages", value: "C# · JavaScript · TypeScript" },
  { label: "Engines & Frameworks", value: "Unity · React" },
  { label: "Platforms", value: "Android · Windows · WebGL" },
  { label: "Current Interests", value: "Agentic AI · Unity CLI · AI development pipelines" },
];
const socialLinkClassName =
  "inline-flex h-12 w-12 items-center justify-center rounded-full border border-line text-paper transition hover:border-accent hover:text-accent";
const socialLinks = [
  {
    href: "mailto:christian.liyanto@student.umn.ac.id",
    ariaLabel: "Email Christian Liyanto",
    title: "Email",
    icon: (
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M4 7l8 6 8-6" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/in/christian-liyanto/",
    ariaLabel: "Christian Liyanto on LinkedIn",
    title: "LinkedIn",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.36 4.26 5.44v6.3zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
      </svg>
    ),
  },
  {
    href: "https://github.com/Christian-Liyanto",
    ariaLabel: "Christian Liyanto on GitHub",
    title: "GitHub",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .3a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .3z" />
      </svg>
    ),
  },
];

export function meta() {
  return pageMetadata({ title, description, url: canonicalUrl("/"), image });
}

export function links() {
  return [{ rel: "canonical", href: canonicalUrl("/") }];
}

export default function Home() {
  return (
    <main id="main">
      <section
        id="about"
        className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[240px_1fr_1fr] lg:items-start lg:py-24"
      >
        <img
          src={withBase("images/aboutme-photo.jpg")}
          alt="Christian Liyanto"
          className="aspect-square w-40 rounded-2xl object-cover object-center ring-1 ring-line sm:w-48 lg:w-full"
        />
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-muted">About</p>
          <h1 className="mt-2 font-display text-4xl text-paper sm:text-5xl">Christian Liyanto</h1>
          <div className="mt-5 space-y-4 text-justify leading-relaxed text-muted">
            <p>
              I’m a Unity Engineer focused on gameplay development, with additional experience in frontend engineering. I
              graduated from Universitas Multimedia Nusantara in 2023 and joined Not Boring Company as an intern in
              2022, continuing as a full-time Unity Developer after graduation until September 2026.
            </p>
            <p>
              My Unity work includes combat, interactions, gameplay UI, navigation, and AI behavior. I translate design
              requirements into playable features and supporting systems. I also contributed to WonderBits’ React
              frontend, including its browser extension and PWA.
            </p>
          </div>
        </div>
        <div className="rounded-2xl border border-line bg-ink-2 p-6">
          <h2 className="font-display text-xl">Technical Skills</h2>
          <dl className="mt-6 space-y-5 text-sm">
            {skillGroups.map(({ label, value }) => (
              <div key={label}>
                <dt className="text-xs font-medium uppercase tracking-[0.16em] text-muted">{label}</dt>
                <dd className="mt-1.5 text-paper">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="work" className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="text-center">
            <h2 className="font-sans text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Project Showcase
            </h2>
            <div className="mx-auto mt-3 h-0.75 w-28 rounded-full bg-accent" />
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          {rest.length > 0 && (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {rest.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section id="contact" className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-sm uppercase tracking-[0.2em] text-muted">Contact</p>
          <h2 className="mt-2 font-display text-3xl">Interested in working together?</h2>
          <p className="mt-4 max-w-xl text-muted">
            I’m open to opportunities that match my experience in Unity, gameplay, and frontend engineering, as well as
            new roles where I can continue learning and growing. If you’d like to talk about a project, role, or
            collaboration, feel free to reach out.
          </p>
          <div className="mt-8 flex items-center gap-3">
            {socialLinks.map(({ href, ariaLabel, title, icon }) => (
              <a
                key={title}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={ariaLabel}
                title={title}
                className={socialLinkClassName}
              >
                {icon}
              </a>
            ))}
            <a
              href={withBase("Christian-Liyanto-CV.pdf")}
              download="Christian-Liyanto-CV.pdf"
              aria-label="Download Christian Liyanto's CV"
              title="Download CV"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-line px-5 text-sm font-medium text-paper transition hover:border-accent hover:text-accent"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <path d="M12 3v12" />
                <path d="m7 10 5 5 5-5" />
                <path d="M5 21h14" />
              </svg>
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
