import { submitContact } from "@/app/actions/contact";
import { SectionHeading } from "./section-heading";
import { Button } from "./button";

export function Contact() {
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

        <form action={submitContact} className="space-y-5">
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

          <div className="flex justify-end">
            <Button type="submit">Send</Button>
          </div>
        </form>
      </div>
    </section>
  );
}
