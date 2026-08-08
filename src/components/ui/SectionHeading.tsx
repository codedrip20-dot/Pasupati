interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-2xl ${
        align === "center" ? "mx-auto text-center" : "text-left"
      }`}
    >
      {eyebrow && (
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-8 bg-[var(--color-gold)]" />
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-navy)]">
            {eyebrow}
          </span>
        </div>
      )}

      <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-7 text-[var(--color-navy)]/65 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}