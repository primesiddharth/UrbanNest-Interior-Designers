import { Star, Quote } from 'lucide-react';
import { SectionHeading } from '@/components/site/section-heading';
import { Reveal } from '@/components/site/reveal';
import { testimonials } from '@/lib/site';

export function Testimonials() {
  const featured = testimonials.slice(0, 3);
  return (
    <section className="container-px mx-auto max-w-7xl section-py">
      <SectionHeading
        eyebrow="Client Stories"
        title="Loved by homeowners and founders alike"
        description="We measure our work by the relationships we build. Here is what a few of our clients say about living and working in spaces we designed."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {featured.map((t, i) => (
          <Reveal key={t.name} delay={i * 90}>
            <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-shadow duration-500 hover:shadow-xl">
              <Quote className="h-8 w-8 text-accent/40" aria-hidden />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/80">
                “{t.quote}”
              </blockquote>
              <div className="mt-6 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-accent text-accent" aria-hidden />
                ))}
              </div>
              <figcaption className="mt-5 border-t border-border pt-5">
                <p className="font-display text-base font-semibold text-foreground">{t.name}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {t.role}
                </p>
                <p className="mt-1 text-xs text-muted-foreground/80">{t.location}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
