"use client";

import Link from "next/link";
import {
  Instagram,
  Facebook,
  Linkedin,
  Phone,
  Mail,
  MapPin,
  Clock,
  Heart,
  ArrowUpRight,
} from "lucide-react";

import { siteConfig, navLinks, services } from "@/lib/site";
import Image from "next/image";

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
              <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-md bg-white shadow-md transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/logo.jpg"
                  alt="UrbanNest Logo"
                  fill
                  sizes="40px"
                  className="object-cover"
                  priority
                />
              </div>

              <div>
                <h2 className="font-display text-xl font-bold">UrbanNest</h2>

                <p className="text-xs uppercase tracking-[0.25em] text-primary-foreground/60">
                  Interior Designers
                </p>
              </div>
            </Link>

            <p className="mt-5 text-sm leading-7 text-primary-foreground/70">
              {siteConfig.description}
            </p>

            <div className="mt-6 flex gap-3">
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
        <div className="mt-16 h-56 overflow-hidden rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 sm:h-64 lg:h-72">
          <iframe
            title="UrbanNest Studio Location"
            src={siteConfig.mapEmbedUrl}
            className="h-full w-full border-0 grayscale-[0.3]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-5 border-t border-primary-foreground/15 pt-6 sm:flex-row">
          <p className="text-xs text-primary-foreground/80">
            © {new Date().getFullYear()} {siteConfig.fullName}. All Rights
            Reserved.
          </p>

          <div className="flex items-center gap-2 text-xs text-primary-foreground/70">
            <span className="flex items-center">
              Made with
              <Heart className="mx-1.5 h-4 w-4 fill-red-500 text-red-500 animate-pulse" />
              by{" "}
              <a
                href="https://creyotech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 group inline-flex items-center font-semibold text-accent transition-all duration-300 hover:text-white/80"
              >
                Creyotech IT Services
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
