import type { Route } from "next";
import Button from "@/components/Button";
import Badge from "@/components/Badge";
import Container from "@/components/Container";
import Section from "@/components/Section";
import PortraitCard from "@/components/PortraitCard";
import ChatPanel from "@/components/ChatPanel";
import { profile } from "@/content/profile";

interface HeroProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  primaryCta?: { label: string; href: Route };
}

export default function Hero({
  eyebrow = "Personal Platform",
  title = profile.fullName,
  subtitle = profile.headline,
  description = profile.intro,
  primaryCta = { label: "Explore projects", href: "/projects" }
}: HeroProps) {
  return (
    <Section className="background-grid">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="fade-in-up">
            <Badge tone="accent">{eyebrow}</Badge>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-text md:text-7xl">
              {title}
            </h1>
            <p className="mt-4 text-2xl text-muted">{subtitle}</p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{description}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={primaryCta.href}>{primaryCta.label}</Button>
              <Button href="/reading" variant="outline">
                Reading
              </Button>
              <Button href="/education" variant="outline">
                Education
              </Button>
              <Button href="/contact" variant="ghost">
                Contact
              </Button>
            </div>
          </div>
          <div className="grid gap-6 fade-in-up">
            <PortraitCard />
            <ChatPanel />
          </div>
        </div>
      </Container>
    </Section>
  );
}
