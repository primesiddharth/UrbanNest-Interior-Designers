'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { SectionHeading } from '@/components/site/section-heading';
import { Reveal } from '@/components/site/reveal';
import { faqItems } from '@/lib/site';

export function HomeFAQ() {
  return (
    <section className="bg-secondary/40">
      <div className="container-px mx-auto max-w-3xl section-py">
        <SectionHeading
          eyebrow="Good to Know"
          title="Frequently asked questions"
          description="Quick answers to the things clients ask us most. Have a question that is not here? We are a message away."
        />
        <Reveal className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.slice(0, 5).map((item, i) => (
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
        <Reveal className="mt-8 text-center" delay={120}>
          <Link
            href="/faq"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent"
          >
            See all questions
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
