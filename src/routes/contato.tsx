import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Mail, MapPin, Briefcase, Upload, Linkedin, CheckCircle2, Phone } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import i18n from "@/i18n/config";
import mascoteOi from "@/assets/mascote/oi.png";
import { Float, Reveal } from "@/components/site/motion";
import { BoltDecor } from "@/components/site/BoltDecor";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: i18n.t("contact.meta.title") },
      { name: "description", content: i18n.t("contact.meta.description") },
      { property: "og:title", content: i18n.t("contact.meta.ogTitle") },
      { property: "og:description", content: i18n.t("contact.meta.ogDescription") },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  const { t } = useTranslation();

  return (
    <SiteShell headerVariant="dark">
      <PageHero
        eyebrow={t("contact.hero.eyebrow")}
        title={
          <>
            {t("contact.hero.titleLine1")}
            <br />
            <span className="text-gradient-electric">{t("contact.hero.titleLine2")}</span>
          </>
        }
        subtitle={t("contact.hero.subtitle")}
      />

      <section className="relative overflow-hidden py-24">
        <BoltDecor variant="outline" opacity={0.05} className="-left-24 top-10 h-[500px] w-auto" />
        <BoltDecor variant="solid" opacity={0.04} className="-right-20 bottom-10 h-[420px] w-auto" />
        <div className="container-hrz relative grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          {/* Form */}
          <Reveal>
            <form
              className="rounded-3xl border border-border bg-card p-8 lg:p-10"
              onSubmit={(e) => e.preventDefault()}
            >
              <p className="eyebrow text-hrz-electric">{t("contact.form.eyebrow")}</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold text-foreground">
                {t("contact.form.heading")}
              </h2>

              <div className="mt-8 grid gap-5">
                <Field label={t("contact.form.fieldName")} name="name" />
                <Field label={t("contact.form.fieldCompany")} name="company" />
                <Field label={t("contact.form.fieldEmail")} name="email" type="email" />
                <div>
                  <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {t("contact.form.fieldSubject")}
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    defaultValue=""
                    className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-hrz-electric"
                  >
                    <option value="" disabled>
                      {t("contact.form.subjectPlaceholder")}
                    </option>
                    <option value="investidor">{t("contact.form.subjectInvestor")}</option>
                    <option value="imprensa">{t("contact.form.subjectPress")}</option>
                    <option value="parceiro">{t("contact.form.subjectPartner")}</option>
                    <option value="comunidade">{t("contact.form.subjectCommunity")}</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {t("contact.form.fieldMessage")}
                  </label>
                  <textarea
                    rows={5}
                    className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-hrz-electric"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center rounded-full bg-hrz-deep px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-hrz-mid"
                >
                  {t("contact.form.submitBtn")}
                </button>
              </div>
            </form>
          </Reveal>

          <Reveal delay={0.1} className="space-y-6">
            <ContactCard
              icon={Mail}
              title={t("contact.cards.emailTitle")}
              text={t("contact.cards.emailValue")}
            />
            <ContactCard
              icon={MapPin}
              title={t("contact.cards.locationTitle")}
              text={t("contact.cards.locationValue")}
            />
            <a
              href="https://www.linkedin.com/company/hrz-energia/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-start gap-5 overflow-hidden rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-hrz-electric/40 hover:shadow-xl"
            >
              <span className="pointer-events-none absolute inset-y-0 left-0 w-[3px] origin-top scale-y-0 bg-gradient-to-b from-hrz-electric to-hrz-deep transition-transform duration-500 group-hover:scale-y-100" />
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-hrz-deep to-hrz-electric text-white shadow-md ring-1 ring-hrz-electric/30 transition-transform duration-300 group-hover:scale-110">
                <Linkedin size={20} />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-hrz-electric">
                  LinkedIn
                </p>
                <p className="mt-1 text-base text-foreground">
                  linkedin.com/company/hrz-energia
                </p>
              </div>
            </a>

            <div className="rounded-3xl bg-hrz-deep p-8 text-white">
              <p className="eyebrow text-hrz-electric">{t("contact.investorsBox.eyebrow")}</p>
              <p className="mt-3 text-base leading-relaxed text-white/85">
                {t("contact.investorsBox.body")}
              </p>
            </div>

            <Float className="flex justify-center pt-4" amplitude={12} duration={4.5}>
              <img
                src={mascoteOi}
                alt={t("contact.mascoteAlt")}
                className="h-72 w-auto drop-shadow-xl"
              />
            </Float>
          </Reveal>
        </div>
      </section>

      <LiderancaSection />
      <TrabalheConosco />
    </SiteShell>
  );
}

type LeadershipChannel = { title: string; phone: string; email: string };

function LiderancaSection() {
  const { t } = useTranslation();
  const channel = t("contact.leadership.channel", { returnObjects: true }) as LeadershipChannel;

  return (
    <section className="relative overflow-hidden py-24">
      <BoltDecor variant="outline" opacity={0.05} className="-right-20 top-10 h-[460px] w-auto" />
      <div className="container-hrz relative">
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="eyebrow text-hrz-electric">{t("contact.leadership.eyebrow")}</p>
          <h2 className="display-mega mt-3 text-4xl text-foreground sm:text-5xl">
            {t("contact.leadership.heading")}
          </h2>
        </Reveal>

        <Reveal className="mx-auto mt-10 max-w-md">
          <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-hrz-electric/40 hover:shadow-xl">
            <span className="pointer-events-none absolute inset-y-0 left-0 w-[3px] origin-top scale-y-0 bg-gradient-to-b from-hrz-electric to-hrz-deep transition-transform duration-500 group-hover:scale-y-100" />

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-hrz-deep to-hrz-electric text-white shadow-md ring-1 ring-hrz-electric/30">
                <Phone size={20} />
              </div>
              <div>
                <p className="font-display text-base font-bold leading-tight text-foreground">
                  {channel.title}
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <a
                href={`tel:${channel.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-sm text-muted-foreground transition hover:text-foreground"
              >
                <Phone size={14} className="shrink-0 text-hrz-electric" />
                {channel.phone}
              </a>
              <a
                href={`mailto:${channel.email}`}
                className="flex items-center gap-3 break-all text-sm text-muted-foreground transition hover:text-foreground"
              >
                <Mail size={14} className="shrink-0 text-hrz-electric" />
                {channel.email}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function TrabalheConosco() {
  const { t } = useTranslation();
  const [fileName, setFileName] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);

  const areas = t("contact.careers.areas", { returnObjects: true }) as string[];

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="relative overflow-hidden bg-secondary py-24">
      <BoltDecor variant="outline" opacity={0.05} className="-right-20 top-10 h-[460px] w-auto" />
      <BoltDecor variant="solid" opacity={0.04} className="-left-24 bottom-0 h-[420px] w-auto" />
      <div className="container-hrz relative grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <Reveal>
          <p className="eyebrow text-hrz-electric">{t("contact.careers.eyebrow")}</p>
          <h2 className="display-mega mt-3 text-4xl text-foreground sm:text-5xl">
            {t("contact.careers.heading")}
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            {t("contact.careers.body")}
          </p>
          <div className="mt-8 space-y-4">
            <BenefitRow
              icon={Briefcase}
              title={t("contact.careers.benefit1Title")}
              text={t("contact.careers.benefit1Text")}
            />
            <BenefitRow
              icon={CheckCircle2}
              title={t("contact.careers.benefit2Title")}
              text={t("contact.careers.benefit2Text")}
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          {submitted ? (
            <div className="flex flex-col items-center justify-center rounded-3xl border border-hrz-electric/40 bg-card p-12 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-hrz-electric text-white">
                <CheckCircle2 size={26} />
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold text-foreground">
                {t("contact.careers.successTitle")}
              </h3>
              <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                {t("contact.careers.successBody")}
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFileName("");
                }}
                className="mt-6 inline-flex items-center justify-center rounded-full border border-foreground/20 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-foreground transition hover:border-hrz-electric hover:text-hrz-electric"
              >
                {t("contact.careers.successCta")}
              </button>
            </div>
          ) : (
            <form
              className="rounded-3xl border border-border bg-card p-8 lg:p-10"
              onSubmit={onSubmit}
            >
              <p className="eyebrow text-hrz-electric">{t("contact.careers.formEyebrow")}</p>
              <h3 className="mt-3 font-display text-3xl font-extrabold text-foreground">
                {t("contact.careers.formHeading")}
              </h3>

              <div className="mt-8 grid gap-5">
                <Field label={t("contact.careers.fieldFullName")} name="career-name" required />
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label={t("contact.careers.fieldEmail")} name="career-email" type="email" required />
                  <Field label={t("contact.careers.fieldPhone")} name="career-phone" type="tel" required />
                </div>

                <div>
                  <label
                    htmlFor="career-area"
                    className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                  >
                    {t("contact.careers.fieldAreaLabel")}
                  </label>
                  <select
                    id="career-area"
                    name="career-area"
                    defaultValue=""
                    required
                    className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-hrz-electric"
                  >
                    <option value="" disabled>
                      {t("contact.careers.fieldAreaPlaceholder")}
                    </option>
                    {areas.map((a) => (
                      <option key={a} value={a}>
                        {a}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="career-cv"
                    className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                  >
                    {t("contact.careers.fieldCvLabel")}
                  </label>
                  <label
                    htmlFor="career-cv"
                    className="mt-2 flex cursor-pointer items-center justify-between gap-4 rounded-xl border border-dashed border-input bg-background px-4 py-4 text-sm text-muted-foreground transition hover:border-hrz-electric hover:text-foreground"
                  >
                    <span className="flex items-center gap-3">
                      <Upload size={16} />
                      {fileName || t("contact.careers.fieldCvPlaceholder")}
                    </span>
                    <span className="rounded-full bg-hrz-deep px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                      {t("contact.careers.fieldCvAttach")}
                    </span>
                  </label>
                  <input
                    id="career-cv"
                    name="career-cv"
                    type="file"
                    required
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    className="sr-only"
                    onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
                  />
                </div>

                <div>
                  <label
                    htmlFor="career-message"
                    className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                  >
                    {t("contact.careers.fieldMessageLabel")}
                  </label>
                  <textarea
                    id="career-message"
                    name="career-message"
                    rows={4}
                    maxLength={1000}
                    placeholder={t("contact.careers.fieldMessagePlaceholder")}
                    className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-hrz-electric"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center rounded-full bg-hrz-electric px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-hrz-electric/90"
                >
                  {t("contact.careers.submitBtn")}
                </button>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function BenefitRow({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof Briefcase;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-hrz-electric/10 text-hrz-electric">
        <Icon size={18} />
      </div>
      <div>
        <p className="text-sm font-bold text-foreground">{title}</p>
        <p className="mt-1 text-sm text-muted-foreground">{text}</p>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-hrz-electric"
      />
    </div>
  );
}

function ContactCard({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof Mail;
  title: string;
  text: string;
}) {
  return (
    <div className="group relative flex items-start gap-5 overflow-hidden rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-hrz-electric/40 hover:shadow-xl">
      <span className="pointer-events-none absolute inset-y-0 left-0 w-[3px] origin-top scale-y-0 bg-gradient-to-b from-hrz-electric to-hrz-deep transition-transform duration-500 group-hover:scale-y-100" />
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-hrz-deep to-hrz-electric text-white shadow-md ring-1 ring-hrz-electric/30 transition-transform duration-300 group-hover:scale-110">
        <Icon size={20} />
      </div>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wider text-hrz-electric">{title}</p>
        <p className="mt-1 text-base text-foreground">{text}</p>
      </div>
    </div>
  );
}
