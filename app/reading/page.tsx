import type { Metadata } from "next";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Badge from "@/components/Badge";
import ReadingCategorySection from "@/components/ReadingCategorySection";
import { readingCategories } from "@/content/reading";

export const metadata: Metadata = {
  title: "Reading | Komivi Jarod Manuel Assiamua",
  description: "Curated reading across philosophy, psychology, literature, and strategy."
};

export default function ReadingPage() {
  return (
    <Section>
      <Container>
        <div className="max-w-2xl">
          <Badge>Reading</Badge>
          <h1 className="mt-4 text-3xl font-semibold text-text">Curated reading space</h1>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            A deliberate list of books and themes that shape how I think about strategy, society, and decision
            science.
          </p>
        </div>
        <div className="mt-10 space-y-6">
          {readingCategories.map((category) => (
            <ReadingCategorySection key={category.name} category={category} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
