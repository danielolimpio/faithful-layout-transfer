import { Link } from "@tanstack/react-router";

interface Crumb { label: string; to?: string }

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <div className="bg-muted/50 border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center gap-3 text-sm text-muted-foreground">
        {items.map((c, i) => (
          <span key={i} className="flex items-center gap-3">
            {c.to ? <Link to={c.to} className="hover:text-primary">{c.label}</Link> : <span className="text-foreground">{c.label}</span>}
            {i < items.length - 1 && <span className="opacity-50">&gt;</span>}
          </span>
        ))}
      </div>
    </div>
  );
}
