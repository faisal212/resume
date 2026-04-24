import type { ComponentType, CSSProperties } from 'react';
import { EXPERTISE } from '@/app/lib/data';
import type { ExpertiseItem, IconProps } from '@/app/lib/data';
import { IconZap, IconLayers, IconDatabase, IconBox, IconSparkle, IconCode } from '@/app/lib/icons';

const ICONS: Record<ExpertiseItem['k'], ComponentType<IconProps>> = {
  PERF: IconZap,
  STATE: IconLayers,
  API: IconDatabase,
  SCALE: IconBox,
  AI: IconSparkle,
};

const accentStyle: CSSProperties = { color: 'var(--accent)' };

export default function Expertise() {
  return (
    <section className="section container reveal" id="expertise">
      <div className="sec-head">
        <div>
          <div className="sec-eyebrow"><span className="num">02 /</span> How I engineer</div>
        </div>
        <h2 className="sec-title">
          Senior means <span className="serif-em">decisions</span>, not just code.
        </h2>
      </div>
      <div className="exp-grid">
        {EXPERTISE.map((e, i) => {
          const I = ICONS[e.k] || IconCode;
          const isWide = e.k === 'AI';
          return (
            <div className={`exp-cell${isWide ? ' exp-wide' : ''}`} key={i}>
              <div className="exp-header">
                <I size={22} style={accentStyle} />
                <div className="exp-idx">{String(i + 1).padStart(2, '0')} / {String(EXPERTISE.length).padStart(2, '0')}</div>
              </div>
              <div>
                <h3>{e.title}</h3>
                <p>{e.body}</p>
                <div className="badges">
                  {e.badges.map(b => <span className="badge" key={b}>{b}</span>)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
