import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Wallet, RefreshCw, ClipboardList, Users } from "lucide-react";

export const Route = createFileRoute("/sobre")({
  head: () => ({ meta: [{ title: "Sobre — Cebolla.app" }, { name: "description", content: "Cebolla.app nasceu para proteger sua identidade digital em um mundo de vigilância constante." }] }),
  component: Sobre,
});

const features = [
  { icon: Wallet, title: "Encript Avançada", text: "Algoritmos de encriptação avançada para proteger informações sensíveis e comunicações." },
  { icon: RefreshCw, title: "Segurança Financeira", text: "Proteja transações com autenticação de dois fatores e monitoramento em tempo real." },
  { icon: ClipboardList, title: "Proteção De Dados", text: "Garanta privacidade com criptografia de ponta e políticas rigorosas de segurança." },
  { icon: Users, title: "Navegação Anônima", text: "Proteja sua identidade com TOR e VPNs para navegar sem deixar rastros digitais na internet." },
];

function Sobre() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Página" }, { label: "Sobre" }]} />
      <div className="container mx-auto px-4 py-12">
        <div className="aspect-[16/8] rounded-lg overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 grid place-items-center mb-12">
          <div className="w-32 h-32 rounded-2xl bg-primary/20 border-2 border-primary grid place-items-center">
            <div className="w-16 h-16 rounded-lg bg-primary" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-14">
          <div>
            <h2 className="text-2xl font-bold mb-4">Sobre</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cebolla.app nasceu da necessidade urgente de proteger sua identidade digital em um mundo de vigilância constante. Desvendamos camadas de privacidade para você navegar livremente, sem rastros indesejados ou exposição desnecessária de seus dados pessoais.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Missão & Visão</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nossa missão é democratizar o acesso à privacidade digital com ferramentas práticas e educação acessível. Visamos um futuro onde cada pessoa controle seus dados, escolha seu nível de anonimato e navegue na internet sem medo de vigilância ou exploração comercial.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {features.map((f, i) => (
            <div key={i} className="bg-card border border-border/60 rounded-lg p-8 text-center">
              <div className="w-14 h-14 mx-auto mb-5 grid place-items-center rounded-full bg-primary/10 text-primary">
                <f.icon className="w-7 h-7" />
              </div>
              <h3 className="font-bold mb-3">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="aspect-[16/10] bg-gradient-to-br from-teal-900 to-slate-900 rounded-lg" />
          <div>
            <h2 className="text-3xl font-bold mb-6">Segurança Que Você Confia</h2>
            <div className="flex gap-2 mb-6">
              <button className="bg-primary text-primary-foreground font-semibold px-5 py-2.5 rounded text-sm">Privacidade</button>
              <button className="bg-muted text-muted-foreground font-semibold px-5 py-2.5 rounded text-sm">Transparência</button>
              <button className="bg-muted text-muted-foreground font-semibold px-5 py-2.5 rounded text-sm">Segurança</button>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Protegemos sua identidade digital com criptografia de ponta e ferramentas de anonimato. Navegue sem rastros, evite vigilância corporativa e mantenha seus dados pessoais longe de terceiros não autorizados em qualquer dispositivo conectado.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
