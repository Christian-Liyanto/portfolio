import type { ProjectVideo } from "../data/projects";
import { withBase } from "../lib/paths";
import styles from "../styles/VideoBlock.module.css";

type Props = ProjectVideo & {
  orientation: "portrait" | "landscape";
};

export default function VideoBlock({
  src,
  youtube,
  poster,
  caption,
  orientation,
}: Props) {
  const portrait = orientation === "portrait";

  return (
    <figure className="min-w-0">
      <div
        className={`${styles.videoShell} overflow-hidden rounded-2xl ring-1 ring-line ${
          portrait && !youtube ? `${styles.phoneFrame} mx-auto max-w-[320px]` : ""
        } ${youtube ? "aspect-video" : ""}`}
      >
        {youtube ? (
          <iframe
            className="h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${youtube}`}
            title={caption ?? "Gameplay video"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          src && (
            <video
              className={portrait ? "h-full w-full object-cover" : "h-auto w-full"}
              controls
              playsInline
              preload="metadata"
              poster={withBase(poster)}
              src={withBase(src)}
            />
          )
        )}
      </div>
      {caption && <figcaption className="mt-3 text-sm text-muted">{caption}</figcaption>}
    </figure>
  );
}
