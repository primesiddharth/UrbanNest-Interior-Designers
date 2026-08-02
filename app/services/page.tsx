import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import { PageHeader } from '@/components/site/page-header';
import { SectionHeading } from '@/components/site/section-heading';
import { Reveal } from '@/components/site/reveal';
import { SmartImage } from '@/components/site/smart-image';
import { DynamicIcon } from '@/components/site/dynamic-icon';
import { DesignProcess } from '@/components/site/sections/design-process';
import { CTASection } from '@/components/site/cta-section';
import { services } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Services — Residential, Commercial & Modular Interiors',
  description:
    'Residential interiors, modular kitchens, living rooms, bedrooms, office interiors, commercial spaces and bespoke furniture & decor by UrbanNest Interior Designers.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="Interior design services for every space"
        description="A single in-house team covers design, execution and styling — so your project moves from concept to handover without the friction of multiple vendors."
        image="https://images.pexels.com/photos/6920446/pexels-photo-6920446.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      {/* Service overview grid */}
      <section className="container-px mx-auto max-w-7xl section-py">
        <SectionHeading
          eyebrow="At a Glance"
          title="Seven ways we can help"
          description="Pick a single service or combine them into a full turnkey package. Every engagement begins with a consultation."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 60}>
              <a
                href={`#${s.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary transition-colors duration-500 group-hover:bg-accent group-hover:text-accent-foreground">
                  <DynamicIcon name={s.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {s.short}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors group-hover:text-accent">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Detailed services */}
      <section className="bg-secondary/40">
        <div className="container-px mx-auto max-w-7xl section-py">
          <div className="flex flex-col gap-16">
            {services.map((s, i) => (
              <Reveal key={s.slug} id={s.slug} as="article" className="scroll-mt-28">
                <div
                  className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                    i % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''
                  }`}
                >
                  <div className="overflow-hidden rounded-2xl">
                    <SmartImage
                      src={s.image}
                      alt={s.title}
                      className="aspect-[4/3] w-full"
                    />
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                      <span className="h-px w-6 bg-accent/70" aria-hidden />
                      {String(i + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
                    </span>
                    <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                      {s.title}
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                      {s.description}
                    </p>
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-foreground/80">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="group mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      Enquire about {s.title}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <DesignProcess />
      <CTASection />
    </>
  );
}
