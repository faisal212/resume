"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { CASES } from '@/app/lib/data';
import type { Case } from '@/app/lib/data';

interface KlaireShot { src: string; stage: string; label: string; note: string }

function CaseVisual({ c }: { c: Case }) {
  if (c.name === 'SPEAR') {
    return (
      <div className="case-frame">
        <div className="case-frame-head">
          <span>LIVE · PRODUCTION</span>
          <span>spear.app / feed</span>
        </div>
        <div className="cs-grid-split" style={{ display: 'grid', gridTemplateColumns: '0.85fr 1fr', gap: 18, flex: 1 }}>
          <div style={{
            position: 'relative',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'radial-gradient(circle at 50% 0%, rgba(255,107,26,0.08), transparent 60%), var(--bg-1)',
            borderRadius: 12,
            padding: 16,
            overflow: 'hidden'
          }}>
            <Image
              src="/assets/spear-feed.png"
              alt="SPEAR community app — production feed"
              width={0}
              height={0}
              sizes="(max-width: 768px) 100vw, 400px"
              style={{
                height: '440px',
                width: 'auto',
                maxHeight: 440,
                objectFit: 'contain',
                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))'
              }}
            />
            <div style={{
              position: 'absolute',
              top: 20, right: 16,
              fontFamily: 'var(--mono)', fontSize: 9,
              color: 'var(--accent)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              display: 'flex', alignItems: 'center', gap: 6
            }}>
              <span style={{ width: 20, height: 1, background: 'var(--accent)' }}></span>
              <span>Real · shipped</span>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ border: '1px solid var(--rule)', borderRadius: 12, padding: 16, background: 'var(--bg)', display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Shared design tokens</div>
              <div className="cs-grid-5" style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 6 }}>
                {['#bd995b','#d4b57a','#eadbbb','#17171a','#ffffff'].map(hex=>(
                  <div key={hex} style={{ height: 32, background: hex, borderRadius: 6, border: '1px solid var(--rule)' }}></div>
                ))}
              </div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-1)', lineHeight: 1.8 }}>
                <div><span style={{ color: 'var(--ink-3)' }}>space/</span>4 8 12 16 24 32 48</div>
                <div><span style={{ color: 'var(--ink-3)' }}>radius/</span>sm md lg xl full</div>
                <div><span style={{ color: 'var(--ink-3)' }}>type/</span>xs sm base lg xl 2xl</div>
              </div>
            </div>
            <div style={{ border: '1px solid var(--rule)', borderRadius: 12, padding: 16, background: 'var(--bg)', display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Architecture notes</div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-1)', lineHeight: 1.75 }}>
                <div><span style={{ color: 'var(--accent)' }}>→</span> Feed: virtualized list · 60fps scroll</div>
                <div><span style={{ color: 'var(--accent)' }}>→</span> Shop: image-first, LCP &lt; 1.8s</div>
                <div><span style={{ color: 'var(--accent)' }}>→</span> Rewards: RTK Query + tag invalidation</div>
                <div><span style={{ color: 'var(--accent)' }}>→</span> Auth: better-auth session cookies</div>
                <div><span style={{ color: 'var(--accent)' }}>→</span> White-label via CSS variables</div>
              </div>
              <div style={{ marginTop: 'auto', padding: 10, background: 'var(--bg-2)', borderRadius: 8, fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-2)', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--accent)' }}>✓ powered by Decommerce</span>
                <span>multi-tenant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (c.name === 'TBO') {
    const gauges = [
      { l: 'PERF',  v: 96,  was: 50 },
      { l: 'A11Y',  v: 98,  was: 74 },
      { l: 'BEST',  v: 100, was: 85 },
      { l: 'SEO',   v: 100, was: 88 },
    ];
    const bars = [
      { k: 'document',          w: 42, color: '#5b8ecf', delay: 0 },
      { k: 'fonts (preloaded)', w: 28, color: '#b89cd4', delay: 300 },
      { k: 'hero.webp (SSG)',   w: 54, color: '#ff6b1a', delay: 520 },
      { k: 'critical.css',      w: 18, color: '#6dbf6d', delay: 120 },
      { k: 'paint',             w: 10, color: 'var(--ink-1)', delay: 1000 },
    ];
    return (
      <div className="case-frame">
        <div className="case-frame-head">
          <span>PERFORMANCE AUDIT · BEFORE → AFTER</span>
          <span>4-WEEK ENGAGEMENT · 2023</span>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div className="cs-gauges" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
            {gauges.map(g => {
              const r = 28;
              const circ = 2 * Math.PI * r;
              const off = circ - (g.v / 100) * circ;
              return (
                <div key={g.l} style={{ padding: '14px 10px 12px', border: '1px solid var(--rule)', borderRadius: 10, background: 'var(--bg)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <div style={{ position: 'relative', width: 64, height: 64 }}>
                    <svg width="64" height="64" viewBox="0 0 64 64" style={{ transform: 'rotate(-90deg)' }}>
                      <circle cx="32" cy="32" r={r} fill="none" stroke="var(--rule)" strokeWidth="4" />
                      <circle cx="32" cy="32" r={r} fill="none" stroke="var(--accent)" strokeWidth="4"
                        strokeDasharray={circ} strokeDashoffset={off} strokeLinecap="round" />
                    </svg>
                    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--ink-1)' }}>{g.v}</div>
                  </div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.14em', color: 'var(--ink-2)' }}>{g.l}</div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--ink-3)' }}>was {g.was}</div>
                </div>
              );
            })}
          </div>
          <div style={{ padding: 14, border: '1px solid var(--rule)', borderRadius: 10, background: 'var(--bg)', display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Critical path · first 1.8s</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              {bars.map(b => (
                <div key={b.k} style={{ display: 'grid', gridTemplateColumns: '110px 1fr', gap: 8, alignItems: 'center' }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-2)', textAlign: 'right', paddingRight: 4 }}>{b.k}</div>
                  <div style={{ height: 10, position: 'relative', background: 'rgba(127,127,127,0.08)', borderRadius: 2 }}>
                    <div style={{ position: 'absolute', top: 0, bottom: 0, left: `${b.delay / 18}%`, width: `${b.w}%`, background: b.color, borderRadius: 2 }}></div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-3)', marginTop: 4 }}>
              <span>LCP 1.62s · CLS 0.01</span>
              <span style={{ color: '#6dbf6d' }}>✓ passes</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (c.name === 'Growth Engine') {
    return (
      <div className="case-frame">
        <div className="case-frame-head">
          <span>DASHBOARD · MULTI-TENANT</span>
          <span>decommerce.com / growth-engine</span>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ position: 'relative', borderRadius: 10, overflow: 'hidden', border: '1px solid var(--rule)', background: '#ffffff', flex: 1, minHeight: 240 }}>
            <Image src="/assets/growth-dashboard.png" alt="Growth Engine admin — Digital Transformation campaign" fill sizes="(max-width: 768px) 100vw, 600px" style={{ objectFit: 'cover', objectPosition: 'top left' }} />
            <div style={{ position: 'absolute', top: 12, right: 12, padding: '4px 10px', borderRadius: 999, background: 'rgba(10,10,11,0.85)', color: 'var(--accent)', fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', backdropFilter: 'blur(6px)' }}>Admin · enterprise</div>
          </div>
          <div className="cs-grid-split" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 14, minHeight: 220 }}>
            <div style={{ position: 'relative', borderRadius: 10, overflow: 'hidden', border: '1px solid var(--rule)', background: 'linear-gradient(135deg, #0d0d10, #17171a)' }}>
              <Image src="/assets/growth-mercedes.png" alt="Mercedes-Benz Digital Transformation — mobile experience" fill sizes="(max-width: 768px) 100vw, 400px" style={{ objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: 10, left: 10, fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--ink-1)', background: 'rgba(10,10,11,0.8)', padding: '4px 8px', borderRadius: 4, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Client · Mercedes-Benz</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ padding: 14, border: '1px solid var(--rule)', borderRadius: 10, background: 'var(--bg)', display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>AI pipeline · BullMQ workers</div>
                {[
                  { id: 'claude.page.0xA7', s: 'processing', c: '#ff6b1a' },
                  { id: 'claude.seo.0x42', s: 'done', c: '#6dbf6d' },
                  { id: 'openai.img.0x91', s: 'queued', c: '#888' },
                ].map(j => (
                  <div key={j.id} style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-1)' }}>
                    <span>{j.id}</span>
                    <span style={{ color: j.c }}>● {j.s}</span>
                  </div>
                ))}
              </div>
              <div className="cs-grid-3" style={{ padding: 14, border: '1px solid var(--rule)', borderRadius: 10, background: 'var(--bg)', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8 }}>
                {[{ l: 'Tenants', v: '27+' }, { l: 'AI runs/day', v: '12.4k' }, { l: 'Saved', v: '87%' }].map(k => (
                  <div key={k.l}>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{k.l}</div>
                    <div style={{ fontSize: 18, fontWeight: 600, letterSpacing: '-0.02em', marginTop: 2 }}>{k.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Klaire
  const klaireShots: KlaireShot[] = [
    { src: '/assets/klaire-01-start.png', stage: '01', label: 'Paste URL', note: 'Client starts the agent — brand detection begins' },
    { src: '/assets/klaire-05-brand.png', stage: '02', label: 'Scrape + generate brand', note: 'Puppeteer extracts brand · GPT-4o proposes identity' },
    { src: '/assets/klaire-02-brief.png', stage: '03', label: 'Campaign brief', note: 'Structured output · schema-validated · live mobile preview' },
    { src: '/assets/klaire-03-live.png', stage: '04', label: 'Missions authored', note: 'AI drafts missions · client edits or confirms inline' },
    { src: '/assets/klaire-04-seo.png', stage: '05', label: 'SEO + launch', note: 'Metadata generated · campaign goes live' },
  ];
  const [shotIdx, setShotIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setShotIdx(i => (i + 1) % klaireShots.length), 3800);
    return () => clearInterval(t);
  }, [klaireShots.length]);

  return (
    <div className="case-frame">
      <div className="case-frame-head">
        <span>AI ONBOARDING AGENT · IN PRODUCTION</span>
        <span>dev-admin.decommerce.com</span>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={{ position: 'relative', borderRadius: 10, overflow: 'hidden', border: '1px solid var(--rule)', background: '#f7f6f2', aspectRatio: '16 / 9', minHeight: 260 }}>
          {klaireShots.map((s, i) => (
            <Image
              key={s.src}
              src={s.src}
              alt={`Klaire step ${s.stage} — ${s.label}`}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              style={{ objectFit: 'cover', objectPosition: 'top center', opacity: i === shotIdx ? 1 : 0, transition: 'opacity 0.6s ease' }}
            />
          ))}
          <div style={{ position: 'absolute', top: 12, left: 12, display: 'flex', alignItems: 'center', gap: 8, padding: '6px 12px', borderRadius: 999, background: 'rgba(10,10,11,0.88)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--accent)', letterSpacing: '0.14em' }}>STEP {klaireShots[shotIdx].stage}</span>
            <span style={{ width: 1, height: 10, background: 'rgba(255,255,255,0.18)' }}></span>
            <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-1)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>{klaireShots[shotIdx].label}</span>
          </div>
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 16px 12px', background: 'linear-gradient(180deg, transparent, rgba(10,10,11,0.95) 60%)', color: 'var(--ink-1)', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.01em' }}>
            {klaireShots[shotIdx].note}
          </div>
          <div style={{ position: 'absolute', top: 12, right: 12, display: 'flex', gap: 5, padding: '6px 10px', borderRadius: 999, background: 'rgba(10,10,11,0.75)', backdropFilter: 'blur(6px)' }}>
            {klaireShots.map((_, i) => (
              <button key={i} onClick={() => setShotIdx(i)} aria-label={`Show step ${i + 1}`} style={{ width: i === shotIdx ? 18 : 6, height: 6, borderRadius: 3, border: 'none', background: i === shotIdx ? 'var(--accent)' : 'rgba(255,255,255,0.28)', padding: 0, cursor: 'pointer', transition: 'all 0.3s ease' }}></button>
            ))}
          </div>
        </div>
        <div className="cs-grid-5" style={{ padding: 14, border: '1px solid var(--rule)', borderRadius: 10, background: 'var(--bg)', display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 6, alignItems: 'stretch' }}>
          {[
            { n: 'URL', c: 'var(--ink-1)' },
            { n: 'Puppeteer', c: '#6dbf6d' },
            { n: 'Langbase', c: '#8b7bb5' },
            { n: 'GPT-4o', c: '#ff6b1a' },
            { n: 'Live preview', c: 'var(--ink-1)' },
          ].map((step, i, arr) => (
            <div key={step.n} style={{ padding: '8px 6px', textAlign: 'center', position: 'relative', borderRight: i < arr.length - 1 ? '1px dashed var(--rule)' : 'none' }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: step.c, fontWeight: 600, letterSpacing: '0.02em' }}>{step.n}</div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 8.5, color: 'var(--ink-3)', marginTop: 3, letterSpacing: '0.1em' }}>{String(i + 1).padStart(2, '0')}</div>
            </div>
          ))}
        </div>
        <div className="cs-grid-3" style={{ padding: 12, border: '1px solid var(--rule)', borderRadius: 10, background: 'linear-gradient(90deg, rgba(255,107,26,0.06), transparent)', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
          {[
            { l: 'Before', v: '1 week', s: 'manual setup' },
            { l: 'After', v: '20 min', s: 'client self-serve' },
            { l: 'Devs needed', v: '0', s: 'per onboarding' },
          ].map((k, i) => (
            <div key={k.l} style={{ padding: '4px 10px', borderLeft: i === 0 ? 'none' : '1px solid var(--rule)' }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{k.l}</div>
              <div style={{ fontSize: 18, fontWeight: 600, letterSpacing: '-0.02em', marginTop: 2, color: i === 1 ? 'var(--accent)' : 'var(--ink-1)' }}>{k.v}</div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--ink-3)', marginTop: 1 }}>{k.s}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CaseStudies() {
  return (
    <section className="section container reveal" id="work">
      <div className="sec-head">
        <div>
          <div className="sec-eyebrow"><span className="num">01 /</span> Selected work</div>
        </div>
        <h2 className="sec-title">
          Products that ship. Metrics that <span className="serif-em">move</span>.
        </h2>
      </div>
      {CASES.map(c => (
        <article className="case" key={c.name}>
          <div className="case-meta reveal">
            <div className="case-idx">{c.idx} / {String(CASES.length).padStart(2, '0')} — {c.name}</div>
            <h3 className="case-title">{c.title.split(' ').slice(0, -1).join(' ')} <span className="serif-em">{c.title.split(' ').slice(-1)}</span></h3>
            <div className="case-role">{c.role}</div>
            <p className="case-desc">{c.desc}</p>
            <div className="case-tags">
              {c.tags.map(t => <span className="case-tag" key={t}>{t}</span>)}
            </div>
            <div className="case-wins">
              {c.wins.map(w => (
                <div className="case-win" key={w.l}>
                  <div className="case-win-val">{w.v}</div>
                  <div className="case-win-label">{w.l}</div>
                </div>
              ))}
            </div>
            {c.hardPart && (
              <div className="case-hard">
                <div className="case-hard-label">◆ {c.hardPart.title}</div>
                <p className="case-hard-body">{c.hardPart.body}</p>
              </div>
            )}
          </div>
          <div className="case-visual reveal">
            <CaseVisual c={c} />
          </div>
        </article>
      ))}
    </section>
  );
}
