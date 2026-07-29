import { createFileRoute, Link } from "@tanstack/react-router";
import { Home, Search, Lock } from "lucide-react";
import i18n from "@/i18n/config";
import { BoltDecor } from "@/components/site/BoltDecor";
import LogoHRZ from "@/assets/logo-hrz-white.png";

export const Route = createFileRoute("/etica/protecao-dados")({
  head: () => ({
    meta: [
      { title: `Proteção de Dados | ${i18n.t("ethics.meta.title")}` },
      {
        name: "description",
        content:
          "Informações sobre proteção de dados pessoais e confidencialidade no Canal de Denúncias da HRZ Transmissoras.",
      },
    ],
  }),
  component: ProtecaoDadosPage,
});

function ProtecaoDadosPage() {
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
                Proteção de dados
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
          <div className="space-y-8">
            {/* Seção 1 */}
            <div>
              <h2 className="mb-4 text-xl font-semibold text-blue-900">
                Qual o compromisso da minha organização com relação a proteção de dados pessoais?
              </h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-700">
                O bom funcionamento de um Canal de Denúncias preza pela confidencialidade de todas
                as informações aqui obtidas. Reiteramos que o objetivo do canal é apurar possíveis
                condutas antiéticas e, dessa forma, garantir um ambiente seguro e profissional para
                a manifestação da informação, com anonimato e confidencialidade garantidos.
              </p>
              <p className="text-sm leading-relaxed text-gray-700">
                Portanto, todas as informações são protegidas e qualquer dados pessoal fornecido
                será tratado de acordo com a legislação em vigor.
              </p>
            </div>

            {/* Seção 2 */}
            <div>
              <h2 className="mb-4 text-xl font-semibold text-blue-900">
                O que são dados pessoais?
              </h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-700">
                De acordo com a lei, consideram‑se dados pessoais quaisquer informações relativas a
                uma pessoa individual identificada ou identificável. Por exemplo: um nome, um
                número de identificação ou a um ou mais elementos específicos da sua identidade
                física, fisiológica, psíquica, econômica, cultural ou social.
              </p>
              <p className="text-sm leading-relaxed text-gray-700">
                O objetivo do canal não é obter informações pessoais, porém, devido a natureza da
                denúncia, isso poderá acontecer. Neste caso, todas as informações serão protegidas
                e tratadas de acordo com a lei.
              </p>
            </div>

            {/* Seção 3 */}
            <div>
              <h2 className="mb-4 text-xl font-semibold text-blue-900">
                Quais informações devo registrar em meu relato?
              </h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-700">
                Você deve incluir em seu relato todas as informações necessárias para a apuração
                objetiva do caso, detalhando a situação, quando, como e onde ela ocorreu, e quem
                são as pessoas envolvidas. Além disso, informações sobre testemunhas e
                evidências/provas que possam ser obtidas são valiosas e devem ser informadas.
              </p>
              <p className="text-sm leading-relaxed text-gray-700">
                Você não deve incluir em seu relato quaisquer detalhes de sua vida pessoal ou dos
                envolvidos (como por exemplo, detalhes sobre o estado de saúde, orientação sexual,
                escolha religiosa, entre outros), a não ser que tais informações sejam necessárias
                para a compreensão e apuração do caso.
              </p>
            </div>

            {/* Seção 4 */}
            <div>
              <h2 className="mb-4 text-xl font-semibold text-blue-900">
                Quem terá acesso ao meu relato e aos meus dados?
              </h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-700">
                As informações registradas no canal são recebidas por uma empresa independente e
                especializada, a Aliant, assegurando sigilo absoluto e o tratamento adequado de
                cada situação pela alta administração da sua organização, sem conflitos de
                interesses.
              </p>
              <p className="mb-4 text-sm leading-relaxed text-gray-700">
                HRZ Transmissoras garante a sua confidencialidade, para que o tratamento da
                denúncia ocorra preservando sua identidade. Exclusivamente em caso de detecção algo
                ilícito, os seus dados podem ser comunicados a terceiros (Juízes e tribunais,
                forças de segurança ou administração pública), para a proteção rigorosa dos
                interesses públicos.
              </p>
              <p className="text-sm leading-relaxed text-gray-700">
                A Aliant e sua organização estão em conformidade com a legislação referente a
                proteção de dados pessoais.
              </p>
            </div>

            {/* Seção 5 */}
            <div>
              <h2 className="mb-4 text-xl font-semibold text-blue-900">
                O que será feito com meu relato e quando será excluído?
              </h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-700">
                As informações de relatos serão armazenadas por tempo indeterminado com objetivo de
                realizar o processo de apuração e conclusão do caso.
              </p>
              <p className="text-sm leading-relaxed text-gray-700">
                Além disso, informações consolidadas serão utilizadas para geração de estatísticas
                da operação, mas nenhum nome envolvido ou dado pessoal será exposto.
              </p>
            </div>

            {/* Seção 6 */}
            <div>
              <h2 className="mb-4 text-xl font-semibold text-blue-900">Qual meu dever?</h2>
              <p className="text-sm leading-relaxed text-gray-700">
                Seu dever é utilizar este canal de boa-fé e registrar informações verdadeiras,
                apresentadas com riqueza de detalhes e suporte de evidências, sempre que possível.
              </p>
            </div>

            {/* Seção 7 */}
            <div>
              <h2 className="mb-4 text-xl font-semibold text-blue-900">Quais são os meus direitos?</h2>
              <ul className="space-y-4">
                <li className="text-sm leading-relaxed text-gray-700">
                  • <strong>Direito de ser excluído:</strong> Se desejado, você pode solicitar que
                  suas informações pessoais sejam excluídas física e logicamente das bases de dados
                  do Canal. Caso queira solicitar a exclusão de informações sobre algum registro
                  que tenha feito, por favor, acesse o campo “Acompanhar relato” presente neste
                  site, informe seu protocolo e um resumo da situação que deseja excluir.
                </li>
                <li className="text-sm leading-relaxed text-gray-700">
                  • <strong>Direito a retificação dos dados:</strong> Se desejado, você poderá
                  solicitar e indicar correções e/ou complementações sobre dados pessoais
                  previamente informados. Caso queira modificar um registro que tenha feito, por
                  favor, acesse o campo “Acompanhar relato” presente neste site, informe seu
                  protocolo e quais informações deseja modificar.
                </li>
                <li className="text-sm leading-relaxed text-gray-700">
                  • <strong>Direito a transparência:</strong> Se desejado, você pode solicitar
                  informações sobre o processamento e armazenamento dos seus dados, incluindo:
                  tempo de retenção, dados de contato do responsável pelos dados pessoais na
                  organização, justificativa para manter o dado pessoal armazenado.
                </li>
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-gray-700">
                Esta solicitação pode ser feita diretamente ao responsável pelos dados pessoais na
                sua organização (Oficial de Proteção de Dados/Data Privacy Officer), ou via o menu
                “Acompanhar relato” deste site (consulte seu protocolo e no campo de observações
                registre sua solicitação de informações).
              </p>
              <p className="mt-4 text-sm leading-relaxed text-gray-700">
                Reiteramos que as informações registradas no Canal são recebidas, verificadas e
                analisadas de forma isenta, sigilosa e sem conflitos de interesse. Diversos
                cuidados são observados para preservar a privacidade de denunciantes e denunciados.
              </p>
            </div>

            {/* Seção 8 */}
            <div>
              <h2 className="mb-4 text-xl font-semibold text-blue-900">
                Dúvidas? Mais informações?
              </h2>
              <p className="pb-8 text-sm leading-relaxed text-gray-700">
                Para saber mais sobre a Aliant e como protegemos nossos dados, ou contatar nosso
                DPO, acesse www.aliant.com.br.
              </p>
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

      <footer className="w-full py-6 text-center text-xs text-gray-500">
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
