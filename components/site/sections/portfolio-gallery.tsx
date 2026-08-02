'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { SmartImage } from '@/components/site/smart-image';
import { portfolioItems, portfolioCategories } from '@/lib/site';

export function PortfolioGallery() {
  const [active, setActive] = useState<string>('All');

  const filtered =
    active === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === active);

  return (
    <div className="container-px mx-auto max-w-7xl section-py">
      <div className="flex flex-wrap items-center justify-center gap-2.5">
        {portfolioCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={cn(
              'rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300',
              active === cat
                ? 'border-primary bg-primary text-primary-foreground'
                : 'border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground'
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-10 grid auto-rows-[220px] grid-cols-2 gap-4 sm:auto-rows-[260px] md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((item, i) => (
          <figure
            key={item.id}
            className={cn(
              'group relative overflow-hidden rounded-xl',
              item.span && 'col-span-2 row-span-2'
            )}
          >
            <SmartImage
              src={item.image}
              alt={item.title}
              className="h-full w-full transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/20 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
            <figcaption className="absolute inset-x-0 bottom-0 p-4 translate-y-1 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-accent">
                {item.category}
              </span>
              <p className="mt-1 font-display text-base font-semibold text-white">
                {item.title}
              </p>
              <p className="text-xs text-white/70">{item.location}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
