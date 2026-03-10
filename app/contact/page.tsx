import type { Metadata } from "next";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Badge from "@/components/Badge";
import SocialLinks from "@/components/SocialLinks";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "Contact | Komivi Assiamua",
  description: "Get in touch for research, analytics, or collaboration."
};

export default function ContactPage() {
  return (
    <Section>
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Badge>Contact</Badge>
            <h1 className="mt-4 text-3xl font-semibold text-text">Let’s connect</h1>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Share your project, collaboration idea, or research question. I respond within 48 hours.
            </p>
            <div className="mt-6 text-sm text-muted">
              <p className="font-mono uppercase tracking-[0.2em]">Email</p>
              <a className="mt-2 block text-accent hover:underline" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </div>
            <div className="mt-6">
              <p className="text-xs font-mono uppercase tracking-[0.3em] text-muted">Elsewhere</p>
              <div className="mt-3">
                <SocialLinks />
              </div>
            </div>
          </div>
          <form className="card space-y-4">
            <div>
              <label className="text-sm font-medium text-muted" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                className="mt-2 w-full rounded-lg border border-border bg-transparent px-4 py-2 text-sm text-text"
                type="text"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-muted" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                className="mt-2 w-full rounded-lg border border-border bg-transparent px-4 py-2 text-sm text-text"
                type="email"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-muted" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className="mt-2 w-full rounded-lg border border-border bg-transparent px-4 py-2 text-sm text-text"
                rows={4}
                placeholder="Tell me about your idea"
              />
            </div>
            <button className="w-full rounded-full bg-text px-6 py-3 text-sm font-semibold text-background" type="submit">
              Send message
            </button>
            <p className="text-xs text-muted">Placeholder form shell. Hook up a form handler when ready.</p>
          </form>
        </div>
      </Container>
    </Section>
  );
}
