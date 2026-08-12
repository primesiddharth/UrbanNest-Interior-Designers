import type { Metadata } from 'next';
import { PageHeader } from '@/components/site/page-header';
import { SectionHeading } from '@/components/site/section-heading';
import { Reveal } from '@/components/site/reveal';
import { SmartImage } from '@/components/site/smart-image';
import { DynamicIcon } from '@/components/site/dynamic-icon';
import { TeamSection } from '@/components/site/sections/team-section';
import { DesignProcess } from '@/components/site/sections/design-process';
import { Statistics } from '@/components/site/sections/statistics';
import { CTASection } from '@/components/site/cta-section';
import { whyChooseUs, siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About — Our Studio & Team',
  description:
    'UrbanNest Interior Designers is a Bengaluru studio crafting warm, modern luxury interiors since 2014. Meet the team and learn our philosophy.',
};

const values = [
  {
    title: 'Material Honesty',
    description:
      'We specify real veneers, genuine BIS-grade plywood and natural stone — and show you the samples before we build.',
    icon: 'leaf',
  },
  {
    title: 'Design With Empathy',
    description:
      'Every brief starts with listening. We design around how you actually live, not around a trend.',
    icon: 'consultation',
  },
  {
    title: 'Craft Over Speed',
    description:
      'Good joinery takes time. We protect the details that matter, even when the timeline is tight.',
    icon: 'hammer',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title="A studio built on warm, honest craft"
        description="Since 2014, UrbanNest has designed and built interiors that feel rooted in India and quietly modern — for families, founders and brands across Bengaluru."
        image="https://images.pexels.com/photos/7490848/pexels-photo-7490848.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      {/* Story */}
      <section className="container-px mx-auto max-w-7xl section-py">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                <SmartImage
                  src="https://imgs.search.brave.com/XCMgSgviYzwhlwUpeFWfDbayGiDaGgJTH3lgL9zHLHo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5kZXNpZ25jYWZl/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMC8wMS8yMTAw/MjE0OC8zLWJlc3Qt/cHJvamVjdC1tYW5h/Z2VtZW50LWhvbWUt/aW50ZXJpb3ItZGVz/aWduZXJzLndlYnA"
                  alt="UrbanNest team reviewing plans with clients"
                  className="aspect-[4/3] w-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 hidden rounded-xl bg-primary px-6 py-4 text-primary-foreground shadow-xl sm:block">
                <p className="font-display text-2xl font-semibold">Since {siteConfig.foundedYear}</p>
                <p className="text-xs uppercase tracking-[0.15em] text-primary-foreground/70">
                  Bengaluru, India
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading
              align="left"
              eyebrow="The Beginning"
              title="From a single workshop to a full turnkey studio"
              description="UrbanNest started as a two-person workshop in Indiranagar with one belief — that great Indian interiors come from understanding people first, materials second. Over a decade later, that belief still drives every project."
            />
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                Today we are a team of designers, architects, project managers and in-house
                craftsmen delivering full-home and commercial turnkey projects. We keep the
                team small and senior on purpose — so the people you meet in your first
                consultation are the ones who see your project through to handover.
              </p>
              <p>
                Our work has always favoured warmth over spectacle. Natural light, honest
                materials, generous storage and quiet luxury — interiors that age
                gracefully and feel unmistakably like home.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary/40">
        <div className="container-px mx-auto max-w-7xl section-py">
          <SectionHeading
            eyebrow="What We Stand For"
            title="Three principles, held since day one"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <div className="rounded-2xl border border-border bg-card p-8 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary">
                    <DynamicIcon name={v.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {v.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <TeamSection />
      <DesignProcess />
      <Statistics />

      {/* Why choose */}
      <section className="container-px mx-auto max-w-7xl section-py">
        <SectionHeading
          eyebrow="Why UrbanNest"
          title="Six commitments that shape how we work"
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <div className="group h-full bg-card p-7 transition-colors duration-500 hover:bg-secondary/40">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary transition-colors duration-500 group-hover:bg-accent group-hover:text-accent-foreground">
                  <DynamicIcon name={item.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
