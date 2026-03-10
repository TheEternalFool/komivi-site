import Container from "@/components/Container";
import SocialLinks from "@/components/SocialLinks";
import { profile } from "@/content/profile";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="grid gap-6 py-12 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div>
          <p className="text-sm font-semibold text-text">{profile.fullName}</p>
          <p className="mt-2 max-w-md text-sm text-muted">
            A personal platform for analytics, AI, decision science, and thoughtful research.
          </p>
          <a className="mt-4 inline-flex text-sm text-accent hover:underline" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </div>
        <div className="space-y-3 text-sm text-muted md:justify-self-end">
          <p className="text-xs font-mono uppercase tracking-[0.3em]">Elsewhere</p>
          <SocialLinks />
        </div>
      </Container>
    </footer>
  );
}
