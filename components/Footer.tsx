export default function Footer() {
  return (
    <footer className="border-t border-mist">
      <div className="container flex flex-col gap-4 py-10 text-sm text-slate md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Komivi Assiamua. All rights reserved.</p>
        <div className="flex gap-4">
          <a className="hover:text-ink" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="hover:text-ink" href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
