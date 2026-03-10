export default function ContactPage() {
  return (
    <section className="section">
      <div className="container grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate">Contact</p>
          <h1 className="mt-4 text-3xl font-semibold">Let’s connect</h1>
          <p className="mt-4 text-sm text-slate">
            Share your project, collaboration idea, or research question. I respond within 48 hours.
          </p>
          <div className="mt-6 flex gap-4 text-sm font-semibold text-accent">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
        <form className="card space-y-4">
          <div>
            <label className="text-sm font-medium text-slate">Name</label>
            <input className="mt-2 w-full rounded-lg border border-mist px-4 py-2" type="text" placeholder="Your name" />
          </div>
          <div>
            <label className="text-sm font-medium text-slate">Email</label>
            <input className="mt-2 w-full rounded-lg border border-mist px-4 py-2" type="email" placeholder="you@example.com" />
          </div>
          <div>
            <label className="text-sm font-medium text-slate">Message</label>
            <textarea className="mt-2 w-full rounded-lg border border-mist px-4 py-2" rows={4} placeholder="Tell me about your idea" />
          </div>
          <button className="w-full rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white" type="submit">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
