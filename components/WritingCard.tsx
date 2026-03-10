import type { Route } from "next";
import Link from "next/link";
import type { WritingPostMeta } from "@/lib/content";
import Badge from "@/components/Badge";

interface WritingCardProps {
  post: WritingPostMeta;
}

export default function WritingCard({ post }: WritingCardProps) {
  const href = `/writing/${post.slug}` as Route;

  return (
    <article className="card flex h-full flex-col gap-4">
      <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
        <span className="font-mono uppercase tracking-[0.2em]">{post.date}</span>
        <span className="font-mono">{post.readingTime}</span>
      </div>
      <h3 className="text-lg font-semibold text-text">{post.title}</h3>
      <p className="text-sm text-muted">{post.summary}</p>
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
      <Link href={href} className="text-sm font-semibold text-accent hover:underline">
        Read article →
      </Link>
    </article>
  );
}
