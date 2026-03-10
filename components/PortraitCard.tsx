import Image from "next/image";
import Badge from "@/components/Badge";

interface PortraitCardProps {
  imageSrc?: string;
}

export default function PortraitCard({ imageSrc = "/portrait.png" }: PortraitCardProps) {
  return (
    <div className="card overflow-hidden">
      <div className="flex items-center justify-between">
        <Badge tone="accent">Portrait</Badge>
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-muted">Profile</span>
      </div>
      <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-surface-strong">
        <Image
          src={imageSrc}
          alt="Portrait of Komivi Jarod Manuel Assiamua"
          width={520}
          height={620}
          className="h-[320px] w-full object-cover"
          priority
        />
      </div>
      <p className="mt-4 text-xs text-muted">
        Placeholder: replace with your final portrait image if needed.
      </p>
    </div>
  );
}
