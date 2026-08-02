import type { Metadata } from 'next';
import { Star, Quote } from 'lucide-react';
import { PageHeader } from '@/components/site/page-header';
import { SectionHeading } from '@/components/site/section-heading';
import { Reveal } from '@/components/site/reveal';
import { Statistics } from '@/components/site/sections/statistics';
import { CTASection } from '@/components/site/cta-section';
import { testimonials } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Testimonials — What Our Clients Say',
  description:
    'Read what homeowners, founders and restaurateurs say about working with UrbanNest Interior Designers in Bengaluru.',
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Testimonials"
        title="Words from the people we designed for"
        description="We are grateful for every client who trusted us with their space. Here is a fuller collection of their stories."
        image="https://images.pexels.com/photos/8485590/pexels-photo-8485590.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="container-px mx-auto max-w-7xl section-py">
        <SectionHeading
          eyebrow="Client Stories"
          title="Relationships we are proud of"
          description="A 98% satisfaction rate is built one project at a time — through listening, craft and showing up when it matters."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 80}>
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-shadow duration-500 hover:shadow-xl">
                <Quote className="h-7 w-7 text-accent/40" aria-hidden />
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
                  <p className="mt-0.5 text-xs text-muted-foreground">{t.role}</p>
                  <p className="mt-1 text-xs text-muted-foreground/80">{t.location}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <Statistics />
      <CTASection />
    </>
  );
}
