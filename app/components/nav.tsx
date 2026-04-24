"use client";

import { NAV_SECTIONS } from '@/app/lib/data';
import { useScrolled } from '@/app/lib/hooks';
import { IconSearch } from '@/app/lib/icons';
import { usePortfolio } from './providers';

export default function Nav() {
  const scrolled = useScrolled(20);
  const { setCmdkOpen } = usePortfolio();
  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#top" className="brand">
          <span className="brand-dot"></span>
          <span>faisal.aqdas</span>
          <span className="nav-sep">/</span>
          <span className="nav-sub">senior&nbsp;fe</span>
        </a>
        <div className="nav-links">
          {NAV_SECTIONS.map(s => (
            <a key={s.id} href={`#${s.id}`}>
              <span className="num">{s.num}</span>
              <span>{s.label}</span>
            </a>
          ))}
        </div>
        <div className="nav-cta">
          <button className="cmdk-btn" onClick={() => setCmdkOpen(true)} aria-label="Open menu and search">
            <IconSearch size={13} />
            <span className="cmdk-label-desk">Search</span>
            <span className="cmdk-label-mob">Menu</span>
            <span className="kbd">⌘K</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
