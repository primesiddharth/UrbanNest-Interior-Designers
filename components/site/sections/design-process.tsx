import { SectionHeading } from '@/components/site/section-heading';
import { Reveal } from '@/components/site/reveal';
import { DynamicIcon } from '@/components/site/dynamic-icon';
import { processSteps } from '@/lib/site';

export function DesignProcess() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 hero-grain pointer-events-none" aria-hidden />
      <div className="container-px relative mx-auto max-w-7xl section-py">
        <SectionHeading
          light
          eyebrow="How We Work"
          title="A clear path from first conversation to keys in hand"
          description="Four deliberate stages keep every project transparent, collaborative and on time — so you always know what is happening and what comes next."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal key={step.number} delay={i * 100}>
              <div className="group relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary-foreground/20 bg-primary-foreground/5 text-accent transition-colors duration-500 group-hover:bg-accent group-hover:text-accent-foreground">
                  <DynamicIcon name={step.icon} className="h-6 w-6" />
                </div>
                <span className="mt-5 block font-display text-sm font-medium text-primary-foreground/40">
                  {step.number}
                </span>
                <h3 className="mt-1 font-display text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-primary-foreground/65">
                  {step.description}
                </p>
                {i < processSteps.length - 1 && (
                  <span
                    className="absolute -right-4 top-7 hidden h-px w-8 bg-primary-foreground/20 lg:block"
                    aria-hidden
                  />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
