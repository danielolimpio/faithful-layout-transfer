import { Link } from "@tanstack/react-router";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Sidebar } from "@/components/layout/Sidebar";
import { articlesByCategory } from "@/data/articles";

export function CategoryPage({ category }: { category: string }) {
  const posts = articlesByCategory(category);
  return (
    <div className="bg-muted/30 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10">
        <div>
          <h1 className="section-title mb-10">{category}</h1>

          {posts.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border p-12 text-center text-muted-foreground">
              Em breve novos artigos nesta categoria.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {posts.map((a) => (
                <article
                  key={a.slug}
                  className="group bg-card rounded-2xl overflow-hidden border border-border/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
                >
                  <Link to={`${a.categoryHref}/$slug`} params={{ slug: a.slug }}>
                    <div className="aspect-[640/400] overflow-hidden">
                      <img
                        src={a.cover}
                        alt={a.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                    </div>
                  </Link>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="cat-badge">{a.category}</span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" /> {a.date}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" /> {a.readMinutes} min
                      </span>
                    </div>
                    <Link to={`${a.categoryHref}/$slug`} params={{ slug: a.slug }}>
                      <h3 className="font-bold text-lg leading-snug mb-3 group-hover:text-primary">
                        {a.title}
                      </h3>
                    </Link>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {(a.blocks.find((b) => b.type === "p") as { text: string } | undefined)?.text}
                    </p>
                    <Link
                      to={`${a.categoryHref}/$slug`}
                      params={{ slug: a.slug }}
                      className="inline-flex items-center gap-1 mt-4 text-sm text-primary font-semibold hover:gap-2 transition-all"
                    >
                      Ler artigo completo <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}

          <div className="mt-12 relative rounded-2xl overflow-hidden bg-gradient-to-r from-slate-900 to-slate-700 text-white p-10 flex items-center justify-between shadow-lg">
            <div>
              <h3 className="text-3xl font-extrabold italic">Desenvolvedor Web</h3>
              <p className="text-sm opacity-90 mt-1">
                Full Stack Development | UI/UX Design | Brand Identity
              </p>
            </div>
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded">
              Saber Mais
            </button>
          </div>
        </div>
        <Sidebar />
      </div>
    </div>
  );
}
