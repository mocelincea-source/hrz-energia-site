import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Home, Search, Lock } from "lucide-react";
import i18n from "@/i18n/config";
import { BoltDecor } from "@/components/site/BoltDecor";
import LogoHRZ from "@/assets/logo-hrz-white.png";

export const Route = createFileRoute("/etica/realizar-relato")({
  head: () => ({
    meta: [
      { title: `Realizar Relato | ${i18n.t("ethics.meta.title")}` },
      {
        name: "description",
        content:
          "Registre sua manifestação de forma segura e, se desejar, anônima pelo Canal de Denúncias da HRZ Transmissoras.",
      },
    ],
  }),
  component: RealizarRelatoPage,
});

function RealizarRelatoPage() {
  const [isAgreed, setIsAgreed] = useState(false);

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
                Realizar Relato
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

            <div className="space-y-4 text-sm leading-relaxed text-gray-700 text-justify">
              <p>
                A veracidade das informações providas é uma responsabilidade do relator. Todas as
                informações serão verificadas durante o processo de averiguação, e as ações
                decorrentes serão tomadas a critério exclusivo da HRZ Transmissoras.
              </p>
            </div>

            <h3 className="text-base font-semibold text-gray-900">Proteção de Dados</h3>

            <div className="space-y-4 text-sm leading-relaxed text-gray-700 text-justify">
              <p>
                Todas as informações aqui registradas serão tratadas de forma confidencial por sua
                organização e pela Aliant, uma empresa independente e especializada na captação e
                tratamento de denúncias.
              </p>
              <p>
                A captação dessas informações tem por finalidade a apuração de possíveis condutas
                consideradas antiéticas ou que violem os princípios éticos e padrões de conduta
                e/ou a legislação vigente.
              </p>
              <p>
                Todos os relatos serão armazenados por tempo indeterminado para realização do
                processo de apuração e deliberação sobre o caso, observando-se as exigências legais
                específicas. Além disso, informações consolidadas serão utilizadas para geração de
                estatísticas da operação, mas nenhum nome envolvido ou dado pessoal será exposto.
              </p>
              <p>
                Eventuais dados pessoais informados serão tratados conforme as normativas
                estabelecidas pela legislação vigente no que diz respeito a proteção de dados
                pessoais, e serão seguidas pela Aliant no processo de captação e pela sua
                organização no processo de apuração dos relatos aqui registrados.
              </p>
              <p>
                Ao clicar em "Concordo" você indica ciência e concordância com o fornecimento de
                informações que serão única e exclusivamente utilizadas para esta finalidade.
              </p>
              <p>
                Se desejado, posteriormente, poderá exercer seus direitos de acesso, retificação,
                cancelamento e oposição.
              </p>
            </div>

            {/* Checkbox de concordância */}
            <label htmlFor="termos" className="flex items-start gap-3 mt-6 cursor-pointer">
              <input
                id="termos"
                type="checkbox"
                checked={isAgreed}
                onChange={(e) => setIsAgreed(e.target.checked)}
                className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-hrz-electric rounded border-gray-300"
              />
              <span className="text-sm leading-relaxed text-gray-700">
                Declaro que li e compreendi as informações acima, e desejo prosseguir com a
                manifestação.
              </span>
            </label>

            {isAgreed && (
              <Link
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                to={"/etica/identificacao-relato" as any}
                className="mt-6 flex w-fit items-center gap-2 rounded-lg bg-blue-900 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-800"
              >
                Prosseguir
                <ArrowRight className="h-4 w-4" />
              </Link>
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
