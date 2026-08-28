"use client";

import { FormEvent, useState } from "react";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

// TODO(integration): wire this up to a real email provider
// (e.g. Mailchimp, Klaviyo, or a custom API route) before launch.
export default function Newsletter() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitted");
  }

  return (
    <section className="bg-black py-16 sm:py-20" aria-labelledby="newsletter-heading">
      <Container>
        <Reveal className="relative border border-gold/25 bg-charcoal px-6 py-12 sm:px-16 sm:py-14 flex flex-col lg:flex-row items-center justify-between gap-8 overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: "radial-gradient(60% 100% at 0% 0%, rgba(198,161,91,0.10) 0%, rgba(198,161,91,0) 60%)",
            }}
            aria-hidden="true"
          />
          <div className="relative text-center lg:text-left max-w-md">
            <h2 id="newsletter-heading" className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-cream">
              Stay In The Loop
            </h2>
            <p className="mt-2 text-sm text-gray-300">
              Get updates on new arrivals, drops, and store news &mdash; straight
              to your inbox.
            </p>
          </div>

          {status === "submitted" ? (
            <p className="relative font-display text-sm uppercase tracking-wide text-gold" role="status">
              Thanks &mdash; you&rsquo;re on the list.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="relative flex w-full max-w-md flex-col sm:flex-row gap-3">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                required
                placeholder="Enter your email address"
                className="flex-1 min-w-0 bg-black border border-charcoal-border px-4 py-3.5 text-sm text-cream placeholder:text-gray-500 focus:outline-none focus:border-gold transition-colors"
              />
              <Button type="submit" className="shrink-0">
                Subscribe
              </Button>
            </form>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
