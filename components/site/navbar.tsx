"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

import { cn } from "@/lib/utils";
import { navLinks, siteConfig } from "@/lib/site";

export function Navbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Active navigation
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      {/* NAVBAR */}
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[100] transition-all duration-300",
          scrolled
            ? "border-b border-border/60 bg-background/90 px-4 py-3 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent px-4 py-5",
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          {/*  LOGO */}
          <Link
            href="/"
            className="group relative z-[110] flex shrink-0 items-center gap-3"
            aria-label="UrbanNest home"
          >
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

            <div className="hidden flex-col leading-none sm:flex">
              <span
                className={cn(
                  "font-display text-lg font-semibold tracking-tight transition-colors duration-300",
                  scrolled ? "text-foreground" : "text-white",
                )}
              >
                UrbanNest
              </span>

              <span
                className={cn(
                  "text-[0.6rem] font-medium uppercase tracking-[0.25em] transition-colors duration-300",
                  scrolled ? "text-muted-foreground" : "text-white/60",
                )}
              >
                Interior Designers
              </span>
            </div>
          </Link>

          {/*DESKTOP NAV */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const active = isActive(link.href);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "relative rounded-md px-3.5 py-2 text-sm font-medium transition-colors duration-300",
                      scrolled
                        ? active
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                        : active
                          ? "text-white"
                          : "text-white/75 hover:text-white",
                    )}
                  >
                    {link.title}

                    <span
                      className={cn(
                        "absolute inset-x-3.5 -bottom-0.5 h-px origin-left bg-accent transition-transform duration-300",
                        active ? "scale-x-100" : "scale-x-0",
                      )}
                      aria-hidden
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/*DESKTOP ACTIONS */}
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={`tel:${siteConfig.phoneHref}`}
              className={cn(
                "flex items-center gap-2 text-sm font-medium transition-colors duration-300",
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-white/80 hover:text-white",
              )}
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

          {/*MOBILE BUTTON */}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className={cn(
              "relative z-[110] flex h-10 w-10 items-center justify-center rounded-md border transition-all duration-300 lg:hidden",
              scrolled
                ? "border-border bg-background text-foreground hover:bg-secondary"
                : "border-white/20 bg-black/20 text-white backdrop-blur-md hover:bg-white/10",
            )}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      {/*MOBILE MENU*/}
      <div
        className={cn(
          "fixed inset-0 z-[90] lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        {/* Overlay */}
        <div
          className={cn(
            "absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setOpen(false)}
        />

        {/* Drawer */}
        <aside
          className={cn(
            "absolute right-0 top-0 flex h-dvh w-[82%] max-w-sm flex-col bg-background shadow-2xl transition-transform duration-300 ease-out",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between border-b border-border px-6 py-5">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3"
            >
              <div className="relative h-9 w-9 overflow-hidden rounded-md">
                <Image
                  src="/images/logo.jpg"
                  alt="UrbanNest Logo"
                  fill
                  sizes="36px"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col leading-none">
                <span className="font-display text-base font-semibold text-foreground">
                  UrbanNest
                </span>

                <span className="mt-1 text-[0.55rem] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Interior Designers
                </span>
              </div>
            </Link>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:bg-secondary"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile Links */}
          <ul className="flex flex-col gap-1 overflow-y-auto px-4 py-6">
            {navLinks.map((link) => {
              const active = isActive(link.href);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center justify-between rounded-lg px-4 py-3.5 text-base font-medium transition-colors",
                      active
                        ? "bg-secondary text-foreground"
                        : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground",
                    )}
                  >
                    <span>{link.title}</span>

                    <span
                      className={cn(
                        "h-1.5 w-1.5 rounded-full transition-colors",
                        active ? "bg-accent" : "bg-transparent",
                      )}
                      aria-hidden
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile Bottom Actions */}
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
              onClick={() => setOpen(false)}
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Book a Consultation
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}
