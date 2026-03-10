import Link from "next/link";
import type { Route } from "next";
import Container from "@/components/Container";

const links: { href: Route; label: string }[] = [
  { href: "/about", label: "About" },
  { href: "/education", label: "Education" },
  { href: "/projects", label: "Projects" },
  { href: "/writing", label: "Writing" },
  { href: "/reading", label: "Reading" },
  { href: "/chess", label: "Chess" },
  { href: "/contact", label: "Contact" }
];

export default function Navbar() {
  return (
    <header className="border-b border-border/80 bg-background/80 backdrop-blur">
      <Container className="flex items-center justify-between py-5">
        <Link href="/" className="text-xs font-semibold tracking-[0.3em] text-text">
          KOMIVI ASSIAMUA
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-muted xl:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-text">
              {link.label}
            </Link>
          ))}
        </nav>
        <details className="relative xl:hidden">
          <summary className="cursor-pointer list-none text-sm font-semibold text-text">Menu</summary>
          <div className="absolute right-0 top-9 z-10 w-48 rounded-xl border border-border bg-surface p-3 shadow-lg">
            <ul className="space-y-2 text-sm text-muted">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="block hover:text-text">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </details>
      </Container>
    </header>
  );
}
