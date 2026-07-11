import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArticlePage } from "@/components/ArticlePage";
import { articlesBySlug } from "@/data/articles";

export const Route = createFileRoute("/criptografia/$slug")({
  loader: ({ params }) => {
    const a = articlesBySlug[params.slug];
    if (!a || a.categoryHref !== "/criptografia") throw notFound();
    return { article: a };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.article.title} — Cebolla.app` },
          { name: "description", content: loaderData.article.desc || loaderData.article.title },
          { property: "og:title", content: loaderData.article.title },
          { property: "og:description", content: loaderData.article.desc || loaderData.article.title },
          { property: "og:type", content: "article" },
          { property: "og:image", content: loaderData.article.cover },
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:image", content: loaderData.article.cover },
        ]
      : [],
  }),
  notFoundComponent: () => <div className="container mx-auto py-24 text-center">Artigo não encontrado.</div>,
  errorComponent: ({ error }) => <div className="container mx-auto py-24 text-center">Erro: {String(error)}</div>,
  component: () => <ArticlePage article={Route.useLoaderData().article} />,
});
