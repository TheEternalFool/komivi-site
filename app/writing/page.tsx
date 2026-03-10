import type { Metadata } from "next";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Badge from "@/components/Badge";
import WritingCard from "@/components/WritingCard";
import { getAllWriting } from "@/lib/writing";

export const metadata: Metadata = {
  title: "Writing | Komivi Assiamua",
  description: "Essays, notes, and research reflections in analytics and AI."
};

export default function WritingPage() {
  const posts = getAllWriting();

  return (
    <Section>
      <Container>
        <div className="max-w-2xl">
          <Badge>Writing</Badge>
          <h1 className="mt-4 text-3xl font-semibold text-text">Research notes & technical essays</h1>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Essays on analytics, AI systems, probability, and financial markets. Calm, precise thinking over
            hype.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <WritingCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
