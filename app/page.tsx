import Link from "next/link";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import WritingCard from "@/components/WritingCard";
import Badge from "@/components/Badge";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { getAllWriting } from "@/lib/writing";

export default function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 2);
  const latestWriting = getAllWriting().slice(0, 3);

  return (
    <div>
      <Hero />

      <Section className="bg-surface/40">
        <Container>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.3em] text-muted">Introduction</p>
              <h2 className="mt-3 text-2xl font-semibold text-text">A calm, rigorous approach to decisions</h2>
            </div>
          </div>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">
            {profile.summary} This space documents my research notes, experiments, and professional thinking at
            the intersection of analytics, AI, probability, and finance.
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-text">Featured projects</h2>
            <Link href="/projects" className="text-sm font-semibold text-accent hover:underline">
              View all
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-surface/40">
        <Container>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-text">Selected writing</h2>
            <Link href="/writing" className="text-sm font-semibold text-accent hover:underline">
              Explore writing
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {latestWriting.map((post) => (
              <WritingCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="card flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <Badge>Contact</Badge>
              <h2 className="mt-3 text-2xl font-semibold text-text">Let’s collaborate on meaningful work</h2>
              <p className="mt-2 text-sm text-muted">
                Research, strategy, analytics products, or AI systems with real-world impact.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-text px-6 py-3 text-sm font-semibold text-background"
            >
              Contact me
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
