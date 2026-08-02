'use client';

import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';
import { SmartImage } from '@/components/site/smart-image';
import { stats } from '@/lib/site';

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <SmartImage
          src="https://images.pexels.com/photos/7148849/pexels-photo-7148849.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Modern luxury Indian living room interior by UrbanNest"
          priority
          fill
          className="absolute inset-0 h-full w-full"
          imgClassName="h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/45 to-primary/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-transparent" />
      </div>

      <div className="container-px relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center pt-28 pb-20">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-white backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
            Bengaluru · Est. 2014
          </span>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[4rem] text-balance">
            Where Indian homes meet{' '}
            <span className="italic text-accent">modern luxury</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            UrbanNest crafts warm, timeless interiors for apartments, villas and
            commercial spaces across Bengaluru — designed around the way you live,
            built to last a lifetime.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-md bg-accent px-7 text-sm font-semibold text-accent-foreground transition-all duration-300 hover:scale-[1.02] hover:bg-white"
            >
              Book a Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/30 px-7 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              <Play className="h-4 w-4" aria-hidden />
              View Our Work
            </Link>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-white/15 pt-8">
            {stats.slice(0, 3).map((s) => (
              <div key={s.label}>
                <dt className="font-display text-3xl font-semibold text-white">{s.value}</dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.15em] text-white/60">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/50 sm:flex">
        <span className="text-[0.65rem] uppercase tracking-[0.3em]">Scroll</span>
        <span className="h-10 w-px animate-pulse bg-white/40" aria-hidden />
      </div>
    </section>
  );
}
