import Link from "next/link";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import WritingCard from "@/components/WritingCard";
import Badge from "@/components/Badge";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { readingCategories } from "@/content/reading";
import { education } from "@/content/education";
import { getAllWriting } from "@/lib/writing";

export default function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 2);
  const latestWriting = getAllWriting().slice(0, 3);
  const featuredReading = readingCategories.slice(0, 2);
  const educationSnapshot = education.slice(0, 2);

  return (
    <div>
      <Hero />

      <Section className="bg-surface/60">
        <Container>
          <div className="fade-in-up">
            <p className="section-eyebrow">Introduction</p>
            <h2 className="section-title mt-3">A calm, rigorous approach to decisions</h2>
          </div>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">
            {profile.intro} This space documents my projects, research notes, and intellectual interests at the
            intersection of analytics, AI, probability, and finance.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {profile.interests.slice(0, 4).map((item) => (
              <Badge key={item}>{item}</Badge>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="flex items-center justify-between">
            <h2 className="section-title">Featured projects</h2>
            <Link href="/projects" className="text-sm font-semibold text-accent hover:underline">
              View all
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 stagger">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-surface/60">
        <Container>
          <div className="flex items-center justify-between">
            <h2 className="section-title">Selected writing</h2>
            <Link href="/writing" className="text-sm font-semibold text-accent hover:underline">
              Explore writing
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3 stagger">
            {latestWriting.map((post) => (
              <WritingCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="flex items-center justify-between">
            <div>
              <p className="section-eyebrow">Reading</p>
              <h2 className="section-title mt-3">Curated intellectual influences</h2>
            </div>
            <Link href="/reading" className="text-sm font-semibold text-accent hover:underline">
              View reading list
            </Link>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 stagger">
            {featuredReading.map((category) => (
              <div key={category.name} className="card hover-lift">
                <Badge tone="accent">{category.name}</Badge>
                <p className="mt-3 text-sm text-muted">
                  {category.description ?? "Placeholder: add a short note for this category."}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-surface/60">
        <Container>
          <div className="flex items-center justify-between">
            <div>
              <p className="section-eyebrow">Education</p>
              <h2 className="section-title mt-3">Academic snapshot</h2>
            </div>
            <Link href="/education" className="text-sm font-semibold text-accent hover:underline">
              View education
            </Link>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 stagger">
            {educationSnapshot.map((entry) => (
              <div key={`${entry.institution}-${entry.degree}`} className="card hover-lift">
                <Badge>{entry.degree}</Badge>
                <p className="mt-3 text-sm text-muted">{entry.institution}</p>
                <p className="mt-2 text-xs font-mono text-muted">
                  {entry.startYear}–{entry.endYear}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="card glow flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <Badge tone="accent">Contact</Badge>
              <h2 className="mt-3 text-2xl font-semibold text-text">Let’s collaborate</h2>
              <p className="mt-2 text-sm text-muted">
                Research, analytics products, or AI systems with real-world impact.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-text px-6 py-3 text-sm font-semibold text-background transition hover:translate-y-[-1px]"
            >
              Contact me
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
