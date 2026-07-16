import { useEffect, useState } from "react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ShieldCheck, Sparkles, FileText, Info, AlertTriangle, CheckCircle2, Mail } from "lucide-react";

export interface LegalSection {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface LegalPageProps {
  breadcrumbLabel: string;
  eyebrow: string;
  title: string;
  intro: string;
  updatedAt: string;
  sections: LegalSection[];
  contactEmail?: string;
}

export function LegalPage({ breadcrumbLabel, eyebrow, title, intro, updatedAt, sections, contactEmail = "contato@cebolla.app" }: LegalPageProps) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-120px 0px -60% 0px", threshold: 0.1 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [sections]);

  return (
    <>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Legal" }, { label: breadcrumbLabel }]} />
      <div className="container mx-auto px-4 py-12">
        {/* Hero */}
        <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-primary/10 via-card to-card p-8 md:p-12 mb-10 shadow-xl">
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 cat-badge mb-4">
              <Sparkles className="w-3.5 h-3.5" /> {eyebrow}
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4 max-w-3xl">{title}</h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mb-6">{intro}</p>
            <div className="flex flex-wrap gap-3 text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" /> Conformidade LGPD
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" /> Políticas Google
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted text-muted-foreground border border-border font-semibold">
                <FileText className="w-3.5 h-3.5" /> Atualizado em {updatedAt}
              </span>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10">
          {/* Sidebar TOC */}
          <aside className="lg:sticky lg:top-24 self-start">
            <div className="rounded-xl border border-border/60 bg-card shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-primary/70 text-primary-foreground px-5 py-4">
                <div className="flex items-center gap-2 font-bold text-sm">
                  <FileText className="w-4 h-4" /> Índice do Documento
                </div>
              </div>
              <nav className="p-3">
                <ol className="space-y-1">
                  {sections.map((s, i) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className={`flex items-start gap-3 px-3 py-2.5 rounded-md text-sm transition-colors ${
                          active === s.id
                            ? "bg-primary/10 text-primary font-semibold border-l-2 border-primary"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/60 border-l-2 border-transparent"
                        }`}
                      >
                        <span className="text-xs font-mono opacity-70 mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                        <span className="leading-snug">{s.title}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
              <div className="border-t border-border p-5 bg-muted/30">
                <div className="flex items-start gap-2 text-xs text-muted-foreground">
                  <Mail className="w-4 h-4 shrink-0 text-primary mt-0.5" />
                  <div>
                    Dúvidas? Escreva para{" "}
                    <a href={`mailto:${contactEmail}`} className="text-primary font-semibold">{contactEmail}</a>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Content */}
          <article className="min-w-0 space-y-10">
            {sections.map((s, i) => (
              <section key={s.id} id={s.id} className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-5">
                  <span className="grid place-items-center w-10 h-10 rounded-lg bg-primary text-primary-foreground font-bold text-sm shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold leading-tight">{s.title}</h2>
                </div>
                <div className="prose-legal space-y-4 text-muted-foreground leading-relaxed">
                  {s.content}
                </div>
              </section>
            ))}

            {/* Footer callout */}
            <div className="rounded-xl border border-primary/30 bg-gradient-to-br from-primary/10 to-transparent p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="grid place-items-center w-12 h-12 rounded-full bg-primary text-primary-foreground shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Fale com o Encarregado (DPO)</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Para solicitações relacionadas à LGPD, exercício de direitos, dúvidas sobre este documento ou reclamações, envie um e-mail. Respondemos em até 15 dias úteis.
                  </p>
                  <a href={`mailto:${contactEmail}`} className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-5 py-2.5 rounded text-sm hover:bg-primary/90">
                    <Mail className="w-4 h-4" /> {contactEmail}
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

// Premium content primitives
export function Callout({ type = "info", title, children }: { type?: "info" | "warning" | "success"; title: string; children: React.ReactNode }) {
  const map = {
    info: { Icon: Info, cls: "border-primary/30 bg-primary/5 text-primary" },
    warning: { Icon: AlertTriangle, cls: "border-yellow-500/40 bg-yellow-500/5 text-yellow-600 dark:text-yellow-400" },
    success: { Icon: CheckCircle2, cls: "border-emerald-500/40 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400" },
  } as const;
  const { Icon, cls } = map[type];
  return (
    <div className={`not-prose rounded-lg border-l-4 ${cls} p-5 my-5`}>
      <div className="flex items-start gap-3">
        <Icon className="w-5 h-5 shrink-0 mt-0.5" />
        <div>
          <div className="font-bold mb-1 text-foreground">{title}</div>
          <div className="text-sm text-muted-foreground leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}

export function Highlight({ children }: { children: React.ReactNode }) {
  return <mark className="bg-primary/15 text-foreground font-semibold px-1.5 py-0.5 rounded">{children}</mark>;
}

export function InfoCards({ items }: { items: { title: string; text: string }[] }) {
  return (
    <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
      {items.map((it) => (
        <div key={it.title} className="rounded-lg border border-border/60 bg-card p-5 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <h4 className="font-bold text-foreground">{it.title}</h4>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{it.text}</p>
        </div>
      ))}
    </div>
  );
}

export function BadgeList({ items }: { items: string[] }) {
  return (
    <div className="not-prose flex flex-wrap gap-2 my-4">
      {items.map((i) => (
        <span key={i} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20">
          {i}
        </span>
      ))}
    </div>
  );
}
