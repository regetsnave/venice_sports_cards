"use client";

import { FormEvent, useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { business } from "@/lib/constants";
import { PhoneIcon } from "@/components/ui/icons";

const inputCls =
  "w-full bg-black border border-charcoal-border px-4 py-3 text-sm text-cream placeholder:text-gray-500 focus:outline-none focus:border-gold";

// TODO(integration): connect this to a real endpoint (API route + email
// service, or a form provider) before launch. Currently front-end only.
export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitted");
  }

  return (
    <section className="bg-charcoal py-20 sm:py-24 border-t border-charcoal-border" aria-labelledby="contact-heading">
      <Container className="grid lg:grid-cols-5 gap-14">
        <div className="lg:col-span-2 flex flex-col gap-6" id="contact-heading">
          <SectionHeading eyebrow="Get In Touch" title="Contact Us" align="left" />
          <p className="text-sm text-gray-300 leading-relaxed">
            Questions about buying, selling, or trading? Send us a message and
            we&rsquo;ll get back to you, or call the shop directly.
          </p>
          <a
            href={business.phone.href}
            className="inline-flex items-center gap-3 font-display text-lg font-semibold text-gold hover:text-gold-light transition-colors"
          >
            <PhoneIcon className="size-5" />
            {business.phone.display}
          </a>
        </div>

        <div className="lg:col-span-3">
          {status === "submitted" ? (
            <div className="border border-gold/30 bg-black p-8" role="status">
              <p className="font-display text-lg text-gold uppercase">Message Sent</p>
              <p className="text-sm text-gray-300 mt-2">
                Thanks for reaching out &mdash; we&rsquo;ll be in touch soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-name" className="text-xs font-display uppercase tracking-wide text-gray-400">
                  Name
                </label>
                <input id="contact-name" name="name" type="text" required className={inputCls} />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-email" className="text-xs font-display uppercase tracking-wide text-gray-400">
                  Email
                </label>
                <input id="contact-email" name="email" type="email" required className={inputCls} />
              </div>
              <div className="flex flex-col gap-2 sm:col-span-2">
                <label htmlFor="contact-phone" className="text-xs font-display uppercase tracking-wide text-gray-400">
                  Phone (optional)
                </label>
                <input id="contact-phone" name="phone" type="tel" className={inputCls} />
              </div>
              <div className="flex flex-col gap-2 sm:col-span-2">
                <label htmlFor="contact-message" className="text-xs font-display uppercase tracking-wide text-gray-400">
                  Message
                </label>
                <textarea id="contact-message" name="message" rows={5} required className={inputCls} />
              </div>
              <div className="sm:col-span-2">
                <Button type="submit" className="w-full sm:w-auto">
                  Send Message
                </Button>
              </div>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
