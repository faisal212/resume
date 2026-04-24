"use client";

import { useState, useEffect } from 'react';
import { IconArrow, IconDownload } from '@/app/lib/icons';

interface CodePart { c: string; t: string }
interface CodeLine { parts: CodePart[] }

function TypingCode() {
  const lines: CodeLine[] = [
    { parts: [{ c: 'tok-c', t: '// decommerce — missions endpoint, RTK Query + typed tags' }] },
    { parts: [
      { c: 'tok-k', t: 'export const' }, { c: '', t: ' ' },
      { c: 'tok-p', t: 'missionsApi' }, { c: '', t: ' = ' },
      { c: 'tok-f', t: 'createApi' }, { c: 'tok-m', t: '({' },
    ] },
    { parts: [
      { c: '', t: '  ' }, { c: 'tok-p', t: 'reducerPath' }, { c: '', t: ': ' },
      { c: 'tok-s', t: '"missionsApi"' }, { c: '', t: ',' },
    ] },
    { parts: [
      { c: '', t: '  ' }, { c: 'tok-p', t: 'baseQuery' }, { c: '', t: ': ' },
      { c: 'tok-f', t: 'authedBaseQuery' }, { c: '', t: '(' },
      { c: 'tok-s', t: '"/api"' }, { c: '', t: '),' },
    ] },
    { parts: [
      { c: '', t: '  ' }, { c: 'tok-p', t: 'tagTypes' }, { c: '', t: ': [' },
      { c: 'tok-s', t: '"Missions"' }, { c: '', t: '],' },
    ] },
    { parts: [
      { c: '', t: '  ' }, { c: 'tok-p', t: 'endpoints' }, { c: '', t: ': (build) => ({' },
    ] },
    { parts: [
      { c: '', t: '    ' }, { c: 'tok-p', t: 'listMissions' }, { c: '', t: ': build.' },
      { c: 'tok-f', t: 'query' }, { c: 'tok-m', t: '<' },
      { c: 'tok-p', t: 'Mission' }, { c: '', t: '[], ' },
      { c: 'tok-p', t: 'ListArgs' }, { c: 'tok-m', t: '>({' },
    ] },
    { parts: [
      { c: '', t: '      ' }, { c: 'tok-p', t: 'query' }, { c: '', t: ': ({ ' },
      { c: 'tok-p', t: 'tenantId' }, { c: '', t: ', ' },
      { c: 'tok-p', t: 'campaignId' }, { c: '', t: ' }) => ({' },
    ] },
    { parts: [
      { c: '', t: '        ' }, { c: 'tok-p', t: 'url' }, { c: '', t: ': ' },
      { c: 'tok-s', t: '`/tenants/${tenantId}/campaigns/${campaignId}/missions`' }, { c: '', t: ',' },
    ] },
    { parts: [
      { c: '', t: '        ' }, { c: 'tok-p', t: 'method' }, { c: '', t: ': ' },
      { c: 'tok-s', t: '"POST"' }, { c: '', t: ',' },
    ] },
    { parts: [{ c: '', t: '      }),' }] },
    { parts: [
      { c: '', t: '      ' }, { c: 'tok-p', t: 'providesTags' }, { c: '', t: ': [' },
      { c: 'tok-s', t: '"Missions"' }, { c: '', t: '],' },
    ] },
    { parts: [{ c: '', t: '    }),' }] },
    { parts: [{ c: '', t: '  }),' }] },
    { parts: [{ c: 'tok-m', t: '});' }] },
    { parts: [{ c: '', t: '' }] },
    { parts: [{ c: 'tok-c', t: '// → auto cache · tag invalidation · typed errors' }] },
  ];

  const [visible, setVisible] = useState(0);
  useEffect(() => {
    if (visible >= lines.length) return;
    const t = setTimeout(() => setVisible(v => v + 1), visible === 0 ? 600 : 220);
    return () => clearTimeout(t);
  }, [visible, lines.length]);

  return (
    <div className="terminal">
      <div className="terminal-head">
        <div className="terminal-dots"><span></span><span></span><span></span></div>
        <div className="terminal-title">~/decommerce — missionsApi.ts</div>
        <div className="terminal-lang">TS</div>
      </div>
      <div className="terminal-body">
        {lines.slice(0, visible).map((ln, i) => (
          <div key={i}>
            {ln.parts.map((p, j) => (
              <span key={j} className={p.c}>{p.t}</span>
            ))}
          </div>
        ))}
        {visible < lines.length && <span className="caret"></span>}
      </div>
    </div>
  );
}

function LiveVitals() {
  return (
    <div className="live-card">
      <div className="live-cell">
        <div className="live-label">LCP</div>
        <div className="live-value">1.6<span className="unit">s</span> <span className="good">●</span></div>
      </div>
      <div className="live-cell">
        <div className="live-label">CLS</div>
        <div className="live-value">0.02 <span className="good">●</span></div>
      </div>
      <div className="live-cell">
        <div className="live-label">INP</div>
        <div className="live-value">94<span className="unit">ms</span> <span className="good">●</span></div>
      </div>
      <div className="live-cell">
        <div className="live-label">Lighthouse</div>
        <div className="live-value">96 <span className="good">●</span></div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero container" id="top">
      <div className="grid-bg"></div>
      <div className="hero-grid">
        <div className="reveal shown">
          <div className="hero-meta">FAISAL AQDAS · SENIOR FRONTEND ENGINEER · FULL-STACK &amp; AI WHEN IT SHIPS FASTER</div>
          <h1 className="display">
            <span className="role">I build</span>
            <span className="name">frontends</span>
            <span className="role">for <span className="serif-em">enterprise</span>,</span>
            <span className="role">at <span className="accent">production</span> scale.</span>
          </h1>
          <p className="hero-sub">
            <span className="highlight">8 years</span> shipping React &amp; TypeScript to Mercedes-Benz, Sonova, Thalia, and TBO Clothing —
            <span className="highlight"> multi-tenant architecture</span>, Core Web Vitals under 2s, cache invalidation that works the first time.
            When the product demands it, I reach into NestJS and LLM orchestration to close the loop.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">
              <span>Hire me</span>
              <IconArrow size={14} />
            </a>
            <a href="/Faisal_Aqdas_Resume.pdf" download className="btn btn-ghost">
              <IconDownload size={14} />
              <span>Résumé</span>
            </a>
          </div>
        </div>
        <div className="hero-right">
          <TypingCode />
          <LiveVitals />
        </div>
      </div>
      <div className="scroll-hint">
        <span>Scroll</span>
        <span className="line"></span>
      </div>
    </section>
  );
}
