import Link from "next/link";
import type { Route } from "next";

interface ButtonProps {
  href: Route;
  children: string;
  variant?: "primary" | "ghost" | "outline";
}

export default function Button({ href, children, variant = "primary" }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-300 ease-out";
  const styles =
    variant === "primary"
      ? "bg-text text-background shadow-[0_18px_45px_hsl(var(--shadow)_/_0.2)] hover:translate-y-[-1px] hover:shadow-[0_24px_60px_hsl(var(--shadow)_/_0.28)]"
      : variant === "outline"
        ? "border border-border text-text hover:border-accent/50 hover:text-accent"
        : "text-text hover:text-accent";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}
