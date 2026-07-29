import { useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Home, Search, Lock } from "lucide-react";
import i18n from "@/i18n/config";
import { BoltDecor } from "@/components/site/BoltDecor";
import LogoHRZ from "@/assets/logo-hrz-white.png";

export const Route = createFileRoute("/etica/acompanhar-relato")({
  head: () => ({
    meta: [
      { title: `Acompanhar Relato | ${i18n.t("ethics.meta.title")}` },
      {
        name: "description",
        content:
          "Consulte o andamento do seu relato informando o número do protocolo no Canal de Denúncias da HRZ Transmissoras.",
      },
    ],
  }),
  component: AcompanharRelatoPage,
});

function AcompanharRelatoPage() {
  const navigate = useNavigate();
  const [protocoloInput, setProtocoloInput] = useState("");

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
                Acompanhar relato
              </span>
            </nav>
            <h1 className="display-mega text-4xl text-white sm:text-5xl lg:text-6xl">
              Canal de Denúncia
            </h1>
          </div>

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
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-blue-900">Acompanhar relato</h2>

            <p className="mb-6 text-sm text-gray-700">
              Para acompanhar o andamento do seu relato, por favor digite o número do seu protocolo
              no campo abaixo e clique no botão &quot;Consultar protocolo&quot;:
            </p>

            <input
              type="text"
              value={protocoloInput}
              onChange={(e) => setProtocoloInput(e.target.value)}
              className="mb-6 block w-full max-w-sm rounded-md border border-gray-300 px-3 py-2 focus:border-blue-900 focus:outline-none"
            />

            <button
              type="button"
              onClick={() => {
                if (protocoloInput.trim() !== "") {
                  localStorage.setItem("protocoloBuscado", protocoloInput);
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  navigate({ to: "/etica/detalhes-relato" as any });
                }
              }}
              className="flex w-fit items-center gap-2 rounded-lg bg-blue-900 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-800"
            >
              Consultar protocolo
              <Search className="h-4 w-4" />
            </button>
          </div>

          {/* ── Right column ────────────────────────────────────────────── */}
          <div className="flex w-full max-w-[300px] flex-col gap-3">
            <QuickButton icon={Home} label="Página Inicial" to="/" />
            <QuickButton icon={Search} label="Acompanhar relato" to="/etica/acompanhar-relato" />
            <QuickButton icon={Lock} label="Proteção de dados" to="/etica/protecao-dados" />
          </div>
        </div>
      </section>

      <footer className="mt-12 w-full bg-gray-50 py-6 text-center text-xs text-gray-500">
        2026 © Aliant. Todos os direitos reservados.
      </footer>
    </>
  );
}

type QuickButtonProps = {
  icon: React.ElementType;
  label: string;
  to: string;
};

function QuickButton({ icon: Icon, label, to }: QuickButtonProps) {
  return (
    <Link
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      to={to as any}
      className="flex items-center gap-4 rounded-lg bg-blue-900 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
    >
      <Icon className="h-4 w-4 shrink-0" aria-hidden />
      {label}
    </Link>
  );
}
