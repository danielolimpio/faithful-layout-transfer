import { createFileRoute } from "@tanstack/react-router";
import { Calendar, Play, Facebook, Twitter, Youtube, Mail } from "lucide-react";
import logo from "@/assets/cebolla-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cebolla.app — Privacidade e Segurança Digital" },
      { name: "description", content: "Notícias e guias sobre privacidade, criptografia, segurança, pagamentos e ferramentas anti-vigilância." },
    ],
  }),
  component: Home,
});

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="section-title mb-8">{children}</h2>;
}

const destaques = [
  { t: "Navegação Totalmente Anônima Em Rede Pública.", date: "16 Fevereiro 2026", cat: "Privacidade" },
  { t: "Ferramentas Para Navegação Anônima De Jornalistas.", date: "16 Fevereiro 2026", cat: "Privacidade" },
  { t: "Como Proteger Navegação Anônima De DNS Leaks.", date: "1/1 Outubro 2026", cat: "Privacidade" },
];

const categoriasGrid = [
  { label: "Privacidade", n: "02" },
  { label: "Criptografia", n: "04" },
  { label: "Segurança", n: "01" },
  { label: "Pagamentos", n: "02" },
  { label: "Ferramentas", n: "06" },
];

const tendencias = [
  { cat: "Segurança", t: "PIX Segurança Como Evitar Golpes Em Transações" },
  { cat: "Pagamentos", t: "Cartão Virtual Para Compras Online Mais Seguras" },
  { cat: "Ferramentas", t: "Verifique Se Seus Dados Pessoais Vazaram Na Web" },
  { cat: "Privacidade", t: "VPN Grátis Que Protege Sua Privacidade Online" },
];

const novidades = Array.from({ length: 6 }).map((_, i) => ({
  cat: i === 5 ? "Privacidade" : "Tecnologia",
  date: "10 Fevereiro 2026",
  t: [
    "Trash To Treasure: How Google Thinks About",
    "Finding The Intersection Of Social Justice And Tech",
    "Five Ways We're Making Google The Safer Way To",
    "Bringing Digital Skills To Previously Incarcerated",
    "When Artists And Machine Intelligence Come Together",
    "AI Assists Doctors In Interpreting Skin Conditions",
  ][i],
}));

function Home() {
  return (
    <div className="bg-background">
      {/* DESTAQUES */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <h2 className="section-title flex-1 !flex-none">Destaques</h2>
          <div className="flex gap-2 text-sm">
            {["All", "Segurança", "Criptografia", "Privacidade", "Categorias"].map((t, i) => (
              <button key={t} className={`px-3 py-1.5 rounded ${i===4 ? "text-primary font-semibold" : "text-muted-foreground hover:text-primary"}`}>{t}</button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr_1fr] gap-6">
          {/* Featured */}
          <article className="relative rounded-lg overflow-hidden bg-slate-800 aspect-[4/3] text-white">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <span className="absolute top-4 left-4 cat-badge !text-white !bg-primary">Privacidade</span>
            <div className="absolute bottom-5 left-5 right-5">
              <div className="flex items-center gap-1 text-xs mb-2 opacity-90"><Calendar className="w-3 h-3" />15 Fevereiro 2026</div>
              <h3 className="text-2xl font-bold leading-tight">Tor Browser Navegar Anonimamente Sem Rastros.</h3>
            </div>
          </article>

          {/* Side articles */}
          <div className="space-y-4">
            {destaques.map((d, i) => (
              <article key={i} className="flex gap-4 items-center">
                <div className="w-24 h-24 bg-muted rounded shrink-0" />
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="cat-badge">{d.cat}</span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground"><Calendar className="w-3 h-3" />{d.date}</span>
                  </div>
                  <h4 className="font-semibold leading-snug text-sm hover:text-primary cursor-pointer">{d.t}</h4>
                </div>
              </article>
            ))}
          </div>

          {/* Categories grid */}
          <div className="grid grid-cols-2 gap-3">
            {categoriasGrid.map((c) => (
              <div key={c.label} className="relative rounded-lg overflow-hidden aspect-square bg-gradient-to-br from-slate-700 to-slate-900 text-white grid place-items-center">
                <span className="cat-badge !bg-primary !text-white absolute top-2 left-2 text-[10px]">{c.label}</span>
                <span className="text-3xl font-extrabold opacity-30 absolute bottom-2 right-3">{c.n}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRIVACIDADE & SEGURANCA + SOCIAIS */}
      <section className="bg-muted/40 py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-[1fr_1fr_320px] gap-8">
          {["Privacidade", "Segurança"].map((cat) => (
            <div key={cat}>
              <h3 className="section-title mb-6 text-xl">{cat}</h3>
              <article className="bg-card rounded-lg overflow-hidden border border-border/60">
                <div className="aspect-[16/10] bg-muted" />
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="cat-badge">{cat}</span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground"><Calendar className="w-3 h-3" />1/1 outubro 2026</span>
                  </div>
                  <h4 className="font-bold leading-snug hover:text-primary cursor-pointer">
                    {cat === "Privacidade" ? "Navegação Anônima Em Dispositivos Móveis Android E IOS." : "Comunicação Segura Para Casais Protegendo Sua Privacidade."}
                  </h4>
                </div>
              </article>
            </div>
          ))}

          <div>
            <h3 className="section-title mb-6 text-xl">Redes Sociais</h3>
            <ul className="space-y-3 mb-4">
              {[
                { icon: Facebook, color: "#3b5998", n: "15000 Curtidas", action: "Like" },
                { icon: Twitter, color: "#1da1f2", n: "15000 Curtidas", action: "Tweet" },
                { icon: Youtube, color: "#ff0000", n: "5k Seguidores", action: "Seguir" },
                { icon: Mail, color: "#ee4d5e", n: "15000 Inscritos", action: "Inscrever" },
              ].map((s, i) => (
                <li key={i} className="flex items-center gap-3 bg-card border border-border/60 rounded p-3">
                  <span className="w-9 h-9 grid place-items-center rounded text-white" style={{ backgroundColor: s.color }}><s.icon className="w-4 h-4" /></span>
                  <span className="text-sm font-semibold flex-1">{s.n}</span>
                  <span className="text-xs text-muted-foreground">{s.action}</span>
                </li>
              ))}
            </ul>
            <div className="relative rounded-lg overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 text-white p-5 text-center">
              <p className="text-sm mb-3 opacity-90">Crie seu site</p>
              <button className="bg-primary text-primary-foreground font-semibold px-5 py-2 rounded text-sm">Saber Mais</button>
            </div>
          </div>
        </div>
      </section>

      {/* TENDENCIA EM ALTA */}
      <section className="bg-footer text-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-8 text-white">Tendência Em Alta</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tendencias.map((t, i) => (
              <article key={i}>
                <div className="aspect-[4/3] bg-white/10 rounded mb-3" />
                <div className="flex items-center gap-2 mb-2">
                  <span className="cat-badge !bg-primary/20 !text-primary">{t.cat}</span>
                  <span className="flex items-center gap-1 text-xs text-white/70"><Calendar className="w-3 h-3" />1/1 outubro 2026</span>
                </div>
                <h4 className="font-bold text-sm leading-snug hover:text-primary cursor-pointer">{t.t}</h4>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* POPULARES */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <h2 className="section-title flex-1 !flex-none">Populares</h2>
          <div className="flex gap-3 text-sm">
            {["All", "Segurança", "Pagamentos", "Ferramentas"].map((t) => (
              <button key={t} className="text-muted-foreground hover:text-primary">{t}</button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr_1fr] gap-6">
          <div className="space-y-6">
            {[
              { cat: "Privacidade", t: "Navegação Anônima O Que Realmente Funciona Hoje" },
              { cat: "Segurança", t: "Ransomware Como Evitar E Recuperar Seus Dados" },
            ].map((a, i) => (
              <article key={i}>
                <div className="aspect-[4/3] bg-muted rounded mb-3" />
                <div className="flex items-center gap-2 mb-2">
                  <span className="cat-badge">{a.cat}</span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground"><Calendar className="w-3 h-3" />2/1 Fevereiro 2026</span>
                </div>
                <h4 className="font-bold leading-snug">{a.t}</h4>
              </article>
            ))}
          </div>

          <article className="relative">
            <div className="aspect-[5/4] bg-muted rounded" />
            <div className="p-4">
              <span className="cat-badge">Ferramentas</span>
              <h4 className="font-bold text-xl mt-3 leading-snug">Gerenciador De Senhas Qual O Melhor Para Você.</h4>
            </div>
          </article>

          <div className="space-y-6">
            <article>
              <div className="aspect-[4/3] bg-muted rounded mb-3" />
              <div className="flex items-center gap-2 mb-2">
                <span className="cat-badge">Privacidade</span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground"><Calendar className="w-3 h-3" />2/1 Fevereiro 2026</span>
              </div>
              <h4 className="font-bold leading-snug">Excluir Dados Pessoais De Sites E Redes Sociais</h4>
            </article>
            <article>
              <div className="aspect-[4/3] bg-muted rounded mb-3 grid place-items-center">
                <Play className="w-12 h-12 text-white fill-white" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="cat-badge">Pagamentos</span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground"><Calendar className="w-3 h-3" />10 Fevereiro 7029</span>
              </div>
              <h4 className="font-bold leading-snug">New Resources On The Gender Gap In Computer Science</h4>
            </article>
          </div>
        </div>
      </section>

      {/* NOVIDADES */}
      <section className="bg-muted/30 py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10">
          <div>
            <h2 className="section-title mb-8">Novidades</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {novidades.map((n, i) => (
                <article key={i} className="bg-card rounded-lg overflow-hidden border border-border/60">
                  <div className="aspect-[640/400] bg-muted grid place-items-center text-muted-foreground font-semibold">640x400</div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="cat-badge">{n.cat}</span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground"><Calendar className="w-3 h-3" />{n.date}</span>
                    </div>
                    <h4 className="font-bold leading-snug mb-2 hover:text-primary cursor-pointer">{n.t}</h4>
                    <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 relative rounded-lg overflow-hidden bg-gradient-to-r from-slate-900 to-slate-700 text-white p-10 flex items-center justify-between">
              <div>
                <h3 className="text-3xl font-extrabold italic">Desenvolvedor Web</h3>
                <p className="text-sm opacity-90 mt-1">Full Stack Development | UI/UX Design | Brand Indentity</p>
              </div>
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded">Saber Mais</button>
            </div>
          </div>

          <aside className="space-y-8">
            <div>
              <div className="inline-block cat-badge mb-4">Sobre Mim</div>
              <div className="h-px bg-primary -mt-1 mb-6" />
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-muted shrink-0" />
                <div>
                  <h4 className="font-bold">Daniel Olímpio</h4>
                  <p className="text-sm text-muted-foreground">Desenvolvedor Web</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Com mais de 20 anos de atuação no mercado digital, sou especializado em desenvolvimento web e design, unindo performance, usabilidade e identidade visual em cada projeto.
              </p>
              <button className="bg-primary text-primary-foreground font-semibold px-5 py-2.5 rounded text-sm">Saber Mais</button>
            </div>
            <div className="bg-footer text-footer-foreground rounded-lg p-6 text-center">
              <img src={logo} alt="Cebolla" className="h-8 mx-auto brightness-0 invert mb-4" />
              <p className="text-sm text-footer-muted leading-relaxed mb-5">
                Loja com serviços confiáveis de segurança online para proteger dados e negócios hoje
              </p>
              <button className="bg-primary text-primary-foreground font-semibold px-6 py-2.5 rounded text-sm w-full">Comprar Agora</button>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
