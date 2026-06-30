import { Calendar } from "lucide-react";
import { Sidebar } from "@/components/layout/Sidebar";

const articles = [
  { title: "Trash To Treasure: How Google Thinks About" },
  { title: "Finding The Intersection Of Social Justice And Tech" },
  { title: "Five Ways We're Making Google The Safer Way To" },
  { title: "Bringing Digital Skills To Previously Incarcerated" },
  { title: "When Artists And Machine Intelligence Come Together" },
  { title: "AI Assists Doctors In Interpreting Skin Conditions" },
];

export function CategoryPage({ category }: { category: string }) {
  return (
    <div className="bg-muted/30 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10">
        <div>
          <h1 className="section-title mb-10">{category}</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((a, i) => (
              <article key={i} className="bg-card rounded-lg overflow-hidden border border-border/60 shadow-sm hover:shadow-md transition">
                <div className="aspect-[640/400] bg-muted grid place-items-center text-muted-foreground font-semibold">640x400</div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="cat-badge">{category}</span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground"><Calendar className="w-3 h-3" />10 Fevereiro 2026</span>
                  </div>
                  <h3 className="font-bold text-lg leading-snug mb-3 hover:text-primary cursor-pointer">{a.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor in cididunt ut labore et dolore
                  </p>
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
        <Sidebar />
      </div>
    </div>
  );
}
