import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown, FileText } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "./motion";

// ─── Types ────────────────────────────────────────────────────────────────────

export type DocumentItem = {
  /** Full document name, e.g. "Demonstrações Financeiras 2025 — HRZ Transmissão" */
  title: string;
  /** Display date, e.g. "31/12/2025" */
  date: string;
  /** PDF URL – opened in a new tab */
  href: string;
};

export type DocumentGroup = {
  /** Unique value for the Radix accordion */
  id: string;
  /** Accordion header text, e.g. "Exercício 2025" */
  label: string;
  items: DocumentItem[];
};

export type CompanySection = {
  /** Subtitle displayed above each accordion block */
  company: string;
  groups: DocumentGroup[];
};

// ─── Internal components ──────────────────────────────────────────────────────

function DocumentRow({ item }: { item: DocumentItem }) {
  return (
    <li className="flex items-center justify-between gap-4 px-6 py-4 transition-colors hover:bg-secondary/60">
      {/* Left: icon + metadata */}
      <div className="flex min-w-0 items-center gap-3">
        <span
          aria-hidden
          className="flex-shrink-0 text-hrz-mid"
        >
          <FileText size={18} strokeWidth={1.5} />
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-medium leading-snug text-foreground">
            {item.title}
          </p>
          <p className="mt-0.5 text-xs text-muted-foreground">{item.date}</p>
        </div>
      </div>

      {/* Right: action button — rendered only when href is non-empty */}
      {item.href ? (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ver arquivo: ${item.title}`}
          className="flex-shrink-0 rounded-full border border-hrz-mid px-4 py-1.5 text-xs font-semibold text-hrz-mid transition-colors duration-200 hover:bg-hrz-mid hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hrz-mid focus-visible:ring-offset-2"
        >
          Ver arquivo
        </a>
      ) : (
        <span
          aria-label={`Arquivo em breve: ${item.title}`}
          className="flex-shrink-0 cursor-not-allowed rounded-full border border-border px-4 py-1.5 text-xs font-semibold text-muted-foreground"
        >
          Ver arquivo
        </span>
      )}
    </li>
  );
}

function AccordionGroup({ group }: { group: DocumentGroup }) {
  return (
    <AccordionPrimitive.Item
      value={group.id}
      className="overflow-hidden rounded-xl border border-border shadow-sm"
    >
      {/* Trigger — dark navy header */}
      <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
          className="
            group flex w-full items-center justify-between
            bg-hrz-deep px-6 py-4 text-left text-sm font-semibold text-white
            transition-colors duration-200
            hover:bg-hrz-mid
            data-[state=open]:bg-hrz-mid
            focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-hrz-electric focus-visible:ring-inset
          "
        >
          {group.label}
          <ChevronDown
            size={18}
            strokeWidth={2}
            aria-hidden
            className="flex-shrink-0 text-white/60 transition-transform duration-300 group-data-[state=open]:rotate-180"
          />
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>

      {/* Content — white background, animated height */}
      <AccordionPrimitive.Content className="overflow-hidden bg-white data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
        {group.items.length > 0 ? (
          <ul
            role="list"
            aria-label={`Documentos: ${group.label}`}
            className="divide-y divide-border"
          >
            {group.items.map((item, i) => (
              <DocumentRow key={i} item={item} />
            ))}
          </ul>
        ) : (
          <p className="px-6 py-5 text-sm text-muted-foreground italic">
            Nenhum documento disponível nesta categoria.
          </p>
        )}
      </AccordionPrimitive.Content>
    </AccordionPrimitive.Item>
  );
}

// ─── Public API ───────────────────────────────────────────────────────────────

interface CompanyDocumentListProps {
  sections: CompanySection[];
  /** Default open accordion IDs */
  defaultValue?: string[];
}

export function CompanyDocumentList({
  sections,
  defaultValue = [],
}: CompanyDocumentListProps) {
  return (
    <div className="space-y-14">
      {sections.map((section, sIdx) => (
        <Reveal key={section.company} delay={sIdx * 0.08}>
          <section aria-labelledby={`company-${sIdx}`}>
            <h2
              id={`company-${sIdx}`}
              className="mb-5 font-display text-lg font-semibold tracking-tight text-foreground"
            >
              {section.company}
            </h2>

            <AccordionPrimitive.Root
              type="multiple"
              defaultValue={defaultValue}
              className="space-y-3"
            >
              <Stagger staggerChildren={0.08}>
                {section.groups.map((group) => (
                  <StaggerItem key={group.id}>
                    <AccordionGroup group={group} />
                  </StaggerItem>
                ))}
              </Stagger>
            </AccordionPrimitive.Root>
          </section>
        </Reveal>
      ))}
    </div>
  );
}
