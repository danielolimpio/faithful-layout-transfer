import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/ferramentas/")({
  head: () => ({
    meta: [
      { title: "Ferramentas — Cebolla.app" },
      { name: "description", content: "Ferramentas de privacidade, anonimato e segurança digital recomendadas." },
    ],
  }),
  component: () => (
    <>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Categoria" }, { label: "Ferramentas" }]} />
      <CategoryPage category="Ferramentas" />
    </>
  ),
});
