import type { Metadata } from "next";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Badge from "@/components/Badge";
import EducationList from "@/components/EducationList";
import { education } from "@/content/education";

export const metadata: Metadata = {
  title: "Education | Komivi Jarod Manuel Assiamua",
  description: "Academic journey and qualifications."
};

export default function EducationPage() {
  return (
    <Section>
      <Container>
        <div className="max-w-2xl">
          <Badge>Education</Badge>
          <h1 className="mt-4 text-3xl font-semibold text-text">Academic journey</h1>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            A clear view of my academic trajectory in accountancy, business IT, and analytics.
          </p>
        </div>
        <div className="mt-10">
          <EducationList entries={education} />
        </div>
      </Container>
    </Section>
  );
}
