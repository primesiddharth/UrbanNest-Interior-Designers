import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { Reveal } from '@/components/site/reveal';
import { SmartImage } from '@/components/site/smart-image';
import { siteConfig } from '@/lib/site';

export function CTASection({
  title = 'Let’s design a space that feels unmistakably yours.',
  description = 'Book a free consultation at our Indiranagar studio. We’ll walk you through our process, share ideas for your space, and send a tailored proposal within a week.',
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="container-px mx-auto max-w-7xl section-py">
        <Reveal className="relative overflow-hidden rounded-3xl bg-primary">
          <div className="absolute inset-0">
            <SmartImage
              src="https://images.pexels.com/photos/7490849/pexels-photo-7490849.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt=""
              fill
              className="absolute inset-0 h-full w-full opacity-25"
              imgClassName="h-full w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/70" />
          </div>
          <div className="relative flex flex-col items-start gap-8 p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between lg:p-16">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                <span className="h-px w-6 bg-accent/70" aria-hidden />
                Start Your Project
              </span>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl text-balance">
                {title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/75">
                {description}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-accent px-7 text-sm font-semibold text-accent-foreground transition-all duration-300 hover:scale-[1.02] hover:bg-white"
              >
                Book a Consultation
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/30 px-7 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Phone className="h-4 w-4" aria-hidden />
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
