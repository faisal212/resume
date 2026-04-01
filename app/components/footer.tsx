import { NAV_LINKS, SOCIAL_LINKS, PERSONAL_INFO } from "@/app/lib/data";
import { SOCIAL_ICON_MAP, MailIcon, PhoneIcon } from "./icons";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-footer px-6 py-12">
      <div className="mx-auto max-w-7xl">
        {/* Logo */}
        <div className="text-center">
          <a
            href="#home"
            className="text-xl font-bold tracking-tight text-accent"
          >
            FA
          </a>
        </div>

        {/* Nav */}
        <nav className="mt-6" aria-label="Footer navigation">
          <ul className="flex flex-wrap items-center justify-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-text-secondary transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social icons */}
        <div className="mt-6 flex items-center justify-center gap-4">
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

        {/* Contact info */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-text-secondary">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="flex items-center gap-2 transition-colors hover:text-accent"
          >
            <MailIcon className="h-4 w-4" />
            {PERSONAL_INFO.email}
          </a>
          <a
            href={`tel:${PERSONAL_INFO.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 transition-colors hover:text-accent"
          >
            <PhoneIcon className="h-4 w-4" />
            {PERSONAL_INFO.phone}
          </a>
        </div>

        {/* Credits */}
        <p className="mt-8 text-center text-xs text-text-muted">
          {PERSONAL_INFO.designedBy}
        </p>
      </div>
    </footer>
  );
}
