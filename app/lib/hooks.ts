import { useState, useEffect, useRef } from 'react'
import type { RefObject } from 'react'

export function useReveal(): void {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('shown');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  });
}

export function useScrolled(threshold = 20): boolean {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);
  return scrolled;
}

export interface UseCountUpOptions {
  duration?: number
  start?: number
  trigger?: boolean
}

export function useCountUp(target: number, { duration = 1400, start = 0, trigger = true }: UseCountUpOptions = {}): number {
  const [val, setVal] = useState(start);
  useEffect(() => {
    if (!trigger) return;
    let raf: number;
    let t0: number | undefined;
    const tick = (t: number) => {
      if (!t0) t0 = t;
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(start + (target - start) * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start, trigger]);
  return val;
}

export function useInView(opts: { threshold?: number; once?: boolean } = { threshold: 0.25, once: true }): [RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setInView(true);
        if (opts.once) io.disconnect();
      } else if (!opts.once) setInView(false);
    }, { threshold: opts.threshold });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return [ref, inView];
}
