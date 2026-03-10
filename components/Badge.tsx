import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  tone?: "default" | "accent";
}

export default function Badge({ children, tone = "default" }: BadgeProps) {
  const styles =
    tone === "accent"
      ? "border-accent/40 text-accent"
      : "border-border text-muted";

  return <span className={`badge font-mono ${styles}`}>{children}</span>;
}
