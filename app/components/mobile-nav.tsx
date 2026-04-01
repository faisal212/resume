"use client";

import { useState } from "react";
import { MenuIcon, CloseIcon } from "./icons";
import type { NavLink } from "@/app/lib/data";

export function MobileNav({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        className="p-2 text-text-primary"
      >
        {open ? (
          <CloseIcon className="h-6 w-6" />
        ) : (
          <MenuIcon className="h-6 w-6" />
        )}
      </button>

      {open && (
        <nav
          className="absolute left-0 right-0 top-full border-b border-border bg-bg-primary/98 backdrop-blur-sm"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col px-6 py-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm text-text-secondary transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
