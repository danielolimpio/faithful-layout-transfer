import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/pagamentos")({
  head: () => ({ meta: [{ title: "Pagamentos — Cebolla.app" }, { name: "description", content: "Pagamentos seguros, cartões virtuais e proteção financeira online." }] }),
  component: () => (<>
    <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Categoria" }, { label: "Pagamentos" }]} />
    <CategoryPage category="Pagamentos" />
  </>),
});
