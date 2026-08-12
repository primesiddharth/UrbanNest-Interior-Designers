import type { Metadata } from 'next';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { PageHeader } from '@/components/site/page-header';
import { Reveal } from '@/components/site/reveal';
import { CTASection } from '@/components/site/cta-section';
import { faqItems, siteConfig } from '@/lib/site';
import { Phone, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'FAQ — Answers to Common Questions',
  description:
    'Answers to common questions about working with UrbanNest Interior Designers — pricing, timelines, scope, areas served and more.',
};

export default function FAQPage() {
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Questions, answered"
        description="Everything you might want to know before starting a project with us. Still curious? We are a quick call or message away."
        image="https://images.pexels.com/photos/6266316/pexels-photo-6266316.jpeg"
      />

      <section className="container-px mx-auto max-w-3xl section-py">
        <Reveal>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-border/80 bg-card px-5 first:rounded-t-lg last:rounded-b-lg [&:not(:last-child)]:border-b"
              >
                <AccordionTrigger className="text-left font-display text-base font-semibold text-foreground hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>

        <Reveal className="mt-10 rounded-2xl border border-border bg-secondary/40 p-7 text-center" delay={100}>
          <h2 className="font-display text-xl font-semibold text-foreground">
            Still have a question?
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            We are happy to talk through anything not covered here.
          </p>
          <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`tel:${siteConfig.phoneHref}`}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <Phone className="h-4 w-4" aria-hidden />
              {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-border px-5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              <Mail className="h-4 w-4" aria-hidden />
              {siteConfig.email}
            </a>
          </div>
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}
