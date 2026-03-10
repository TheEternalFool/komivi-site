import type { Metadata } from "next";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Badge from "@/components/Badge";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects | Komivi Assiamua",
  description: "Selected work in analytics, AI, and decision science."
};

export default function ProjectsPage() {
  return (
    <Section>
      <Container>
        <div className="max-w-2xl">
          <Badge>Projects</Badge>
          <h1 className="mt-4 text-3xl font-semibold text-text">Applied research & product experiments</h1>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            A selection of projects spanning analytics, AI, and decision systems. Each project blends technical
            depth with real-world impact.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
