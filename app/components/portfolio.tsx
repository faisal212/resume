import { FILTER_CATEGORIES, PROJECTS } from "@/app/lib/data";
import { SectionHeading } from "./section-heading";
import { PortfolioFilter } from "./portfolio-filter";

export function Portfolio() {
  return (
    <section
      id="portfolio"
      aria-label="Portfolio"
      className="bg-bg-secondary px-6 py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Portfolio" />
        <PortfolioFilter
          categories={FILTER_CATEGORIES}
          projects={PROJECTS}
        />
      </div>
    </section>
  );
}
