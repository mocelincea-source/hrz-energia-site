import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Home, Search, Lock, Paperclip } from "lucide-react";
import i18n from "@/i18n/config";
import { BoltDecor } from "@/components/site/BoltDecor";
import LogoHRZ from "@/assets/logo-hrz-white.png";

export const Route = createFileRoute("/etica/detalhes-relato")({
  head: () => ({
    meta: [
      { title: `Detalhes do Relato | ${i18n.t("ethics.meta.title")}` },
      {
        name: "description",
        content:
          "Consulte os detalhes e o histórico do seu relato no Canal de Denúncias da HRZ Transmissoras.",
      },
    ],
  }),
  component: DetalhesRelatoPage,
});

function DetalhesRelatoPage() {
  const [protocolo, setProtocolo] = useState("Não informado");
  const [dataAtual, setDataAtual] = useState("");

  useEffect(() => {
    const salvo = localStorage.getItem("protocoloBuscado");
    if (salvo) setProtocolo(salvo);

    const agora = new Date();
    const formatada = agora
      .toLocaleString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
      .replace(",", "");

    setDataAtual(formatada);
  }, []);

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
              <Link
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                to={"/etica/acompanhar-relato" as any}
                className="rounded px-0.5 transition-colors hover:text-white"
              >
                Acompanhar relato
              </Link>
              <span className="text-white/30">/</span>
              <span className="font-medium text-white/90" aria-current="page">
                Detalhes
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
            <h2 className="mb-6 text-2xl font-semibold text-blue-900">Acompanhar relato</h2>

            {/* Bloco 1: Informações da denúncia */}
            <h3 className="mb-4 text-lg font-medium text-blue-900">Informações da denúncia</h3>

            <div className="mb-4">
              <p className="text-sm text-gray-600">Protocolo</p>
              <p className="mb-4 text-sm text-gray-900">{protocolo}</p>
            </div>
            <div className="mb-4">
              <p className="text-sm text-gray-600">Data de criação</p>
              <p className="mb-4 text-sm text-gray-900">{dataAtual}</p>
            </div>
            <div className="mb-4">
              <p className="text-sm text-gray-600">Situação atual</p>
              <p className="mb-4 text-sm text-gray-900">Aberto</p>
            </div>
            <div className="mb-4">
              <p className="text-sm text-gray-600">Mensagem ao denunciante</p>
              <p className="mb-4 text-sm text-gray-900">&nbsp;</p>
            </div>

            {/* Bloco 2: Histórico */}
            <h3 className="mb-4 mt-6 text-lg font-medium text-blue-900">Histórico</h3>

            <table className="mb-8 w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 p-2 text-left font-medium">Data</th>
                  <th className="border border-gray-300 p-2 text-left font-medium">Situação</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">{dataAtual}</td>
                  <td className="border border-gray-300 p-2">Aberto</td>
                </tr>
              </tbody>
            </table>

            {/* Bloco 3: Informações adicionais */}
            <h3 className="mb-4 text-sm text-gray-700">Informações adicionais</h3>

            <div>
              <label htmlFor="descricao-adicional" className="text-sm text-gray-700">
                <span className="text-red-500">*</span> Descrição
              </label>
              <textarea
                id="descricao-adicional"
                rows={5}
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-900 focus:outline-none"
              />
            </div>

            <p className="mb-4 mt-2 text-xs text-gray-600">
              Se você quiser anexar arquivos como fotos e documentos, adicione-os aqui. O tamanho
              máximo do conjunto de arquivos é de 100 MB.
            </p>

            <button
              type="button"
              className="flex w-fit items-center gap-2 rounded-lg bg-blue-900 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-800"
            >
              <Paperclip className="h-4 w-4" />
              Anexar arquivo
            </button>

            {/* Bloco 4: Ações finais */}
            <div className="mt-8 flex gap-4">
              <button
                type="button"
                className="rounded-lg bg-blue-900 px-6 py-2 text-sm font-medium text-white hover:bg-blue-800"
              >
                Gravar
              </button>
              <Link
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                to={"/etica/acompanhar-relato" as any}
                className="rounded-lg bg-blue-900 px-6 py-2 text-sm font-medium text-white hover:bg-blue-800"
              >
                Voltar
              </Link>
            </div>
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
