import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Calendar,
  Clock,
  Tag,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Link as LinkIcon,
  CheckCircle2,
  Sparkles,
  Quote,
  ArrowRight,
} from "lucide-react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { articles, type Article, type Block } from "@/data/articles";
import { author } from "@/data/author";
import { AuthorSocials } from "@/components/AuthorSocials";

/** Detects a numbered-heading pattern like "1. Something" */
function isNumberedH3(text: string) {
  return /^\d+\.\s/.test(text);
}

function CalloutQuote({ text }: { text: string }) {
  return (
    <figure className="my-10 relative rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 p-8 pl-16">
      <Quote className="absolute top-6 left-6 w-8 h-8 text-primary/60" />
      <blockquote className="text-lg md:text-xl font-semibold italic leading-relaxed text-foreground">
        {text.replace(/^["“]|["”]$/g, "")}
      </blockquote>
    </figure>
  );
}

function PremiumList({ items, ordered }: { items: string[]; ordered?: boolean }) {
  // Split "Label: description" into strong label + text
  return (
    <ul className="my-6 space-y-3">
      {items.map((raw, i) => {
        const isChecklist = raw.startsWith("[ ]") || raw.startsWith("[x]");
        const clean = isChecklist ? raw.replace(/^\[[ x]\]\s*/, "") : raw;
        const idx = clean.indexOf(":");
        const hasLabel = idx > 0 && idx < 60;
        const label = hasLabel ? clean.slice(0, idx) : "";
        const body = hasLabel ? clean.slice(idx + 1).trim() : clean;
        return (
          <li
            key={i}
            className="group flex gap-4 items-start rounded-xl border border-border/60 bg-card/60 hover:bg-card hover:border-primary/40 hover:shadow-sm transition p-4"
          >
            <span className="shrink-0 mt-0.5">
              {isChecklist ? (
                <span className="w-6 h-6 rounded-md border-2 border-primary/60 grid place-items-center">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </span>
              ) : ordered ? (
                <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold grid place-items-center">
                  {i + 1}
                </span>
              ) : (
                <CheckCircle2 className="w-5 h-5 text-primary" />
              )}
            </span>
            <div className="text-[15px] leading-relaxed text-foreground/90">
              {hasLabel && <strong className="font-bold text-foreground">{label}: </strong>}
              {body}
            </div>
          </li>
        );
      })}
    </ul>
  );
}

function KeyStatsBanner({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="my-10 rounded-2xl overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-primary/70 p-8 text-white shadow-lg">
      <div className="flex items-center gap-3 mb-2">
        <Sparkles className="w-5 h-5" />
        <span className="text-xs font-semibold uppercase tracking-widest opacity-80">Destaque</span>
      </div>
      <h3 className="text-2xl md:text-3xl font-extrabold leading-tight">{title}</h3>
      {subtitle && <p className="mt-2 opacity-90">{subtitle}</p>}
    </div>
  );
}

function renderBlocks(blocks: Block[]) {
  const out: React.ReactNode[] = [];
  let sectionIndex = 0;
  blocks.forEach((b, i) => {
    if (b.type === "h2") {
      sectionIndex++;
      out.push(
        <div key={i} className="mt-14 mb-6 flex items-start gap-4">
          <span className="mt-1 shrink-0 h-8 w-8 rounded-lg bg-primary text-primary-foreground font-bold grid place-items-center text-sm">
            {String(sectionIndex).padStart(2, "0")}
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold leading-tight border-b-2 border-primary/30 pb-3 flex-1">
            {b.text}
          </h2>
        </div>,
      );
    } else if (b.type === "h3") {
      const numbered = isNumberedH3(b.text);
      out.push(
        <h3
          key={i}
          className={`mt-10 mb-4 text-xl md:text-2xl font-bold ${
            numbered ? "text-primary" : "text-foreground"
          }`}
        >
          {b.text}
        </h3>,
      );
    } else if (b.type === "h4") {
      out.push(
        <h4 key={i} className="mt-8 mb-3 text-lg font-bold text-foreground">
          {b.text}
        </h4>,
      );
    } else if (b.type === "p") {
      const t = b.text.trim();
      // Quoted italic pull quote paragraph
      if (t.startsWith('"') && t.endsWith('"') && t.length < 260) {
        out.push(<CalloutQuote key={i} text={t} />);
      } else {
        out.push(
          <p key={i} className="my-5 text-[17px] leading-[1.85] text-foreground/85">
            {t}
          </p>,
        );
      }
    } else if (b.type === "quote") {
      out.push(<CalloutQuote key={i} text={b.text} />);
    } else if (b.type === "ul") {
      out.push(<PremiumList key={i} items={b.items} />);
    } else if (b.type === "ol") {
      out.push(<PremiumList key={i} items={b.items} ordered />);
    }
  });
  return out;
}

export function ArticlePage({ article }: { article: Article }) {
  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3);
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: article.category, to: article.categoryHref },
          { label: article.title },
        ]}
      />

      {/* HERO */}
      <section className="relative bg-gradient-to-b from-muted/60 to-background pt-10 pb-6">
        <div className="container mx-auto px-4 max-w-5xl">
          <Link
            to={article.categoryHref}
            className="cat-badge !bg-primary !text-white uppercase tracking-wider text-[11px]"
          >
            {article.category}
          </Link>
          <h1 className="mt-4 text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight max-w-4xl">
            {article.title}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <img
                src={author.photo}
                alt={author.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="font-medium text-foreground">{author.name}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" /> {article.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" /> {article.readMinutes} min de leitura
            </span>
            <span className="flex items-center gap-1.5">
              <Tag className="w-4 h-4" /> {article.category}
            </span>
          </div>
        </div>
      </section>

      {/* COVER */}
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="relative rounded-2xl overflow-hidden shadow-xl -mt-2">
          <img src={article.cover} alt={article.title} className="w-full h-auto object-cover aspect-[16/9]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* BODY */}
      <section className="bg-background py-14">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_340px] gap-12 max-w-[1400px]">
          <article>
            {/* Share rail */}
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-border/60">
              <Share2 className="w-4 h-4 text-muted-foreground" />
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                Compartilhar
              </span>
              <div className="flex gap-2 ml-auto">
                {[
                  { i: Facebook, c: "#1877F2" },
                  { i: Twitter, c: "#1DA1F2" },
                  { i: Linkedin, c: "#0A66C2" },
                  { i: LinkIcon, c: "#64748b" },
                ].map(({ i: Icon, c }, k) => (
                  <button
                    key={k}
                    className="w-9 h-9 grid place-items-center rounded-full text-white transition hover:scale-110"
                    style={{ backgroundColor: c }}
                  >
                    <Icon className="w-4 h-4" />
                  </button>
                ))}
              </div>
            </div>

            {/* Intro dropcap on first paragraph */}
            <div className="article-body">
              <FirstParagraphWithDropcap blocks={article.blocks} />
            </div>

            {/* Bottom tags + author card */}
            <div className="mt-14 pt-8 border-t border-border/60 flex flex-wrap items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mr-2">
                Tags:
              </span>
              {[article.category, "Privacidade Digital", "Cebolla.app", "Guia Prático"].map((t) => (
                <span
                  key={t}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full border border-border bg-muted/50 hover:bg-primary/10 hover:text-primary hover:border-primary/40 cursor-pointer transition"
                >
                  #{t}
                </span>
              ))}
            </div>

            <AuthorCard />


            {/* Related */}
            {related.length > 0 && (
              <div className="mt-14">
                <h3 className="section-title mb-8 text-xl">Artigos Relacionados</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      to={`${r.categoryHref}/$slug`}
                      params={{ slug: r.slug }}
                      className="group bg-card rounded-xl overflow-hidden border border-border/60 hover:shadow-lg hover:-translate-y-1 transition"
                    >
                      <div className="aspect-[16/10] overflow-hidden">
                        <img
                          src={r.cover}
                          alt={r.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition"
                        />
                      </div>
                      <div className="p-5">
                        <span className="cat-badge text-[10px]">{r.category}</span>
                        <h4 className="font-bold leading-snug mt-3 mb-2 group-hover:text-primary">
                          {r.title}
                        </h4>
                        <span className="inline-flex items-center gap-1 text-xs text-primary font-semibold">
                          Ler artigo <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </article>

          <Sidebar />
        </div>
      </section>
    </>
  );
}

function FirstParagraphWithDropcap({ blocks }: { blocks: Block[] }) {
  // Find first p and add dropcap; render rest normally
  const firstPIdx = blocks.findIndex((b) => b.type === "p");
  return (
    <>
      {blocks.map((b, i) => {
        if (i === firstPIdx && b.type === "p") {
          const text = b.text;
          return (
            <p
              key={i}
              className="my-5 text-[17px] leading-[1.85] text-foreground/90 first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-6xl first-letter:font-black first-letter:leading-none first-letter:text-primary first-letter:font-display"
            >
              {text}
            </p>
          );
        }
        return <RenderOne key={i} b={b} index={i} />;
      })}
    </>
  );
}

function RenderOne({ b }: { b: Block; index: number }) {
  const nodes = renderBlocks([b]);
  return <>{nodes}</>;
}

function AuthorCard() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-10 rounded-2xl border border-border/60 bg-gradient-to-br from-muted/40 to-background p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
      <img
        src={author.photo}
        alt={author.name}
        className="w-24 h-24 rounded-full object-cover shrink-0"
      />
      <div className="flex-1">
        <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-1">
          Sobre o Autor
        </div>
        <h4 className="text-xl font-bold">{author.name}</h4>
        <p className="text-sm text-muted-foreground mb-3">{author.role}</p>
        <p className="text-sm text-foreground/85 leading-relaxed">
          {author.shortBio}
        </p>
        {open && (
          <div className="mt-3 space-y-3">
            {author.fullBio.map((p, i) => (
              <p key={i} className="text-sm text-foreground/85 leading-relaxed">
                {p}
              </p>
            ))}
            <div className="flex flex-wrap gap-2 pt-1">
              {author.skills.map((s) => (
                <span
                  key={s}
                  className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        )}
        <div className="mt-4 flex flex-wrap items-center gap-4">
          <button
            onClick={() => setOpen((v) => !v)}
            className="text-sm font-semibold text-primary hover:underline"
          >
            {open ? "Ver Menos" : "Ver Mais"}
          </button>
          <AuthorSocials />
        </div>
      </div>
    </div>
  );
}

// Named for style parity with future MDX exports
export { KeyStatsBanner };
