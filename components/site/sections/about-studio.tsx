import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '@/components/site/section-heading';
import { Reveal } from '@/components/site/reveal';
import { SmartImage } from '@/components/site/smart-image';
import { certifications, siteConfig } from '@/lib/site';

const points = [
  'In-house design, execution & styling',
  'Photorealistic 3D renders before build',
  'Transparent, fixed quotations',
];

export function AboutStudio() {
  return (
    <section className="container-px mx-auto max-w-7xl section-py">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="order-2 lg:order-1">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <SmartImage
                src="https://images.pexels.com/photos/7490849/pexels-photo-7490849.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="UrbanNest designer presenting material samples to clients"
                className="aspect-[4/5] w-full"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 hidden w-56 overflow-hidden rounded-xl border-4 border-background shadow-xl sm:block">
              <SmartImage
                src="https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Finished UrbanNest luxury living room"
                className="aspect-square w-full"
              />
            </div>
            <div className="absolute -left-4 -top-6 hidden rounded-xl bg-primary px-5 py-4 text-primary-foreground shadow-xl sm:block">
              <p className="font-display text-3xl font-semibold">{new Date().getFullYear() - siteConfig.foundedYear}+</p>
              <p className="text-xs uppercase tracking-[0.15em] text-primary-foreground/70">
                Years of craft
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal className="order-1 lg:order-2" delay={120}>
          <SectionHeading
            align="left"
            eyebrow="About the Studio"
            title="A Bengaluru studio with an obsession for warm, liveable luxury"
            description="UrbanNest was founded in 2014 with one belief — that an Indian home should feel rooted, generous and quietly luxurious. We design and build spaces that honour natural materials, honest craftsmanship and the way your family actually lives."
          />
          <ul className="mt-8 flex flex-col gap-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-foreground/80">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {certifications.map((c) => (
              <span
                key={c}
                className="rounded-full border border-border bg-secondary/50 px-3.5 py-1.5 text-xs font-medium text-foreground/70"
              >
                {c}
              </span>
            ))}
          </div>
          <Link
            href="/about"
            className="group mt-9 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent"
          >
            More about the studio
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
