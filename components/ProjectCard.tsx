import type { Project } from "@/lib/content";
import Badge from "@/components/Badge";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="card hover-lift flex h-full flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-text">{project.title}</h3>
        {project.status && <Badge>{project.status}</Badge>}
      </div>
      <p className="text-sm text-muted">{project.summary}</p>
      <p className="text-sm text-muted">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
      {project.links && project.links.length > 0 && (
        <div className="text-sm text-accent">
          {project.links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:underline">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
