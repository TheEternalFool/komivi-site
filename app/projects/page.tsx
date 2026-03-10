import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Market Regime Classifier",
    description: "Identifies market phases and shifts using hidden Markov models.",
    technologies: ["Python", "HMM", "Time Series"],
    href: "/projects"
  },
  {
    title: "AI-Powered Credit Scoring",
    description: "Explainable ML for credit risk and financial inclusion.",
    technologies: ["XGBoost", "SHAP", "Fintech"],
    href: "/projects"
  },
  {
    title: "Portfolio Stress Lab",
    description: "Scenario analytics for multi-asset portfolios.",
    technologies: ["Risk", "Optimization", "Analytics"],
    href: "/projects"
  }
];

export default function ProjectsPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate">Projects</p>
          <h1 className="mt-4 text-3xl font-semibold">Applied research & product experiments</h1>
          <p className="mt-4 text-sm text-slate">
            A selection of projects spanning analytics, AI, and decision systems. Each project blends
            technical depth with real-world impact.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
