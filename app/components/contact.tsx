"use client";

import { useState, useEffect, useActionState } from 'react';
import { submitContact } from '@/app/actions/contact';
import { IconArrow } from '@/app/lib/icons';

export default function Contact() {
  const [state, formAction, isPending] = useActionState(submitContact, null);
  const [copied, setCopied] = useState(false);
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const myTime = now ? new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Karachi', hour: '2-digit', minute: '2-digit', hour12: false
  }).format(now) : '--:--';
  const theirTZ = now ? Intl.DateTimeFormat().resolvedOptions().timeZone : '';
  const theirTime = now ? new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit', minute: '2-digit', hour12: false
  }).format(now) : '--:--';

  const hour = now ? parseInt(myTime.slice(0, 2), 10) : -1;
  const working = hour >= 9 && hour < 22;

  const copyEmail = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText('faisalaqdas@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = 'mailto:faisalaqdas@gmail.com';
    }
  };

  const sent = state?.success ?? false;

  return (
    <section className="section container reveal" id="contact">
      <div className="sec-head contact-head">
        <div className="sec-eyebrow"><span className="num">05 /</span> Let&apos;s talk</div>
      </div>

      <div className="contact-intro">
        <h2 className="contact-heading">
          Send me the hardest<br />frontend problem <span className="serif-em">your team is facing.</span>
        </h2>
        <p>
          I&apos;ll reply within a day with how I&apos;d approach it — paid engagement or not.
          If it&apos;s a fit for both of us, we go deeper. If it&apos;s not, you&apos;ll still have a second opinion on a hard problem.
        </p>
      </div>

      <div className="contact-avail-strip">
        <div className="avail-cell">
          <span className="avail-label">Status</span>
          <span className="avail-value">
            <span className="dot status-dot-green"></span>
            Available immediately
          </span>
        </div>
        <div className="avail-cell">
          <span className="avail-label">My local time · PKT</span>
          <span className="avail-value mono">
            {myTime}
            <span className={`avail-status ${working ? 'on' : 'off'}`}>{working ? '· working' : '· off hours'}</span>
          </span>
        </div>
        <div className="avail-cell">
          <span className="avail-label">Your local time</span>
          <span className="avail-value mono">{theirTime} <span className="avail-tz">{theirTZ}</span></span>
        </div>
        <div className="avail-cell">
          <span className="avail-label">Typical response</span>
          <span className="avail-value">Within 24 hours</span>
        </div>
      </div>

      <div className="contact-methods">
        <a className="contact-method" href="mailto:faisalaqdas@gmail.com" onClick={copyEmail}>
          <div className="cm-rank">01</div>
          <div className="cm-body">
            <div className="cm-kind">Email · preferred</div>
            <div className="cm-val">faisalaqdas@gmail.com</div>
            <div className="cm-hint">{copied ? '✓ Copied to clipboard' : 'Click to copy · or mailto'}</div>
          </div>
          <span className="cm-arrow">{copied ? '✓' : '↗'}</span>
        </a>

        <a className="contact-method" href="https://linkedin.com/in/faisalaqdas" target="_blank" rel="noreferrer">
          <div className="cm-rank">02</div>
          <div className="cm-body">
            <div className="cm-kind">LinkedIn · for recruiters</div>
            <div className="cm-val">linkedin.com/in/faisalaqdas</div>
            <div className="cm-hint">Roles &amp; intros</div>
          </div>
          <span className="cm-arrow">↗</span>
        </a>

        <a className="contact-method" href="https://github.com/faisal212" target="_blank" rel="noreferrer">
          <div className="cm-rank">03</div>
          <div className="cm-body">
            <div className="cm-kind">GitHub · the code</div>
            <div className="cm-val">github.com/faisal212</div>
            <div className="cm-hint">Playground &amp; experiments</div>
          </div>
          <span className="cm-arrow">↗</span>
        </a>
      </div>

      <div className="contact-fit">
        <div className="fit-col fit-yes">
          <div className="fit-head">
            <span className="fit-mark">✓</span>
            <span>Best fit</span>
          </div>
          <ul>
            <li>Senior / Staff Frontend roles</li>
            <li>React · Next.js · TypeScript at production scale</li>
            <li>Design system &amp; multi-tenant architecture</li>
            <li>AI-frontend — LLMs embedded in real UI, not chat widgets</li>
            <li>Performance rescues — Core Web Vitals under 2s</li>
            <li>Remote · async · European time overlap</li>
          </ul>
        </div>
        <div className="fit-col fit-no">
          <div className="fit-head">
            <span className="fit-mark">×</span>
            <span>Not a fit</span>
          </div>
          <ul>
            <li>Junior or mid-level roles</li>
            <li>WordPress / pure templating work</li>
            <li>Crypto, web3, gambling, adtech</li>
            <li>Unpaid trials or spec work</li>
            <li>On-site only · no remote option</li>
            <li>Agency-style body-shopping contracts</li>
          </ul>
        </div>
      </div>

      <div className="contact-week">
        <div className="week-head">
          <span className="week-eyebrow">If we move forward · the first week</span>
          <span className="week-sub">No mystery, no ghosting.</span>
        </div>
        <div className="week-steps">
          <div className="week-step">
            <div className="ws-day">Day 0–1</div>
            <div className="ws-title">I reply</div>
            <div className="ws-body">With a take on your problem and a link to a 30-min intro slot.</div>
          </div>
          <div className="week-step">
            <div className="ws-day">Day 2–3</div>
            <div className="ws-title">Intro call</div>
            <div className="ws-body">Your stack, team, and hardest constraint. Short, sharp, no sales-y anything.</div>
          </div>
          <div className="week-step">
            <div className="ws-day">Day 4–7</div>
            <div className="ws-title">Trial or scoped engagement</div>
            <div className="ws-body">A paid day-rate pilot, architecture review, or straight offer — whatever fits your process.</div>
          </div>
        </div>
      </div>

      <div className="contact-form-wrap">
        <div className="cf-head">
          <div>
            <div className="cf-eyebrow">Prefer a form?</div>
            <div className="cf-sub">Same 24-hour reply. Use whichever is easier for you.</div>
          </div>
        </div>
        {state && !state.success && (
          <p className="contact-error">{state.message}</p>
        )}
        <form className="contact-form" action={formAction}>
          <div className="form-grid">
            <div className="form-row">
              <label>Name</label>
              <input type="text" name="name" placeholder="Your full name" required />
            </div>
            <div className="form-row">
              <label>Email</label>
              <input type="email" name="email" placeholder="you@company.com" required />
            </div>
          </div>
          <div className="form-grid">
            <div className="form-row">
              <label>Role type</label>
              <select name="role">
                <option>Senior Frontend Engineer</option>
                <option>Tech Lead / Staff FE</option>
                <option>Contract / Consulting</option>
                <option>Architecture review</option>
              </select>
            </div>
            <div className="form-row">
              <label>Budget / rate (optional)</label>
              <input type="text" name="budget" placeholder="$ / month or project" />
            </div>
          </div>
          <div className="form-row">
            <label>What are you building?</label>
            <textarea name="message" placeholder="Stack, team size, timeline, the hardest problem you're solving…" required></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary contact-submit"
            disabled={sent || isPending}
          >
            {sent
              ? "Sent ✓ — reply within 24h"
              : isPending
              ? 'Sending…'
              : 'Send message'}
            {!sent && !isPending && <IconArrow size={14} />}
          </button>
        </form>
      </div>

      <div className="contact-sign">
        <div className="sign-lead">Still here?</div>
        <div className="sign-body">
          Send the email. Say what you&apos;re building, who&apos;s on the team, and the one thing that&apos;s blocking you this quarter.
          I&apos;ll read it properly, reply within a day, and either help or point you to someone who can.
        </div>
        <div className="sign-mark">— faisal</div>
      </div>
    </section>
  );
}
