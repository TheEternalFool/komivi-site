import BlogCard from "@/components/BlogCard";
import { getAllPosts } from "@/lib/posts";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="section">
      <div className="container">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate">Blog</p>
          <h1 className="mt-4 text-3xl font-semibold">Research notes & technical writing</h1>
          <p className="mt-4 text-sm text-slate">
            Essays on analytics, AI systems, probability, and financial markets. Expect practical frameworks
            and research updates.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}
