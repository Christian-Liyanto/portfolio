import type { ProjectLink } from "../data/projects";

type Props = {
  link: ProjectLink;
  variant?: ProjectLink["priority"];
  size?: "compact" | "regular";
};

export default function ProjectExternalLink({
  link,
  variant = link.priority,
  size = "regular",
}: Props) {
  const sizeClassName =
    size === "compact"
      ? "gap-1.5 px-3.5 py-2 text-xs"
      : "gap-2 px-5 py-3 text-sm";
  const variantClassName =
    variant === "primary"
      ? "border-accent bg-accent text-white hover:border-accent-2 hover:bg-accent-2"
      : "border-white/20 bg-white/5 text-paper hover:border-white/40 hover:bg-white/10";

  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${link.label} (opens in a new tab)`}
      className={`inline-flex items-center justify-center rounded-full border font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink ${sizeClassName} ${variantClassName}`}
    >
      {link.label}
      <svg
        aria-hidden="true"
        className="h-4 w-4 shrink-0"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M11 4h5v5M16 4 8.5 11.5M14 11v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}
