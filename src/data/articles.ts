import raw from "./articles.json";
import lgpd from "@/assets/articles/lgpd.jpg";
import navAnonima from "@/assets/articles/nav-anonima.jpg";
import openclaw from "@/assets/articles/openclaw.jpg";

export type Block =
  | { type: "h2" | "h3" | "h4" | "p"; text: string }
  | { type: "ul" | "ol"; items: string[] }
  | { type: "quote"; text: string };

export type Article = {
  slug: string;
  title: string;
  desc: string;
  category: string;
  categoryHref: string;
  date: string;
  image: string;
  cover: string;
  blocks: Block[];
  readMinutes: number;
};

const covers: Record<string, string> = { lgpd, "nav-anonima": navAnonima, openclaw };

function readTime(blocks: Block[]) {
  const words = blocks.reduce((n, b) => {
    if ("text" in b) return n + b.text.split(/\s+/).length;
    if ("items" in b) return n + b.items.join(" ").split(/\s+/).length;
    return n;
  }, 0);
  return Math.max(3, Math.round(words / 220));
}

export const articles: Article[] = Object.entries(raw as Record<string, Omit<Article, "slug" | "cover" | "readMinutes">>).map(
  ([slug, a]) => ({
    ...a,
    slug,
    blocks: a.blocks as Block[],
    cover: covers[a.image] ?? lgpd,
    readMinutes: readTime(a.blocks as Block[]),
  }),
);

export const articlesBySlug: Record<string, Article> = Object.fromEntries(articles.map((a) => [a.slug, a]));

export function articlesByCategory(category: string) {
  return articles.filter((a) => a.category.toLowerCase() === category.toLowerCase());
}
