import type { Route } from "next";
import Button from "@/components/Button";
import Badge from "@/components/Badge";
import Container from "@/components/Container";
import Section from "@/components/Section";
import PortraitCard from "@/components/PortraitCard";
import AssistantPanel from "@/components/AssistantPanel";
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
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="fade-in-up">
            <Badge tone="accent">{eyebrow}</Badge>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-text md:text-6xl">
              {title}
            </h1>
            <p className="mt-4 text-xl text-muted">{subtitle}</p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">{description}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={primaryCta.href}>{primaryCta.label}</Button>
              <Button href="/writing" variant="outline">
                Writing
              </Button>
              <Button href="/reading" variant="outline">
                Reading
              </Button>
              <Button href={secondaryCta.href} variant="ghost">
                Contact
              </Button>
            </div>
          </div>
          <div className="grid gap-6 fade-in-up">
            <PortraitCard />
            <AssistantPanel />
          </div>
        </div>
      </Container>
    </Section>
  );
}
