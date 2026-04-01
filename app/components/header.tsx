import { NAV_LINKS } from "@/app/lib/data";
import { Button } from "./button";
import { MobileNav } from "./mobile-nav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg-primary/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="text-xl font-bold tracking-tight text-accent"
          aria-label="Go to home"
        >
          FA
        </a>

        <nav className="hidden lg:block" aria-label="Main navigation">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`py-2 text-sm transition-colors hover:text-accent ${
                    i === 0 ? "text-accent" : "text-text-secondary"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Button href="#contact" className="px-5 py-2 text-xs">
            Hire Me
          </Button>
        </div>

        <MobileNav links={NAV_LINKS} />
      </div>
    </header>
  );
}
