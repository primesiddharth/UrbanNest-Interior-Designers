'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navLinks, siteConfig } from '@/lib/site';

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-border/60 bg-background/85 py-3 backdrop-blur-xl'
          : 'border-b border-transparent py-5'
      )}
    >
      <nav className="container-px mx-auto flex max-w-7xl items-center justify-between gap-6">
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          aria-label={`${siteConfig.fullName} home`}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground transition-transform duration-300 group-hover:scale-105">
            <span className="font-display text-lg font-semibold">U</span>
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-semibold tracking-tight text-foreground">
              UrbanNest
            </span>
            <span className="text-[0.6rem] font-medium uppercase tracking-[0.25em] text-muted-foreground">
              Interior Designers
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  'relative rounded-md px-3.5 py-2 text-sm font-medium transition-colors duration-300',
                  isActive(link.href)
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {link.title}
                <span
                  className={cn(
                    'absolute inset-x-3.5 -bottom-0.5 h-px origin-left bg-accent transition-transform duration-300',
                    isActive(link.href) ? 'scale-x-100' : 'scale-x-0'
                  )}
                  aria-hidden
                />
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${siteConfig.phoneHref}`}
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {siteConfig.phone}
          </a>
          <Link
            href="/contact"
            className="inline-flex h-10 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
          >
            Book Consultation
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background/60 text-foreground transition-colors hover:bg-secondary lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 top-0 z-40 lg:hidden',
          open ? 'pointer-events-auto' : 'pointer-events-none'
        )}
      >
        <div
          className={cn(
            'absolute inset-0 bg-primary/40 backdrop-blur-sm transition-opacity duration-300',
            open ? 'opacity-100' : 'opacity-0'
          )}
          onClick={() => setOpen(false)}
          aria-hidden
        />
        <div
          className={cn(
            'absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-background shadow-2xl transition-transform duration-400 ease-out',
            open ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="flex items-center justify-between border-b border-border px-6 py-5">
            <span className="font-display text-lg font-semibold">Menu</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground hover:bg-secondary"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <ul className="flex flex-col gap-1 overflow-y-auto px-4 py-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'flex items-center justify-between rounded-md px-4 py-3 text-base font-medium transition-colors',
                    isActive(link.href)
                      ? 'bg-secondary text-foreground'
                      : 'text-muted-foreground hover:bg-secondary/60 hover:text-foreground'
                  )}
                >
                  {link.title}
                  <span
                    className={cn(
                      'h-1.5 w-1.5 rounded-full transition-colors',
                      isActive(link.href) ? 'bg-accent' : 'bg-transparent'
                    )}
                    aria-hidden
                  />
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-col gap-3 border-t border-border px-6 py-6">
            <a
              href={`tel:${siteConfig.phoneHref}`}
              className="flex items-center justify-center gap-2 rounded-md border border-border px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <Phone className="h-4 w-4" aria-hidden />
              {siteConfig.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
