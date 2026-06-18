import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Target, Eye, Sparkles, ShieldCheck, BookOpen, MessageSquareWarning, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useTranslation, Trans } from "react-i18next";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { BoltDecor } from "@/components/site/BoltDecor";
import { Reveal, Stagger, StaggerItem } from "@/components/site/motion";
import i18n from "@/i18n/config";
import raioSolid from "@/assets/raio-solid-gradient.png";
import eduardoImg from "@/assets/team/eduardo-brito.webp";
import fernandoImg from "@/assets/team/fernando-oliveira.webp";
import italoImg from "@/assets/team/italo-david.webp";
import julianaImg from "@/assets/team/juliana-scalzo.webp";
import tiagoImg from "@/assets/team/tiago-cacozzi.webp";

const LEADERSHIP_IMAGES = [eduardoImg, fernandoImg, julianaImg, italoImg, tiagoImg];

type TimelineItem = {
  year: string;
  header: string;
  headerStrong: string;
  delta: string;
  unit: string;
  title: string;
  detail: string;
};

type LeaderItem = {
  name: string;
  role: string;
  bio: string;
};

type DocItem = {
  title: string;
  text: string;
};

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: i18n.t("about.meta.title") },
      { name: "description", content: i18n.t("about.meta.description") },
      { property: "og:title", content: i18n.t("about.meta.ogTitle") },
      { property: "og:description", content: i18n.t("about.meta.ogDescription") },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  const { t } = useTranslation();

  const ETHICS_DOCS_ICONS = [ShieldCheck, BookOpen, MessageSquareWarning];
  const ethicsDocItems = t("about.docs.items", { returnObjects: true }) as DocItem[];
  const ETHICS_DOCS = ethicsDocItems.map((item, i) => ({
    icon: ETHICS_DOCS_ICONS[i],
    title: item.title,
    text: item.text,
    href: "#",
  }));

  const TIMELINE = t("about.timeline.items", { returnObjects: true }) as TimelineItem[];

  const leaderItems = t("about.leadership.items", { returnObjects: true }) as LeaderItem[];
  const LEADERSHIP = leaderItems.map((item, i) => ({
    ...item,
    img: LEADERSHIP_IMAGES[i],
  }));

  return (
    <SiteShell headerVariant="dark">
      <PageHero
        eyebrow={t("about.hero.eyebrow")}
        title={
          <>
            {t("about.hero.titleLine1")}
            <br />
            <span className="text-gradient-electric">{t("about.hero.titleLine2")}</span>
          </>
        }
        subtitle={t("about.hero.subtitle")}
      />

      <section className="relative overflow-hidden py-24">
        <BoltDecor variant="outline" opacity={0.05} className="-left-24 top-10 h-[520px] w-auto" />
        <div className="container-hrz relative grid gap-16 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-hrz-electric">{t("about.model.eyebrow")}</p>
            <h2 className="display-mega mt-3 text-4xl text-foreground sm:text-5xl">
              {t("about.model.headingPre")}{" "}
              <span className="text-hrz-electric">{t("about.model.headingWord1")}</span>
              <br />
              {t("about.model.headingMid")}{" "}
              <span className="text-hrz-electric">{t("about.model.headingWord2")}</span>.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              <Trans
                i18nKey="about.model.body1"
                components={{
                  bold: <strong className="font-semibold text-foreground" />,
                  accent: <span className="text-hrz-electric font-semibold" />,
                }}
              />
            </p>
            <p>
              <Trans
                i18nKey="about.model.body2"
                components={{
                  bold: <strong className="font-semibold text-foreground" />,
                  accent: <span className="text-hrz-electric font-semibold" />,
                }}
              />
            </p>
            <p>
              <Trans
                i18nKey="about.model.body3"
                components={{
                  bold: <strong className="font-semibold text-foreground" />,
                  accent: <span className="text-hrz-electric font-semibold" />,
                }}
              />
            </p>
          </div>
        </div>
      </section>

      {/* Modelo de negócio — plataforma integrada */}
      <section className="relative overflow-hidden bg-secondary py-24">
        <BoltDecor variant="solid" opacity={0.04} className="-right-20 top-1/2 h-[500px] w-auto -translate-y-1/2" />
        <div className="container-hrz relative">
          <p className="eyebrow text-hrz-electric">{t("about.business.eyebrow")}</p>
          <h2 className="display-mega mt-3 max-w-3xl text-4xl text-foreground sm:text-5xl">
            {t("about.business.heading")}
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
            {t("about.business.body")}
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <ModelCard title={t("about.business.card1.title")} text={t("about.business.card1.text")} />
            <ModelCard title={t("about.business.card2.title")} text={t("about.business.card2.text")} />
            <ModelCard title={t("about.business.card3.title")} text={t("about.business.card3.text")} />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative overflow-hidden bg-secondary py-24">
        <BoltDecor variant="outline" opacity={0.05} className="-left-16 bottom-10 h-[460px] w-auto" />
        <div className="container-hrz relative">
          <p className="eyebrow text-hrz-electric">{t("about.timeline.eyebrow")}</p>
          <h2 className="display-mega mt-3 max-w-3xl text-4xl text-foreground sm:text-5xl">
            {t("about.timeline.heading")}
          </h2>
          <Timeline items={TIMELINE} />
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="relative overflow-hidden py-24">
        <BoltDecor variant="outline" opacity={0.05} className="-right-24 top-10 h-[480px] w-auto" />
        <div className="container-hrz relative grid gap-8 lg:grid-cols-2">
          <MissionCard
            icon={Target}
            eyebrow={t("about.mission.eyebrow")}
            text={t("about.mission.text")}
            variant="light"
            delay={0}
          />
          <MissionCard
            icon={Eye}
            eyebrow={t("about.vision.eyebrow")}
            text={t("about.vision.text")}
            variant="dark"
            delay={0.12}
          />
        </div>
      </section>

      {/* Leadership */}
      <section className="relative overflow-hidden py-24">
        <BoltDecor variant="solid" opacity={0.04} className="-left-20 bottom-10 h-[460px] w-auto" />
        <div className="container-hrz relative">
          <p className="eyebrow text-hrz-electric">{t("about.leadership.eyebrow")}</p>
          <h2 className="display-mega mt-3 max-w-3xl text-4xl text-foreground sm:text-5xl">
            {t("about.leadership.heading")}
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
            {t("about.leadership.body")}
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {LEADERSHIP.map((l) => (
              <div
                key={l.name}
                className="overflow-hidden rounded-2xl border border-border bg-card transition hover:border-hrz-electric"
              >
                <div className="overflow-hidden">
                  <img
                    src={l.img}
                    alt={t("about.leadership.portraitAlt", { name: l.name })}
                    loading="lazy"
                    className="aspect-[3/4] w-full rounded-t-2xl rounded-b-none object-cover object-center"
                  />
                </div>
                <div className="p-5">
                  <p className="font-display text-lg font-bold text-foreground">{l.name}</p>
                  <p className="text-sm text-hrz-electric">{l.role}</p>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{l.bio}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-3xl bg-hrz-deep p-10 text-white lg:p-14">
            <p className="eyebrow text-hrz-electric">{t("about.leadership.governance.eyebrow")}</p>
            <p className="mt-4 max-w-3xl text-xl leading-relaxed text-white/85 lg:text-2xl">
              {t("about.leadership.governance.body")}
            </p>
          </div>
        </div>
      </section>

      {/* Ética — mensagem da alta administração */}
      <section className="relative overflow-hidden bg-secondary py-24">
        <BoltDecor variant="outline" opacity={0.05} className="-right-24 top-10 h-[500px] w-auto" />
        <BoltDecor variant="solid" opacity={0.04} className="-left-20 bottom-10 h-[440px] w-auto" />
        <div className="container-hrz relative grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border bg-hrz-deep-radial">
              <img
                src={eduardoImg}
                alt={t("about.ethics.ceoAlt")}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-5 font-display text-lg font-bold text-foreground">Eduardo Brito</p>
            <p className="text-sm text-hrz-electric">CEO · HRZ Energia</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow text-hrz-electric">{t("about.ethics.eyebrow")}</p>
            <h2 className="display-mega mt-3 text-3xl text-foreground sm:text-4xl">
              {t("about.ethics.quote")}
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>{t("about.ethics.body1")}</p>
              <p>{t("about.ethics.body2")}</p>
              <p>{t("about.ethics.body3")}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Ética — documentos */}
      <section className="relative overflow-hidden py-24">
        <BoltDecor variant="outline" opacity={0.05} className="-left-20 top-10 h-[460px] w-auto" />
        <div className="container-hrz relative">
          <p className="eyebrow text-hrz-electric">{t("about.docs.eyebrow")}</p>
          <h2 className="display-mega mt-3 max-w-3xl text-4xl text-foreground sm:text-5xl">
            {t("about.docs.heading")}
          </h2>
          <Stagger className="mt-12 grid gap-6 lg:grid-cols-3">
            {ETHICS_DOCS.map((d) => (
              <StaggerItem key={d.title}>
                <a
                  href={d.href}
                  className="group flex h-full flex-col rounded-3xl border border-border bg-card p-8 transition hover:-translate-y-1 hover:border-hrz-electric hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-hrz-deep text-white transition group-hover:bg-hrz-electric">
                    <d.icon size={22} />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-bold text-foreground">{d.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{d.text}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-hrz-electric">
                    {t("about.docs.accessDoc")} <ArrowRight size={16} />
                  </span>
                </a>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal className="mt-12 rounded-3xl bg-hrz-deep p-10 text-white lg:p-12">
            <p className="eyebrow text-hrz-electric">{t("about.docs.important.eyebrow")}</p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/85">
              {t("about.docs.important.body")}
            </p>
            <Link
              to="/contato"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-hrz-electric px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.03]"
            >
              {t("about.docs.cta")} <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}

function ModelCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-border/60 bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-hrz-electric/40 hover:shadow-xl">
      <span className="pointer-events-none absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-hrz-electric to-hrz-deep transition-transform duration-500 group-hover:scale-x-100" />
      <span className="pointer-events-none absolute left-0 top-0 h-12 w-1 bg-hrz-electric/70" />
      <h3 className="font-display text-xl font-bold tracking-tight text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
    </div>
  );
}

function Timeline({ items }: { items: TimelineItem[] }) {
  const [active, setActive] = useState(0);
  const item = items[active] ?? items[0];
  return (
    <div className="mt-16">
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
        {items.map((t, i) => {
          const isActive = active === i;
          return (
            <div key={t.year} className="flex flex-col items-center">
              <div className="mb-3 h-10 text-center text-xs leading-tight text-muted-foreground">
                {t.headerStrong && (
                  <>
                    <p>{t.header}</p>
                    <p className="font-bold text-foreground">{t.headerStrong}</p>
                  </>
                )}
              </div>
              <motion.button
                type="button"
                onClick={() => setActive(i)}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.97 }}
                className={`relative w-full overflow-hidden rounded-2xl border bg-background text-left shadow-sm transition ${
                  isActive
                    ? "border-hrz-electric ring-2 ring-hrz-electric/40"
                    : "border-border hover:border-hrz-electric/60"
                }`}
              >
                <div className="flex flex-col items-center justify-center px-3 py-6 text-center">
                  <p className="font-display text-2xl font-bold text-hrz-deep">{t.delta}</p>
                  <p className="text-xs text-muted-foreground">{t.unit}</p>
                </div>
                <div className="relative h-px bg-border">
                  <img
                    src={raioSolid}
                    alt=""
                    aria-hidden
                    className="pointer-events-none absolute left-1/2 top-1/2 h-5 w-auto -translate-x-1/2 -translate-y-1/2 drop-shadow"
                  />
                </div>
                <div className="flex items-center justify-center bg-gradient-to-b from-hrz-electric to-hrz-deep px-3 py-6">
                  <p className="font-display text-2xl font-bold tracking-tight text-white">{t.year}</p>
                </div>
              </motion.button>
            </div>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={item.year}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 rounded-3xl border border-border bg-card p-8 lg:p-10"
        >
          <div className="flex items-center gap-4">
            <span className="rounded-full bg-hrz-electric px-4 py-1.5 font-display text-sm font-bold text-white">
              {item.year}
            </span>
            <p className="eyebrow text-hrz-electric">
              {item.header} {item.headerStrong}
            </p>
          </div>
          <h3 className="mt-4 font-display text-2xl font-bold text-foreground sm:text-3xl">
            {item.title}
          </h3>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground">
            {item.detail}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function MissionCard({
  icon: Icon,
  eyebrow,
  text,
  variant,
  delay,
}: {
  icon: typeof Target;
  eyebrow: string;
  text: string;
  variant: "light" | "dark";
  delay: number;
}) {
  const isDark = variant === "dark";
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className={`group relative overflow-hidden rounded-3xl p-10 lg:p-12 ${
        isDark ? "bg-hrz-deep text-white" : "border border-border bg-card"
      }`}
    >
      <motion.div
        aria-hidden
        initial={{ rotate: 0 }}
        whileHover={{ rotate: 12, scale: 1.08 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
          isDark ? "bg-hrz-electric text-white" : "bg-hrz-electric/10 text-hrz-electric"
        }`}
      >
        <Icon size={26} />
      </motion.div>
      <p className={`eyebrow mt-6 ${isDark ? "text-hrz-electric" : "text-hrz-electric"}`}>
        {eyebrow}
      </p>
      <p
        className={`mt-4 text-lg leading-relaxed ${
          isDark ? "text-white/90" : "text-foreground"
        }`}
      >
        {text}
      </p>
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className={`pointer-events-none absolute -bottom-6 -right-6 ${
          isDark ? "text-white/10" : "text-hrz-electric/10"
        }`}
      >
        <Sparkles size={120} />
      </motion.div>
    </motion.div>
  );
}
