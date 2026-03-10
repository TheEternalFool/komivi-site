import { getAllPosts, getPostBySlug } from "@/lib/posts";

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug);

  return (
    <section className="section">
      <div className="container">
        <article className="prose max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate">{post.date}</p>
          <h1 className="mt-2 text-3xl font-semibold">{post.title}</h1>
          <div className="mt-6 text-sm text-slate" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        </article>
      </div>
    </section>
  );
}
