import type { Route } from "next";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  href: Route;
}

export default function ProjectCard({ title, description, technologies, href }: ProjectCardProps) {
  return (
    <article className="card flex h-full flex-col gap-4">
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-ink">{title}</h3>
        <p className="mt-2 text-sm text-slate">{description}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span key={tech} className="tag">
            {tech}
          </span>
        ))}
      </div>
      <Link href={href} className="text-sm font-semibold text-accent hover:underline">
        View project →
      </Link>
    </article>
  );
}
