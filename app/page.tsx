import Hero from "@/components/Hero";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Badge from "@/components/Badge";
import { education } from "@/content/education";
import { readingCategories } from "@/content/reading";

export default function HomePage() {
  const educationSnapshot = education.slice(0, 2);
  const readingHighlight = readingCategories[0];

  return (
    <div>
      <Hero />

      <Section className="bg-surface/60">
        <Container>
          <div className="flex items-center justify-between">
            <div>
              <p className="section-eyebrow">Snapshot</p>
              <h2 className="section-title mt-3">Academic focus and curated reading</h2>
            </div>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="card hover-lift">
              <Badge tone="accent">Education</Badge>
              <div className="mt-4 space-y-3">
                {educationSnapshot.map((entry) => (
                  <div key={`${entry.institution}-${entry.degree}`}>
                    <p className="text-sm font-semibold text-text">{entry.degree}</p>
                    <p className="text-sm text-muted">{entry.institution}</p>
                    <p className="text-xs font-mono text-muted">
                      {entry.startYear}–{entry.endYear}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="card hover-lift">
              <Badge tone="accent">Reading</Badge>
              <p className="mt-4 text-sm text-muted">
                {readingHighlight ? readingHighlight.name : "Curated reading"}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {readingHighlight?.books.slice(0, 4).map((book) => (
                  <Badge key={book.title}>{book.title}</Badge>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
