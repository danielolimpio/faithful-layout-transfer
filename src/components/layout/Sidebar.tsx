import { Link } from "@tanstack/react-router";
import { Calendar } from "lucide-react";
import logo from "@/assets/cebolla-logo.png";
import { articles } from "@/data/articles";
import { author } from "@/data/author";
import { AuthorSocials } from "@/components/AuthorSocials";

export function Sidebar() {
  return (
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
              <Link to={`${a.categoryHref}/$slug`} params={{ slug: a.slug }} className="flex gap-3 group">
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
        <button className="bg-primary text-primary-foreground font-semibold px-6 py-2.5 rounded text-sm hover:bg-primary/90 w-full">Comprar Agora</button>
      </div>
    </aside>
  );
}
