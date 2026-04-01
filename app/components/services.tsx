import { SERVICES } from "@/app/lib/data";
import { SectionHeading } from "./section-heading";
import { ServiceCard } from "./service-card";

export function Services() {
  return (
    <section id="services" aria-label="Services" className="bg-bg-secondary px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Services"
          subtitle="End-to-end engineering services from pixel-perfect frontends to scalable cloud infrastructure and AI-powered automation."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <ServiceCard
              key={i}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
