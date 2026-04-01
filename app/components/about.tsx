import Image from "next/image";
import { PERSONAL_INFO, SKILLS } from "@/app/lib/data";
import { SectionHeading } from "./section-heading";
import { SkillCircle } from "./skill-circle";
import { Button } from "./button";

export function About() {
  return (
    <section id="about" aria-label="About me" className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="About Me"
          subtitle={PERSONAL_INFO.aboutSubtitle}
        />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Photo */}
          <div className="flex justify-center">
            <div className="relative h-80 w-64 overflow-hidden rounded-2xl bg-gradient-to-br from-bg-card to-bg-secondary md:h-[28rem] md:w-80">
              <Image
                src="/images/faisal.png"
                alt="Faisal Aqdas"
                width={400}
                height={560}
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-bg-primary/80 to-transparent" />
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-sm leading-relaxed text-text-secondary md:text-base">
              {PERSONAL_INFO.bio}
            </p>
            <div className="mt-8">
              <Button variant="primary" href="/Faisal_Aqdas_Resume.pdf" showDownloadIcon download>
                Download Resume
              </Button>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {SKILLS.map((skill) => (
            <SkillCircle
              key={skill.name}
              name={skill.name}
              percentage={skill.percentage}
              icon={skill.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
