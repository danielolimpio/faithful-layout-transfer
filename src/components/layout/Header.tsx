import { Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import logo from "@/assets/cebolla-logo.png";
import { TrendingBar } from "./TrendingBar";

const nav = [
  { to: "/", label: "Home" },
  { to: "/sobre", label: "Sobre" },
  { to: "/privacidade", label: "Privacidade" },
  { to: "/criptografia", label: "Criptografia" },
  { to: "/seguranca", label: "Segurança" },
  { to: "/pagamentos", label: "Pagamentos" },
  { to: "/ferramentas", label: "Ferramentas" },
  { to: "/contato", label: "Contato" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-background">
      <TrendingBar />
      <div className="border-b border-border bg-background">
        <div className="container mx-auto px-4 flex items-center gap-6 py-4">
          <Link to="/" className="shrink-0">
            <img src={logo} alt="Cebolla" className="h-9 w-auto" />
          </Link>
          <nav className="hidden lg:flex items-center gap-8 mx-auto text-[15px] font-medium">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                className="text-foreground/80 hover:text-primary transition-colors [&.active]:text-primary"
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <button aria-label="Buscar" className="ml-auto lg:ml-0 text-foreground/70 hover:text-primary">
            <Search className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
