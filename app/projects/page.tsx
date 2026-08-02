import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin, Calendar, Maximize, Clock } from 'lucide-react';
import { PageHeader } from '@/components/site/page-header';
import { SectionHeading } from '@/components/site/section-heading';
import { Reveal } from '@/components/site/reveal';
import { SmartImage } from '@/components/site/smart-image';
import { CTASection } from '@/components/site/cta-section';
import { projects } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Projects — Detailed Case Studies',
  description:
    'Explore detailed UrbanNest project case studies — townhouses, apartments, villas, offices and restaurants with location, scale, timeline and design highlights.',
};

const metaItems = [
  { icon: MapPin, label: 'Location' },
  { icon: Calendar, label: 'Year' },
  { icon: Maximize, label: 'Area' },
  { icon: Clock, label: 'Duration' },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Case studies of spaces we have shaped"
        description="Each project tells a story of a brief, a site and a family or brand behind it. Here is a closer look at how a few of them came together."
        image="https://images.pexels.com/photos/20653888/pexels-photo-20653888.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="container-px mx-auto max-w-7xl section-py">
        <div className="flex flex-col gap-20 lg:gap-28">
          {projects.map((p, i) => {
            const meta = [p.location, p.year, p.area, p.duration];
            return (
              <Reveal key={p.slug} id={p.slug} as="article" className="scroll-mt-28">
                <div
                  className={`grid gap-10 lg:grid-cols-2 lg:gap-14 ${
                    i % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''
                  }`}
                >
                  {/* Image + gallery */}
                  <div>
                    <div className="overflow-hidden rounded-2xl">
                      <SmartImage
                        src={p.image}
                        alt={p.title}
                        className="aspect-[4/3] w-full"
                      />
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-3">
                      {p.gallery.slice(1).map((g, idx) => (
                        <div key={idx} className="overflow-hidden rounded-lg">
                          <SmartImage
                            src={g}
                            alt={`${p.title} detail ${idx + 1}`}
                            className="aspect-square w-full"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                      <span className="h-px w-6 bg-accent/70" aria-hidden />
                      {p.type}
                    </span>
                    <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                      {p.title}
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                      {p.summary}
                    </p>

                    <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                      {metaItems.map((m, idx) => (
                        <div
                          key={m.label}
                          className="rounded-xl border border-border bg-card p-4"
                        >
                          <m.icon className="h-4 w-4 text-accent" aria-hidden />
                          <dt className="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                            {m.label}
                          </dt>
                          <dd className="mt-0.5 text-sm font-medium text-foreground">
                            {meta[idx]}
                          </dd>
                        </div>
                      ))}
                    </dl>

                    <div className="mt-8">
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                        Highlights
                      </p>
                      <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                        {p.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex items-start gap-2.5 text-sm text-foreground/80"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href="/contact"
                      className="group mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-primary transition-colors hover:text-accent"
                    >
                      Start a project like this
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CTASection />
    </>
  );
}
