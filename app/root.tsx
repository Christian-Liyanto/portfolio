import type { ReactNode } from "react";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import stylesheet from "./app.css?url";
import { withBase } from "./lib/paths";

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
            <a href={withBase("")} className="font-display text-lg tracking-tight text-paper">
              Christian Liyanto
            </a>
            <nav className="flex flex-wrap items-center gap-4 text-sm text-muted sm:gap-6">
              <a className="hover:text-accent" href={withBase("#about")}>
                About
              </a>
              <a className="hover:text-accent" href={withBase("#work")}>
                Work
              </a>
              <a className="hover:text-accent" href={withBase("#contact")}>
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
