"use client";

import { useActionState } from "react";
import { submitContact } from "@/app/actions/contact";
import { SectionHeading } from "./section-heading";

export function Contact() {
  const [state, formAction, isPending] = useActionState(submitContact, null);

  return (
    <section
      id="contact"
      aria-label="Contact me"
      className="px-6 py-16 md:py-24"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          title="Contact me"
          subtitle="Cultivating Connections: Reach Out And Connect With Me."
        />

        {state?.success ? (
          <div className="animate-fade-up rounded-2xl border border-accent/30 bg-accent/10 p-8 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/20">
              <svg className="h-7 w-7 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-text-primary">
              {state.message}
            </h3>
            <p className="mt-2 text-sm text-text-secondary">
              I typically respond within 24 hours.
            </p>
          </div>
        ) : (
          <form action={formAction} className="group space-y-5">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Name"
                  className="w-full rounded-lg border border-border bg-bg-card px-4 py-3 text-sm text-text-primary placeholder:text-text-muted transition-colors focus:border-accent focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Email"
                  className="w-full rounded-lg border border-border bg-bg-card px-4 py-3 text-sm text-text-primary placeholder:text-text-muted transition-colors focus:border-accent focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="service" className="sr-only">
                  Service Of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  defaultValue=""
                  className="w-full appearance-none rounded-lg border border-border bg-bg-card px-4 py-3 text-sm text-text-muted transition-colors focus:border-accent focus:outline-none"
                >
                  <option value="" disabled>
                    Service Of Interest
                  </option>
                  <option value="frontend">Frontend Development</option>
                  <option value="fullstack">Full Stack Development</option>
                  <option value="ai-automation">AI Automation</option>
                  <option value="saas">SaaS Development</option>
                  <option value="mobile">Mobile Development</option>
                  <option value="consulting">Technical Consulting</option>
                </select>
              </div>
              <div>
                <label htmlFor="budget" className="sr-only">
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  defaultValue=""
                  className="w-full appearance-none rounded-lg border border-border bg-bg-card px-4 py-3 text-sm text-text-muted transition-colors focus:border-accent focus:outline-none"
                >
                  <option value="" disabled>
                    Budget Range
                  </option>
                  <option value="under-1k">Under $1,000</option>
                  <option value="1k-5k">$1,000 – $5,000</option>
                  <option value="5k-15k">$5,000 – $15,000</option>
                  <option value="15k-plus">$15,000+</option>
                  <option value="discuss">Let&apos;s discuss</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="details" className="sr-only">
                Project Details
              </label>
              <textarea
                id="details"
                name="details"
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-lg border border-border bg-bg-card px-4 py-3 text-sm text-text-primary placeholder:text-text-muted transition-colors focus:border-accent focus:outline-none"
              />
            </div>

            {state?.success === false && (
              <p className="text-sm text-red-400">{state.message}</p>
            )}

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isPending}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary disabled:opacity-50 group-invalid:pointer-events-none group-invalid:opacity-40"
              >
                {isPending ? (
                  <>
                    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 12a9 9 0 1 1-6.219-8.56" strokeLinecap="round" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send"
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
