import type { Route } from "next";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
}

export default function BlogCard({ title, excerpt, date, slug }: BlogCardProps) {
  const postHref = `/blog/${slug}` as Route;

  return (
    <article className="card flex h-full flex-col gap-3">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate">{date}</p>
      <h3 className="text-lg font-semibold text-ink">{title}</h3>
      <p className="text-sm text-slate">{excerpt}</p>
      <Link href={postHref} className="text-sm font-semibold text-accent hover:underline">
        Read more →
      </Link>
    </article>
  );
}
