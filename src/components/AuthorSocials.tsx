import { Facebook, Twitter, Instagram, Linkedin, Globe } from "lucide-react";
import { author } from "@/data/author";

export function AuthorSocials({ className = "" }: { className?: string }) {
  const s = author.socials;
  const items = [
    { href: s.facebook, icon: Facebook, label: "Facebook" },
    { href: s.twitter, icon: Twitter, label: "X / Twitter" },
    { href: s.instagram, icon: Instagram, label: "Instagram" },
    { href: s.linkedin, icon: Linkedin, label: "LinkedIn" },
    { href: s.website, icon: Globe, label: "Site" },
  ];
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {items.map(({ href, icon: Icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="w-9 h-9 grid place-items-center rounded-full bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition"
        >
          <Icon className="w-4 h-4" />
        </a>
      ))}
    </div>
  );
}
