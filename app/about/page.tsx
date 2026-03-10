export default function AboutPage() {
  return (
    <section className="section">
      <div className="container grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate">About</p>
          <h1 className="mt-4 text-3xl font-semibold">A builder of data-driven decisions</h1>
          <p className="mt-6 text-sm text-slate">
            I am Komivi Assiamua, focused on the intersection of business analytics, artificial intelligence,
            and decision science. My work explores how probabilistic reasoning, financial data, and machine
            learning can deliver better outcomes for organizations and entrepreneurs.
          </p>
          <p className="mt-4 text-sm text-slate">
            I care about practical research: deploying models in the real world, translating insights into
            strategy, and building tools that move fast without losing rigor.
          </p>
        </div>
        <div className="card">
          <h2 className="text-lg font-semibold">Education & Interests</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate">
            <li>Business analytics and decision intelligence</li>
            <li>Probability, statistics, and Bayesian modeling</li>
            <li>AI for financial markets and risk analytics</li>
            <li>Entrepreneurship and growth strategy</li>
          </ul>
          <h3 className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-slate">Skills & Tools</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {["Python", "R", "SQL", "TensorFlow", "PyTorch", "Tableau", "Power BI"].map((skill) => (
              <span key={skill} className="tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
