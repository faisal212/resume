import { TESTIMONIALS } from '@/app/lib/data';

export default function Testimonials() {
  return (
    <section className="section container reveal" id="testimonials">
      <div className="sec-head">
        <div>
          <div className="sec-eyebrow"><span className="num">★</span> What people say</div>
        </div>
        <h2 className="sec-title">
          Hired once, <span className="serif-em">re-hired</span> often.
        </h2>
      </div>
      <div className="tm-grid">
        {TESTIMONIALS.map((t, i) => (
          <figure className="tm-card" key={i}>
            <div className="tm-mark">&ldquo;</div>
            <blockquote className="tm-quote">{t.quote}</blockquote>
            <figcaption className="tm-who">
              <div className="tm-who-name">{t.who}</div>
              <div className="tm-who-where">{t.role ? `${t.role} · ${t.where}` : t.where}</div>
            </figcaption>
            {t.draft && <span className="tm-draft">DRAFT · pending client confirmation</span>}
          </figure>
        ))}
      </div>
    </section>
  );
}
