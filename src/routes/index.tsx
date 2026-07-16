import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Calendar, Clock, ArrowRight, Facebook, Twitter, Youtube, Mail } from "lucide-react";
import logo from "@/assets/cebolla-logo.png";
import { articles, articlesByCategory, type Article } from "@/data/articles";
import { author } from "@/data/author";
import { AuthorSocials } from "@/components/AuthorSocials";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cebolla.app — Privacidade e Segurança Digital" },
      { name: "description", content: "Notícias e guias sobre privacidade, criptografia, segurança, pagamentos e ferramentas anti-vigilância." },
    ],
  }),
  component: Home,
});

const CATEGORIES = ["Privacidade", "Criptografia", "Segurança", "Pagamentos", "Ferramentas"] as const;

function hrefFor(cat: string) {
  const norm = cat.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return `/${norm}`;
}

function CategoryBadge({ category }: { category: string }) {
  return (
    <Link to={hrefFor(category)} className="cat-badge hover:opacity-80">
      {category}
    </Link>
  );
}

function ArticleLink({
  article,
  children,
  className,
}: {
  article: Article;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      to={`${article.categoryHref}/$slug`}
      params={{ slug: article.slug }}
      className={className}
    >
      {children}
    </Link>
  );
}

function SectionTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <h2 className={`section-title flex-1 ${className}`}>{children}</h2>;
}

function Home() {
  const all = articles;

  // ---- Destaques ----
  const destaqueTabs = ["All", "Segurança", "Criptografia", "Privacidade"] as const;
  const [destaqueTab, setDestaqueTab] = useState<(typeof destaqueTabs)[number]>("All");
  const destaquePool = useMemo(
    () => (destaqueTab === "All" ? all : articlesByCategory(destaqueTab)),
    [destaqueTab, all],
  );
  const featured = destaquePool[0] ?? all[0];
  const destaquesSide = destaquePool.filter((a) => a.slug !== featured.slug).slice(0, 3);

  // ---- Tendência ----
  const tendencias = useMemo(
    () =>
      CATEGORIES.map((c) => articlesByCategory(c)[0]).filter(Boolean).slice(0, 4) as Article[],
    [],
  );

  // ---- Populares (independent tabs) ----
  const popTabs = ["All", "Segurança", "Pagamentos", "Ferramentas"] as const;
  const [popTab, setPopTab] = useState<(typeof popTabs)[number]>("All");
  const popularesPool = useMemo(() => {
    const pool = popTab === "All" ? all : articlesByCategory(popTab);
    return pool.slice(0, 5);
  }, [popTab, all]);

  const novidades = all.slice(9, 15);
  const catCounts = Object.fromEntries(
    CATEGORIES.map((c) => [c, articlesByCategory(c).length]),
  ) as Record<string, number>;

  return (
    <div className="bg-background">
      {/* DESTAQUES */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr_1fr] gap-6">
          {/* Left: title + tabs + featured */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <SectionTitle>Destaques</SectionTitle>
            </div>
            <article className="relative rounded-lg overflow-hidden aspect-[4/3] text-white group">
              <ArticleLink article={featured} className="block absolute inset-0">
                <img src={featured.cover} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </ArticleLink>
              <div className="absolute top-4 left-4 z-10">
                <CategoryBadge category={featured.category} />
              </div>
              <div className="absolute bottom-5 left-5 right-5 pointer-events-none">
                <div className="flex items-center gap-1 text-xs mb-2 opacity-90">
                  <Calendar className="w-3 h-3" />
                  {featured.date}
                </div>
                <ArticleLink article={featured} className="pointer-events-auto">
                  <h3 className="text-2xl font-bold leading-tight hover:text-primary">{featured.title}</h3>
                </ArticleLink>
              </div>
            </article>
          </div>

          {/* Middle: tabs + side articles */}
          <div>
            <div className="flex items-center gap-2 mb-6 text-sm flex-wrap justify-end">
              {destaqueTabs.map((t) => (
                <button
                  key={t}
                  onClick={() => setDestaqueTab(t)}
                  className={`px-2 py-1.5 transition ${
                    destaqueTab === t
                      ? "text-foreground font-semibold border-b-2 border-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="space-y-4">
              {destaquesSide.map((a) => (
                <article key={a.slug} className="flex gap-4 items-center pb-4 border-b border-border/40 last:border-0">
                  <ArticleLink article={a} className="shrink-0">
                    <img src={a.cover} alt={a.title} className="w-24 h-24 rounded object-cover" />
                  </ArticleLink>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <CategoryBadge category={a.category} />
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {a.date}
                      </span>
                    </div>
                    <ArticleLink article={a}>
                      <h4 className="font-semibold leading-snug text-sm hover:text-primary">{a.title}</h4>
                    </ArticleLink>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Right sidebar: Categorias */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <SectionTitle>Categorias</SectionTitle>
            </div>
            <div className="flex flex-col gap-3">
              {CATEGORIES.map((c) => {
                const first = articlesByCategory(c)[0];
                return (
                  <Link
                    key={c}
                    to={hrefFor(c)}
                    className="relative rounded-lg overflow-hidden h-20 text-white flex items-center group"
                  >
                    {first ? (
                      <img src={first.cover} alt={c} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900" />
                    )}
                    <div className="absolute inset-0 bg-black/50" />
                    <span className="cat-badge !bg-black/40 !text-white absolute left-3 z-10 backdrop-blur-sm">{c}</span>
                    <span className="text-2xl font-extrabold text-white/80 absolute right-4 z-10">
                      {String(catCounts[c] ?? 0).padStart(2, "0")}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* PRIVACIDADE & SEGURANCA + SOCIAIS */}
      <section className="bg-muted/40 py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-[1fr_1fr_320px] gap-8">
          {(["Privacidade", "Segurança"] as const).map((cat) => {
            const a = articlesByCategory(cat)[1] ?? articlesByCategory(cat)[0];
            if (!a) return null;
            return (
              <div key={cat}>
                <div className="flex items-center gap-4 mb-6">
                  <SectionTitle className="!text-xl">{cat}</SectionTitle>
                  <Link to={hrefFor(cat)} className="text-sm text-primary font-semibold hover:underline shrink-0">
                    Ver todos
                  </Link>
                </div>
                <article className="bg-card rounded-lg overflow-hidden border border-border/60 group">
                  <ArticleLink article={a}>
                    <div className="aspect-[16/10] overflow-hidden">
                      <img src={a.cover} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                    </div>
                  </ArticleLink>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <CategoryBadge category={a.category} />
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {a.date}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {a.readMinutes} min
                      </span>
                    </div>
                    <ArticleLink article={a}>
                      <h4 className="font-bold leading-snug hover:text-primary">{a.title}</h4>
                    </ArticleLink>
                  </div>
                </article>
              </div>
            );
          })}

          <div>
            <div className="flex items-center gap-4 mb-6">
              <SectionTitle className="!text-xl">Redes Sociais</SectionTitle>
            </div>
            <ul className="space-y-3 mb-4">
              {[
                { icon: Facebook, color: "#3b5998", n: "15000 Curtidas", action: "Like" },
                { icon: Twitter, color: "#1da1f2", n: "15000 Curtidas", action: "Tweet" },
                { icon: Youtube, color: "#ff0000", n: "5k Seguidores", action: "Seguir" },
                { icon: Mail, color: "#ee4d5e", n: "15000 Inscritos", action: "Inscrever" },
              ].map((s, i) => (
                <li key={i} className="flex items-center gap-3 bg-card border border-border/60 rounded p-3">
                  <span
                    className="w-9 h-9 grid place-items-center rounded text-white"
                    style={{ backgroundColor: s.color }}
                  >
                    <s.icon className="w-4 h-4" />
                  </span>
                  <span className="text-sm font-semibold flex-1">{s.n}</span>
                  <span className="text-xs text-muted-foreground">{s.action}</span>
                </li>
              ))}
            </ul>
            <div className="relative rounded-lg overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 text-white p-5 text-center">
              <p className="text-sm mb-3 opacity-90">Crie seu site</p>
              <a href="https://danielolimpio.com/" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-primary-foreground font-semibold px-5 py-2 rounded text-sm hover:bg-primary/90">
                Saber Mais
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TENDENCIA EM ALTA */}
      <section className="bg-footer text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <SectionTitle className="text-white">Tendência Em Alta</SectionTitle>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tendencias.map((a) => (
              <article key={a.slug} className="group">
                <ArticleLink article={a}>
                  <div className="aspect-[4/3] rounded overflow-hidden mb-3">
                    <img src={a.cover} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  </div>
                </ArticleLink>
                <div className="flex items-center gap-2 mb-2">
                  <CategoryBadge category={a.category} />
                  <span className="flex items-center gap-1 text-xs text-white/70">
                    <Calendar className="w-3 h-3" />
                    {a.date}
                  </span>
                </div>
                <ArticleLink article={a}>
                  <h4 className="font-bold text-sm leading-snug hover:text-primary">{a.title}</h4>
                </ArticleLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* POPULARES */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <SectionTitle>Populares</SectionTitle>
          <div className="flex gap-3 text-sm shrink-0">
            {popTabs.map((t) => (
              <button
                key={t}
                onClick={() => setPopTab(t)}
                className={`px-2 py-1.5 transition ${
                  popTab === t
                    ? "text-foreground font-semibold border-b-2 border-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {popularesPool.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr_1fr] gap-6">
            <div className="space-y-6">
              {[popularesPool[0], popularesPool[1]].filter(Boolean).map((a) => (
                <article key={a.slug} className="group">
                  <ArticleLink article={a}>
                    <div className="aspect-[4/3] rounded overflow-hidden mb-3">
                      <img src={a.cover} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                    </div>
                  </ArticleLink>
                  <div className="flex items-center gap-2 mb-2">
                    <CategoryBadge category={a.category} />
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {a.date}
                    </span>
                  </div>
                  <ArticleLink article={a}>
                    <h4 className="font-bold leading-snug hover:text-primary">{a.title}</h4>
                  </ArticleLink>
                </article>
              ))}
            </div>

            {popularesPool[2] && (
              <article className="group">
                <ArticleLink article={popularesPool[2]}>
                  <div className="aspect-[5/4] rounded overflow-hidden">
                    <img src={popularesPool[2].cover} alt={popularesPool[2].title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  </div>
                </ArticleLink>
                <div className="p-4">
                  <CategoryBadge category={popularesPool[2].category} />
                  <ArticleLink article={popularesPool[2]}>
                    <h4 className="font-bold text-xl mt-3 leading-snug hover:text-primary">{popularesPool[2].title}</h4>
                  </ArticleLink>
                </div>
              </article>
            )}

            <div className="space-y-6">
              {[popularesPool[3], popularesPool[4]].filter(Boolean).map((a) => (
                <article key={a.slug} className="group">
                  <ArticleLink article={a}>
                    <div className="aspect-[4/3] rounded overflow-hidden mb-3">
                      <img src={a.cover} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                    </div>
                  </ArticleLink>
                  <div className="flex items-center gap-2 mb-2">
                    <CategoryBadge category={a.category} />
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {a.date}
                    </span>
                  </div>
                  <ArticleLink article={a}>
                    <h4 className="font-bold leading-snug hover:text-primary">{a.title}</h4>
                  </ArticleLink>
                </article>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* NOVIDADES */}
      <section className="bg-muted/30 py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <SectionTitle>Novidades</SectionTitle>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {novidades.map((a) => {
                const firstP = a.blocks.find((b) => b.type === "p") as { text: string } | undefined;
                return (
                  <article key={a.slug} className="bg-card rounded-lg overflow-hidden border border-border/60 group hover:shadow-lg transition">
                    <ArticleLink article={a}>
                      <div className="aspect-[640/400] overflow-hidden">
                        <img src={a.cover} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                      </div>
                    </ArticleLink>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <CategoryBadge category={a.category} />
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          {a.date}
                        </span>
                      </div>
                      <ArticleLink article={a}>
                        <h4 className="font-bold leading-snug mb-2 hover:text-primary">{a.title}</h4>
                      </ArticleLink>
                      <p className="text-sm text-muted-foreground line-clamp-3">{firstP?.text}</p>
                      <ArticleLink article={a} className="inline-flex items-center gap-1 mt-3 text-sm text-primary font-semibold hover:gap-2 transition-all">
                        Ler mais <ArrowRight className="w-4 h-4" />
                      </ArticleLink>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-10 relative rounded-lg overflow-hidden bg-gradient-to-r from-slate-900 to-slate-700 text-white p-10 flex items-center justify-between">
              <div>
                <h3 className="text-3xl font-extrabold italic">Desenvolvedor Web</h3>
                <p className="text-sm opacity-90 mt-1">Full Stack Development | UI/UX Design | Brand Identity</p>
              </div>
              <a
                href="https://danielolimpio.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded"
              >
                Saber Mais
              </a>
            </div>
          </div>

          <aside className="space-y-8">
            <div>
              <div className="inline-block cat-badge mb-4">Sobre Mim</div>
              <div className="h-px bg-primary -mt-1 mb-6" />
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={author.photo}
                  alt={author.name}
                  className="w-16 h-16 rounded-full object-cover shrink-0"
                />
                <div>
                  <h4 className="font-bold">{author.name}</h4>
                  <p className="text-sm text-muted-foreground">{author.role}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {author.shortBio}
              </p>
              <AuthorSocials className="mb-4" />
              <Link
                to="/sobre"
                className="inline-block bg-primary text-primary-foreground font-semibold px-5 py-2.5 rounded text-sm hover:bg-primary/90"
              >
                Saber Mais
              </Link>
            </div>

            <div>
              <div className="inline-block cat-badge mb-4">Últimos Posts</div>
              <div className="h-px bg-primary -mt-1 mb-6" />
              <ul className="space-y-5">
                {articles.slice(0, 8).map((a) => (
                  <li key={a.slug}>
                    <Link
                      to={`${a.categoryHref}/$slug`}
                      params={{ slug: a.slug }}
                      className="flex gap-3 group"
                    >
                      <img src={a.cover} alt={a.title} className="w-20 h-16 shrink-0 rounded object-cover" />
                      <div className="text-sm">
                        <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
                          <Calendar className="w-3 h-3" /> {a.date}
                        </div>
                        <p className="font-semibold leading-snug group-hover:text-primary">{a.title}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-footer text-footer-foreground rounded-lg p-6 text-center">
              <img src={logo} alt="Cebolla" className="h-8 mx-auto brightness-0 invert mb-4" />
              <p className="text-sm text-footer-muted leading-relaxed mb-5">
                Loja com serviços confiáveis de segurança online para proteger dados e negócios hoje
              </p>
              <a
                href="https://danielolimpio.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-primary-foreground font-semibold px-6 py-2.5 rounded text-sm w-full hover:bg-primary/90"
              >
                Saber Mais
              </a>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
