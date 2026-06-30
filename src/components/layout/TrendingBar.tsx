import { ChevronLeft, ChevronRight, Zap, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export function TrendingBar() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-trending-from to-trending-to text-white">
      <div className="absolute inset-0 opacity-20 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 10% 50%, rgba(255,255,255,.4) 1px, transparent 1px), radial-gradient(circle at 90% 30%, rgba(255,255,255,.3) 1px, transparent 1px)", backgroundSize: "40px 40px, 60px 60px" }} />
      <div className="container mx-auto px-4 py-2.5 flex items-center gap-4 relative">
        <div className="flex items-center gap-2">
          <button className="w-7 h-7 rounded bg-white/10 hover:bg-white/20 grid place-items-center" aria-label="Anterior"><ChevronLeft className="w-4 h-4" /></button>
          <button className="w-7 h-7 rounded bg-white/10 hover:bg-white/20 grid place-items-center" aria-label="Próximo"><ChevronRight className="w-4 h-4" /></button>
        </div>
        <div className="flex items-center gap-2 text-sm flex-1 min-w-0">
          <Zap className="w-4 h-4 fill-white shrink-0" />
          <span className="font-semibold underline underline-offset-2 shrink-0">Trending News:</span>
          <span className="truncate opacity-95">Navegação Anônima em Dispositivos Móveis Android e iOS.</span>
        </div>
        <div className="hidden md:flex items-center gap-3 text-white/90">
          <a href="#" aria-label="Facebook"><Facebook className="w-4 h-4" /></a>
          <a href="#" aria-label="Twitter"><Twitter className="w-4 h-4" /></a>
          <a href="#" aria-label="Instagram"><Instagram className="w-4 h-4" /></a>
          <a href="#" aria-label="LinkedIn"><Linkedin className="w-4 h-4" /></a>
          <a href="#" aria-label="YouTube"><Youtube className="w-4 h-4" /></a>
        </div>
        <button className="ml-2 bg-[#3a3aff] hover:bg-[#2d2de8] text-white text-sm font-semibold px-5 py-2 rounded">
          Inscreva-se
        </button>
      </div>
    </div>
  );
}
