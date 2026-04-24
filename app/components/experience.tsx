"use client";

import { useState } from 'react';
import { ROLES } from '@/app/lib/data';

export default function Experience() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section container reveal" id="experience">
      <div className="sec-head">
        <div>
          <div className="sec-eyebrow"><span className="num">03 /</span> Career</div>
        </div>
        <h2 className="sec-title">
          8 years of <span className="serif-em">shipping</span> — and rewriting it better.
        </h2>
      </div>
      <div className="timeline">
        {ROLES.map((r, i) => (
          <div
            key={i}
            className={`tl-item ${open === i ? 'active' : ''}`}
            onClick={() => setOpen(open === i ? -1 : i)}
          >
            <div className="tl-head">
              <div className="tl-role">
                <span>{r.role}</span>
                <span className="at"> at </span>
                <span className="co">{r.company}</span>
              </div>
              <div className="tl-dates">{r.when}</div>
            </div>
            {open === i && (
              <>
                <p className="tl-desc">{r.body}</p>
                <div className="tl-stack">
                  {r.stack.map(s => <span className="chip" key={s}>{s}</span>)}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
