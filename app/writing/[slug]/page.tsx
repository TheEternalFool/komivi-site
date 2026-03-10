import type { Metadata } from "next";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Badge from "@/components/Badge";
import { getAllWriting, getWritingBySlug } from "@/lib/writing";

interface WritingPostPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = getAllWriting();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: WritingPostPageProps): Promise<Metadata> {
  const post = await getWritingBySlug(params.slug);
  return {
    title: `${post.title} | Komivi Jarod Manuel Assiamua`,
    description: post.summary
  };
}

export default async function WritingPostPage({ params }: WritingPostPageProps) {
  const post = await getWritingBySlug(params.slug);

  return (
    <Section>
      <Container>
        <article className="prose max-w-3xl">
          <Badge>{post.date}</Badge>
          <h1 className="mt-4 text-3xl font-semibold text-text">{post.title}</h1>
          <p className="mt-2 text-sm text-muted">{post.readingTime}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
          <div className="mt-6" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        </article>
      </Container>
    </Section>
  );
}
