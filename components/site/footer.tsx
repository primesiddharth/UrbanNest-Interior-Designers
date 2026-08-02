'use client';

import Link from 'next/link';
import { Instagram, Facebook, Linkedin, Phone, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { siteConfig, navLinks, services } from '@/lib/site';

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 hero-grain pointer-events-none" aria-hidden />
      <div className="container-px relative mx-auto max-w-7xl pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2.5" aria-label="UrbanNest home">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-accent text-accent-foreground">
                <span className="font-display text-lg font-semibold">U</span>
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-semibold">UrbanNest</span>
                <span className="text-[0.6rem] font-medium uppercase tracking-[0.25em] text-primary-foreground/60">
                  Interior Designers
                </span>
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <SocialIcon href={siteConfig.social.instagram} label="Instagram">
                <Instagram className="h-4 w-4" />
              </SocialIcon>
              <SocialIcon href={siteConfig.social.facebook} label="Facebook">
                <Facebook className="h-4 w-4" />
              </SocialIcon>
              <SocialIcon href={siteConfig.social.linkedin} label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </SocialIcon>
            </div>
          </div>

          {/* Explore */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/80">
              Explore
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/65 transition-colors hover:text-accent"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/80">
              Services
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {services.slice(0, 7).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="text-sm text-primary-foreground/65 transition-colors hover:text-accent"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/80">
              Studio
            </h3>
            <ul className="mt-5 flex flex-col gap-4 text-sm text-primary-foreground/70">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                <span>
                  {siteConfig.address.line1}
                  <br />
                  {siteConfig.address.line2}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                <a href={`tel:${siteConfig.phoneHref}`} className="transition-colors hover:text-accent">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-accent">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                <span>{siteConfig.hours}</span>
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-primary-foreground"
            >
              Book a consultation
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>

        <div className="mt-16 h-48 overflow-hidden rounded-xl border border-primary-foreground/10 bg-primary-foreground/5">
          <iframe
            title="UrbanNest studio location map"
            src={siteConfig.mapEmbedUrl}
            className="h-full w-full grayscale-[0.3]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/15 pt-6 sm:flex-row">
          <p className="text-xs text-primary-foreground/55">
            © {new Date().getFullYear()} {siteConfig.fullName}. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/55">
            Crafted in Bengaluru · Designed for modern Indian living
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/70 transition-all duration-300 hover:border-accent hover:bg-accent hover:text-accent-foreground"
    >
      {children}
    </a>
  );
}
