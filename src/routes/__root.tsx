import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
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
      { title: "tester-mcea" },
      {
        name: "description",
        content:
          "Plataforma integrada de transmissão e geração renovável no Brasil. Controlada pela Actis.",
      },
      { name: "author", content: "HRZ Energia" },
      { property: "og:title", content: "tester-mcea" },
      {
        property: "og:description",
        content:
          "Plataforma integrada de transmissão e geração renovável no Brasil. Controlada pela Actis.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@HRZenergia" },
      { name: "twitter:title", content: "tester-mcea" },
      { name: "description", content: "HRZ Brand Refresh modernizes the HRZ website with updated brand identity and content." },
      { property: "og:description", content: "HRZ Brand Refresh modernizes the HRZ website with updated brand identity and content." },
      { name: "twitter:description", content: "HRZ Brand Refresh modernizes the HRZ website with updated brand identity and content." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/6aaf0079-c755-4fde-96d8-796dcee3f3af/id-preview-f08a9d7f--39102cf0-84b8-4116-8f02-e2d0591e7683.lovable.app-1777908231445.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/6aaf0079-c755-4fde-96d8-796dcee3f3af/id-preview-f08a9d7f--39102cf0-84b8-4116-8f02-e2d0591e7683.lovable.app-1777908231445.png" },
    ],
    links: [
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

function RootComponent() {
  return <Outlet />;
}
