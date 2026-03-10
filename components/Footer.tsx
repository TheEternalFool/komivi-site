import Container from "@/components/Container";
import SocialLinks from "@/components/SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-6 py-10 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-medium text-text">Komivi Assiamua</p>
          <p className="mt-1 text-xs uppercase tracking-[0.3em]">Personal platform</p>
        </div>
        <SocialLinks />
      </Container>
    </footer>
  );
}
