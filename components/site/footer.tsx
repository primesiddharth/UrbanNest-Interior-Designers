'use client';

import Link from 'next/link';
import {
  Instagram,
  Facebook,
  Linkedin,
  Phone,
  Mail,
  MapPin,
  Clock,
  Heart,
} from 'lucide-react';

import { siteConfig, navLinks, services } from '@/lib/site';

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary text-primary-foreground">
      <div
        className="absolute inset-0 hero-grain pointer-events-none"
        aria-hidden
      />

      <div className="container-px relative mx-auto max-w-7xl pt-20 pb-10">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                  {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <span className="font-display text-xl font-bold">U</span>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold">
                  UrbanNest
                </h2>

                <p className="text-xs uppercase tracking-[0.25em] text-primary-foreground/60">
                  Interior Designers
                </p>
              </div>
            </Link>

            <p className="mt-5 text-sm leading-7 text-primary-foreground/70">
              {siteConfig.description}
            </p>

            <div className="mt-6 flex gap-3">
              <SocialIcon
                href={siteConfig.social.instagram}
                label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </SocialIcon>

              <SocialIcon
                href={siteConfig.social.facebook}
                label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </SocialIcon>

              <SocialIcon
                href={siteConfig.social.linkedin}
                label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </SocialIcon>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/80">
              Explore
            </h3>

            <ul className="mt-5 space-y-3">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
                    {/* Services */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/80">
              Services
            </h3>

            <ul className="mt-5 space-y-3">
              {services.slice(0, 6).map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/services#${item.slug}`}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/80">
              Contact
            </h3>

            <div className="mt-5 space-y-4 text-sm text-primary-foreground/70">

              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-accent" />
                <span>
                  {siteConfig.address.line1}
                  <br />
                  {siteConfig.address.line2}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <a
                  href={`tel:${siteConfig.phoneHref}`}
                  className="hover:text-accent transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-accent transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-accent" />
                <span>{siteConfig.hours}</span>
              </div>

            </div>
          </div>

        </div>
                <div className="mt-16 h-48 overflow-hidden rounded-xl border border-primary-foreground/10 bg-primary-foreground/5">
          <iframe
            title="UrbanNest Studio Location"
            src={siteConfig.mapEmbedUrl}
            className="h-full w-full grayscale-[0.3]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-5 border-t border-primary-foreground/15 pt-6 sm:flex-row">

          <p className="text-xs text-primary-foreground/55">
  © {new Date().getFullYear()} {siteConfig.fullName}. All Rights Reserved.
</p>

<div className="flex items-center gap-2 text-xs sm:text-sm text-primary-foreground/70">
  <span className="flex items-center">
    Made with

    <Heart
      className="mx-1.5 h-4 w-4 fill-red-500 text-red-500 animate-pulse"
    />

    by{" "}

    <a
      href="https://creyotech.com"
      target="_blank"
      rel="noopener noreferrer"
      className="ml-1 font-semibold text-accent transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_10px_currentColor]"
    >
      CreyoTech
    </a>
  </span>
</div>
            

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
      className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/70 transition-all duration-300 hover:border-accent hover:bg-accent hover:text-accent-foreground"
    >
      {children}
    </a>
  );
}