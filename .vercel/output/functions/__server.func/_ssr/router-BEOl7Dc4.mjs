import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { c as createRouter, u as useRouter, a as createRootRoute, b as createFileRoute, l as lazyRouteComponent, H as HeadContent, S as Scripts, d as useRouterState, O as Outlet, L as Link } from "../_libs/tanstack__react-router.mjs";
import { i as instance } from "../_libs/i18next.mjs";
import { i as initReactI18next } from "../_libs/react-i18next.mjs";
import { A as AnimatePresence, m as motion, u as useInView, a as useMotionValue, b as useSpring, c as useScroll, d as useTransform } from "../_libs/framer-motion.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/html-parse-stringify.mjs";
import "../_libs/void-elements.mjs";
import "../_libs/use-sync-external-store.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const logoWhite = "/assets/logo-hrz-white-B-K2KEs4.png";
const SPLASH_HOLD_S = 2;
const SPLASH_EXIT_DURATION = 0.5;
const SPLASH_EXIT_END = SPLASH_HOLD_S + SPLASH_EXIT_DURATION;
const HERO_BREATH = 0.25;
const HERO_BASE = SPLASH_EXIT_END + HERO_BREATH;
const HERO_VIDEO_REVEAL = SPLASH_HOLD_S;
const HERO_STAGGER = 0.22;
const HERO_DURATION = 0.9;
const easeOut = [0.16, 1, 0.3, 1];
function Reveal({
  children,
  delay = 0,
  y = 30,
  className,
  as = "div"
}) {
  const MotionTag = motion[as];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    MotionTag,
    {
      initial: { opacity: 0, y },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.15 },
      transition: { duration: 0.85, delay, ease: easeOut },
      className,
      children
    }
  );
}
function Stagger({
  children,
  className,
  delayChildren = 0.08,
  staggerChildren = 0.11,
  fallbackDelay
}) {
  const ref = reactExports.useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const [forced, setForced] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!fallbackDelay) return;
    const id = setTimeout(() => setForced(true), fallbackDelay);
    return () => clearTimeout(id);
  }, [fallbackDelay]);
  const variants = {
    hidden: {},
    show: { transition: { delayChildren, staggerChildren } }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      ref,
      variants,
      initial: "hidden",
      animate: inView || forced ? "show" : "hidden",
      className,
      children
    }
  );
}
const staggerItem = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: easeOut } }
};
function StaggerItem({
  children,
  className
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: staggerItem, className, children });
}
function Counter({
  to,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1.8,
  className,
  fallbackDelay
}) {
  const ref = reactExports.useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [forced, setForced] = reactExports.useState(false);
  const [val, setVal] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (!fallbackDelay) return;
    const id = setTimeout(() => setForced(true), fallbackDelay);
    return () => clearTimeout(id);
  }, [fallbackDelay]);
  const triggered = inView || forced;
  reactExports.useEffect(() => {
    if (!triggered) return;
    const start = performance.now();
    const ms = duration * 1e3;
    let raf = 0;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / ms);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(eased * to);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [triggered, to, duration]);
  const formatted = val.toLocaleString("pt-BR", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, className, children: [
    prefix,
    formatted,
    suffix
  ] });
}
function HoverLift({
  children,
  className,
  intensity = 6
}) {
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotateX = useSpring(rx, { stiffness: 180, damping: 20 });
  const rotateY = useSpring(ry, { stiffness: 180, damping: 20 });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      onMouseMove: (e) => {
        const r = e.currentTarget.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        ry.set(px * intensity);
        rx.set(-py * intensity);
      },
      onMouseLeave: () => {
        rx.set(0);
        ry.set(0);
      },
      whileHover: { y: -6 },
      transition: { type: "spring", stiffness: 260, damping: 24 },
      style: { rotateX, rotateY, transformPerspective: 900 },
      className,
      children
    }
  );
}
function Float({
  children,
  className,
  amplitude = 10,
  duration = 4
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className,
      animate: { y: [0, -amplitude, 0] },
      transition: { duration, repeat: Infinity, ease: "easeInOut" },
      children
    }
  );
}
function Parallax({
  children,
  className,
  offset = 60
}) {
  const ref = reactExports.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { ref, style: { y }, className, children });
}
function ScrollProgressBar({ className }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      style: { scaleX, transformOrigin: "0% 50%" },
      className: "fixed inset-x-0 top-0 z-50 h-[3px] bg-hrz-electric " + (className ?? "")
    }
  );
}
function PageTransition({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 16 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.65, ease: easeOut },
      children
    }
  );
}
function SplashOverlay({ onDone }) {
  reactExports.useEffect(() => {
    const timer = setTimeout(onDone, SPLASH_HOLD_S * 1e3);
    return () => clearTimeout(timer);
  }, [onDone]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      className: "fixed inset-0 z-50 bg-transparent",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0, transition: { duration: SPLASH_EXIT_DURATION, ease: easeOut } },
      transition: { duration: 0.2 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0",
            style: {
              background: "radial-gradient(circle at center, #112254 0%, #00040f 100%)"
            },
            "aria-hidden": true
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex h-full flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-hrz flex flex-1 items-center pt-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid w-full gap-10 lg:grid-cols-2 lg:gap-16", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center lg:justify-end lg:pr-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, scale: 0.88, y: 14 },
                animate: { opacity: 1, scale: 1, y: 0 },
                transition: { duration: 1.1, ease: easeOut },
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    className: "flex flex-col items-center",
                    animate: { scale: [1, 1.03, 1] },
                    transition: {
                      duration: 3.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.15
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        motion.img,
                        {
                          src: logoWhite,
                          alt: "HRZ Energia",
                          className: "h-28 w-auto select-none sm:h-32 lg:h-40",
                          draggable: false,
                          animate: {
                            filter: [
                              "drop-shadow(0 0 3px rgba(96,165,250,0.15))",
                              "drop-shadow(0 0 12px rgba(96,165,250,0.70)) drop-shadow(0 0 26px rgba(59,130,246,0.40))",
                              "drop-shadow(0 0 3px rgba(96,165,250,0.15))"
                            ]
                          },
                          transition: {
                            duration: 3.6,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1.15
                          }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mt-4 h-[1px] w-full max-w-[200px] overflow-hidden bg-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        motion.div,
                        {
                          className: "absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 via-white to-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8),0_0_30px_rgba(34,211,238,0.4)]",
                          initial: { scaleX: 0, originX: 0, opacity: 0.6 },
                          animate: { scaleX: 1, opacity: [0.6, 1, 0.6] },
                          transition: {
                            scaleX: { duration: 2, ease: "linear" },
                            opacity: {
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }
                          }
                        }
                      ) })
                    ]
                  }
                )
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "invisible border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-hrz grid grid-cols-2 gap-y-6 py-5 lg:grid-cols-4", children: [0, 1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center px-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-4xl font-light sm:text-5xl", children: " " }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs", children: " " })
          ] }, i)) }) })
        ] })
      ]
    }
  );
}
const appCss = "/assets/styles-Cidfs7Et.css";
const faviconUrl = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2032%2032'%20width='32'%20height='32'%3e%3crect%20width='32'%20height='32'%20rx='6'%20fill='%23060c1a'/%3e%3cpolygon%20points='19,3%209,17%2017,17%2013,29%2023,15%2015,15%2019,3'%20fill='%2329A8E5'/%3e%3c/svg%3e";
const nav$1 = { "home": "Início", "about": "Quem Somos", "segments": "Segmentos", "transmission": "Transmissoras", "wind": "Eólicas", "esg": "ESG", "investors": "Investidores", "ethics": "Ética e Conduta", "contact": "Contato", "cta": "Fale com a HRZ" };
const language$1 = { "switchTo": "EN", "label": "Translate to English" };
const home$1 = { "meta": { "title": "HRZ Energia — Plataforma integrada de transmissão e geração", "description": "A HRZ Energia opera 2.403 ckm de linhas de transmissão e 136,5 MW de geração eólica no Brasil. Plataforma integrada controlada pela Actis.", "ogTitle": "HRZ Energia Plataforma integrada de energia", "ogDescription": "Transmissão e geração renovável com disponibilidade acima de 99,8%. R$ 1bi+ de receita anual. Controlada pela Actis." }, "stats": { "revenue": "Receita anual combinada", "ckm": "ckm de linhas de transmissão", "spes": "SPEs no portfólio", "wind": "Geração eólica renovável" }, "pillars": { "disciplined": { "title": "Disciplinada", "text": "Operações integradas e custo ótimo, com governança ativa em cada etapa." }, "efficient": { "title": "Eficiente", "text": "Disponibilidade da transmissão acima de 99,8% superando o padrão regulatório da ANEEL." }, "reliable": { "title": "Confiável", "text": "Infraestrutura crítica do SIN entregue com excelência técnica de classe mundial." }, "responsible": { "title": "Responsável", "text": "ESG intrínseco ao modelo de negócio. Geração 100% eólica." } }, "hero": { "logoAlt": "HRZ energia", "headline1": "Rigor na gestão.", "headline2": "Consistência no retorno.", "ctaTransmission": "HRZ Transmissoras", "ctaWind": "Eólicas Babilônia" }, "about": { "eyebrow": "Quem somos", "heading1": "Uma plataforma integrada", "heading2": "de energia.", "body1": "A HRZ Energia opera ativos de transmissão e geração renovável no Brasil, controlada pela Actis gestora global de investimentos em infraestrutura sustentável. Nosso modelo combina disciplina institucional com excelência operacional.", "body2": "Somos uma Plataforma integrada de transmissão e geração renovável que entrega infraestrutura crítica ao Sistema Interligado Nacional, com a disciplina de um investidor institucional e a especialização de operadores de classe mundial.", "cta": "Ver a história completa" }, "portfolio": { "transmissionImgAlt": "Subestação de alta tensão ao entardecer", "transmissionEyebrow": "Transmissão", "transmissionHeading": "9 Concessões · 2.403 ckm · 5.228 MVA", "transmissionBody": "OHTL 500/230 kV com 29 subestações interligadas, disponibilidade superior a 99,8% e R$ 935m de RAP em 2026.", "windImgAlt": "Parque eólico Babilônia ao entardecer", "windEyebrow": "Geração", "windHeading": "Babilônia · 136,5 MW · 65 aerogeradores", "windBody": "Cinco parques adquiridos em 2019 na Bahia, fator de capacidade de 57% e R$ 202m de receita anual.", "cta": "Conheça nossos segmentos" }, "quickAccess": { "eyebrow": "Acesso rápido", "heading": "Os 2 segmentos do grupo.", "transmission": { "name": "HRZ Transmissoras", "description": "9 concessões · 2.403 ckm de OHTL 500/230 kV · R$ 935m de RAP em 2026.", "cta": "Ver Transmissoras" }, "wind": { "name": "Eólicas Babilônia", "description": "136,5 MW · 65 aerogeradores · fator de capacidade de 57% na Bahia.", "cta": "Ver Eólicas" } }, "footprint": { "eyebrow": "Pegada nacional", "heading1": "Energia que atravessa", "heading2": "o Brasil.", "body": "Nossos dois segmentos — transmissão e geração eólica — operam em diferentes regiões do país, do Maranhão e Bahia ao Espírito Santo, São Paulo, Minas Gerais, Santa Catarina e Rio Grande do Sul.", "cta": "Explorar o portfólio" }, "esg": { "eyebrow": "ESG", "headingPre": "Energia que ", "headingVerb1": "respeita", "headingMid": " e", "headingVerb2": " regenera.", "body": "Sustentabilidade não é um pilar adicional — é o nosso modelo operacional. Da geração 100% eólica à governança ativa, cada decisão é tomada com olhar de longo prazo sobre pessoas, comunidades e meio ambiente.", "cta": "Conheça nossa estratégia ESG", "card1": { "metric": "+500", "label": "Pessoas impactadas", "text": "Programas sociais ativos junto às comunidades onde operamos, com escuta ativa e parceria local." }, "card2": { "metric": "10", "label": "Comunidades atendidas", "text": "Diálogo, presença e geração de oportunidades em territórios estratégicos do nosso footprint." }, "card3": { "metric": "5", "label": "Projetos ativos", "text": "Iniciativas de capacitação, sustentabilidade, geração de renda e infraestrutura comunitária." } }, "value": { "eyebrow": "Criação de valor", "heading1": "Mais do que transmitir,", "heading2": "é fazer chegar, sempre.", "body": "Construímos uma plataforma escalável e certificável pronta para monetização via IPO ou venda estratégica. Crescimento por aquisições disciplinadas de ativos brownfield, com governança ativa da Actis em cada etapa.", "cta": "Para investidores", "windImgAlt": "Aerogeradores em campo verde ao entardecer", "phase1": { "title": "Fase I · 2025–2027", "text": "Estruturação e ramp-up. Integração transmissão + geração, refinanciamento EDIFY/SP-MG (R$ 428m), eficiência fiscal." }, "phase2": { "title": "Fase II · 2028–2030", "text": "Consolidação e monetização. Expansão Endurance (5 novos estados), plataforma auditável e investível." } }, "mapAlt": "Mapa do Brasil com os ativos da HRZ Energia", "actis": { "eyebrow": "Quem controla", "heading1": "Controlada pela", "heading2": "Actis.", "body1": "A Actis é uma gestora global de investimentos especializada em infraestrutura sustentável, com presença em mercados emergentes e foco em ativos de energia, infraestrutura digital e imobiliário de longo prazo.", "body2": "A HRZ é supervisionada pelo Global Sustainability Committee (GSC) da Actis, com reporte trimestral entre Londres e São Paulo — garantindo padrão internacional de governança, ESG e gestão de risco em cada ativo da plataforma.", "cta": "Conheça a estrutura societária" } };
const about$1 = { "meta": { "title": "Sobre — HRZ Energia", "description": "Conheça a HRZ Energia: plataforma integrada de transmissão e geração renovável no Brasil, controlada pela Actis.", "ogTitle": "Sobre a HRZ Energia", "ogDescription": "Disciplina institucional, especialização técnica e governança ativa em infraestrutura crítica do SIN." }, "hero": { "eyebrow": "Quem somos", "titleLine1": "Disciplina institucional.", "titleLine2": "Excelência operacional.", "subtitle": "A HRZ Energia é uma plataforma integrada de energia controlada pela Actis, gestora global de investimentos em infraestrutura sustentável." }, "model": { "eyebrow": "Nosso modelo", "headingPre": "Uma síntese de", "headingWord1": "capital", "headingMid": "e", "headingWord2": "técnica", "body1": "Operamos ativos de <bold>transmissão</bold> e <bold>geração renovável</bold> no Brasil, com foco em <accent>excelência operacional</accent>, governança robusta e criação de valor de longo prazo.", "body2": "Nosso modelo combina a <bold>disciplina de um investidor institucional</bold> com a especialização técnica de operadores de classe mundial, entregando infraestrutura crítica ao sistema elétrico brasileiro com <accent>disponibilidade acima dos padrões regulatórios</accent>.", "body3": "Crescemos por <bold>aquisições disciplinadas</bold> de ativos brownfield, com governança ativa da Actis em cada etapa preparando uma plataforma <accent>auditável, escalável e investível</accent>." }, "business": { "eyebrow": "Modelo de negócio", "heading": "O que é uma plataforma integrada de transmissão e geração.", "body": "A HRZ combina dois segmentos complementares sob governança única: transmissão de alta tensão, com receita previsível indexada à inflação (RAP), e geração eólica renovável, com exposição estratégica à matriz energética brasileira. A integração entrega disciplina de capital, ganhos operacionais e otimização entre perfis distintos de risco-retorno.", "card1": { "title": "Transmissão", "text": "Receita regulada de longo prazo (RAP) com baixa volatilidade, indexada à inflação e independente de despacho." }, "card2": { "title": "Geração eólica", "text": "Exposição à matriz renovável com PPAs de longo prazo, fator de capacidade elevado e baixa pegada operacional." }, "card3": { "title": "Governança única", "text": "Plataforma auditável e escalável, com gestão técnica unificada e supervisão ativa da Actis em cada decisão." } }, "timeline": { "eyebrow": "Evolução corporativa", "heading": "Plataforma construída com disciplina e escala.", "items": [{ "year": "2019", "header": "Início", "headerStrong": "Geração", "delta": "+05", "unit": "Parques", "title": "Nasce a geração renovável", "detail": "Aquisição do Complexo Eólico Babilônia na Bahia: 5 parques, 65 aerogeradores, 136,5 MW de capacidade instalada com fator de capacidade entre os mais altos do Brasil." }, { "year": "2022", "header": "Início", "headerStrong": "Transmissão", "delta": "+03", "unit": "Concessões", "title": "Entrada em transmissão", "detail": "Aquisição das três primeiras concessões de transmissão de alta tensão, marcando a entrada da HRZ em ativos regulados com receita previsível (RAP)." }, { "year": "2024", "header": "Expansão", "headerStrong": "Transmissão", "delta": "+03", "unit": "Concessões", "title": "Escala da plataforma", "detail": "Mais três concessões somadas ao portfólio, consolidando a presença em diferentes regiões do SIN e ampliando a base de RAP indexada à inflação." }, { "year": "2025", "header": "Expansão", "headerStrong": "Transmissão", "delta": "+02", "unit": "Concessões", "title": "Consolidação nacional", "detail": "Adição de duas novas concessões, reforçando a posição da HRZ como plataforma integrada e disciplinada no setor de transmissão brasileiro." }, { "year": "2026", "header": "Expansão", "headerStrong": "Transmissão", "delta": "+01", "unit": "Concessão", "title": "Nona concessão e R$ 935m de RAP", "detail": "Com mais uma concessão, a Transmissoras alcança 9 SPEs, 2.403 ckm e R$ 935 milhões de RAP em 2026." }] }, "mission": { "eyebrow": "Missão", "text": "Desenvolver e operar ativos de infraestrutura de energia com excelência operacional e disciplina de capital, gerando valor sustentável para acionistas, parceiros e sociedade." }, "vision": { "eyebrow": "Visão", "text": "Consolidar-se como a plataforma de investimentos em infraestrutura de energia mais eficiente e disciplinada do setor, combinando desempenho operacional, governança robusta e responsabilidade socioambiental." }, "leadership": { "eyebrow": "Liderança", "heading": "Experiência que impulsiona resultados sustentáveis.", "body": "Time de executivos seniores com sólida trajetória em energia, finanças, estratégia, operações e governança, comprometidos com a excelência, inovação e geração de valor.", "portraitAlt": "Retrato de {{name}}", "governance": { "eyebrow": "Governança", "body": "Controlada pela Actis · supervisão ativa pelo Global Sustainability Committee, com reporte trimestral entre Londres e São Paulo." }, "items": [{ "name": "Eduardo Brito", "role": "CEO", "bio": "Mais de 20 anos no setor de energia. Liderança em estratégia, M&A e transformação de negócios em empresas globais." }, { "name": "Fernando Oliveira", "role": "CFO", "bio": "Mais de 25 anos em finanças e liderança executiva. Expertise em finanças corporativas, IPO, M&A e gestão de capital." }, { "name": "Juliana Scalzo", "role": "CLO", "bio": "Mais de 20 anos em Direito Corporativo, Compliance e M&A no setor de energia. Atuação regulatória estratégica." }, { "name": "Ítalo Augusto David", "role": "COO", "bio": "Mais de 20 anos em engenharia e gestão de projetos. Especialista em transmissão de energia e gestão de ativos no Brasil e exterior." }, { "name": "Tiago Cacozzi", "role": "QHSE", "bio": "Mais de 18 anos em Qualidade, Segurança, Saúde e Meio Ambiente. Foco em gestão de riscos, prevenção e melhoria contínua." }] }, "ethics": { "ceoAlt": "Eduardo Brito CEO HRZ Energia", "eyebrow": "Ética · Mensagem da alta administração", "quote": '"A integridade está no centro de tudo o que fazemos."', "body1": "Na HRZ Energia, acreditamos que excelência operacional e disciplina financeira só fazem sentido quando sustentadas por conduta ética irrepreensível. Operamos infraestrutura crítica ao Sistema Interligado Nacional e essa responsabilidade exige transparência absoluta em cada decisão.", "body2": "Nosso compromisso com a ética não é apenas regulatório: é cultural. Estende-se aos nossos colaboradores, parceiros, fornecedores e às comunidades onde atuamos. Sob a governança ativa da Actis e do Global Sustainability Committee, mantemos os mais altos padrões internacionais de conduta.", "body3": "Convido todos a conhecerem nossos documentos institucionais e a utilizarem o Canal de Denúncias sempre que necessário garantimos confidencialidade e atuação imparcial em qualquer situação reportada." }, "docs": { "eyebrow": "Documentos institucionais", "heading": "Conheça nossos compromissos.", "accessDoc": "Acessar documento", "important": { "eyebrow": "Importante", "body": "O Canal de Denúncias é operado de forma independente, garantindo o anonimato do denunciante e a apuração imparcial dos relatos. Todas as comunicações são tratadas com confidencialidade pelo Comitê de Ética da HRZ Energia." }, "cta": "Falar com o Comitê de Ética", "items": [{ "title": "Política Anticorrupção", "text": "Diretrizes para prevenção, detecção e tratamento de práticas de corrupção em todas as operações HRZ." }, { "title": "Código de Ética", "text": "Princípios e regras de conduta aplicáveis a colaboradores, fornecedores e parceiros." }, { "title": "Canal de Denúncias", "text": "Canal independente e confidencial para relato de violações ao Código de Ética e à Política Anticorrupção." }] } };
const segments$1 = /* @__PURE__ */ JSON.parse('{"transmission":{"meta":{"title":"Transmissoras — HRZ Energia","description":"Transmissoras: 9 concessões integradas ao SIN, 2.403 ckm de OHTL 500/230 kV, 29 subestações e R$ 935 milhões de RAP em 2026.","ogTitle":"Transmissoras — HRZ Energia","ogDescription":"Plataforma de transmissão de alta tensão da HRZ Energia em 7 estados brasileiros, controlada pela Actis."},"hero":{"eyebrow":"Transmissoras","titleLine1":"Energia de alta tensão","titleLine2":"com previsibilidade institucional.","subtitle":"Plataforma de transmissão de energia da HRZ Energia, controlada pela Actis, com 9 concessões integradas ao SIN em 7 estados brasileiros."},"about":{"eyebrow":"Quem somos","heading1":"Grupo de concessões","heading2":"integradas ao SIN.","body1":"A Transmissoras é a plataforma de transmissão de energia da HRZ Energia, controlada pelo fundo de investimento britânico Actis. Operamos concessões da rede básica do Sistema Interligado Nacional em sete estados brasileiros, lidando com níveis de tensão entre 230 kV e 500 kV.","body2":"Iniciamos a operação no Brasil em outubro de 2021 com a aquisição de três concessionárias no Maranhão e no Espírito Santo. Em fevereiro de 2024, ampliamos o portfólio com a concessão SPMG, que escoa a energia da Usina de Belo Monte ao Sudeste do país, totalizando cerca de R$ 4,3 bilhões de investimentos em infraestrutura.","body3":"Atuamos em conformidade com contratos, regulação e legislação aplicáveis, aplicando as melhores práticas de engenharia para entregar disponibilidade, confiabilidade e sustentabilidade no longo prazo."},"kpis":{"eyebrow":"Pegada operacional","heading":"Números que sustentam a operação."},"footprint":{"eyebrow":"Pegada nacional","heading1":"Sete estados.","heading2":"Um só sistema.","body":"Operamos linhas e subestações estratégicas para o equilíbrio do SIN do Maranhão ao Sudeste, escoando geração renovável e conectando centros de carga em todo o Brasil."},"concessionsSection":{"eyebrow":"Concessões","heading":"Conheça cada ativo da plataforma.","hint":"Clique em uma concessão para explorar tensão, extensão, subestações próprias e acessadas."},"infoLabels":{"voltage":"Tensão","lines":"Linhas de transmissão","ownSubstations":"Subestações próprias","accessedSubstations":"Subestações acessadas","acquisition":"Aquisição"},"differentials":{"eyebrow":"Diferenciais","heading":"Disciplina, governança e excelência técnica."},"timelineSection":{"eyebrow":"Linha do tempo","heading":"Da entrada no Brasil ao SIN integrado."},"cta":{"heading":"Quer entender o ativo em mais profundidade?","body":"Acesse a área de investidores ou fale diretamente com nosso time.","investors":"Investidores","contact":"Fale com a HRZ"},"kpisItems":[{"value":"9","label":"Concessões / SPEs"},{"value":"2.403","label":"ckm de OHTL"},{"value":"29","label":"Subestações"},{"value":"5.228","label":"MVA instalados"},{"value":"R$ 935m","label":"RAP 2026"},{"value":"99,8%","label":"Disponibilidade"}],"concessionsItems":[{"id":"es","nome":"HRZ ES","estado":"Espírito Santo","tensao":"230 kV","linhas":"106 km","subestacoes":"SE São Mateus 2 — 150 MVA","acessadas":"SE Linhares","aquisicao":"2021"},{"id":"ma1","nome":"HRZ MA I","estado":"Maranhão","tensao":"500 / 230 kV","linhas":"120,2 km (500 kV) + 4,8 km (230 kV)","subestacoes":"SE São Luís IV — 1.600 MVA","acessadas":"SE Miranda II · SE São Luís II","aquisicao":"2021"},{"id":"ma2","nome":"HRZ MA II","estado":"Maranhão","tensao":"230 kV","linhas":"201,9 km","subestacoes":"SE Chapadinha 2 — 200 MVA","acessadas":"SE Coelho Neto","aquisicao":"2021"},{"id":"spmg","nome":"HRZ SPMG","estado":"São Paulo · Minas Gerais","tensao":"500 kV","linhas":"743 km","subestacoes":"—","acessadas":"SE Cachoeira Paulista · SE Estreito","aquisicao":"2024 · escoamento de Belo Monte"}],"differentialsItems":[{"title":"Disponibilidade superior","text":"Operação consistentemente acima de 99,8%, dentro das melhores referências do setor e exigências da ANEEL e do ONS."},{"title":"Receita previsível (RAP)","text":"RAP indexada à inflação, com R$ 935 milhões previstos para o ciclo 2026, gerando previsibilidade de longo prazo."},{"title":"Sustentabilidade IFC","text":"Programa Net Zero, estudos de biodiversidade, reposição florestal e prevenção a queimadas alinhados a padrões IFC."},{"title":"Governança institucional","text":"Comitês de ESG, Operações, Financeiro e Conselho com membros independentes. Liderança ativa em pautas da ABRATE."}],"timelineItems":[{"ano":"2021","titulo":"Aquisição inicial","texto":"Entrada no Brasil com a compra de três concessionárias de transmissão nos estados do Maranhão e Espírito Santo (lotes 24, 11 e 7)."},{"ano":"2024","titulo":"Expansão para o Sudeste","texto":"Aquisição da concessão SPMG, responsável pelo escoamento da energia de Belo Monte ao Sudeste, totalizando R$ 4,3 bi em infraestrutura."},{"ano":"2026","titulo":"9 SPEs e R$ 935m de RAP","texto":"Plataforma consolidada com 9 SPEs, 2.403 ckm e 29 subestações em 7 estados brasileiros, integradas ao SIN."}]},"wind":{"meta":{"title":"Eólicas Babilônia — HRZ Energia","description":"Eólicas Babilônia: 5 complexos eólicos na Bahia, 65 aerogeradores, 136,5 MW de capacidade instalada e fator de capacidade entre os mais altos do Brasil.","ogTitle":"Eólicas Babilônia — HRZ Energia","ogDescription":"Geração eólica sustentável no semiárido baiano: cinco parques em Morro do Chapéu, Ourolândia e Várzea Nova."},"hero":{"eyebrow":"Eólicas Babilônia","titleLine1":"Produção de energia","titleLine2":"sustentável e renovável.","subtitle":"Cinco complexos eólicos localizados em Morro do Chapéu, Ourolândia e Várzea Nova, na Bahia, somando 65 aerogeradores e 136,5 MW de capacidade instalada."},"overview":{"eyebrow":"Visão geral","heading1":"Fontes renováveis promovendo","heading2":"o desenvolvimento.","body1":"Sustentável e inesgotável — essas são algumas características da energia eólica, fonte limpa e renovável em ampla ascensão que gera empregos e contribui para minimizar impactos ambientais no planeta.","body2":"A Babilônia opera cinco complexos eólicos no semiárido baiano, em municípios com regime de ventos privilegiado, entregando um fator de capacidade entre os mais altos do Brasil. A operação é controlada pela Actis e integrada à plataforma HRZ Energia.","imgAlt":"Vista aérea do parque eólico Babilônia"},"kpis":{"eyebrow":"Destaques operacionais","heading":"Geração consistente. Impacto positivo."},"complexes":{"eyebrow":"Complexos eólicos","heading":"Cinco parques no semiárido baiano.","hint":"Clique em um complexo para explorar localização, destaques e características de operação."},"esg":{"eyebrow":"Compromisso ESG","heading":"Energia que respeita pessoas e território."},"cta":{"heading":"Conheça o site oficial das Eólicas Babilônia.","body":"Acesse o portal institucional ou converse com nosso time de relacionamento.","siteLink":"Site Eólicas Babilônia","contactLink":"Fale com a HRZ"},"kpisItems":[{"value":"5","label":"Complexos eólicos"},{"value":"65","label":"Aerogeradores"},{"value":"136,5 MW","label":"Capacidade instalada"},{"value":"57%","label":"Fator de capacidade"},{"value":"R$ 202m","label":"Receita anual"},{"value":"2019","label":"Aquisição pela Actis"}],"complexesItems":[{"id":"morro","nome":"Complexo Morro do Chapéu","municipio":"Morro do Chapéu — BA","descricao":"Conjunto de parques no platô do semiárido baiano, onde a constância dos ventos garante alto fator de capacidade durante todo o ano.","destaques":["Ventos consistentes acima de 8 m/s","Logística integrada de O&M","Topografia favorável à geração"]},{"id":"ourolandia","nome":"Complexo Ourolândia","municipio":"Ourolândia — BA","descricao":"Parques posicionados em corredor de vento privilegiado, com aerogeradores de última geração e operação remota.","destaques":["Aerogeradores de alta potência","Monitoramento em tempo real","PPA de longo prazo"]},{"id":"varzea","nome":"Complexo Várzea Nova","municipio":"Várzea Nova — BA","descricao":"Complemento estratégico ao bloco Babilônia, integrando a operação a subestações coletoras e à rede básica do SIN.","destaques":["Integração ao SIN","Sinergia operacional","Compromisso socioambiental local"]}],"pilaresItems":[{"title":"Energia limpa e renovável","text":"Geração 100% eólica, fonte inesgotável que evita emissões de CO₂ e fortalece a matriz renovável brasileira."},{"title":"Sustentabilidade no semiárido","text":"Programas de biodiversidade, recuperação de áreas e convivência com a caatinga alinhados a padrões IFC."},{"title":"Desenvolvimento das comunidades","text":"Geração de empregos locais, educação ambiental e projetos sociais nos municípios baianos onde atuamos."},{"title":"Operação de classe mundial","text":"Governança institucional Actis, gestão de risco, ética nos negócios e ouvidoria ativa com stakeholders."}],"regioes":["Morro do Chapéu","Ourolândia","Várzea Nova"]},"portfolio":{"meta":{"title":"Portfólio HRZ Energia","description":"14 SPVs em operação: 9 ativos de transmissão (2.403 ckm · 5.228 MVA) e 5 SPVs do Complexo Eólico Babilônia (136,5 MW).","ogTitle":"Portfólio HRZ Transmissão e Geração","ogDescription":"Ativos críticos do SIN em quatro estados, com disponibilidade superior a 99,8%."},"hero":{"eyebrow":"Portfólio de ativos","titleLine1":"14 SPVs.","titleLine2":"Escala nacional.","subtitle":"Plataforma integrada com transmissão de alta tensão e geração eólica renovável, distribuída em ativos brownfield adquiridos com disciplina entre 2019 e 2025."},"footprint":{"eyebrow":"Pegada nacional","heading1":"Presença estratégica","heading2":"em todo o Brasil.","body":"Operamos ativos críticos em estados-chave do Sistema Interligado Nacional do Maranhão e Bahia ao Espírito Santo, São Paulo, Minas Gerais, Santa Catarina e Rio Grande do Sul.","stat1":{"value":"9","label":"Concessões de transmissão"},"stat2":{"value":"5","label":"Parques eólicos"},"stat3":{"value":"2.403 ckm","label":"OHTL 500/230 kV"},"stat4":{"value":"29","label":"Subestações"}},"transmission":{"eyebrow":"Transmissão","heading":"HRZ + Skyline.","subtitle":"9 SPVs adquiridas entre 2021 e 2025 · 2.403 ckm de OHTL 500/230 kV · 5.228 MVA de capacidade instalada · 29 subestações interligadas.","imgAlt":"Subestação ao entardecer","stats":[{"value":">99,8%","label":"Disponibilidade"},{"value":"29","label":"Subestações"},{"value":"2.403","label":"ckm de linhas"},{"value":"R$ 935m","label":"RAP 2026"}]},"generation":{"eyebrow":"Geração","heading":"Eólicas Babilônia.","body":"5 parques adquiridos em 2019 com 65 aerogeradores e 136,5 MW de capacidade instalada na Bahia. Operação consistente com fator de capacidade de 57% e PPA de longo prazo.","imgAlt":"Parque eólico Babilônia","stats":[{"value":"136,5 MW","label":"Capacidade"},{"value":"65","label":"Aerogeradores"},{"value":">98%","label":"Disponibilidade"},{"value":"R$ 202m","label":"Receita"}]},"transmissionAssets":[{"code":"MGTE","name":"Horizon MG / SP","info":"OHTL 500 kV"},{"code":"TMA I","name":"Horizon Maranhão I","info":"Linha + subestação"},{"code":"TMA II","name":"Horizon Maranhão II","info":"Linha + subestação"},{"code":"AVT","name":"Água Vermelha","info":"Subestação"},{"code":"TES","name":"Horizon Espírito Santo","info":"OHTL 230 kV"},{"code":"SP-MG","name":"OHTL SP-MG 500 kV","info":"Linha de transmissão"},{"code":"ALSC","name":"Aliança SC","info":"Linha de transmissão"},{"code":"LSUL","name":"Litoral Sul","info":"Linha de transmissão"},{"code":"VYRD","name":"Vineyards","info":"3º Trafo Lajeado 3 (em obra)"}]}}');
const esg$1 = { "meta": { "title": "ESG — HRZ Energia", "description": "Estratégia ESG da HRZ: governança, clima e responsabilidade social. Geração 100% eólica, LTI=0 e supervisão pelo Global Sustainability Committee da Actis.", "ogTitle": "Estratégia ESG da HRZ Energia", "ogDescription": "Governança, clima e responsabilidade social com KPIs integrados à gestão." }, "hero": { "eyebrow": "Estratégia ESG", "titleLine1": "Mais que energia,", "titleLine2": "geramos transformação.", "subtitle": "Estamos presentes onde importa: perto das comunidades, ouvindo, colaborando e gerando impacto positivo." }, "metrics": { "people": "pessoas impactadas", "communities": "comunidades atendidas", "projects": "projetos ativos" }, "social": { "eyebrow": "Responsabilidade Social", "heading": "Impacto real nas comunidades onde operamos." }, "gallery": [{ "label": "Infraestrutura" }, { "label": "Comunidade" }, { "label": "Capacitação e Educação" }, { "label": "Geração de Renda" }, { "label": "Sustentabilidade" }, { "label": "Juntos Somos Mais Fortes" }], "pillars": [{ "title": "Ambiental", "items": ["Geração 100% eólica 136,5 MW de energia renovável", "Transmissão de baixo impacto, sem emissões operacionais", "Planos de contingência climática e monitoramento 24/7", "Programas de prevenção de incêndios nas faixas de servidão"] }, { "title": "Social", "items": ["Zero acidentes com afastamento (LTI = 0) em todos os ativos", "Engajamento com comunidades ao longo das linhas", "Programas de outreach social e desenvolvimento local", "Cadeia de fornecedores com requisitos de segurança e conduta"] }, { "title": "Governança", "items": ["Supervisão pelo Global Sustainability Committee da Actis", "Comitê ESG com reporte trimestral Londres / São Paulo", "Comunicação proativa com ANEEL e ONS", "Compliance, risk management e transparência de decisão"] }], "values": { "eyebrow": "Nossos Valores", "heading1": "Mais que projetos,", "heading2": "construímos relações.", "tagline": "Mais que presença, deixamos legado.", "items": [{ "title": "Respeito", "text": "Valorizamos as pessoas e a diversidade." }, { "title": "Integridade", "text": "Agimos com ética, transparência e responsabilidade." }, { "title": "Sustentabilidade", "text": "Promovemos ações que geram impacto positivo e duradouro." }, { "title": "Colaboração", "text": "Acreditamos no trabalho conjunto para transformar realidades." }] }, "highlights": { "eyebrow": "Destaques operacionais", "heading": "Resiliência, segurança e melhoria contínua.", "items": [{ "title": "Resiliência climática", "text": "Balancins da OHTL SP-MG 500 kV integralmente substituídos. Monitoramento 24/7 de condições meteorológicas e incêndios. Revisão completa de planos de contingência." }, { "title": "Segurança das instalações", "text": "Membro do Comitê ABRATE. Coordenação com forças de segurança federais para prevenção de ataques. Engajamento comunitário e prevenção de incêndios." }, { "title": "Melhoria contínua", "text": "Resolução ativa de passivos herdados de proprietários anteriores. Gestão operacional rigorosa, rastreabilidade e supervisão de equipes de campo." }] } };
const investors$1 = { "meta": { "title": "Investidores — HRZ Energia", "description": "RAP de R$ 1bi+ indexada à inflação, rating AAA.br e refinanciamento concluído. Plataforma pronta para monetização via IPO ou venda estratégica.", "ogTitle": "Investidores HRZ Energia", "ogDescription": "Receita previsível, capital disciplinado e roadmap claro de criação de valor." }, "hero": { "eyebrow": "Investidores", "titleLine1": "Receita previsível.", "titleLine2": "Capital disciplinado.", "subtitle": "Plataforma escalável e certificável, pronta para monetização via IPO ou venda estratégica. Governança ativa da Actis em cada etapa." }, "kpis": [{ "value": "R$ 1,0bi+", "label": "Receita Total (RAP + Geração)" }, { "value": "AAA.br", "label": "Rating Edify / SP-MG" }, { "value": "13,5%", "label": "Custo de capital refinanciado" }, { "value": "R$ 428m", "label": "Debênture emitida" }], "initiatives": { "eyebrow": "Iniciativas financeiras", "heading": "Em execução.", "items": [{ "title": "Refinanciamento EDIFY / SP-MG", "text": "Debênture de R$ 428m emitida. Substituição de ~R$ 550m de dívida Holdco. Letters of Credit liberam reserva de caixa. Rating AAA.br." }, { "title": "Reestruturação corporativa", "text": "Fusão reversa Skyline → Edify e spin-off parcial executados. Eficiência fiscal ~15% em JCP. Estrutura limpa pré-monetização." }, { "title": "Financial Completion · LC Release", "text": "TMA I e TMA II concluídos: redução de ~90% nos custos de LC em 2025. MGTE e AVT em andamento, entrega prevista 2026." }] }, "phases": { "phase1": { "phase": "Fase I", "range": "2025 – 2027", "title": "Estruturação e Ramp-Up", "items": ["Integração das equipes de transmissão e geração", "Otimização da estrutura de dívida e eficiência fiscal", "Criação do COO e posição EQS (Qualidade & ESG)", "Implementação de ERP modular e sistemas de gestão", "Estratégia de mitigação de curtailment (BESS / Bitcoin Mining)", "Refinanciamento EDIFY / SP-MG debênture R$ 428m"] }, "phase2": { "phase": "Fase II", "range": "2028 – 2030", "title": "Consolidação e Monetização", "items": ["Maturidade operacional e governança consolidada", "Plataforma auditável e investível (IPO ou M&A)", "Conclusão do Projeto Vineyards (3º Trafo Lajeado 3)", "Expansão Endurance 5 novos estados, região Norte", "Desinvestimento responsável com retornos predefinidos", "Entrega de valor a investidores, comunidades e transição energética"] } }, "docs": { "eyebrow": "Documentos", "heading": "DFs e documentos societários.", "body": "Demonstrações financeiras auditadas, atos societários, relatórios de gestão e materiais complementares disponíveis sob solicitação para investidores, contrapartes e analistas.", "mascoteAlt": "Mascote HRZ apontando", "requestCta": "Solicitar documentos", "items": [{ "title": "Demonstrações Financeiras", "text": "DFs auditadas anuais e ITRs trimestrais da HRZ Energia e suas controladas." }, { "title": "Documentos Societários", "text": "Estatuto, atas, atos societários e estrutura de capital atualizada." }, { "title": "Materiais para Investidores", "text": "Apresentações institucionais, relatórios de gestão e materiais de governança." }] } };
const contact$1 = { "meta": { "title": "Contato — HRZ Energia", "description": "Entre em contato com a HRZ Energia. Investidores, parcerias, imprensa e atendimento institucional.", "ogTitle": "Contato HRZ Energia", "ogDescription": "Investidores, parcerias e atendimento institucional." }, "hero": { "eyebrow": "Contato", "titleLine1": "Vamos conversar", "titleLine2": "sobre energia.", "subtitle": "Estamos disponíveis para investidores, parceiros institucionais e imprensa." }, "form": { "eyebrow": "Mensagem direta", "heading": "Fale com a HRZ.", "fieldName": "Nome", "fieldCompany": "Empresa", "fieldEmail": "E-mail", "fieldSubject": "Assunto", "subjectPlaceholder": "Selecione um assunto", "subjectInvestor": "Investidor", "subjectPress": "Imprensa", "subjectPartner": "Parceiro", "subjectCommunity": "Comunidade", "fieldMessage": "Mensagem", "submitBtn": "Enviar mensagem" }, "cards": { "emailTitle": "E-mail institucional", "emailValue": "contato@hrzenergia.com.br", "locationTitle": "Sede", "locationValue": "São Paulo · Brasil", "controllerTitle": "Controladora", "controllerValue": "Actis · Global Sustainability Committee · Londres" }, "investorsBox": { "eyebrow": "Para investidores", "body": "Materiais detalhados de governança, desempenho operacional e estratégia financeira disponíveis sob solicitação." }, "mascoteAlt": "Mascote HRZ acenando", "leadership": { "eyebrow": "Liderança HRZ", "heading": "Fale diretamente com nossos executivos.", "phoneLabel": "Telefone", "emailLabel": "E-mail", "items": [{ "name": "Eduardo Brito", "role": "CEO", "phone": "+55 11 99881-5236", "email": "eduardo.brito@hrztransmissoras.com.br" }, { "name": "Fernando Oliveira", "role": "CFO", "phone": "+55 11 98702-0349", "email": "fernando.oliveira@hrztransmissoras.com.br" }, { "name": "Ítalo Augusto David", "role": "COO", "phone": "+55 11 93289-8090", "email": "italo.david@hrztransmissoras.com.br" }, { "name": "Tiago Cacozzi", "role": "QHSE", "phone": "+55 11 97470-4633", "email": "tiago.cacozzi@hrztransmissoras.com.br" }, { "name": "Juliana Scalzo", "role": "CLO", "phone": "+55 11 96199-3569", "email": "juliana.scalzo@hrztransmissoras.com.br" }] }, "careers": { "eyebrow": "Carreiras", "heading": "Trabalhe conosco.", "body": "Procuramos talentos comprometidos com a transição energética do Brasil. Cadastre seu currículo e nosso time de Recursos Humanos entrará em contato quando houver oportunidades alinhadas ao seu perfil.", "benefit1Title": "Plataforma integrada", "benefit1Text": "Transmissão e geração renovável sob governança Actis.", "benefit2Title": "Cultura de excelência", "benefit2Text": "Padrões IFC, segurança operacional e desenvolvimento contínuo.", "successTitle": "Candidatura recebida!", "successBody": "Obrigado pelo interesse em fazer parte da HRZ Energia. Nosso time de RH analisará seu currículo e entrará em contato em caso de aderência.", "successCta": "Enviar outra candidatura", "formEyebrow": "Cadastro de currículo", "formHeading": "Faça parte da HRZ.", "fieldFullName": "Nome completo", "fieldPhone": "Telefone", "fieldAreaLabel": "Área desejada", "fieldAreaPlaceholder": "Selecione uma área", "fieldCvLabel": "Currículo (PDF, DOC ou DOCX · máx. 5 MB)", "fieldCvPlaceholder": "Clique para selecionar seu currículo", "fieldCvAttach": "Anexar", "fieldMessageLabel": "Mensagem (opcional)", "fieldMessagePlaceholder": "Conte um pouco sobre sua trajetória e interesses.", "submitBtn": "Enviar candidatura", "areas": ["Operação e Manutenção", "Engenharia", "Financeiro", "Jurídico e Regulatório", "ESG e Sustentabilidade", "Recursos Humanos", "Tecnologia da Informação", "QHSE", "Comunicação e Relacionamento", "Estágio · Jovem Aprendiz"] } };
const companies$1 = { "meta": { "title": "Segmentos HRZ Energia", "description": "Transmissoras (9 concessões · 2.403 ckm · R$ 935m RAP) e Eólicas Babilônia (136,5 MW · 65 aerogeradores). Plataforma integrada de transmissão e geração.", "ogTitle": "Segmentos HRZ Energia", "ogDescription": "Transmissão e geração renovável em uma única plataforma controlada pela Actis." }, "hero": { "eyebrow": "Segmentos", "titleLine1": "Duas frentes operacionais.", "titleHighlight": "Uma só plataforma.", "subtitle": "A HRZ Energia integra dois segmentos complementares — transmissão de alta tensão e geração eólica — sob governança única e disciplina institucional." }, "logic": { "eyebrow": "A lógica integrada", "heading1": "Complementaridade", "heading2": "entre receita e ativo.", "body1": "Operar transmissão e geração em uma mesma plataforma cria vantagens competitivas únicas: receita previsível indexada à inflação (RAP), exposição estratégica à matriz renovável brasileira e otimização de capital entre dois perfis distintos de risco-retorno.", "body2": "A integração permite gestão técnica unificada, compartilhamento de equipes especializadas em alta tensão e ganhos de eficiência em compliance regulatório com ANEEL e ONS preservando a autonomia operacional de cada negócio." }, "cards": { "transmission": { "eyebrow": "Transmissão", "name": "Transmissoras", "imgAlt": "Subestação de alta tensão", "description": "Plataforma de transmissão de alta tensão com 9 concessões integradas ao SIN, operando OHTL 500/230 kV e subestações em 7 estados brasileiros.", "metricLabel1": "Concessões", "metricLabel2": "ckm OHTL", "metricLabel3": "RAP 2026", "cta": "Conhecer Transmissoras" }, "wind": { "eyebrow": "Geração", "name": "Eólicas Babilônia", "imgAlt": "Parque eólico Babilônia", "description": "Complexo eólico com 5 parques na Bahia, 65 aerogeradores e operação consistente com fator de capacidade entre os mais altos do Brasil. PPA de longo prazo.", "metricLabel1": "Capacidade", "metricLabel2": "Aerogeradores", "metricLabel3": "Fator capacidade", "cta": "Conhecer Eólicas Babilônia" } }, "footprint": { "eyebrow": "Pegada nacional", "heading1": "Presença compartilhada", "heading2": "em todo o Brasil.", "body": "Nossos dois segmentos — transmissão e geração eólica — operam em diferentes regiões do país, do Maranhão e Bahia ao Espírito Santo, São Paulo, Minas Gerais, Santa Catarina e Rio Grande do Sul, formando uma pegada estratégica única da plataforma HRZ Energia no setor elétrico brasileiro." }, "corporate": { "eyebrow": "Estrutura Societária", "heading": "Controle Actis · Plataforma HRZ.", "body": "A HRZ Energia é controlada pela Actis, gestora global de investimentos em infraestrutura sustentável, com supervisão ativa do Global Sustainability Committee em Londres.", "exploreHint": "Clique nos cards para explorar" }, "orgNodes": { "actis": { "subtitle": "Controladora · Londres", "description": "Gestora global de investimentos em infraestrutura sustentável, com supervisão ativa pelo Global Sustainability Committee.", "details": [{ "label": "Sede", "value": "Londres, UK" }, { "label": "AUM", "value": "US$ 12.5 bi" }, { "label": "Foco", "value": "Infraestrutura sustentável" }] }, "hrz": { "subtitle": "Holding · São Paulo", "description": "Holding brasileira que integra os negócios de transmissão e geração renovável sob governança única.", "details": [{ "label": "Sede", "value": "São Paulo, BR" }, { "label": "Plataforma", "value": "Transmissão + Geração" }, { "label": "Governança", "value": "Conselho com Actis" }] }, "transmissoras": { "subtitle": "9 SPEs · Transmissão", "description": "Plataforma de transmissão de alta tensão com 9 concessões integradas ao SIN em 7 estados brasileiros.", "details": [{ "label": "Concessões", "value": "9 SPEs" }, { "label": "Extensão", "value": "2.403 ckm" }, { "label": "RAP 2026", "value": "R$ 935m" }] }, "babilonia": { "subtitle": "5 SPEs · Geração", "description": "Complexo eólico na Bahia com 5 parques, 65 aerogeradores e fator de capacidade entre os mais altos do Brasil.", "details": [{ "label": "Capacidade", "value": "136,5 MW" }, { "label": "Aerogeradores", "value": "65" }, { "label": "Fator capacidade", "value": "57%" }] } } };
const ethics$1 = { "meta": { "title": "Ética e Conduta — HRZ Energia", "description": "Conheça os documentos institucionais, o Código de Ética e o Canal de Denúncias da HRZ Energia. Integridade como princípio inegociável.", "ogTitle": "Ética e Conduta — HRZ Energia", "ogDescription": "Conduta ética, transparência e responsabilidade em cada decisão da HRZ Energia." }, "hero": { "eyebrow": "Ética e Conduta", "titleLine1": "Integridade como", "titleLine2": "princípio inegociável.", "subtitle": "Conduta ética, transparência e responsabilidade orientam todas as decisões da HRZ Energia de cada colaborador à alta administração." } };
const footer$1 = { "logoAlt": "HRZ energia", "tagline": "Plataforma integrada de energia controlada pela Actis. Operamos ativos críticos de transmissão e geração renovável no Brasil com disciplina, governança e excelência técnica.", "linkedinLabel": "LinkedIn HRZ Energia", "companyCol": { "title": "Empresa", "about": "Quem somos", "segments": "Segmentos", "transmission": "Transmissoras", "wind": "Eólicas", "esg": "Estratégia ESG", "ethics": "Ética e Conduta" }, "investorsCol": { "title": "Investidores", "overview": "Visão geral", "performance": "Desempenho", "governance": "Governança" }, "contactCol": { "title": "Contato", "location": "São Paulo · Brasil", "email": "contato@hrzenergia.com.br", "cta": "Fale com a HRZ" }, "copyright": "© {{year}} HRZ Energia. Todos os direitos reservados.", "controlled": "Controlada pela Actis · Global Sustainability Committee" };
const pt = {
  nav: nav$1,
  language: language$1,
  home: home$1,
  about: about$1,
  segments: segments$1,
  esg: esg$1,
  investors: investors$1,
  contact: contact$1,
  companies: companies$1,
  ethics: ethics$1,
  footer: footer$1
};
const nav = { "home": "Home", "about": "Who We Are", "segments": "Segments", "transmission": "Transmissoras", "wind": "Eólicas", "esg": "ESG", "investors": "Investors", "ethics": "Ethics & Conduct", "contact": "Contact", "cta": "Contact HRZ" };
const language = { "switchTo": "PT", "label": "Traduzir para Português" };
const home = { "meta": { "title": "HRZ Energia — Integrated Transmission and Generation Platform", "description": "HRZ Energia operates 2,403 ckm of transmission lines and 136.5 MW of wind generation in Brazil. Integrated platform controlled by Actis.", "ogTitle": "HRZ Energia — Integrated Energy Platform", "ogDescription": "Renewable transmission and generation with availability above 99.8%. R$1bn+ in annual revenue. Controlled by Actis." }, "stats": { "revenue": "Combined annual revenue", "ckm": "ckm of transmission lines", "spes": "SPEs in portfolio", "wind": "Renewable wind generation" }, "pillars": { "disciplined": { "title": "Disciplined", "text": "Integrated operations and optimized cost, with active governance at every stage." }, "efficient": { "title": "Efficient", "text": "Transmission availability above 99.8%, exceeding ANEEL's regulatory benchmark." }, "reliable": { "title": "Reliable", "text": "Critical SIN infrastructure delivered with world-class technical excellence." }, "responsible": { "title": "Responsible", "text": "ESG intrinsic to the business model. 100% wind-powered generation." } }, "hero": { "logoAlt": "HRZ Energia", "headline1": "Rigorous management.", "headline2": "Consistent returns.", "ctaTransmission": "HRZ Transmissoras", "ctaWind": "Babilônia Wind Farm" }, "about": { "eyebrow": "Who we are", "heading1": "An integrated energy", "heading2": "platform.", "body1": "HRZ Energia operates transmission and renewable generation assets in Brazil, controlled by Actis, a global investment manager focused on sustainable infrastructure. Our model combines institutional discipline with operational excellence.", "body2": "We are an integrated transmission and renewable generation platform delivering critical infrastructure to Brazil's National Interconnected System, with the discipline of an institutional investor and the expertise of world-class operators.", "cta": "Read our full story" }, "portfolio": { "transmissionImgAlt": "High-voltage substation at dusk", "transmissionEyebrow": "Transmission", "transmissionHeading": "9 Concessions · 2,403 ckm · 5,228 MVA", "transmissionBody": "500/230 kV OHTL with 29 interconnected substations, availability above 99.8%, and R$935m in RAP revenue in 2026.", "windImgAlt": "Babilônia wind farm at dusk", "windEyebrow": "Generation", "windHeading": "Babilônia · 136.5 MW · 65 wind turbines", "windBody": "Five parks acquired in 2019 in Bahia, with a 57% capacity factor and R$202m in annual revenue.", "cta": "Explore our segments" }, "quickAccess": { "eyebrow": "Quick access", "heading": "The two group segments.", "transmission": { "name": "HRZ Transmissoras", "description": "9 concessions · 2,403 ckm of OHTL 500/230 kV · R$935m in RAP in 2026.", "cta": "View Transmissoras" }, "wind": { "name": "Eólicas Babilônia", "description": "136.5 MW · 65 wind turbines · 57% capacity factor in Bahia.", "cta": "View Eólicas" } }, "footprint": { "eyebrow": "National footprint", "heading1": "Energy that crosses", "heading2": "Brazil.", "body": "Our two segments — transmission and wind generation — operate across multiple regions, from Maranhão and Bahia to Espírito Santo, São Paulo, Minas Gerais, Santa Catarina, and Rio Grande do Sul.", "cta": "Explore the portfolio" }, "esg": { "eyebrow": "ESG", "headingPre": "Energy that ", "headingVerb1": "respects", "headingMid": " and", "headingVerb2": " regenerates.", "body": "Sustainability is not an additional pillar — it is our operating model. From 100% wind generation to active governance, every decision is made with a long-term view of people, communities, and the environment.", "cta": "Discover our ESG strategy", "card1": { "metric": "+500", "label": "People impacted", "text": "Active social programs alongside the communities where we operate, with engaged listening and local partnership." }, "card2": { "metric": "10", "label": "Communities served", "text": "Dialogue, presence, and opportunity creation in strategic territories within our operational footprint." }, "card3": { "metric": "5", "label": "Active projects", "text": "Initiatives in training, sustainability, income generation, and community infrastructure." } }, "value": { "eyebrow": "Value creation", "heading1": "More than transmitting,", "heading2": "it's about always delivering.", "body": "We have built a scalable, certifiable platform ready for monetization via IPO or strategic sale. Growth through disciplined brownfield asset acquisitions, with active Actis governance at every stage.", "cta": "For investors", "windImgAlt": "Wind turbines in a green field at dusk", "phase1": { "title": "Phase I · 2025–2027", "text": "Structuring and ramp-up. Transmission + generation integration, EDIFY/SP-MG refinancing (R$428m), tax efficiency." }, "phase2": { "title": "Phase II · 2028–2030", "text": "Consolidation and monetization. Endurance expansion (5 new states), auditable and investable platform." } }, "mapAlt": "Map of Brazil with HRZ Energia assets", "actis": { "eyebrow": "Our controller", "heading1": "Controlled by", "heading2": "Actis.", "body1": "Actis is a global investment manager specializing in sustainable infrastructure, with a presence in emerging markets and a focus on energy assets, digital infrastructure, and long-term real estate.", "body2": "HRZ is overseen by the Actis Global Sustainability Committee (GSC), with quarterly reporting between London and São Paulo — ensuring international standards of governance, ESG, and risk management across every platform asset.", "cta": "Explore our corporate structure" } };
const about = { "meta": { "title": "About — HRZ Energia", "description": "Learn about HRZ Energia: an integrated transmission and renewable generation platform in Brazil, controlled by Actis.", "ogTitle": "About — HRZ Energia", "ogDescription": "Institutional discipline, technical expertise, and active governance over critical SIN infrastructure." }, "hero": { "eyebrow": "Who we are", "titleLine1": "Institutional discipline.", "titleLine2": "Operational excellence.", "subtitle": "HRZ Energia is an integrated energy platform controlled by Actis, a global investment manager focused on sustainable infrastructure." }, "model": { "eyebrow": "Our model", "headingPre": "A synthesis of", "headingWord1": "capital", "headingMid": "and", "headingWord2": "expertise", "body1": "We operate <bold>transmission</bold> and <bold>renewable generation</bold> assets in Brazil, focused on <accent>operational excellence</accent>, robust governance, and long-term value creation.", "body2": "Our model combines the <bold>discipline of an institutional investor</bold> with the technical expertise of world-class operators, delivering critical infrastructure to Brazil's power grid with <accent>availability above regulatory benchmarks</accent>.", "body3": "We grow through <bold>disciplined acquisitions</bold> of brownfield assets, with active Actis governance at every stage, building an <accent>auditable, scalable, and investable</accent> platform." }, "business": { "eyebrow": "Business model", "heading": "What an integrated transmission and generation platform is.", "body": "HRZ combines two complementary segments under unified governance: high-voltage transmission, with predictable inflation-linked revenue (RAP), and renewable wind generation, with strategic exposure to Brazil's energy matrix. The integration delivers capital discipline, operational gains, and optimization across distinct risk-return profiles.", "card1": { "title": "Transmission", "text": "Long-term regulated revenue (RAP) with low volatility, inflation-linked and dispatch-independent." }, "card2": { "title": "Wind generation", "text": "Exposure to the renewable matrix with long-term PPAs, high capacity factor, and low operational footprint." }, "card3": { "title": "Unified governance", "text": "Auditable and scalable platform with unified technical management and active Actis oversight at every decision." } }, "timeline": { "eyebrow": "Corporate evolution", "heading": "A platform built with discipline and scale.", "items": [{ "year": "2019", "header": "Launch", "headerStrong": "Generation", "delta": "+05", "unit": "Parks", "title": "Renewable generation begins", "detail": "Acquisition of the Babilônia Wind Complex in Bahia: 5 parks, 65 turbines, 136.5 MW of installed capacity with one of Brazil's highest capacity factors." }, { "year": "2022", "header": "Launch", "headerStrong": "Transmission", "delta": "+03", "unit": "Concessions", "title": "Entry into transmission", "detail": "Acquisition of the first three high-voltage transmission concessions, marking HRZ's entry into regulated assets with predictable revenue (RAP)." }, { "year": "2024", "header": "Expansion", "headerStrong": "Transmission", "delta": "+03", "unit": "Concessions", "title": "Platform scale-up", "detail": "Three more concessions added to the portfolio, consolidating presence across SIN regions and expanding the inflation-indexed RAP base." }, { "year": "2025", "header": "Expansion", "headerStrong": "Transmission", "delta": "+02", "unit": "Concessions", "title": "National consolidation", "detail": "Addition of two new concessions, reinforcing HRZ's position as an integrated, disciplined platform in the Brazilian transmission sector." }, { "year": "2026", "header": "Expansion", "headerStrong": "Transmission", "delta": "+01", "unit": "Concession", "title": "Ninth concession and R$935m in RAP", "detail": "With one more concession, Transmissoras reaches 9 SPEs, 2,403 ckm and R$935 million in RAP for 2026." }] }, "mission": { "eyebrow": "Mission", "text": "To develop and operate energy infrastructure assets with operational excellence and capital discipline, generating sustainable value for shareholders, partners, and society." }, "vision": { "eyebrow": "Vision", "text": "To become the most efficient and disciplined energy infrastructure investment platform in the sector, combining operational performance, robust governance, and social and environmental responsibility." }, "leadership": { "eyebrow": "Leadership", "heading": "Experience that drives sustainable results.", "body": "A team of senior executives with a strong track record in energy, finance, strategy, operations, and governance, committed to excellence, innovation, and value generation.", "portraitAlt": "Portrait of {{name}}", "governance": { "eyebrow": "Governance", "body": "Controlled by Actis · active oversight by the Global Sustainability Committee, with quarterly reporting between London and São Paulo." }, "items": [{ "name": "Eduardo Brito", "role": "CEO", "bio": "Over 20 years in the energy sector. Leadership in strategy, M&A, and business transformation at global companies." }, { "name": "Fernando Oliveira", "role": "CFO", "bio": "Over 25 years in finance and executive leadership. Expertise in corporate finance, IPO, M&A, and capital management." }, { "name": "Juliana Scalzo", "role": "CLO", "bio": "Over 20 years in Corporate Law, Compliance, and M&A in the energy sector. Strategic regulatory advisory." }, { "name": "Ítalo Augusto David", "role": "COO", "bio": "Over 20 years in engineering and project management. Specialist in energy transmission and asset management in Brazil and abroad." }, { "name": "Tiago Cacozzi", "role": "QHSE", "bio": "Over 18 years in Quality, Safety, Health and Environment. Focus on risk management, prevention, and continuous improvement." }] }, "ethics": { "ceoAlt": "Eduardo Brito CEO HRZ Energia", "eyebrow": "Ethics · Message from senior management", "quote": '"Integrity is at the heart of everything we do."', "body1": "At HRZ Energia, we believe that operational excellence and financial discipline only make sense when grounded in irreproachable ethical conduct. We operate critical infrastructure for Brazil's National Interconnected System, and that responsibility demands absolute transparency in every decision.", "body2": "Our commitment to ethics is not merely regulatory — it is cultural. It extends to our employees, partners, suppliers, and the communities where we operate. Under the active governance of Actis and the Global Sustainability Committee, we maintain the highest international standards of conduct.", "body3": "I invite everyone to review our institutional documents and to use the Whistleblower Channel whenever necessary — we guarantee confidentiality and impartial investigation of every report." }, "docs": { "eyebrow": "Institutional documents", "heading": "Review our commitments.", "accessDoc": "Access document", "important": { "eyebrow": "Important", "body": "The Whistleblower Channel is operated independently, ensuring reporter anonymity and impartial investigation of all reports. All communications are treated with confidentiality by HRZ Energia's Ethics Committee." }, "cta": "Contact the Ethics Committee", "items": [{ "title": "Anti-Corruption Policy", "text": "Guidelines for the prevention, detection, and handling of corrupt practices across all HRZ operations." }, { "title": "Code of Ethics", "text": "Principles and rules of conduct applicable to employees, suppliers, and partners." }, { "title": "Whistleblower Channel", "text": "An independent and confidential channel for reporting violations of the Code of Ethics and Anti-Corruption Policy." }] } };
const segments = /* @__PURE__ */ JSON.parse(`{"transmission":{"meta":{"title":"Transmission — HRZ Energia","description":"Transmission: 9 concessions integrated into the SIN, 2,403 ckm of 500/230 kV OHTL, 29 substations, and R$935 million in RAP for 2026.","ogTitle":"Transmission — HRZ Energia","ogDescription":"HRZ Energia's high-voltage transmission platform across 7 Brazilian states, controlled by Actis."},"hero":{"eyebrow":"Transmission","titleLine1":"High-voltage energy","titleLine2":"with institutional predictability.","subtitle":"HRZ Energia's energy transmission platform, controlled by Actis, with 9 concessions integrated into the SIN across 7 Brazilian states."},"about":{"eyebrow":"Who we are","heading1":"A group of concessions","heading2":"integrated into the SIN.","body1":"Transmissoras is HRZ Energia's energy transmission platform, controlled by the British investment fund Actis. We operate basic grid concessions of the National Interconnected System across seven Brazilian states, handling voltage levels between 230 kV and 500 kV.","body2":"We began operations in Brazil in October 2021 with the acquisition of three concessionaires in Maranhão and Espírito Santo. In February 2024, we expanded the portfolio with the SPMG concession, which transmits power from the Belo Monte plant to the Southeast, totaling approximately R$4.3 billion in infrastructure investment.","body3":"We operate in compliance with applicable contracts, regulations, and legislation, applying best engineering practices to deliver availability, reliability, and long-term sustainability."},"kpis":{"eyebrow":"Operational footprint","heading":"Numbers that underpin the operation."},"footprint":{"eyebrow":"National footprint","heading1":"Seven states.","heading2":"One system.","body":"We operate strategic lines and substations for SIN balance from Maranhão to the Southeast, transmitting renewable generation and connecting load centers across Brazil."},"concessionsSection":{"eyebrow":"Concessions","heading":"Explore each platform asset.","hint":"Click on a concession to explore voltage, extension, owned and accessed substations."},"infoLabels":{"voltage":"Voltage","lines":"Transmission lines","ownSubstations":"Owned substations","accessedSubstations":"Accessed substations","acquisition":"Acquisition"},"differentials":{"eyebrow":"Differentials","heading":"Discipline, governance, and technical excellence."},"timelineSection":{"eyebrow":"Timeline","heading":"From entry into Brazil to an integrated SIN."},"cta":{"heading":"Want to understand the asset in depth?","body":"Access the investor area or speak directly with our team.","investors":"Investors","contact":"Contact HRZ"},"kpisItems":[{"value":"9","label":"Concessions / SPEs"},{"value":"2,403","label":"ckm of OHTL"},{"value":"29","label":"Substations"},{"value":"5,228","label":"Installed MVA"},{"value":"R$935m","label":"RAP 2026"},{"value":"99.8%","label":"Availability"}],"concessionsItems":[{"id":"es","nome":"HRZ ES","estado":"Espírito Santo","tensao":"230 kV","linhas":"106 km","subestacoes":"SE São Mateus 2 — 150 MVA","acessadas":"SE Linhares","aquisicao":"2021"},{"id":"ma1","nome":"HRZ MA I","estado":"Maranhão","tensao":"500 / 230 kV","linhas":"120.2 km (500 kV) + 4.8 km (230 kV)","subestacoes":"SE São Luís IV — 1,600 MVA","acessadas":"SE Miranda II · SE São Luís II","aquisicao":"2021"},{"id":"ma2","nome":"HRZ MA II","estado":"Maranhão","tensao":"230 kV","linhas":"201.9 km","subestacoes":"SE Chapadinha 2 — 200 MVA","acessadas":"SE Coelho Neto","aquisicao":"2021"},{"id":"spmg","nome":"HRZ SPMG","estado":"São Paulo · Minas Gerais","tensao":"500 kV","linhas":"743 km","subestacoes":"—","acessadas":"SE Cachoeira Paulista · SE Estreito","aquisicao":"2024 · Belo Monte offtake"}],"differentialsItems":[{"title":"Superior availability","text":"Operation consistently above 99.8%, within the sector's best benchmarks and ANEEL and ONS requirements."},{"title":"Predictable revenue (RAP)","text":"Inflation-linked RAP with R$935 million projected for the 2026 cycle, providing long-term revenue visibility."},{"title":"IFC sustainability","text":"Net Zero program, biodiversity studies, reforestation, and wildfire prevention aligned with IFC standards."},{"title":"Institutional governance","text":"ESG, Operations, Finance, and Board committees with independent members. Active leadership in ABRATE agendas."}],"timelineItems":[{"ano":"2021","titulo":"Initial acquisition","texto":"Entry into Brazil with the purchase of three transmission concessionaires in Maranhão and Espírito Santo (lots 24, 11, and 7)."},{"ano":"2024","titulo":"Southeast expansion","texto":"Acquisition of the SPMG concession, responsible for transmitting Belo Monte's power to the Southeast, totaling R$4.3bn in infrastructure."},{"ano":"2026","titulo":"9 SPEs and R$935m in RAP","texto":"Consolidated platform with 9 SPEs, 2,403 ckm and 29 substations across 7 Brazilian states, integrated into the SIN."}]},"wind":{"meta":{"title":"Babilônia Wind — HRZ Energia","description":"Babilônia Wind: 5 wind complexes in Bahia, 65 turbines, 136.5 MW of installed capacity and one of Brazil's highest capacity factors.","ogTitle":"Babilônia Wind — HRZ Energia","ogDescription":"Sustainable wind generation in the Brazilian semi-arid: five parks in Morro do Chapéu, Ourolândia, and Várzea Nova."},"hero":{"eyebrow":"Babilônia Wind","titleLine1":"Sustainable and renewable","titleLine2":"energy generation.","subtitle":"Five wind complexes located in Morro do Chapéu, Ourolândia, and Várzea Nova in Bahia, totaling 65 turbines and 136.5 MW of installed capacity."},"overview":{"eyebrow":"Overview","heading1":"Renewable sources driving","heading2":"development.","body1":"Sustainable and inexhaustible — these are some characteristics of wind energy, a clean and renewable source on the rise that creates jobs and helps minimize environmental impacts.","body2":"Babilônia operates five wind complexes in the Bahian semi-arid, in municipalities with favorable wind regimes, delivering one of Brazil's highest capacity factors. Operations are controlled by Actis and integrated into the HRZ Energia platform.","imgAlt":"Aerial view of the Babilônia wind farm"},"kpis":{"eyebrow":"Operational highlights","heading":"Consistent generation. Positive impact."},"complexes":{"eyebrow":"Wind complexes","heading":"Five parks in the Bahian semi-arid.","hint":"Click on a complex to explore location, highlights, and operational characteristics."},"esg":{"eyebrow":"ESG commitment","heading":"Energy that respects people and territory."},"cta":{"heading":"Visit the official Babilônia Wind website.","body":"Access the institutional portal or speak with our relationship team.","siteLink":"Babilônia Wind Site","contactLink":"Contact HRZ"},"kpisItems":[{"value":"5","label":"Wind complexes"},{"value":"65","label":"Wind turbines"},{"value":"136.5 MW","label":"Installed capacity"},{"value":"57%","label":"Capacity factor"},{"value":"R$202m","label":"Annual revenue"},{"value":"2019","label":"Acquired by Actis"}],"complexesItems":[{"id":"morro","nome":"Morro do Chapéu Complex","municipio":"Morro do Chapéu — BA","descricao":"A cluster of parks on the Bahian semi-arid plateau, where consistent winds guarantee a high capacity factor throughout the year.","destaques":["Consistent winds above 8 m/s","Integrated O&M logistics","Favorable topography for generation"]},{"id":"ourolandia","nome":"Ourolândia Complex","municipio":"Ourolândia — BA","descricao":"Parks positioned in a favored wind corridor, with state-of-the-art turbines and remote operation.","destaques":["High-power wind turbines","Real-time monitoring","Long-term PPA"]},{"id":"varzea","nome":"Várzea Nova Complex","municipio":"Várzea Nova — BA","descricao":"A strategic complement to the Babilônia block, integrating operations with collector substations and the SIN's basic grid.","destaques":["SIN integration","Operational synergy","Local social and environmental commitment"]}],"pilaresItems":[{"title":"Clean and renewable energy","text":"100% wind generation, an inexhaustible source that avoids CO₂ emissions and strengthens Brazil's renewable matrix."},{"title":"Semi-arid sustainability","text":"Biodiversity programs, land restoration, and coexistence with the caatinga biome aligned with IFC standards."},{"title":"Community development","text":"Local job creation, environmental education, and social projects in the Bahian municipalities where we operate."},{"title":"World-class operations","text":"Actis institutional governance, risk management, business ethics, and active stakeholder engagement."}],"regioes":["Morro do Chapéu","Ourolândia","Várzea Nova"]},"portfolio":{"meta":{"title":"Portfolio — HRZ Energia","description":"14 SPVs in operation: 9 transmission assets (2,403 ckm · 5,228 MVA) and 5 SPVs from the Babilônia Wind Complex (136.5 MW).","ogTitle":"HRZ Transmission and Generation Portfolio","ogDescription":"Critical SIN assets across four states, with availability above 99.8%."},"hero":{"eyebrow":"Asset portfolio","titleLine1":"14 SPVs.","titleLine2":"National scale.","subtitle":"An integrated platform with high-voltage transmission and renewable wind generation, distributed across brownfield assets acquired with discipline between 2019 and 2025."},"footprint":{"eyebrow":"National footprint","heading1":"Strategic presence","heading2":"across Brazil.","body":"We operate critical assets in key states of the National Interconnected System, from Maranhão and Bahia to Espírito Santo, São Paulo, Minas Gerais, Santa Catarina, and Rio Grande do Sul.","stat1":{"value":"9","label":"Transmission concessions"},"stat2":{"value":"5","label":"Wind parks"},"stat3":{"value":"2,403 ckm","label":"OHTL 500/230 kV"},"stat4":{"value":"29","label":"Substations"}},"transmission":{"eyebrow":"Transmission","heading":"HRZ + Skyline.","subtitle":"9 SPVs acquired between 2021 and 2025 · 2,403 ckm of 500/230 kV OHTL · 5,228 MVA of installed capacity · 29 interconnected substations.","imgAlt":"Substation at dusk","stats":[{"value":">99.8%","label":"Availability"},{"value":"29","label":"Substations"},{"value":"2,403","label":"ckm of lines"},{"value":"R$935m","label":"RAP 2026"}]},"generation":{"eyebrow":"Generation","heading":"Babilônia Wind.","body":"5 parks acquired in 2019 with 65 turbines and 136.5 MW of installed capacity in Bahia. Consistent operation with a 57% capacity factor and long-term PPA.","imgAlt":"Babilônia wind farm","stats":[{"value":"136.5 MW","label":"Capacity"},{"value":"65","label":"Turbines"},{"value":">98%","label":"Availability"},{"value":"R$202m","label":"Revenue"}]},"transmissionAssets":[{"code":"MGTE","name":"Horizon MG / SP","info":"500 kV OHTL"},{"code":"TMA I","name":"Horizon Maranhão I","info":"Line + substation"},{"code":"TMA II","name":"Horizon Maranhão II","info":"Line + substation"},{"code":"AVT","name":"Água Vermelha","info":"Substation"},{"code":"TES","name":"Horizon Espírito Santo","info":"230 kV OHTL"},{"code":"SP-MG","name":"500 kV SP-MG OHTL","info":"Transmission line"},{"code":"ALSC","name":"Aliança SC","info":"Transmission line"},{"code":"LSUL","name":"Litoral Sul","info":"Transmission line"},{"code":"VYRD","name":"Vineyards","info":"3rd Transformer Lajeado 3 (under construction)"}]}}`);
const esg = { "meta": { "title": "ESG — HRZ Energia", "description": "HRZ ESG strategy: governance, climate action and social responsibility. 100% wind generation, LTI=0 and oversight by Actis's Global Sustainability Committee.", "ogTitle": "HRZ Energia ESG Strategy", "ogDescription": "Governance, climate action and social responsibility with KPIs embedded in management." }, "hero": { "eyebrow": "ESG Strategy", "titleLine1": "More than energy,", "titleLine2": "we generate transformation.", "subtitle": "We are present where it matters: close to communities, listening, collaborating, and creating positive impact." }, "metrics": { "people": "people impacted", "communities": "communities served", "projects": "active projects" }, "social": { "eyebrow": "Social Responsibility", "heading": "Real impact in the communities where we operate." }, "gallery": [{ "label": "Infrastructure" }, { "label": "Community" }, { "label": "Training & Education" }, { "label": "Income Generation" }, { "label": "Sustainability" }, { "label": "Together We Are Stronger" }], "pillars": [{ "title": "Environmental", "items": ["100% wind generation — 136.5 MW of renewable energy", "Low-impact transmission with zero operational emissions", "Climate contingency plans and 24/7 monitoring", "Wildfire prevention programs along transmission rights-of-way"] }, { "title": "Social", "items": ["Zero lost-time incidents (LTI = 0) across all assets", "Community engagement along transmission lines", "Social outreach and local development programs", "Supply chain with safety and conduct requirements"] }, { "title": "Governance", "items": ["Oversight by Actis's Global Sustainability Committee", "ESG Committee with quarterly reporting London / São Paulo", "Proactive communication with ANEEL and ONS", "Compliance, risk management and decision transparency"] }], "values": { "eyebrow": "Our Values", "heading1": "More than projects,", "heading2": "we build relationships.", "tagline": "More than presence, we leave a legacy.", "items": [{ "title": "Respect", "text": "We value people and diversity." }, { "title": "Integrity", "text": "We act with ethics, transparency and accountability." }, { "title": "Sustainability", "text": "We promote actions that generate lasting positive impact." }, { "title": "Collaboration", "text": "We believe in working together to transform realities." }] }, "highlights": { "eyebrow": "Operational highlights", "heading": "Resilience, safety and continuous improvement.", "items": [{ "title": "Climate resilience", "text": "All SP-MG 500 kV OHTL spacer-dampers replaced. 24/7 monitoring of meteorological conditions and wildfires. Full revision of contingency plans." }, { "title": "Facility safety", "text": "Member of the ABRATE Committee. Coordination with federal security forces to prevent attacks. Community engagement and wildfire prevention." }, { "title": "Continuous improvement", "text": "Active resolution of legacy liabilities inherited from previous owners. Rigorous operational management, traceability and field team supervision." }] } };
const investors = { "meta": { "title": "Investors — HRZ Energia", "description": "R$1bn+ inflation-linked RAP, AAA.br rating and completed refinancing. Platform ready for monetization via IPO or strategic sale.", "ogTitle": "Investors — HRZ Energia", "ogDescription": "Predictable revenue, disciplined capital and a clear value creation roadmap." }, "hero": { "eyebrow": "Investors", "titleLine1": "Predictable revenue.", "titleLine2": "Disciplined capital.", "subtitle": "Scalable and certifiable platform ready for monetization via IPO or strategic sale. Active Actis governance at every stage." }, "kpis": [{ "value": "R$1.0bn+", "label": "Total Revenue (RAP + Generation)" }, { "value": "AAA.br", "label": "Edify / SP-MG Rating" }, { "value": "13.5%", "label": "Refinanced cost of capital" }, { "value": "R$428m", "label": "Debenture issued" }], "initiatives": { "eyebrow": "Financial initiatives", "heading": "In execution.", "items": [{ "title": "EDIFY / SP-MG Refinancing", "text": "R$428m debenture issued. Replacement of ~R$550m of Holdco debt. Letters of Credit release cash reserves. AAA.br rating." }, { "title": "Corporate restructuring", "text": "Skyline → Edify reverse merger and partial spin-off executed. ~15% tax efficiency on JCP. Clean pre-monetization structure." }, { "title": "Financial Completion · LC Release", "text": "TMA I and TMA II completed: ~90% reduction in LC costs in 2025. MGTE and AVT in progress, delivery expected 2026." }] }, "phases": { "phase1": { "phase": "Phase I", "range": "2025 – 2027", "title": "Structuring and Ramp-Up", "items": ["Integration of transmission and generation teams", "Debt structure optimization and tax efficiency", "Creation of COO and EQS (Quality & ESG) position", "Implementation of modular ERP and management systems", "Curtailment mitigation strategy (BESS / Bitcoin Mining)", "EDIFY / SP-MG R$428m debenture refinancing"] }, "phase2": { "phase": "Phase II", "range": "2028 – 2030", "title": "Consolidation and Monetization", "items": ["Operational maturity and consolidated governance", "Auditable and investable platform (IPO or M&A)", "Completion of Project Vineyards (3rd Transformer Lajeado 3)", "Endurance expansion — 5 new states, Northern region", "Responsible divestment with predefined returns", "Value delivery to investors, communities and energy transition"] } }, "docs": { "eyebrow": "Documents", "heading": "Financial Statements & Corporate Documents.", "body": "Audited financial statements, corporate acts, management reports and supplementary materials available on request for investors, counterparties and analysts.", "mascoteAlt": "HRZ mascot pointing", "requestCta": "Request documents", "items": [{ "title": "Financial Statements", "text": "Annual audited financial statements and quarterly ITRs for HRZ Energia and its subsidiaries." }, { "title": "Corporate Documents", "text": "Articles of association, board minutes, corporate acts and updated capital structure." }, { "title": "Investor Materials", "text": "Institutional presentations, management reports and governance materials." }] } };
const contact = { "meta": { "title": "Contact — HRZ Energia", "description": "Contact HRZ Energia. Investors, partnerships, press and institutional inquiries.", "ogTitle": "Contact — HRZ Energia", "ogDescription": "Investors, partnerships and institutional inquiries." }, "hero": { "eyebrow": "Contact", "titleLine1": "Let's talk", "titleLine2": "about energy.", "subtitle": "We are available for investors, institutional partners and press." }, "form": { "eyebrow": "Direct message", "heading": "Contact HRZ.", "fieldName": "Name", "fieldCompany": "Company", "fieldEmail": "E-mail", "fieldSubject": "Subject", "subjectPlaceholder": "Select a subject", "subjectInvestor": "Investor", "subjectPress": "Press", "subjectPartner": "Partner", "subjectCommunity": "Community", "fieldMessage": "Message", "submitBtn": "Send message" }, "cards": { "emailTitle": "Institutional e-mail", "emailValue": "contato@hrzenergia.com.br", "locationTitle": "Headquarters", "locationValue": "São Paulo · Brazil", "controllerTitle": "Parent company", "controllerValue": "Actis · Global Sustainability Committee · London" }, "investorsBox": { "eyebrow": "For investors", "body": "Detailed governance, operational performance and financial strategy materials available upon request." }, "mascoteAlt": "HRZ mascot waving", "leadership": { "eyebrow": "HRZ Leadership", "heading": "Speak directly with our executives.", "phoneLabel": "Phone", "emailLabel": "E-mail", "items": [{ "name": "Eduardo Brito", "role": "CEO", "phone": "+55 11 99881-5236", "email": "eduardo.brito@hrztransmissoras.com.br" }, { "name": "Fernando Oliveira", "role": "CFO", "phone": "+55 11 98702-0349", "email": "fernando.oliveira@hrztransmissoras.com.br" }, { "name": "Ítalo Augusto David", "role": "COO", "phone": "+55 11 93289-8090", "email": "italo.david@hrztransmissoras.com.br" }, { "name": "Tiago Cacozzi", "role": "QHSE", "phone": "+55 11 97470-4633", "email": "tiago.cacozzi@hrztransmissoras.com.br" }, { "name": "Juliana Scalzo", "role": "CLO", "phone": "+55 11 96199-3569", "email": "juliana.scalzo@hrztransmissoras.com.br" }] }, "careers": { "eyebrow": "Careers", "heading": "Join our team.", "body": "We look for talent committed to Brazil's energy transition. Submit your resume and our HR team will reach out when opportunities matching your profile arise.", "benefit1Title": "Integrated platform", "benefit1Text": "Transmission and renewable generation under Actis governance.", "benefit2Title": "Culture of excellence", "benefit2Text": "IFC standards, operational safety and continuous development.", "successTitle": "Application received!", "successBody": "Thank you for your interest in joining HRZ Energia. Our HR team will review your resume and reach out if there is a match.", "successCta": "Submit another application", "formEyebrow": "Resume submission", "formHeading": "Join HRZ.", "fieldFullName": "Full name", "fieldPhone": "Phone", "fieldAreaLabel": "Desired area", "fieldAreaPlaceholder": "Select an area", "fieldCvLabel": "Resume (PDF, DOC or DOCX · max. 5 MB)", "fieldCvPlaceholder": "Click to select your resume", "fieldCvAttach": "Attach", "fieldMessageLabel": "Message (optional)", "fieldMessagePlaceholder": "Tell us a bit about your background and interests.", "submitBtn": "Submit application", "areas": ["Operations & Maintenance", "Engineering", "Finance", "Legal & Regulatory", "ESG & Sustainability", "Human Resources", "Information Technology", "QHSE", "Communications & Relations", "Internship · Young Apprentice"] } };
const companies = { "meta": { "title": "HRZ Energia Segments", "description": "Transmissoras (9 concessions · 2,403 ckm · R$935m RAP) and Eólicas Babilônia (136.5 MW · 65 turbines). Integrated transmission and generation platform.", "ogTitle": "HRZ Energia Segments", "ogDescription": "Transmission and renewable generation on a single platform controlled by Actis." }, "hero": { "eyebrow": "Segments", "titleLine1": "Two operational fronts.", "titleHighlight": "One integrated platform.", "subtitle": "HRZ Energia integrates two complementary segments — high-voltage transmission and wind generation — under unified governance and institutional discipline." }, "logic": { "eyebrow": "The integrated logic", "heading1": "Complementarity", "heading2": "between revenue and asset.", "body1": "Operating transmission and generation on the same platform creates unique competitive advantages: predictable inflation-linked revenue (RAP), strategic exposure to Brazil's renewable energy matrix, and capital optimization across two distinct risk-return profiles.", "body2": "The integration enables unified technical management, sharing of high-voltage specialist teams, and efficiency gains in regulatory compliance with ANEEL and ONS — while preserving the operational autonomy of each business." }, "cards": { "transmission": { "eyebrow": "Transmission", "name": "Transmissoras", "imgAlt": "High-voltage substation", "description": "High-voltage transmission platform with 9 concessions integrated into the SIN, operating 500/230 kV OHTL and substations across 7 Brazilian states.", "metricLabel1": "Concessions", "metricLabel2": "ckm OHTL", "metricLabel3": "RAP 2026", "cta": "Explore Transmissoras" }, "wind": { "eyebrow": "Generation", "name": "Eólicas Babilônia", "imgAlt": "Babilônia wind farm", "description": "Wind complex with 5 parks in Bahia, 65 turbines, and consistent operation with one of Brazil's highest capacity factors. Long-term PPA.", "metricLabel1": "Capacity", "metricLabel2": "Wind Turbines", "metricLabel3": "Capacity Factor", "cta": "Explore Eólicas Babilônia" } }, "footprint": { "eyebrow": "National footprint", "heading1": "Shared presence", "heading2": "across Brazil.", "body": "Our two segments — transmission and wind generation — operate across multiple regions, from Maranhão and Bahia to Espírito Santo, São Paulo, Minas Gerais, Santa Catarina, and Rio Grande do Sul, forming a unique strategic footprint of the HRZ Energia platform in the Brazilian power sector." }, "corporate": { "eyebrow": "Corporate Structure", "heading": "Actis Control · HRZ Platform.", "body": "HRZ Energia is controlled by Actis, a global investment manager focused on sustainable infrastructure, with active oversight by the Global Sustainability Committee in London.", "exploreHint": "Click on cards to explore" }, "orgNodes": { "actis": { "subtitle": "Parent Company · London", "description": "Global investment manager focused on sustainable infrastructure, with active oversight by the Global Sustainability Committee.", "details": [{ "label": "Headquarters", "value": "London, UK" }, { "label": "AUM", "value": "US$12.5bn" }, { "label": "Focus", "value": "Sustainable infrastructure" }] }, "hrz": { "subtitle": "Holding · São Paulo", "description": "Brazilian holding company integrating transmission and renewable generation businesses under unified governance.", "details": [{ "label": "Headquarters", "value": "São Paulo, BR" }, { "label": "Platform", "value": "Transmission + Generation" }, { "label": "Governance", "value": "Board with Actis" }] }, "transmissoras": { "subtitle": "9 SPEs · Transmission", "description": "High-voltage transmission platform with 9 concessions integrated into the SIN across 7 Brazilian states.", "details": [{ "label": "Concessions", "value": "9 SPEs" }, { "label": "Extension", "value": "2,403 ckm" }, { "label": "RAP 2026", "value": "R$935m" }] }, "babilonia": { "subtitle": "5 SPEs · Generation", "description": "Wind complex in Bahia with 5 parks, 65 turbines, and one of Brazil's highest capacity factors.", "details": [{ "label": "Capacity", "value": "136.5 MW" }, { "label": "Wind Turbines", "value": "65" }, { "label": "Capacity Factor", "value": "57%" }] } } };
const ethics = { "meta": { "title": "Ethics & Conduct — HRZ Energia", "description": "Discover HRZ Energia's institutional documents, Code of Ethics, and Whistleblower Channel. Integrity as a non-negotiable principle.", "ogTitle": "Ethics & Conduct — HRZ Energia", "ogDescription": "Ethical conduct, transparency, and accountability in every decision at HRZ Energia." }, "hero": { "eyebrow": "Ethics & Conduct", "titleLine1": "Integrity as a", "titleLine2": "non-negotiable principle.", "subtitle": "Ethical conduct, transparency, and accountability guide every decision at HRZ Energia — from every employee to senior management." } };
const footer = { "logoAlt": "HRZ Energia", "tagline": "An integrated energy platform controlled by Actis. We operate critical transmission and renewable generation assets in Brazil with discipline, governance, and technical excellence.", "linkedinLabel": "LinkedIn HRZ Energia", "companyCol": { "title": "Company", "about": "Who we are", "segments": "Segments", "transmission": "Transmission", "wind": "Wind", "esg": "ESG Strategy", "ethics": "Ethics & Conduct" }, "investorsCol": { "title": "Investors", "overview": "Overview", "performance": "Performance", "governance": "Governance" }, "contactCol": { "title": "Contact", "location": "São Paulo · Brazil", "email": "contato@hrzenergia.com.br", "cta": "Contact HRZ" }, "copyright": "© {{year}} HRZ Energia. All rights reserved.", "controlled": "Controlled by Actis · Global Sustainability Committee" };
const en = {
  nav,
  language,
  home,
  about,
  segments,
  esg,
  investors,
  contact,
  companies,
  ethics,
  footer
};
instance.use(initReactI18next).init({
  lng: "pt",
  fallbackLng: "pt",
  resources: {
    pt: { translation: pt },
    en: { translation: en }
  },
  interpolation: {
    escapeValue: false
  }
});
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
const Route$a = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "HRZ Energia — Plataforma integrada de transmissão e geração" },
      {
        name: "description",
        content: "Plataforma integrada de transmissão e geração renovável no Brasil. Controlada pela Actis."
      },
      { name: "author", content: "HRZ Energia" },
      {
        property: "og:title",
        content: "HRZ Energia — Plataforma integrada de transmissão e geração"
      },
      {
        property: "og:description",
        content: "Plataforma integrada de transmissão e geração renovável no Brasil. Controlada pela Actis."
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "HRZ Energia" },
      { property: "og:image", content: "/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@HRZenergia" },
      {
        name: "twitter:title",
        content: "HRZ Energia — Plataforma integrada de transmissão e geração"
      },
      {
        name: "twitter:description",
        content: "Plataforma integrada de transmissão e geração renovável no Brasil. Controlada pela Actis."
      },
      { name: "twitter:image", content: "/og-image.jpg" }
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: faviconUrl },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap"
      },
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "pt-BR", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
const BASE_URL = "https://www.hrzenergia.com.br";
function RootComponent() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [showSplash, setShowSplash] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const url = `${BASE_URL}${pathname}`;
    let meta = document.querySelector('meta[property="og:url"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("property", "og:url");
      document.head.appendChild(meta);
    }
    meta.content = url;
  }, [pathname]);
  reactExports.useEffect(() => {
    if (!showSplash) return;
    const prev = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "#060c1a";
    return () => {
      document.body.style.backgroundColor = prev;
    };
  }, [showSplash]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showSplash && /* @__PURE__ */ jsxRuntimeExports.jsx(SplashOverlay, { onDone: () => setShowSplash(false) }, "splash") })
  ] });
}
const $$splitComponentImporter$9 = () => import("./transmissoras-N7TLqxFC.mjs");
const Route$9 = createFileRoute("/transmissoras")({
  head: () => ({
    meta: [{
      title: instance.t("segments.transmission.meta.title")
    }, {
      name: "description",
      content: instance.t("segments.transmission.meta.description")
    }, {
      property: "og:title",
      content: instance.t("segments.transmission.meta.ogTitle")
    }, {
      property: "og:description",
      content: instance.t("segments.transmission.meta.ogDescription")
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./sobre-CeagQPk-.mjs");
const Route$8 = createFileRoute("/sobre")({
  head: () => ({
    meta: [{
      title: instance.t("about.meta.title")
    }, {
      name: "description",
      content: instance.t("about.meta.description")
    }, {
      property: "og:title",
      content: instance.t("about.meta.ogTitle")
    }, {
      property: "og:description",
      content: instance.t("about.meta.ogDescription")
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./portfolio-DgikV38V.mjs");
const Route$7 = createFileRoute("/portfolio")({
  head: () => ({
    meta: [{
      title: instance.t("segments.portfolio.meta.title")
    }, {
      name: "description",
      content: instance.t("segments.portfolio.meta.description")
    }, {
      property: "og:title",
      content: instance.t("segments.portfolio.meta.ogTitle")
    }, {
      property: "og:description",
      content: instance.t("segments.portfolio.meta.ogDescription")
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./investidores-5f4z2oHe.mjs");
const Route$6 = createFileRoute("/investidores")({
  head: () => ({
    meta: [{
      title: instance.t("investors.meta.title")
    }, {
      name: "description",
      content: instance.t("investors.meta.description")
    }, {
      property: "og:title",
      content: instance.t("investors.meta.ogTitle")
    }, {
      property: "og:description",
      content: instance.t("investors.meta.ogDescription")
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./etica-DWHMbxy7.mjs");
const Route$5 = createFileRoute("/etica")({
  head: () => ({
    meta: [{
      title: instance.t("ethics.meta.title")
    }, {
      name: "description",
      content: instance.t("ethics.meta.description")
    }, {
      property: "og:title",
      content: instance.t("ethics.meta.ogTitle")
    }, {
      property: "og:description",
      content: instance.t("ethics.meta.ogDescription")
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./esg-u4uf-FMx.mjs");
const Route$4 = createFileRoute("/esg")({
  head: () => ({
    meta: [{
      title: instance.t("esg.meta.title")
    }, {
      name: "description",
      content: instance.t("esg.meta.description")
    }, {
      property: "og:title",
      content: instance.t("esg.meta.ogTitle")
    }, {
      property: "og:description",
      content: instance.t("esg.meta.ogDescription")
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./eolicas-CLfaYJhc.mjs");
const Route$3 = createFileRoute("/eolicas")({
  head: () => ({
    meta: [{
      title: instance.t("segments.wind.meta.title")
    }, {
      name: "description",
      content: instance.t("segments.wind.meta.description")
    }, {
      property: "og:title",
      content: instance.t("segments.wind.meta.ogTitle")
    }, {
      property: "og:description",
      content: instance.t("segments.wind.meta.ogDescription")
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./empresas-DrmVflkm.mjs");
const Route$2 = createFileRoute("/empresas")({
  head: () => ({
    meta: [{
      title: instance.t("companies.meta.title")
    }, {
      name: "description",
      content: instance.t("companies.meta.description")
    }, {
      property: "og:title",
      content: instance.t("companies.meta.ogTitle")
    }, {
      property: "og:description",
      content: instance.t("companies.meta.ogDescription")
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./contato-Darus0Yv.mjs");
const Route$1 = createFileRoute("/contato")({
  head: () => ({
    meta: [{
      title: instance.t("contact.meta.title")
    }, {
      name: "description",
      content: instance.t("contact.meta.description")
    }, {
      property: "og:title",
      content: instance.t("contact.meta.ogTitle")
    }, {
      property: "og:description",
      content: instance.t("contact.meta.ogDescription")
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-PMJlOThD.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: instance.t("home.meta.title")
    }, {
      name: "description",
      content: instance.t("home.meta.description")
    }, {
      property: "og:title",
      content: instance.t("home.meta.ogTitle")
    }, {
      property: "og:description",
      content: instance.t("home.meta.ogDescription")
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const TransmissorasRoute = Route$9.update({
  id: "/transmissoras",
  path: "/transmissoras",
  getParentRoute: () => Route$a
});
const SobreRoute = Route$8.update({
  id: "/sobre",
  path: "/sobre",
  getParentRoute: () => Route$a
});
const PortfolioRoute = Route$7.update({
  id: "/portfolio",
  path: "/portfolio",
  getParentRoute: () => Route$a
});
const InvestidoresRoute = Route$6.update({
  id: "/investidores",
  path: "/investidores",
  getParentRoute: () => Route$a
});
const EticaRoute = Route$5.update({
  id: "/etica",
  path: "/etica",
  getParentRoute: () => Route$a
});
const EsgRoute = Route$4.update({
  id: "/esg",
  path: "/esg",
  getParentRoute: () => Route$a
});
const EolicasRoute = Route$3.update({
  id: "/eolicas",
  path: "/eolicas",
  getParentRoute: () => Route$a
});
const EmpresasRoute = Route$2.update({
  id: "/empresas",
  path: "/empresas",
  getParentRoute: () => Route$a
});
const ContatoRoute = Route$1.update({
  id: "/contato",
  path: "/contato",
  getParentRoute: () => Route$a
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$a
});
const rootRouteChildren = {
  IndexRoute,
  ContatoRoute,
  EmpresasRoute,
  EolicasRoute,
  EsgRoute,
  EticaRoute,
  InvestidoresRoute,
  PortfolioRoute,
  SobreRoute,
  TransmissorasRoute
};
const routeTree = Route$a._addFileChildren(rootRouteChildren)._addFileTypes();
function DefaultErrorComponent({ error, reset }) {
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-8 w-8 text-destructive",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold tracking-tight text-foreground", children: "Something went wrong" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "An unexpected error occurred. Please try again." }),
    false,
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const getRouter = () => {
  const router2 = createRouter({
    routeTree,
    context: {},
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: DefaultErrorComponent
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Counter as C,
  Float as F,
  HoverLift as H,
  Parallax as P,
  Reveal as R,
  Stagger as S,
  StaggerItem as a,
  HERO_VIDEO_REVEAL as b,
  HERO_DURATION as c,
  HERO_BASE as d,
  easeOut as e,
  HERO_STAGGER as f,
  ScrollProgressBar as g,
  PageTransition as h,
  logoWhite as l,
  router as r
};
