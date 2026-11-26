import type { MouseEvent, ReactNode } from "react";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import stylesheet from "./styles/global.css?url";
import { withBase } from "./lib/paths";

let scrollAnimationFrame: number | null = null;
let previousScrollBehavior = "";

function scrollToSection(event: MouseEvent<HTMLAnchorElement>, id: string) {
  const target = document.getElementById(id);
  if (!target) return;

  event.preventDefault();

  const root = document.documentElement;
  if (scrollAnimationFrame !== null) {
    cancelAnimationFrame(scrollAnimationFrame);
    root.style.scrollBehavior = previousScrollBehavior;
  }

  previousScrollBehavior = root.style.scrollBehavior;
  root.style.scrollBehavior = "auto";

  const targetUrl = event.currentTarget.href;
  const startY = window.scrollY;
  const headerHeight = document.querySelector("header")?.getBoundingClientRect().height ?? 0;
  const targetY = Math.max(0, target.getBoundingClientRect().top + startY - headerHeight);
  const startTime = performance.now();
  const duration = 500;

  window.history.replaceState(window.history.state, "", targetUrl);

  function animate(now: number) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = progress < 0.5 ? 4 * progress ** 3 : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    window.scrollTo(0, startY + (targetY - startY) * eased);

    if (progress < 1) {
      scrollAnimationFrame = requestAnimationFrame(animate);
      return;
    }

    scrollAnimationFrame = null;
    root.style.scrollBehavior = previousScrollBehavior;
  }

  scrollAnimationFrame = requestAnimationFrame(animate);
}

export function links() {
  return [
    { rel: "stylesheet", href: stylesheet },
    { rel: "icon", href: withBase("favicon.svg"), type: "image/svg+xml" },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Outfit:wght@400;500;600&display=swap",
    },
  ];
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen antialiased">
        <header className="sticky top-0 z-40 border-b border-line/80 bg-ink/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-4">
            <a
              className="font-display text-lg tracking-tight text-paper"
              href={withBase("")}
              onClick={(event) => scrollToSection(event, "about")}
            >
              Christian Liyanto
            </a>
            <nav className="flex flex-wrap items-center gap-4 text-sm text-muted sm:gap-6">
              <a
                className="hover:text-accent"
                href={withBase("#about")}
                onClick={(event) => scrollToSection(event, "about")}
              >
                About
              </a>
              <a
                className="hover:text-accent"
                href={withBase("#work")}
                onClick={(event) => scrollToSection(event, "work")}
              >
                Work
              </a>
              <a
                className="hover:text-accent"
                href={withBase("#contact")}
                onClick={(event) => scrollToSection(event, "contact")}
              >
                Contact
              </a>
            </nav>
          </div>
        </header>
        {children}
        <footer className="border-t border-line">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-muted sm:flex-row sm:justify-between">
            <p>© {new Date().getFullYear()} Christian Liyanto</p>
          </div>
        </footer>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
