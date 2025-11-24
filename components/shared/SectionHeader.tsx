interface SectionHeaderProps {
  overline?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({
  overline,
  title,
  subtitle,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}>
      {overline && (
        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
          {overline}
        </p>
      )}
      <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  );
}
