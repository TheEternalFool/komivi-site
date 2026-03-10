import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
}

export default function Badge({ children }: BadgeProps) {
  return <span className="badge font-mono">{children}</span>;
}
