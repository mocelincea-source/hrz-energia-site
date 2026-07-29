import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, Home, Search, Lock, Paperclip } from "lucide-react";
import i18n from "@/i18n/config";
import { BoltDecor } from "@/components/site/BoltDecor";
import LogoHRZ from "@/assets/logo-hrz-white.png";

export const Route = createFileRoute("/etica/dados-incidente")({
  head: () => ({
    meta: [
      { title: `Dados do Incidente | ${i18n.t("ethics.meta.title")}` },
      {
        name: "description",
        content:
          "Descreva a situação e registre os dados do incidente no Canal de Denúncias da HRZ Transmissoras.",
      },
    ],
  }),
  component: DadosIncidentePage,
});

const inputClassName =
  "mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-900 focus:outline-none";

function DadosIncidentePage() {
  const navigate = useNavigate();

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
              <Link
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                to={"/etica/identificacao-relato" as any}
                className="rounded px-0.5 transition-colors hover:text-white"
              >
                Identificação
              </Link>
              <span className="text-white/30">/</span>
              <span className="font-medium text-white/90" aria-current="page">
                Dados do incidente
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
              <p>
                Por favor, descreva a situação que o motiva a procurar este canal. É importante que
                seu relato seja completo e detalhado. Não se esqueça de incluir na descrição:
              </p>
            </div>

            <div className="mb-4 mt-4 space-y-1 text-sm text-gray-700">
              <p>O quê (descrição da situação);</p>
              <p>Quem (nome das pessoas envolvidas, inclusive testemunhas);</p>
              <p>Quando (data em que aconteceu, acontece ou acontecerá a situação);</p>
              <p>Onde (Local do ocorrido);</p>
              <p>Por que (a causa ou motivo);</p>
              <p>Quanto (se for possível medir);</p>
              <p>Provas (se elas existem e onde podem ser encontradas).</p>
            </div>

            <div className="space-y-4 text-sm leading-relaxed text-gray-700">
              <p>
                Para acompanhar o andamento de seu relato, você receberá um número de protocolo que
                lhe será fornecido após o registro do relato.
              </p>
              <p>Agradecemos sua iniciativa e confiança.</p>
            </div>

            <h3 className="mb-6 mt-8 text-2xl font-semibold text-blue-900">Dados do incidente</h3>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="tipo-relato" className="text-sm text-gray-700">
                  Tipo do relato<span className="text-red-500"> *</span>
                </label>
                <select id="tipo-relato" defaultValue="" className={inputClassName}>
                  <option value="" disabled>
                    Selecione uma opção
                  </option>
                  <option value="Agressão física">Agressão física</option>
                  <option value="Assédio moral">Assédio moral</option>
                  <option value="Assédio sexual">Assédio sexual</option>
                  <option value="Corrupção">Corrupção</option>
                  <option value="Discriminação">Discriminação</option>
                  <option value="Destruição ou danos aos patrimônios da empresa">
                    Destruição ou danos aos patrimônios da empresa
                  </option>
                  <option value="Desvio de comportamento">Desvio de comportamento</option>
                  <option value="Descumprimento de normas e políticas internas">
                    Descumprimento de normas e políticas internas
                  </option>
                  <option value="Favorecimento ou conflito de interesses">
                    Favorecimento ou conflito de interesses
                  </option>
                  <option value="Fraude">Fraude</option>
                  <option value="Gestão por injúria">Gestão por injúria</option>
                  <option value="Importunação sexual">Importunação sexual</option>
                  <option value="Outros">Outros</option>
                  <option value="Pagamento ou recebimento impróprio">
                    Pagamento ou recebimento impróprio
                  </option>
                  <option value="Relacionamento íntimo com subordinação direta">
                    Relacionamento íntimo com subordinação direta
                  </option>
                  <option value="Roubo, furto ou desvio de materiais">
                    Roubo, furto ou desvio de materiais
                  </option>
                  <option value="Uso ou tráfico de substâncias proibidas">
                    Uso ou tráfico de substâncias proibidas
                  </option>
                  <option value="Violação de leis trabalhistas">
                    Violação de leis trabalhistas
                  </option>
                  <option value="Violação de normas regulatórias">
                    Violação de normas regulatórias
                  </option>
                  <option value="Vazamento ou uso indevido de informações">
                    Vazamento ou uso indevido de informações
                  </option>
                  <option value="Violação de leis ambientais">
                    Violação de leis ambientais
                  </option>
                </select>
              </div>

              <div>
                <label htmlFor="local-ocorrido" className="text-sm text-gray-700">
                  Local do ocorrido<span className="text-red-500"> *</span>
                </label>
                <select id="local-ocorrido" defaultValue="" className={inputClassName}>
                  <option value="" disabled>
                    Selecione o local
                  </option>
                  <option value="Espirito Santo">Espirito Santo</option>
                  <option value="Maranhão">Maranhão</option>
                  <option value="Minas Gerais">Minas Gerais</option>
                  <option value="São Paulo">São Paulo</option>
                </select>
              </div>

              <div>
                <label htmlFor="descricao" className="text-sm text-gray-700">
                  Descrição<span className="text-red-500"> *</span>
                </label>
                <textarea id="descricao" rows={5} className={inputClassName} />
              </div>

              <p className="mb-4 mt-2 text-sm text-gray-700">
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

              <div>
                <label htmlFor="nivel-confianca" className="text-sm text-gray-700">
                  Qual o seu nível de confiança neste canal? (Considerando que 0 - não confia e 5 -
                  confia muito)
                </label>
                <select id="nivel-confianca" defaultValue="" className={inputClassName}>
                  <option value="" disabled>
                    Selecione...
                  </option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>

              <button
                type="button"
                onClick={() =>
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  navigate({ to: "/etica/relato-sucesso" as any })
                }
                className="mt-8 flex w-fit items-center gap-2 rounded-lg bg-blue-900 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-800"
              >
                Gravar
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
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
