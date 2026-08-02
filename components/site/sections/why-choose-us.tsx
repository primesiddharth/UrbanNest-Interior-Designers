import { SectionHeading } from '@/components/site/section-heading';
import { Reveal } from '@/components/site/reveal';
import { DynamicIcon } from '@/components/site/dynamic-icon';
import { whyChooseUs } from '@/lib/site';

export function WhyChooseUs() {
  return (
    <section className="container-px mx-auto max-w-7xl section-py">
      <SectionHeading
        eyebrow="Why UrbanNest"
        title="The difference is in the details"
        description="Six commitments that shape how we work — and why our clients come back to us for their next space, and refer their family and friends."
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
  );
}
