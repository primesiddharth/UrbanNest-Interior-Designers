import { Reveal } from '@/components/site/reveal';
import { stats } from '@/lib/site';

export function Statistics() {
  return (
    <section className="bg-secondary/40">
      <div className="container-px mx-auto max-w-7xl py-16 sm:py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <div className="text-center">
                <p className="font-display text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
                  {s.value}
                </p>
                <p className="mt-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
