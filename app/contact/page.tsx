import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Linkedin } from 'lucide-react';
import { PageHeader } from '@/components/site/page-header';
import { Reveal } from '@/components/site/reveal';
import { ContactForm } from '@/components/site/sections/contact-form';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact — Book a Consultation',
  description:
    'Visit UrbanNest Interior Designers at 27 Design Studio Lane, Indiranagar, Bengaluru. Call +91 9567890124 or send a message to book your consultation.',
};

const contactDetails = [
  {
    icon: MapPin,
    label: 'Studio',
    value: `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
    href: siteConfig.mapEmbedUrl,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: siteConfig.phone,
    href: `tel:${siteConfig.phoneHref}`,
  },
  {
    icon: Mail,
    label: 'Email',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Clock,
    label: 'Studio Hours',
    value: siteConfig.hours,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title="Let’s create something beautiful together"
        description="Book a free consultation at our Indiranagar studio, or send us a message with a few details about your space. We respond within one working day."
        image="https://images.pexels.com/photos/8112162/pexels-photo-8112162.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="container-px mx-auto max-w-7xl section-py">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Details */}
          <Reveal className="lg:col-span-5">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground">
              Visit our studio
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Our Indiranagar studio is open by appointment. Drop in to explore
              material samples, meet the team, and talk through your project over
              a cup of filter coffee.
            </p>

            <ul className="mt-8 flex flex-col gap-5">
              {contactDetails.map((d) => {
                const content = (
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                      <d.icon className="h-5 w-5" aria-hidden />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                        {d.label}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground">{d.value}</p>
                    </div>
                  </div>
                );
                return (
                  <li key={d.label}>
                    {d.href ? (
                      <a
                        href={d.href}
                        target={d.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="block transition-opacity hover:opacity-80"
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                Follow the studio
              </p>
              <div className="mt-4 flex items-center gap-3">
                <Social href={siteConfig.social.instagram} label="Instagram">
                  <Instagram className="h-4 w-4" />
                </Social>
                <Social href={siteConfig.social.facebook} label="Facebook">
                  <Facebook className="h-4 w-4" />
                </Social>
                <Social href={siteConfig.social.linkedin} label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </Social>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="container-px mx-auto max-w-7xl pb-20">
        <Reveal className="overflow-hidden rounded-2xl border border-border">
          <div className="relative h-[420px] w-full bg-secondary">
            <iframe
              title="UrbanNest studio location map"
              src={siteConfig.mapEmbedUrl}
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </section>
    </>
  );
}

function Social({
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
      className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground/70 transition-all duration-300 hover:border-accent hover:bg-accent hover:text-accent-foreground"
    >
      {children}
    </a>
  );
}
