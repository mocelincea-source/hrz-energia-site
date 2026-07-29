import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Home, Search, Lock } from "lucide-react";
import i18n from "@/i18n/config";
import { BoltDecor } from "@/components/site/BoltDecor";
import LogoHRZ from "@/assets/logo-hrz-white.png";

export const Route = createFileRoute("/etica/canal-de-denuncias")({
  head: () => ({
    meta: [
      { title: `Canal de Denúncia | ${i18n.t("ethics.meta.title")}` },
      {
        name: "description",
        content:
          "Canal exclusivo da HRZ Transmissoras para comunicação segura e anônima de condutas antiéticas ou que violem os princípios e padrões de conduta.",
      },
    ],
  }),
  component: CanalDeDenunciasPage,
});

function CanalDeDenunciasPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-hrz-deep pt-32 pb-16 lg:pt-40 lg:pb-20">
        <BoltDecor
          variant="outline"
          opacity={0.06}
          className="absolute -right-28 -top-10 hidden h-[130%] w-auto md:block"
        />
        <BoltDecor
          variant="solid"
          opacity={0.05}
          className="absolute -left-12 bottom-[-50px] hidden h-[60%] w-auto md:block"
        />

        <div className="container-hrz relative grid gap-10 md:grid-cols-2 md:gap-16">
          {/* Left: breadcrumb + title */}
          <div>
            <nav
              aria-label="Caminho de navegação"
              className="mb-4 flex flex-wrap items-center gap-1 text-xs text-white/50"
            >
              <Link
                to="/"
                className="inline-flex items-center gap-1 rounded px-0.5 transition-colors hover:text-white"
                aria-label="Página inicial"
              >
                <Home size={12} aria-hidden />
                <span>Home</span>
              </Link>
              <span className="text-white/30">/</span>
              <Link
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                to={"/etica" as any}
                className="rounded px-0.5 transition-colors hover:text-white"
              >
                Ética e Conduta
              </Link>
              <span className="text-white/30">/</span>
              <span className="font-medium text-white/90" aria-current="page">
                Canal de Denúncia
              </span>
            </nav>
            <h1 className="display-mega text-4xl text-white sm:text-5xl lg:text-6xl">
              Canal de Denúncia
            </h1>
          </div>

          {/* Right: logo — alinhada com a coluna dos botões abaixo */}
          <div className="flex items-end justify-self-start">
            <img src={LogoHRZ} alt="HRZ Logo" className="h-16 w-auto object-contain" />
          </div>
        </div>
      </section>

      {/* ── Main content ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <BoltDecor
          variant="outline"
          opacity={0.03}
          className="absolute -left-20 top-10 h-[460px] w-auto"
        />
        <div className="container-hrz relative grid gap-10 md:grid-cols-2 md:gap-16">
          {/* ── Left column ─────────────────────────────────────────────── */}
          <div className="flex flex-col gap-6">
            <div className="space-y-4 text-sm leading-relaxed text-gray-700 text-justify">
              <p>
                Este é um canal exclusivo da HRZ Transmissoras para comunicação segura e, se desejada,
                anônima, de condutas consideradas antiéticas ou que violem os princípios éticos e
                padrões de conduta e/ou a legislação vigente.
              </p>
              <p>
                As informações aqui registradas serão recebidas por uma empresa independente e
                especializada, a Aliant, assegurando sigilo absoluto e o tratamento adequado de cada
                situação pela alta administração da HRZ Transmissoras, sem conflitos de interesses.
              </p>
              <p>
                Se desejar, seu relato pode ser feito também pelo WhatsApp pelo número XXXX de
                segunda a domingo, 24h por dia.
              </p>
            </div>

            {/* CTA button */}
            <div className="mt-2">
              <Link
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                to={"/etica/realizar-relato" as any}
                className="inline-flex items-center gap-3 rounded-full bg-hrz-deep px-8 py-4 text-sm font-semibold text-white shadow-md transition hover:scale-[1.03] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hrz-electric"
              >
                Realizar relato
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* ── Right column ────────────────────────────────────────────── */}
          <div className="flex flex-col gap-3 w-full max-w-[300px]">
            <QuickButton icon={Home} label="Página Inicial" href="/" />
            <QuickButton icon={Search} label="Acompanhar relato" href="/etica/acompanhar-relato" />
            <QuickButton icon={Lock} label="Proteção de dados" href="/etica/protecao-dados" />
          </div>
        </div>
      </section>
    </>
  );
}

// ─── Quick-access button ──────────────────────────────────────────────────────

type QuickButtonProps = {
  icon: React.ElementType;
  label: string;
  href: string;
};

function QuickButton({ icon: Icon, label, href }: QuickButtonProps) {
  return (
    <Link
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      to={href as any}
      className="flex items-center gap-4 bg-blue-900 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
    >
      <Icon className="w-4 h-4 shrink-0" aria-hidden />
      {label}
    </Link>
  );
}
