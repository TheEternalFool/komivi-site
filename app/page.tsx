import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import ProjectCard from "@/components/ProjectCard";
import { getAllPosts } from "@/lib/posts";

const projects = [
  {
    title: "Market Regime Classifier",
    description: "Detect market phases using probabilistic models and time-series analytics.",
    technologies: ["Python", "HMM", "Statistics"],
    href: "/projects"
  },
  {
    title: "AI-Powered Credit Scoring",
    description: "Explainable risk modeling for lending decisions and SME growth.",
    technologies: ["XGBoost", "SHAP", "Fintech"],
    href: "/projects"
  }
];

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <div>
      <section className="section">
        <div className="container grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate">
              Komivi Assiamua
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
              Business Analytics | Artificial Intelligence | Decision Science
            </h1>
            <p className="mt-6 text-base text-slate">
              I build data-driven systems that turn uncertainty into strategy. This platform shares my
              research, experiments, and projects at the intersection of analytics, finance, and AI.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/projects" className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white">
                View projects
              </Link>
              <Link href="/contact" className="rounded-full border border-ink px-6 py-3 text-sm font-semibold">
                Let’s collaborate
              </Link>
            </div>
          </div>
          <div className="card">
            <h2 className="text-lg font-semibold">Focus Areas</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate">
              <li>Business analytics & decision intelligence</li>
              <li>Probabilistic modeling & forecasting</li>
              <li>AI systems for financial markets</li>
              <li>Entrepreneurship & growth strategy</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Featured Projects</h2>
            <Link href="/projects" className="text-sm font-semibold text-accent hover:underline">
              View all
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Latest Writing</h2>
            <Link href="/blog" className="text-sm font-semibold text-accent hover:underline">
              Read the blog
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="card flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-semibold">Ready to build something bold?</h2>
              <p className="mt-2 text-sm text-slate">
                Let’s discuss analytics products, AI strategy, or research collaborations.
              </p>
            </div>
            <Link href="/contact" className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white">
              Contact me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
