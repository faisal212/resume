"use client";

import { useInView, useCountUp } from '@/app/lib/hooks';
import { METRICS } from '@/app/lib/data';
import type { Metric } from '@/app/lib/data';

function MetricItem({ m }: { m: Metric }) {
  const [ref, inView] = useInView();
  const val = useCountUp(m.val, { trigger: inView, duration: 1600 });
  const display = m.val >= 10 ? Math.round(val) : val.toFixed(0);
  return (
    <div className="metric" ref={ref}>
      <div className="metric-val">
        <span>{display}</span>
        <span className="suf">{m.suf}</span>
      </div>
      <div className="metric-label">{m.label}</div>
    </div>
  );
}

export default function Metrics() {
  return (
    <section className="metrics" aria-label="Key metrics">
      {METRICS.map((m, i) => <MetricItem m={m} key={i} />)}
    </section>
  );
}
