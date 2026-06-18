import { Header } from "./Header";
import { Footer } from "./Footer";
import { PageTransition, ScrollProgressBar } from "./motion";

export function SiteShell({
  children,
  headerVariant = "light",
}: {
  children: React.ReactNode;
  headerVariant?: "light" | "dark";
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <ScrollProgressBar />
      <Header variant={headerVariant} />
      <main className={headerVariant === "dark" ? "-mt-20" : ""}>
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </div>
  );
}