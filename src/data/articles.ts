import raw from "./articles.json";

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

// Eagerly import every JPG under articles/ so bundler resolves URLs.
const covers = import.meta.glob("@/assets/articles/*.jpg", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

function coverFor(slug: string): string {
  const found = Object.entries(covers).find(([k]) => k.endsWith(`/${slug}.jpg`));
  return found ? found[1] : "";
}

function readTime(blocks: Block[]) {
  const words = blocks.reduce((n, b) => {
    if ("text" in b) return n + b.text.split(/\s+/).length;
    if ("items" in b) return n + b.items.join(" ").split(/\s+/).length;
    return n;
  }, 0);
  return Math.max(3, Math.round(words / 220));
}

export const articles: Article[] = Object.entries(
  raw as Record<string, Omit<Article, "slug" | "cover" | "readMinutes">>,
).map(([slug, a]) => ({
  ...a,
  slug,
  blocks: a.blocks as Block[],
  cover: coverFor(slug),
  readMinutes: readTime(a.blocks as Block[]),
}));

export const articlesBySlug: Record<string, Article> = Object.fromEntries(
  articles.map((a) => [a.slug, a]),
);

export function articlesByCategory(category: string) {
  const norm = (s: string) => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return articles.filter((a) => norm(a.category) === norm(category));
}
