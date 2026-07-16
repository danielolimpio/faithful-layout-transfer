import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { User, Mail, ChevronDown, Pencil, Send } from "lucide-react";

export const Route = createFileRoute("/contato")({
  head: () => ({ meta: [{ title: "Contato — Cebolla.app" }, { name: "description", content: "Entre em contato com Cebolla.app. Atendimento por e-mail, telefone e formulário." }] }),
  component: Contato,
});

const offices = [
  { title: "Escritório Corporativo", addr: "AV. Julia Freire, 1200 - João Pessoa", phone: "+55 12 98251-9116", email: "corporativo@cebolla.app" },
  { title: "Sede Principal", addr: "Rod. Ver. Abel Fabricio Dias, 2240", phone: "+11 99736-1698", email: "contato@cebolla.app" },
  { title: "Anunciar", addr: "AV. Julia Freire, 1200 - João Pessoa", phone: "+11 99736-1698", email: "anunciar@cebolla.app" },
];

function Contato() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Página" }, { label: "Contato" }]} />
      <div className="container mx-auto px-4 py-12">
        <div className="bg-card rounded-lg border border-border/60 shadow-lg p-8 md:p-10">

          <h2 className="text-xl font-bold mb-6 border-b border-border pb-4">Entre Em Contato Conosco!</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <input className="w-full border border-border rounded px-4 py-3.5 text-sm focus:outline-none focus:border-primary" placeholder="Nome Completo" />
                <User className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              </div>
              <div className="relative">
                <input type="email" className="w-full border border-border rounded px-4 py-3.5 text-sm focus:outline-none focus:border-primary" placeholder="E-mail" />
                <Mail className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              </div>
              <div className="relative">
                <select className="w-full border border-border rounded px-4 py-3.5 text-sm focus:outline-none focus:border-primary bg-transparent appearance-none">
                  <option>Selecionar Assunto</option>
                  <option>Dúvida</option>
                  <option>Sugestão</option>
                  <option>Parceria</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
              </div>
            </div>
            <div className="relative">
              <textarea rows={8} className="w-full border border-border rounded px-4 py-3.5 text-sm focus:outline-none focus:border-primary resize-none" placeholder="Escreva a Mensagem" />
              <Pencil className="w-4 h-4 absolute right-3 top-4 text-muted-foreground" />
            </div>
            <div className="flex justify-center pt-2">
              <button type="button" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-3.5 rounded text-sm inline-flex items-center gap-2">
                <Send className="w-4 h-4" /> Enviar Solicitação
              </button>
            </div>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {offices.map((o) => (
            <div key={o.title} className="bg-card border border-border/60 rounded-lg p-7">
              <h3 className="font-bold mb-4 pb-4 border-b border-border">{o.title}</h3>
              <ul className="space-y-3 text-sm">
                <li><span className="font-semibold">Endereço:</span> <span className="text-muted-foreground">{o.addr}</span></li>
                <li><span className="font-semibold">Telefone:</span> <span className="text-muted-foreground">{o.phone}</span></li>
                <li><span className="font-semibold">E-mail:</span> <span className="text-muted-foreground">{o.email}</span></li>
              </ul>
              <button className="mt-6 w-full bg-muted hover:bg-muted/70 text-foreground font-semibold py-3 rounded text-sm">Entrar em Contato</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
