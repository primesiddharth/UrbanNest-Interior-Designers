import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/site/section-heading';
import { Reveal } from '@/components/site/reveal';
import { SmartImage } from '@/components/site/smart-image';
import { projects } from '@/lib/site';

export function FeaturedProjects() {
  const featured = projects.slice(0, 4);
  return (
    <section className="container-px mx-auto max-w-7xl section-py">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          align="left"
          eyebrow="Featured Work"
          title="A glimpse of recent projects"
          description="A curated cross-section of the homes, offices and hospitality spaces we have brought to life across Bengaluru and beyond."
          className="sm:max-w-xl"
        />
        <Link
          href="/projects"
          className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent"
        >
          View all projects
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
        </Link>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {featured.map((p, i) => (
          <Reveal key={p.slug} delay={i * 90}>
            <Link
              href={`/projects#${p.slug}`}
              className="group relative block overflow-hidden rounded-2xl"
            >
              <SmartImage
                src={p.image}
                alt={p.title}
                className="aspect-[16/10] w-full transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  {p.type}
                </span>
                <h3 className="mt-2 font-display text-2xl font-semibold text-white sm:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-1 flex items-center gap-2 text-sm text-white/70">
                  {p.location} · {p.year}
                </p>
              </div>
              <span className="absolute right-5 top-5 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-background/90 text-primary opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <ArrowRight className="h-4 w-4" aria-hidden />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
