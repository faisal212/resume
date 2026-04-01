"use client";

import { useState } from "react";
import type { Project } from "@/app/lib/data";
import { ProjectCard } from "./project-card";

type PortfolioFilterProps = {
  categories: readonly string[];
  projects: Project[];
};

export function PortfolioFilter({
  categories,
  projects,
}: PortfolioFilterProps) {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <>
      <div
        className="mb-10 flex flex-wrap justify-center gap-2"
        role="tablist"
        aria-label="Filter projects by category"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={active === cat}
            aria-pressed={active === cat}
            onClick={() => setActive(cat)}
            className={`rounded-full px-5 py-2.5 text-xs font-medium transition-colors ${
              active === cat
                ? "bg-accent text-white"
                : "bg-bg-card text-text-secondary hover:text-text-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            category={project.category}
            color={project.color}
            image={project.image}
            images={project.images}
          />
        ))}
      </div>
    </>
  );
}
