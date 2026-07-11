import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/seguranca/")({
  head: () => ({
    meta: [
      { title: "Segurança — Cebolla.app" },
      { name: "description", content: "Segurança digital: ameaças, defesas e práticas para proteger seus dispositivos." },
    ],
  }),
  component: () => (
    <>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Categoria" }, { label: "Segurança" }]} />
      <CategoryPage category="Segurança" />
    </>
  ),
});
