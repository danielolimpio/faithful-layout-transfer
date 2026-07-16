import { Link } from "@tanstack/react-router";
import { Send, User, Mail, Calendar } from "lucide-react";
import { AuthorSocials } from "@/components/AuthorSocials";
import logo from "@/assets/cebolla-logo.png";
import { articles } from "@/data/articles";

const MONTHS: Record<string, number> = {
  janeiro: 0, fevereiro: 1, marco: 2, "março": 2, abril: 3, maio: 4, junho: 5,
  julho: 6, agosto: 7, setembro: 8, outubro: 9, novembro: 10, dezembro: 11,
};
function parseDate(d: string): number {
  const m = d.toLowerCase().replace(",", "").match(/(\d+)\s+([a-zç]+)\s+(\d{4})/);
  if (!m) return 0;
  return new Date(Number(m[3]), MONTHS[m[2]] ?? 0, Number(m[1])).getTime();
}
const recentPosts = [...articles].sort((a, b) => parseDate(b.date) - parseDate(a.date)).slice(0, 2);


const cats1 = [
  { to: "/privacidade", label: "Privacidade" },
  { to: "/criptografia", label: "Criptografia" },
  { to: "/seguranca", label: "Segurança" },
  { to: "/pagamentos", label: "Pagamentos" },
  { to: "/ferramentas", label: "Ferramentas" },
];
const cats2 = [
  { to: "/", label: "Home" },
  { to: "/sobre", label: "Sobre" },
  { to: "/contato", label: "Contato" },
];

export function Footer() {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h4 className="text-lg font-bold mb-6 relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-16 after:h-[2px] after:bg-primary">Categorias</h4>
          <div className="grid grid-cols-2 gap-x-4 gap-y-3 mt-8 text-sm text-footer-muted">
            <ul className="space-y-3">
              {cats1.map((c) => (
                <li key={c.to}><Link to={c.to} className="hover:text-primary">{c.label}</Link></li>
              ))}
            </ul>
            <ul className="space-y-3">
              {cats2.map((c) => (
                <li key={c.to}><Link to={c.to} className="hover:text-primary">{c.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-16 after:h-[2px] after:bg-primary">Newsletter</h4>
          <form className="mt-8 space-y-3">
            <div className="relative">
              <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-footer-muted" />
              <input className="w-full bg-white/5 border border-white/10 rounded pl-9 pr-3 py-3 text-sm placeholder:text-footer-muted focus:outline-none focus:border-primary" placeholder="Seu Nome" />
            </div>
            <div className="relative">
              <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-footer-muted" />
              <input className="w-full bg-white/5 border border-white/10 rounded pl-9 pr-3 py-3 text-sm placeholder:text-footer-muted focus:outline-none focus:border-primary" placeholder="Seu Melhor E-mail" />
            </div>
            <button type="button" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded flex items-center justify-center gap-2 text-sm">
              <Send className="w-4 h-4" /> Inscreva-se Agora
            </button>
          </form>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-16 after:h-[2px] after:bg-primary">Posts Recentes</h4>
          <ul className="mt-8 space-y-5">
            {recentPosts.map((p) => (
              <li key={p.slug}>
                <Link
                  to={`${p.categoryHref}/$slug`}
                  params={{ slug: p.slug }}
                  className="flex gap-3 group"
                >
                  <img
                    src={p.cover}
                    alt={p.title}
                    className="w-20 h-16 shrink-0 rounded object-cover"
                  />
                  <div className="text-sm">
                    <div className="flex items-center gap-1 text-xs text-footer-muted mb-1">
                      <Calendar className="w-3 h-3" /> {p.date}
                    </div>
                    <p className="font-semibold leading-snug group-hover:text-primary">
                      {p.title}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

        </div>

        <div>
          <img src={logo} alt="Cebolla" className="h-9 w-auto brightness-0 invert mb-6" />
          <p className="text-sm text-footer-muted leading-relaxed mb-6">
            Proteja seus dados e navegue com tranquilidade: descubra práticas de privacidade digital, evite ameaças online e fortaleça sua segurança em cada acesso diário seguro.
          </p>
          <div className="flex gap-2">
            <a href="#" className="w-10 h-10 grid place-items-center rounded bg-[#3b5998] hover:opacity-90"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="w-10 h-10 grid place-items-center rounded bg-[#1da1f2] hover:opacity-90"><Twitter className="w-4 h-4" /></a>
            <a href="#" className="w-10 h-10 grid place-items-center rounded bg-[#1769ff] hover:opacity-90 text-xs font-bold">Bē</a>
            <a href="#" className="w-10 h-10 grid place-items-center rounded bg-[#ff0000] hover:opacity-90"><Youtube className="w-4 h-4" /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-footer-muted">
          <p>© Copyright 2026 | Cebolla.app | Todos direitos reservados | <span className="text-footer-foreground font-semibold">Desenvolvido por DanielOlímpio</span></p>
          <div className="flex gap-6">
            <Link to="/privacidade-politica" className="hover:text-primary">Política de Privacidade</Link>
            <Link to="/cookies" className="hover:text-primary">Política de Cookies</Link>
            <Link to="/termos" className="hover:text-primary">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
