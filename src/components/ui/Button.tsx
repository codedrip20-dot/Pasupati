import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "gold";
  className?: string;
}

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const baseStyles =
    "group inline-flex items-center justify-center gap-3 px-6 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 ease-out";

  const variants = {
    primary:
      "bg-(--color-navy) text-white hover:-translate-y-0.5 hover:bg-(--color-navy)/95 hover:shadow-[0_12px_30px_rgba(12,29,50,0.18)]",

    outline:
      "border border-(--color-navy)/20 bg-transparent text-(--color-navy) hover:-translate-y-0.5 hover:border-(--color-navy) hover:bg-(--color-navy) hover:text-white",

    gold:
      "bg-(--color-gold) text-(--color-navy) hover:-translate-y-0.5 hover:bg-[#ffe0b5] hover:shadow-[0_12px_30px_rgba(255,211,159,0.25)]",
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>

      <span className="flex h-7 w-7 items-center justify-center border border-current/20 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:border-current/40">
        <ArrowUpRight
          size={15}
          strokeWidth={1.8}
          className="transition-transform duration-300 group-hover:rotate-12"
        />
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={styles}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={styles}>
      {content}
    </button>
  );
}