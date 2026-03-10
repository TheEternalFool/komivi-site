import Link from "next/link";

const links = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
];

export default function Navbar() {
  return (
    <header className="border-b border-mist bg-white/80 backdrop-blur">
      <div className="container flex items-center justify-between py-5">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Komivi Assiamua
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-slate">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-ink">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
