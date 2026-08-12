import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, BookOpen, MessageSquareWarning, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { PageHero } from "@/components/site/PageHero";
import { BoltDecor } from "@/components/site/BoltDecor";
import { Reveal, Stagger, StaggerItem } from "@/components/site/motion";
import eduardoImg from "@/assets/team/eduardo-brito.webp";

type DocItem = {
  title: string;
  text: string;
};

export const Route = createLazyFileRoute("/etica/")({
  component: EticaIndexPage,
});

const CARD_LINKS: Record<number, string> = {
  0: "/etica/politica-anticorrupcao",
  2: "/etica/canal-de-denuncias",
};

function EticaIndexPage() {
  const { t } = useTranslation();

  const DOCS_ICONS = [ShieldCheck, BookOpen, MessageSquareWarning];
  const docItems = t("about.docs.items", { returnObjects: true }) as DocItem[];
  const DOCS = docItems.map((item, i) => ({
    icon: DOCS_ICONS[i],
    title: item.title,
    text: item.text,
    to: CARD_LINKS[i],
  }));

  const cardClassName =
    "group flex h-full flex-col rounded-3xl border border-border bg-card p-8 transition hover:-translate-y-1 hover:border-hrz-electric hover:shadow-xl";

  return (
    <>
      <PageHero
        eyebrow={t("ethics.hero.eyebrow")}
        title={
          <>
            {t("ethics.hero.titleLine1")}
            <br />
            <span className="text-gradient-electric">{t("ethics.hero.titleLine2")}</span>
          </>
        }
        subtitle={t("ethics.hero.subtitle")}
      />

      <section className="relative overflow-hidden bg-secondary py-24">
        <BoltDecor variant="outline" opacity={0.05} className="-right-24 top-10 h-[500px] w-auto" />
        <BoltDecor variant="solid" opacity={0.04} className="-left-20 bottom-10 h-[440px] w-auto" />
        <div className="container-hrz relative grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border bg-hrz-deep-radial">
              <img
                src={eduardoImg}
                alt={t("about.ethics.ceoAlt")}
                loading="lazy"
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

      <section className="relative overflow-hidden py-24">
        <BoltDecor variant="outline" opacity={0.05} className="-left-20 top-10 h-[460px] w-auto" />
        <div className="container-hrz relative">
          <p className="eyebrow text-hrz-electric">{t("about.docs.eyebrow")}</p>
          <h2 className="display-mega mt-3 max-w-3xl text-4xl text-foreground sm:text-5xl">
            {t("about.docs.heading")}
          </h2>
          <Stagger className="mt-12 grid gap-6 lg:grid-cols-3">
            {DOCS.map((d) => (
              <StaggerItem key={d.title}>
                {d.to ? (
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  <Link to={d.to as any} className={cardClassName}>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-hrz-deep text-white transition group-hover:bg-hrz-electric">
                      <d.icon size={22} />
                    </div>
                    <h3 className="mt-6 font-display text-2xl font-bold text-foreground">{d.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{d.text}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-hrz-electric">
                      {t("about.docs.accessDoc")} <ArrowRight size={16} />
                    </span>
                  </Link>
                ) : (
                  <a href="#" className={cardClassName}>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-hrz-deep text-white transition group-hover:bg-hrz-electric">
                      <d.icon size={22} />
                    </div>
                    <h3 className="mt-6 font-display text-2xl font-bold text-foreground">{d.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{d.text}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-hrz-electric">
                      {t("about.docs.accessDoc")} <ArrowRight size={16} />
                    </span>
                  </a>
                )}
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
    </>
  );
}
