import { profile } from "@/content/profile";

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-4 text-sm font-medium text-muted">
      {profile.socials.map((link) => (
        <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="hover:text-text">
          {link.label}
        </a>
      ))}
    </div>
  );
}
