import { Facebook, Twitter, Instagram, Youtube, Linkedin, Calendar } from "lucide-react";
import logo from "@/assets/cebolla-logo.png";

export function Sidebar() {
  return (
    <aside className="space-y-8">
      <div>
        <div className="inline-block cat-badge mb-4">Sobre Mim</div>
        <div className="h-px bg-primary -mt-1 mb-6" />
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-full bg-muted overflow-hidden shrink-0 grid place-items-center text-muted-foreground text-xs">DO</div>
          <div>
            <h4 className="font-bold">Daniel Olímpio</h4>
            <p className="text-sm text-muted-foreground">Desenvolvedor Web</p>
            <div className="flex gap-2 mt-1 text-muted-foreground">
              <a href="#"><Facebook className="w-3.5 h-3.5" /></a>
              <a href="#"><Twitter className="w-3.5 h-3.5" /></a>
              <a href="#"><Instagram className="w-3.5 h-3.5" /></a>
              <a href="#"><Youtube className="w-3.5 h-3.5" /></a>
              <a href="#"><Linkedin className="w-3.5 h-3.5" /></a>
            </div>
          </div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Com mais de 20 anos de atuação no mercado digital, sou especializado em desenvolvimento web e design, unindo performance, usabilidade e identidade visual em cada projeto.
        </p>
        <button className="bg-primary text-primary-foreground font-semibold px-5 py-2.5 rounded text-sm hover:bg-primary/90">Saber Mais</button>
      </div>

      <div>
        <div className="inline-block cat-badge mb-4">Últimos Posts</div>
        <div className="h-px bg-primary -mt-1 mb-6" />
        <ul className="space-y-5">
          {[
            "Time Flies In Google Earth's Biggest Update In",
            "3 Ways To Find And Support Eco-Friendly",
            "How We're Minimizing AI's Carbon Footprint",
            "Your Chromebook Gets A Little More Helpful",
          ].map((t, i) => (
            <li key={i} className="flex gap-3">
              <div className="w-20 h-16 bg-muted shrink-0 rounded grid place-items-center text-[10px] text-muted-foreground">160x160</div>
              <div className="text-sm">
                <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1"><Calendar className="w-3 h-3" /> 10 Fevereiro 2026</div>
                <p className="font-semibold leading-snug">{t}</p>
              </div>
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
