import Image from "next/image";
import { PERSONAL_INFO, SOCIAL_LINKS, STATS } from "@/app/lib/data";
import { SOCIAL_ICON_MAP } from "./icons";
import { Button } from "./button";
import { StatItem } from "./stat-item";

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="px-6 pb-16 pt-12 md:pb-24 md:pt-20"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Photo - shows first on mobile */}
        <div className="order-first flex justify-center lg:order-last">
          <div className="relative h-72 w-72 overflow-hidden rounded-2xl bg-gradient-to-br from-bg-card to-bg-secondary md:h-96 md:w-80 lg:h-[28rem] lg:w-[22rem]">
            <Image
              src="/images/faisal.png"
              alt="Faisal Aqdas"
              width={440}
              height={560}
              className="h-full w-full object-cover object-top"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-bg-primary/80 to-transparent" />
          </div>
        </div>

        {/* Text content */}
        <div>
          <p className="animate-fade-up text-sm text-text-secondary md:text-base">
            {PERSONAL_INFO.greeting}
          </p>
          <p className="animate-fade-up mt-1 text-2xl font-bold text-text-primary md:text-3xl">
            {PERSONAL_INFO.name}
          </p>
          <h1 className="animate-fade-up-delay-1 mt-2 text-4xl font-extrabold text-accent md:text-5xl lg:text-6xl">
            {PERSONAL_INFO.title}
          </h1>

          {/* Social icons */}
          <div className="animate-fade-up-delay-2 mt-6 flex items-center gap-4">
            {SOCIAL_LINKS.map((social) => {
              const Icon = SOCIAL_ICON_MAP[social.icon];
              return Icon ? (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-secondary transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ) : null;
            })}
          </div>

          {/* Buttons */}
          <div className="animate-fade-up-delay-2 mt-8 flex flex-wrap items-center gap-4">
            <Button href="#contact">Hire Me</Button>
            <Button variant="outline" href="/Faisal_Aqdas_Resume.pdf" showDownloadIcon download>
              Resume
            </Button>
          </div>

          {/* Stats */}
          <div className="animate-fade-up-delay-3 mt-10 flex items-center gap-8 border-t border-border pt-8">
            {STATS.map((stat) => (
              <StatItem
                key={stat.label}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
