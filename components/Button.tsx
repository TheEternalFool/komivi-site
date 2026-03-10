import Link from "next/link";
import type { Route } from "next";

interface ButtonProps {
  href: Route;
  children: string;
  variant?: "primary" | "ghost";
}

export default function Button({ href, children, variant = "primary" }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold";
  const styles =
    variant === "primary"
      ? "bg-text text-background hover:bg-text/90"
      : "border border-border text-text hover:border-text/40";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}
