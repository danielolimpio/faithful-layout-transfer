import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/privacidade")({
  head: () => ({ meta: [{ title: "Privacidade — Cebolla.app" }, { name: "description", content: "Artigos e guias sobre privacidade digital, anonimato e proteção de dados pessoais." }] }),
  component: () => (<>
    <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Categoria" }, { label: "Privacidade" }]} />
    <CategoryPage category="Privacidade" />
  </>),
});
