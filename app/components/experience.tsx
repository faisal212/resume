import { EXPERIENCES } from "@/app/lib/data";
import { SectionHeading } from "./section-heading";

export function Experience() {
  return (
    <section
      id="experience"
      aria-label="Work experience"
      className="px-6 py-16 md:py-24"
    >
      <div className="mx-auto max-w-3xl">
        <SectionHeading title="Experience" />

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-[7px] top-2 bottom-2 w-px bg-border md:left-[9px]"
            aria-hidden="true"
          />

          <div className="space-y-10">
            {EXPERIENCES.map((exp, i) => (
              <div key={i} className="relative pl-8 md:pl-10">
                {/* Dot */}
                <div
                  className={`absolute left-0 top-2 h-[15px] w-[15px] rounded-full border-2 md:h-[19px] md:w-[19px] ${
                    exp.current
                      ? "border-accent bg-accent"
                      : "border-text-muted bg-text-muted"
                  }`}
                  aria-hidden="true"
                />

                {/* Content */}
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-bold text-text-primary md:text-2xl">
                      {exp.title}
                    </h3>
                    <span className="rounded-full border border-border px-3 py-0.5 text-xs font-medium text-text-secondary">
                      {exp.startYear} &mdash; {exp.endYear}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-semibold text-accent">
                    {exp.company}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
