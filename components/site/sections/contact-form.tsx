'use client';

import { useState, type FormEvent } from 'react';
import { CheckCircle2, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Reveal } from '@/components/site/reveal';
import { services, siteConfig } from '@/lib/site';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 1200);
  };

  if (status === 'success') {
    return (
      <Reveal className="flex h-full min-h-[420px] flex-col items-center justify-center rounded-2xl border border-border bg-card p-10 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/15 text-accent">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="mt-6 font-display text-2xl font-semibold text-foreground">
          Thank you — message received
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
          Our studio team will reach out within one working day to schedule your
          consultation. For anything urgent, call us at {siteConfig.phone}.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm font-semibold text-accent hover:underline"
        >
          Send another message
        </button>
      </Reveal>
    );
  }

  return (
    <Reveal className="rounded-2xl border border-border bg-card p-6 sm:p-8">
      <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground">
        Tell us about your space
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Share a few details and we will get back within one working day.
      </p>
      <form onSubmit={handleSubmit} className="mt-7 flex flex-col gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Full name" htmlFor="name">
            <Input id="name" name="name" placeholder="Your name" required />
          </Field>
          <Field label="Phone" htmlFor="phone">
            <Input id="phone" name="phone" type="tel" placeholder="+91 ..." required />
          </Field>
        </div>
        <Field label="Email" htmlFor="email">
          <Input id="email" name="email" type="email" placeholder="you@email.com" required />
        </Field>
        <Field label="Service you're interested in" htmlFor="service">
          <select
            id="service"
            name="service"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            defaultValue=""
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.title}
              </option>
            ))}
            <option value="other">Something else</option>
          </select>
        </Field>
        <Field label="Tell us about your project" htmlFor="message">
          <Textarea
            id="message"
            name="message"
            placeholder="Location, size, timeline, what you have in mind..."
            rows={4}
            required
          />
        </Field>
        <Button
          type="submit"
          disabled={status === 'submitting'}
          className="h-12 w-full bg-primary text-sm font-semibold text-primary-foreground hover:bg-accent hover:text-accent-foreground"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
              Sending...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" aria-hidden />
              Send Message
            </>
          )}
        </Button>
        <p className="text-center text-xs text-muted-foreground">
          By submitting, you agree to be contacted about your enquiry. We never share your details.
        </p>
      </form>
    </Reveal>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={htmlFor} className="text-sm font-medium text-foreground">
        {label}
      </Label>
      {children}
    </div>
  );
}
