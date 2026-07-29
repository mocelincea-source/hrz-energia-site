import { createFileRoute, Outlet } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";

export const Route = createFileRoute("/etica")({
  component: EticaLayout,
});

function EticaLayout() {
  return (
    <SiteShell headerVariant="dark">
      <Outlet />
    </SiteShell>
  );
}
