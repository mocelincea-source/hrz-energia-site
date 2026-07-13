import { createFileRoute, Outlet } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";

export const Route = createFileRoute("/investidores")({
  component: InvestidoresLayout,
});

function InvestidoresLayout() {
  return (
    <SiteShell headerVariant="dark">
      <Outlet />
    </SiteShell>
  );
}
