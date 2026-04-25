import Image from 'next/image';
import { LOGOS } from '@/app/lib/data';
import type { Logo } from '@/app/lib/data';

function LogoMark({ l }: { l: Logo }) {
  if (l.kind === 'mercedes') {
    return (
      <div className="lg-mark" aria-hidden="true">
        <svg width="28" height="28" viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <line x1="20" y1="20" x2="20" y2="4"/>
            <line x1="20" y1="20" x2="6" y2="28"/>
            <line x1="20" y1="20" x2="34" y2="28"/>
          </g>
        </svg>
      </div>
    );
  }
  if (l.kind === 'img' && l.img) {
    return (
      <div className="lg-mark" aria-hidden="true">
        <Image src={l.img} alt={l.name} width={0} height={0} sizes="120px" unoptimized style={{ height: '28px', width: 'auto', maxWidth: '120px' }} />
      </div>
    );
  }
  if (l.kind === 'dots') {
    return (
      <div className="lg-mark" aria-hidden="true">
        <svg width="30" height="14" viewBox="0 0 30 14">
          <circle cx="4" cy="7" r="3" fill="currentColor" opacity="0.9"/>
          <circle cx="14" cy="3" r="3" fill="currentColor" opacity="0.6"/>
          <circle cx="14" cy="11" r="3" fill="currentColor" opacity="0.6"/>
          <circle cx="24" cy="7" r="3" fill="currentColor" opacity="0.9"/>
        </svg>
      </div>
    );
  }
  return (
    <div className="lg-mark lg-letters" aria-hidden="true">{l.name.split(' ').map(w => w[0]).join('').slice(0, 2)}</div>
  );
}

export default function LogoRow() {
  return (
    <section className="section container reveal logorow-sec">
      <div className="lg-head">
        <div className="sec-eyebrow"><span className="num">✦</span> Trusted by teams at</div>
      </div>
      <div className="lg-grid">
        {LOGOS.map(l => (
          <div className="lg-cell" key={l.name}>
            <LogoMark l={l} />
            <div className="lg-name">{l.name}</div>
            <div className="lg-ctx">{l.context}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
