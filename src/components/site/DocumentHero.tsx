import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ChevronRight, Home } from "lucide-react";
import { BoltDecor } from "./BoltDecor";

export type BreadcrumbItem = {
  label: string;
  /** If omitted, the crumb renders as plain text (current page). */
  to?: string;
};

interface DocumentHeroProps {
  title: React.ReactNode;
  subtitle?: string;
  breadcrumbs: BreadcrumbItem[];
}

const EASE = [0.22, 1, 0.36, 1] as const;

export function DocumentHero({ title, subtitle, breadcrumbs }: DocumentHeroProps) {
  return (
    <section
      className="relative isolate overflow-hidden bg-hrz-deep-radial pt-32 pb-20 text-white lg:pt-40 lg:pb-28"
      aria-labelledby="doc-hero-title"
    >
      {/* Decorative bolts */}
      <BoltDecor
        variant="outline"
        opacity={0.07}
        className="absolute -right-28 -top-10 hidden h-[135%] w-auto md:block"
      />
      <BoltDecor
        variant="solid"
        opacity={0.06}
        className="absolute -left-12 bottom-[-60px] hidden h-[62%] w-auto md:block"
      />

      <div className="container-hrz relative">
        {/* Breadcrumb nav */}
        <motion.nav
          aria-label="Caminho de navegação"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="mb-7 flex flex-wrap items-center gap-1 text-xs text-white/55"
        >
          {/* Home */}
          <Link
            to="/"
            className="inline-flex items-center gap-1 rounded px-0.5 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            aria-label="Página inicial"
          >
            <Home size={12} aria-hidden />
            <span>Home</span>
          </Link>

          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-1">
              <ChevronRight size={12} aria-hidden className="text-white/30" />
              {crumb.to ? (
                <Link
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  to={crumb.to as any}
                  className="rounded px-0.5 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="font-medium text-white/90" aria-current="page">
                  {crumb.label}
                </span>
              )}
            </span>
          ))}
        </motion.nav>

        {/* H1 */}
        <motion.h1
          id="doc-hero-title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          className="display-mega mt-2 max-w-4xl text-balance text-4xl text-white sm:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
            className="mt-6 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
