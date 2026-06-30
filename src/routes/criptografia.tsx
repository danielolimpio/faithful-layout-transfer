import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/criptografia")({
  head: () => ({ meta: [{ title: "Criptografia — Cebolla.app" }, { name: "description", content: "Guias sobre criptografia, comunicação segura e proteção de mensagens." }] }),
  component: () => (<>
    <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Categoria" }, { label: "Criptografia" }]} />
    <CategoryPage category="Criptografia" />
  </>),
});
