"use client";

import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useReveal } from '@/app/lib/hooks';
import type { Command } from '@/app/lib/data';

interface PortfolioContextValue {
  cmdkOpen: boolean;
  setCmdkOpen: (v: boolean) => void;
  onAction: (c: Command) => void;
}

const PortfolioContext = createContext<PortfolioContextValue>({
  cmdkOpen: false,
  setCmdkOpen: () => {},
  onAction: () => {},
});

export function usePortfolio() {
  return useContext(PortfolioContext);
}

export function Providers({ children }: { children: React.ReactNode }) {
  useReveal();
  const [accent, setAccent] = useState('#ff6b1a');
  const [reduceMotion, setReduceMotion] = useState(false);
  const [cmdkOpen, setCmdkOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', accent);
  }, [accent]);

  useEffect(() => {
    document.body.classList.toggle('reduce-motion', reduceMotion);
  }, [reduceMotion]);

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCmdkOpen(o => !o);
      }
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, []);

  const accentPalette = ['#ff6b1a', '#ffbf1a', '#5b9dff', '#8b5cf6', '#f5f5f4', '#33d17a'];

  const onAction = useCallback((c: Command) => {
    setCmdkOpen(false);
    if (c.action.startsWith('scroll:')) {
      const id = c.action.split(':')[1];
      if (id === 'top') window.scrollTo({ top: 0, behavior: 'smooth' });
      else document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (c.action.startsWith('href:')) {
      window.open(c.action.slice(5), '_blank', 'noreferrer');
    } else if (c.action === 'toggle:motion') {
      setReduceMotion(m => !m);
    } else if (c.action === 'toggle:accent') {
      setAccent(a => {
        const i = accentPalette.indexOf(a);
        return accentPalette[(i + 1) % accentPalette.length];
      });
    } else if (c.action === 'download:resume') {
      window.open('/Faisal_Aqdas_Resume.pdf', '_blank');
    }
  }, [accentPalette]);

  return (
    <PortfolioContext.Provider value={{ cmdkOpen, setCmdkOpen, onAction }}>
      {children}
    </PortfolioContext.Provider>
  );
}
