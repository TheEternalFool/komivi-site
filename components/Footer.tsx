import Container from "@/components/Container";
import SocialLinks from "@/components/SocialLinks";
import { profile } from "@/content/profile";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-6 py-10 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-medium text-text">{profile.fullName}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.3em]">Personal platform</p>
        </div>
        <div className="space-y-2 text-sm">
          <a className="text-accent hover:underline" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <SocialLinks />
        </div>
      </Container>
    </footer>
  );
}
