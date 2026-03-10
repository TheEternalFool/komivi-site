import type { Route } from "next";
import Button from "@/components/Button";
import Badge from "@/components/Badge";
import Container from "@/components/Container";
import Section from "@/components/Section";
import { profile } from "@/content/profile";

interface HeroProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  primaryCta?: { label: string; href: Route };
  secondaryCta?: { label: string; href: Route };
}

export default function Hero({
  eyebrow = "Personal Platform",
  title = profile.fullName,
  subtitle = profile.headline,
  description = profile.intro,
  primaryCta = { label: "Explore projects", href: "/projects" },
  secondaryCta = { label: "Contact", href: "/contact" }
}: HeroProps) {
  return (
    <Section className="background-grid">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="fade-in-up">
            <Badge tone="accent">{eyebrow}</Badge>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-text md:text-5xl">
              {title}
            </h1>
            <p className="mt-4 text-lg text-muted">{subtitle}</p>
            <p className="mt-6 text-sm leading-relaxed text-muted">{description}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={primaryCta.href}>{primaryCta.label}</Button>
              <Button href={secondaryCta.href} variant="outline">
                {secondaryCta.label}
              </Button>
            </div>
          </div>
          <div className="card fade-in-up">
            <p className="section-eyebrow">Focus areas</p>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              {profile.interests.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
