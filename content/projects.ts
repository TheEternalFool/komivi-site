import type { Project } from "@/lib/content";

export const projects: Project[] = [
  {
    title: "Market Regime Classifier",
    slug: "market-regime-classifier",
    summary: "Detect market phases using probabilistic models and time-series analytics.",
    description:
      "A research prototype for identifying regime shifts and volatility clusters to inform portfolio positioning.",
    technologies: ["Python", "HMM", "Time Series"],
    tags: ["Markets", "Modeling"],
    links: [{ label: "Placeholder: project link", href: "#" }],
    featured: true,
    status: "experiment"
  },
  {
    title: "AI-Powered Credit Scoring",
    slug: "ai-credit-scoring",
    summary: "Explainable risk modeling for lending decisions and SME growth.",
    description:
      "A transparent modeling workflow that combines predictive performance with interpretability for credit risk teams.",
    technologies: ["XGBoost", "SHAP", "Fintech"],
    tags: ["Risk", "AI"],
    links: [{ label: "Placeholder: project link", href: "#" }],
    featured: true,
    status: "active"
  },
  {
    title: "Portfolio Stress Lab",
    slug: "portfolio-stress-lab",
    summary: "Scenario analytics for multi-asset portfolios.",
    description:
      "An exploratory environment for stress testing and scenario planning across macro regimes.",
    technologies: ["Risk", "Optimization", "Analytics"],
    tags: ["Strategy", "Research"],
    links: [{ label: "Placeholder: project link", href: "#" }],
    featured: false,
    status: "experiment"
  }
];
