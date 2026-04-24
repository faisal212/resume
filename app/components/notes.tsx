import { NOTES } from '@/app/lib/data';

export default function Notes() {
  return (
    <section className="section container reveal" id="notes">
      <div className="sec-head">
        <div>
          <div className="sec-eyebrow"><span className="num">05 /</span> Notes</div>
        </div>
        <h2 className="sec-title">
          How I <span className="serif-em">think</span> about the work.
        </h2>
      </div>
      <div className="essays">
        {NOTES.map((n, idx) => (
          <article className="essay" key={idx}>
            <header className="essay-head">
              <div className="essay-meta">
                <span className="essay-num">{String(idx + 1).padStart(2, '0')} / {String(NOTES.length).padStart(2, '0')}</span>
                <span>{n.date} · {n.kind}</span>
              </div>
              <h3 className="essay-title">{n.title}</h3>
              <p className="essay-dek">{n.dek}</p>
            </header>
            <div className="essay-body">
              {n.body.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <footer className="essay-foot">
              <div className="essay-sig">
                <span className="sig-rule"></span>
                <span>Faisal Aqdas</span>
              </div>
              {idx === NOTES.length - 1 && (
                <div className="essay-more">more notes on request</div>
              )}
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}
