import type { Metadata } from "next";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Badge from "@/components/Badge";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "About | Komivi Assiamua",
  description: "Background, interests, and skills in analytics, AI, and decision science."
};

export default function AboutPage() {
  return (
    <Section>
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Badge>About</Badge>
            <h1 className="mt-4 text-3xl font-semibold text-text">Thoughtful analytics, practical execution</h1>
            <p className="mt-6 text-sm leading-relaxed text-muted">{profile.summary}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              I care about practical research: deploying models in the real world, translating insights into
              strategy, and building tools that move fast without losing rigor.
            </p>
          </div>
          <div className="card space-y-6">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.3em] text-muted">Interests</p>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {profile.interests.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.3em] text-muted">Education</p>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {profile.education?.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.3em] text-muted">Skills & tools</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {profile.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
