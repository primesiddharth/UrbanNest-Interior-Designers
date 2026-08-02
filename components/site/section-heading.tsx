import { cn } from '@/lib/utils';
import { Reveal } from '@/components/site/reveal';

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        'flex flex-col gap-4',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            'inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em]',
            light ? 'text-accent' : 'text-accent'
          )}
        >
          <span className="h-px w-6 bg-accent/70" aria-hidden />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'font-display text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.75rem]',
          light ? 'text-white' : 'text-foreground'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'max-w-2xl text-base leading-relaxed sm:text-lg',
            light ? 'text-white/70' : 'text-muted-foreground'
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
