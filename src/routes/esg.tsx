import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Leaf, Users, Scale, Heart, Sprout, Handshake, ShieldCheck } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { BoltDecor } from "@/components/site/BoltDecor";
import { Stagger, StaggerItem } from "@/components/site/motion";
import i18n from "@/i18n/config";
import infraImg from "@/assets/esg/infraestrutura.jpg";
import comunidadeImg from "@/assets/esg/comunidade.jpg";
import sustentImg from "@/assets/esg/sustentabilidade.jpg";
import juntosImg from "@/assets/esg/juntos-mais-fortes.jpg";
import capacitImg from "@/assets/esg/capacitacao.jpg";
import rendaImg from "@/assets/esg/geracao-renda.jpg";

export const Route = createFileRoute("/esg")({
  head: () => ({
    meta: [
      { title: i18n.t("esg.meta.title") },
      { name: "description", content: i18n.t("esg.meta.description") },
      { property: "og:title", content: i18n.t("esg.meta.ogTitle") },
      { property: "og:description", content: i18n.t("esg.meta.ogDescription") },
    ],
  }),
  component: EsgPage,
});

const GALLERY_IMAGES = [infraImg, comunidadeImg, capacitImg, rendaImg, sustentImg, juntosImg];

const PILLAR_ICONS = [Leaf, Users, Scale];
const VALUE_ICONS = [Users, ShieldCheck, Sprout, Handshake];

type GalleryItem = { label: string };
type PillarItem = { title: string; items: string[] };
type ValueItem = { title: string; text: string };
type HighlightItem = { title: string; text: string };

function EsgPage() {
  const { t } = useTranslation();

  const gallery = t("esg.gallery", { returnObjects: true }) as GalleryItem[];
  const pillars = t("esg.pillars", { returnObjects: true }) as PillarItem[];
  const valueItems = t("esg.values.items", { returnObjects: true }) as ValueItem[];
  const highlights = t("esg.highlights.items", { returnObjects: true }) as HighlightItem[];

  return (
    <SiteShell headerVariant="dark">
      <PageHero
        eyebrow={t("esg.hero.eyebrow")}
        variant="green"
        title={
          <>
            {t("esg.hero.titleLine1")}
            <br />
            <span className="font-normal">{t("esg.hero.titleLine2")}</span>
          </>
        }
        subtitle={t("esg.hero.subtitle")}
      />

      {/* Social impact metrics */}
      <section className="relative overflow-hidden bg-white py-20">
        <BoltDecor variant="outline" opacity={0.05} className="-left-20 top-0 h-[380px] w-auto" />
        <div className="container-hrz relative grid items-center gap-6 md:grid-cols-3">
          <ImpactMetric icon={Users} value="+500" label={t("esg.metrics.people")} />
          <ImpactMetric icon={Heart} value="10" label={t("esg.metrics.communities")} />
          <ImpactMetric icon={Sprout} value="5" label={t("esg.metrics.projects")} />
        </div>
      </section>

      {/* Social gallery */}
      <section className="relative overflow-hidden bg-secondary py-24">
        <BoltDecor variant="solid" opacity={0.04} className="-right-20 top-10 h-[460px] w-auto" />
        <div className="container-hrz relative">
          <p className="eyebrow text-hrz-green">{t("esg.social.eyebrow")}</p>
          <h2 className="display-mega mt-3 max-w-3xl text-4xl text-foreground sm:text-5xl">
            {t("esg.social.heading")}
          </h2>
          <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((g, i) => (
              <StaggerItem key={g.label}>
                <figure className="group relative overflow-hidden rounded-2xl">
                  <img
                    src={GALLERY_IMAGES[i]}
                    alt={g.label}
                    loading="lazy"
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-hrz-deep/95 via-hrz-deep/40 to-transparent p-5">
                    <span className="inline-flex items-center rounded-full bg-hrz-green px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                      {g.label}
                    </span>
                  </figcaption>
                </figure>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ESG Pillars */}
      <section className="relative overflow-hidden py-24">
        <BoltDecor variant="outline" opacity={0.05} className="-left-16 bottom-10 h-[460px] w-auto" />
        <Stagger className="container-hrz relative grid gap-6 lg:grid-cols-3">
          {pillars.map((p, i) => {
            const PillarIcon = PILLAR_ICONS[i];
            return (
              <StaggerItem key={p.title}>
                <article className="group h-full rounded-2xl border border-border/60 bg-card p-7 transition duration-300 hover:border-foreground/25">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground/15 text-foreground transition group-hover:border-hrz-green group-hover:text-hrz-green">
                    <PillarIcon size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-light tracking-tight text-foreground">
                    {p.title}
                  </h3>
                  <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground">
                    {p.items.map((it) => (
                      <li key={it} className="flex gap-3">
                        <span className="mt-2 h-1 w-3 shrink-0 bg-hrz-green" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </section>

      {/* Nossos Valores */}
      <section className="relative overflow-hidden bg-gradient-to-br from-hrz-green-dark via-hrz-green to-hrz-green-vivid py-24 text-white">
        <BoltDecor variant="solid" opacity={0.08} className="-right-24 top-10 h-[500px] w-auto" />
        <div className="container-hrz relative">
          <p className="eyebrow text-white/80">{t("esg.values.eyebrow")}</p>
          <h2 className="display-mega mt-3 max-w-3xl text-4xl sm:text-5xl">
            {t("esg.values.heading1")}{" "}
            <span className="font-normal text-white/90">{t("esg.values.heading2")}</span>
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85">
            {t("esg.values.tagline")}
          </p>
          <Stagger className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {valueItems.map((v, i) => {
              const ValueIcon = VALUE_ICONS[i];
              return (
                <StaggerItem key={v.title} className="group relative border-l border-white/20 pl-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/80 text-white transition group-hover:scale-110 group-hover:border-white">
                    <ValueIcon size={26} strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-5 font-display text-base font-extrabold uppercase tracking-wider text-white">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/85">{v.text}</p>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* Destaques operacionais */}
      <section className="relative overflow-hidden bg-secondary py-24">
        <BoltDecor variant="outline" opacity={0.05} className="-right-20 top-10 h-[440px] w-auto" />
        <div className="container-hrz relative">
          <p className="eyebrow text-hrz-green">{t("esg.highlights.eyebrow")}</p>
          <h2 className="display-mega mt-3 max-w-3xl text-4xl text-foreground sm:text-5xl">
            {t("esg.highlights.heading")}
          </h2>
          <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
            {highlights.map((h) => (
              <StaggerItem key={h.title}>
                <Highlight title={h.title} text={h.text} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </SiteShell>
  );
}

function Highlight({ title, text }: { title: string; text: string }) {
  return (
    <div className="group h-full rounded-2xl border border-border/60 bg-card p-7 transition duration-300 hover:border-foreground/25">
      <h3 className="font-display text-xl font-light tracking-tight text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
    </div>
  );
}

function ImpactMetric({
  icon: Icon,
  value,
  label,
}: {
  icon: typeof Users;
  value: string;
  label: string;
}) {
  return (
    <div className="group h-full rounded-2xl border border-border/60 bg-card p-7 transition duration-300 hover:border-foreground/25">
      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground/15 text-foreground transition group-hover:border-hrz-green group-hover:text-hrz-green">
        <Icon size={20} strokeWidth={1.5} />
      </div>
      <p className="mt-6 font-display text-4xl font-light tracking-tight text-hrz-green">{value}</p>
      <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
    </div>
  );
}
