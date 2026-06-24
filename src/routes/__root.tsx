import { Outlet, Link, createRootRoute, HeadContent, Scripts, useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";

import appCss from "../styles.css?url";
import faviconUrl from "@/assets/favicon.svg?url";
import "@/i18n/config";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "HRZ Energia — Plataforma integrada de transmissão e geração" },
      {
        name: "description",
        content:
          "Plataforma integrada de transmissão e geração renovável no Brasil. Controlada pela Actis.",
      },
      { name: "author", content: "HRZ Energia" },
      {
        property: "og:title",
        content: "HRZ Energia — Plataforma integrada de transmissão e geração",
      },
      {
        property: "og:description",
        content:
          "Plataforma integrada de transmissão e geração renovável no Brasil. Controlada pela Actis.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "HRZ Energia" },
      { property: "og:image", content: "/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@HRZenergia" },
      {
        name: "twitter:title",
        content: "HRZ Energia — Plataforma integrada de transmissão e geração",
      },
      {
        name: "twitter:description",
        content:
          "Plataforma integrada de transmissão e geração renovável no Brasil. Controlada pela Actis.",
      },
      { name: "twitter:image", content: "/og-image.jpg" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: faviconUrl },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

const BASE_URL = "https://www.hrzenergia.com.br";

function RootComponent() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const url = `${BASE_URL}${pathname}`;
    let meta = document.querySelector<HTMLMetaElement>('meta[property="og:url"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("property", "og:url");
      document.head.appendChild(meta);
    }
    meta.content = url;
  }, [pathname]);

  return <Outlet />;
}
