"use client";

import { useState, useEffect, useRef, useMemo } from 'react';
import type { ComponentType } from 'react';
import { COMMANDS } from '@/app/lib/data';
import type { Command, IconProps } from '@/app/lib/data';
import {
  IconArrow, IconHome, IconBox, IconZap, IconLayers, IconTerminal,
  IconMail, IconGitHub, IconLinkedIn, IconDownload, IconTarget
} from '@/app/lib/icons';
import { usePortfolio } from './providers';

export default function CommandPalette() {
  const { cmdkOpen, setCmdkOpen, onAction } = usePortfolio();
  const [q, setQ] = useState('');
  const [sel, setSel] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (cmdkOpen) {
      setQ(''); setSel(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [cmdkOpen]);

  const filtered = useMemo(() => {
    if (!q) return COMMANDS;
    const ql = q.toLowerCase();
    return COMMANDS.filter(c => c.label.toLowerCase().includes(ql) || c.group.toLowerCase().includes(ql));
  }, [q]);

  const grouped = useMemo(() => {
    const g: Record<string, Command[]> = {};
    filtered.forEach(c => { (g[c.group] = g[c.group] || []).push(c); });
    return g;
  }, [filtered]);

  useEffect(() => {
    if (!cmdkOpen) return;
    const h = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setCmdkOpen(false);
      else if (e.key === 'ArrowDown') { e.preventDefault(); setSel(s => Math.min(filtered.length - 1, s + 1)); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); setSel(s => Math.max(0, s - 1)); }
      else if (e.key === 'Enter') {
        e.preventDefault();
        const c = filtered[sel];
        if (c) onAction(c);
      }
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [cmdkOpen, sel, filtered, onAction, setCmdkOpen]);

  if (!cmdkOpen) return null;

  const iconMap: Record<string, ComponentType<IconProps>> = {
    home: IconHome, work: IconBox, exp: IconZap, history: IconLayers, play: IconTerminal,
    contact: IconMail, mail: IconMail, github: IconGitHub, linkedin: IconLinkedIn,
    download: IconDownload, zap: IconZap, target: IconTarget
  };

  let idx = -1;
  return (
    <div className="cmdk-backdrop" onClick={() => setCmdkOpen(false)}>
      <div className="cmdk-panel" onClick={(e) => e.stopPropagation()}>
        <input
          ref={inputRef}
          className="cmdk-input"
          placeholder="Type a command or search…"
          value={q}
          onChange={(e) => { setQ(e.target.value); setSel(0); }}
        />
        <div className="cmdk-list">
          {Object.keys(grouped).length === 0 && <div className="cmdk-empty">No matches for &ldquo;{q}&rdquo;</div>}
          {Object.entries(grouped).map(([group, items]) => (
            <div key={group}>
              <div className="cmdk-group-title">{group}</div>
              {items.map(c => {
                idx++;
                const isSel = idx === sel;
                const I = iconMap[c.icon] || IconArrow;
                const myIdx = idx;
                return (
                  <div
                    key={c.label}
                    className={`cmdk-item ${isSel ? 'selected' : ''}`}
                    onMouseEnter={() => setSel(myIdx)}
                    onClick={() => onAction(c)}
                  >
                    <span className="ico"><I size={14} /></span>
                    <span className="label">{c.label}</span>
                    <span className="hint">{c.hint}</span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <div className="cmdk-foot">
          <span className="hint-pair"><span className="kbd">↑↓</span> navigate</span>
          <span className="hint-pair"><span className="kbd">↵</span> select</span>
          <span className="hint-pair"><span className="kbd">Esc</span> close</span>
        </div>
      </div>
    </div>
  );
}
