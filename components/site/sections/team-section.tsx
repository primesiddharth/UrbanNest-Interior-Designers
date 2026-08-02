import { Linkedin, Instagram } from 'lucide-react';
import { SectionHeading } from '@/components/site/section-heading';
import { Reveal } from '@/components/site/reveal';
import { SmartImage } from '@/components/site/smart-image';
import { team } from '@/lib/site';

export function TeamSection() {
  return (
    <section className="container-px mx-auto max-w-7xl section-py">
      <SectionHeading
        eyebrow="The People"
        title="The hands and eyes behind every space"
        description="A small, senior team of designers, architects and craftspeople. You work directly with the people who design and build your space — never a chain of account managers."
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((member, i) => (
          <Reveal key={member.name} delay={i * 80}>
            <article className="group">
              <div className="relative overflow-hidden rounded-2xl">
                <SmartImage
                  src={member.image}
                  alt={member.name}
                  className="aspect-[4/5] w-full transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute bottom-4 left-4 flex gap-2 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on LinkedIn`}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-background/90 text-primary transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                  {member.social.instagram && (
                    <a
                      href={member.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on Instagram`}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-background/90 text-primary transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      <Instagram className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-foreground">
                {member.name}
              </h3>
              <p className="text-sm font-medium text-accent">{member.role}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {member.bio}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
