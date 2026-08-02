import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '@/components/site/section-heading';
import { Reveal } from '@/components/site/reveal';
import { SmartImage } from '@/components/site/smart-image';
import { DynamicIcon } from '@/components/site/dynamic-icon';
import { services } from '@/lib/site';

export function ServicesGrid() {
  return (
    <section className="bg-secondary/40">
      <div className="container-px mx-auto max-w-7xl section-py">
        <SectionHeading
          eyebrow="What We Do"
          title="Interior design services, end to end"
          description="From a single modular kitchen to a full villa turnkey — every service is delivered by one in-house team, accountable from first sketch to final styling."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 70}>
              <Link
                href={`/services#${service.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <SmartImage
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 h-full w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg bg-background/90 text-primary shadow-sm backdrop-blur-sm transition-colors duration-500 group-hover:bg-accent group-hover:text-accent-foreground">
                    <DynamicIcon name={service.icon} className="h-5 w-5" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.short}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors group-hover:text-accent">
                    Explore
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
