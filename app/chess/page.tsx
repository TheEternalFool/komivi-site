import type { Metadata } from "next";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Badge from "@/components/Badge";
import { chessProfile } from "@/content/chess";

export const metadata: Metadata = {
  title: "Chess | Komivi Jarod Manuel Assiamua",
  description: "A personal, playful corner of the site."
};

export default function ChessPage() {
  return (
    <Section>
      <Container>
        <div className="max-w-2xl">
          <Badge>Chess</Badge>
          <h1 className="mt-4 text-3xl font-semibold text-text">A quiet discipline</h1>
          <p className="mt-4 text-sm leading-relaxed text-muted">{chessProfile.intro}</p>
        </div>
        <div className="mt-8 card">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-muted">Lichess</p>
          <a className="mt-3 block text-sm text-accent hover:underline" href={chessProfile.lichessUrl}>
            {chessProfile.lichessUrl}
          </a>
          <p className="mt-4 text-xs text-muted">Placeholder: update with your real Lichess profile link.</p>
        </div>
      </Container>
    </Section>
  );
}
