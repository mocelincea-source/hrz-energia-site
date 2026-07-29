import { useMemo } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Home, Search, Lock } from "lucide-react";
import i18n from "@/i18n/config";
import { BoltDecor } from "@/components/site/BoltDecor";
import LogoHRZ from "@/assets/logo-hrz-white.png";

export const Route = createFileRoute("/etica/relato-sucesso")({
  head: () => ({
    meta: [
      { title: `Relato Registrado | ${i18n.t("ethics.meta.title")}` },
      {
        name: "description",
        content:
          "Seu relato foi registrado com sucesso no Canal de Denúncias da HRZ Transmissoras. Anote o número do protocolo.",
      },
    ],
  }),
  component: RelatoSucessoPage,
});

function RelatoSucessoPage() {
  const protocolo = useMemo(() => Math.floor(1000000 + Math.random() * 9000000), []);

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
              <Link
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                to={"/etica/canal-de-denuncias" as any}
                className="rounded px-0.5 transition-colors hover:text-white"
              >
                Canal de Denúncia
              </Link>
              <span className="text-white/30">/</span>
              <span className="font-medium text-white/90" aria-current="page">
                Protocolo
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
            <h2 className="text-xl font-bold text-gray-900">Realizar relato</h2>

            <p className="mb-6 mt-4 text-sm text-gray-700">
              Seu relato foi registrado com sucesso. Por favor, anote o protocolo gerado:
            </p>

            <div className="mb-6 text-3xl font-bold text-gray-900">{protocolo}</div>

            <p className="mb-8 text-sm leading-relaxed text-gray-700">
              Acompanhe a situação de seu incidente na página inicial deste site, clicando em
              Acompanhar Incidente e informando o número do protocolo.
            </p>

            <Link
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              to={"/etica/canal-de-denuncias" as any}
              className="inline-flex w-fit items-center justify-center rounded-lg bg-blue-900 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-800"
            >
              Retornar à Página Inicial.
            </Link>
          </div>

          {/* ── Right column ────────────────────────────────────────────── */}
          <div className="flex w-full max-w-[300px] flex-col gap-3">
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
      className="flex items-center gap-4 rounded-lg bg-blue-900 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
    >
      <Icon className="h-4 w-4 shrink-0" aria-hidden />
      {label}
    </Link>
  );
}
