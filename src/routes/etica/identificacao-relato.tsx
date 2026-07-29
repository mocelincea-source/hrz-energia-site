import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Home, Search, Lock } from "lucide-react";
import i18n from "@/i18n/config";
import { BoltDecor } from "@/components/site/BoltDecor";
import LogoHRZ from "@/assets/logo-hrz-white.png";

export const Route = createFileRoute("/etica/identificacao-relato")({
  head: () => ({
    meta: [
      { title: `Identificação do Relato | ${i18n.t("ethics.meta.title")}` },
      {
        name: "description",
        content:
          "Escolha se deseja se identificar ou permanecer anônimo ao registrar seu relato no Canal de Denúncias da HRZ Transmissoras.",
      },
    ],
  }),
  component: IdentificacaoRelatoPage,
});

function IdentificacaoRelatoPage() {
  const [wantsToIdentify, setWantsToIdentify] = useState<boolean | null>(null);

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
              <Link
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                to={"/etica/realizar-relato" as any}
                className="rounded px-0.5 transition-colors hover:text-white"
              >
                Realizar Relato
              </Link>
              <span className="text-white/30">/</span>
              <span className="font-medium text-white/90" aria-current="page">
                Identificação
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

            <div className="space-y-4 text-sm leading-relaxed text-gray-700">
              <p>Você pode escolher fazer um relato anônimo ou pode identificar-se.</p>
              <p>
                A opção identificada é voltada para os casos em que o relator se disponibiliza a
                ser contatado para esclarecimento de possíveis dúvidas sobre o relato fornecido.
              </p>
              <p>
                Relatos com identificação são muito importantes, pois podem fazer com que a
                apuração seja mais efetiva. Lembramos que este é um canal seguro e confiável.
              </p>
              <p className="font-medium text-gray-900">Você quer se identificar?</p>
            </div>

            {/* Botões Sim / Não */}
            <div className="mt-6 flex items-center gap-4">
              <button
                type="button"
                onClick={() => setWantsToIdentify(true)}
                className={`rounded-lg px-6 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
                  wantsToIdentify === true
                    ? "border border-blue-900 bg-white text-blue-900"
                    : "bg-blue-900 text-white hover:bg-blue-800"
                }`}
              >
                Sim
              </button>
              <button
                type="button"
                onClick={() => setWantsToIdentify(false)}
                className={`rounded-lg px-6 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
                  wantsToIdentify === false
                    ? "border border-blue-900 bg-white text-blue-900"
                    : "bg-blue-900 text-white hover:bg-blue-800"
                }`}
              >
                Não
              </button>
            </div>

            {/* Formulário de identificação — só aparece se wantsToIdentify === true */}
            {wantsToIdentify === true && (
              <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="nome" className="text-sm text-gray-700">
                    Nome<span className="text-red-500"> *</span>
                  </label>
                  <input
                    id="nome"
                    type="text"
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-900 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="funcao" className="text-sm text-gray-700">
                    Função ou sua relação com a empresa<span className="text-red-500"> *</span>
                  </label>
                  <input
                    id="funcao"
                    type="text"
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-900 focus:outline-none"
                  />
                </div>

                <p className="mb-2 mt-6 text-sm text-red-500">
                  É necessário preencher pelo menos um dos campos abaixo:
                </p>

                <div>
                  <label htmlFor="email" className="text-sm text-gray-700">
                    E-mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-900 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="telefone" className="text-sm text-gray-700">
                    Telefone
                  </label>
                  <input
                    id="telefone"
                    type="text"
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-900 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="celular" className="text-sm text-gray-700">
                    Celular
                  </label>
                  <input
                    id="celular"
                    type="text"
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-900 focus:outline-none"
                  />
                </div>

                <Link
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  to={"/etica/dados-incidente" as any}
                  className="mt-6 flex w-fit items-center gap-2 rounded-lg bg-blue-900 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-800"
                >
                  Prosseguir
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </form>
            )}

            {/* Formulário anônimo — só aparece se wantsToIdentify === false */}
            {wantsToIdentify === false && (
              <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="email-anonimo" className="text-sm text-gray-700">
                    E-mail
                  </label>
                  <input
                    id="email-anonimo"
                    type="email"
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-900 focus:outline-none"
                  />
                  <p className="mt-2 text-sm text-red-500">
                    *Se seu relato for anônimo, utilize endereço de e-mail que não permita a sua
                    identificação (ex.: anonimo123@gmail.com).
                  </p>
                </div>

                <Link
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  to={"/etica/dados-incidente" as any}
                  className="mt-6 flex w-fit items-center gap-2 rounded-lg bg-blue-900 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-800"
                >
                  Prosseguir
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </form>
            )}
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
