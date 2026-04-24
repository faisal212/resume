"use client";

import { useState, useEffect, useRef, useCallback } from 'react';

interface FakeUser { id: number; name: string; role: string }
type FetchStatus = 'idle' | 'loading' | 'success' | 'error'

const FAKE_USERS: FakeUser[] = [
  { id: 1, name: 'Ada Lovelace', role: 'founder' },
  { id: 2, name: 'Linus Torvalds', role: 'kernel' },
  { id: 3, name: 'Grace Hopper', role: 'compiler' },
  { id: 4, name: 'Dennis Ritchie', role: 'language' },
];

export default function Playground() {
  const [status, setStatus] = useState<FetchStatus>('idle');
  const [data, setData] = useState<FakeUser[] | null>(null);
  const [attempt, setAttempt] = useState(0);
  const [cacheHits, setCacheHits] = useState(0);
  const [fromCache, setFromCache] = useState(false);
  const cacheRef = useRef({ ts: 0, payload: null as FakeUser[] | null });
  const STALE = 8000;

  const fetchUsers = useCallback((opts: { force?: boolean; failOnce?: boolean } = {}) => {
    const { force = false, failOnce = false } = opts;
    const now = Date.now();
    if (!force && cacheRef.current.payload && now - cacheRef.current.ts < STALE) {
      setData(cacheRef.current.payload);
      setStatus('success');
      setFromCache(true);
      setCacheHits(h => h + 1);
      return;
    }
    setStatus('loading');
    setFromCache(false);
    setAttempt(a => a + 1);
    setTimeout(() => {
      if (failOnce && Math.random() < 0.6) {
        setStatus('error');
        setTimeout(() => fetchUsers({ force: true }), 800);
        return;
      }
      cacheRef.current = { ts: Date.now(), payload: FAKE_USERS };
      setData(FAKE_USERS);
      setStatus('success');
    }, 700);
  }, []);

  useEffect(() => { fetchUsers(); }, [fetchUsers]);

  const code = `export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: authedBaseQuery('/api'),
  tagTypes: ['Users'],
  endpoints: (build) => ({
    listUsers: build.query<User[], void>({
      query: () => '/users',
      providesTags: ['Users'],
      keepUnusedDataFor: 8,
    }),
  }),
});

const { data, isFetching, refetch } = useListUsersQuery();
// auto cache · tag invalidation · typed errors`;

  return (
    <section className="section container reveal" id="playground">
      <div className="sec-head">
        <div>
          <div className="sec-eyebrow"><span className="num">04 /</span> Playground</div>
        </div>
        <h2 className="sec-title">
          The code, <span className="serif-em">live</span>.
        </h2>
      </div>
      <div className="playground">
        <div className="pg-side">
          <div className="pg-side-head">
            <span>usersApi.ts</span>
            <span>RTK Query · TS</span>
          </div>
          <pre className="pg-code">
            <code>
              <span className="tok-c">// server state as a first-class citizen</span>{'\n'}
              {code}
            </code>
          </pre>
        </div>
        <div className="pg-preview">
          <div className="pg-side-head">
            <span>preview</span>
            <span>attempt #{attempt} · cache hits {cacheHits}</span>
          </div>
          <div className="rq-box">
            <div className="rq-controls">
              <button className="rq-btn primary" onClick={() => fetchUsers({ force: true })}>Refetch</button>
              <button className="rq-btn" onClick={() => fetchUsers()}>Use cache</button>
              <button className="rq-btn" onClick={() => fetchUsers({ force: true, failOnce: true })}>Simulate error</button>
              <button className="rq-btn" onClick={() => { cacheRef.current = { ts: 0, payload: null }; fetchUsers({ force: true }); }}>Invalidate</button>
            </div>
            <div className="rq-state">
              <div className="rq-row">
                <span className="lbl">Status</span>
                <span className={`rq-status ${status}`}><span className="sd"></span><span className="val">{status}</span></span>
              </div>
              <div className="rq-row">
                <span className="lbl">Source</span>
                <span className="val">{fromCache ? 'cache (fresh)' : 'network'}</span>
              </div>
              <div className="rq-row">
                <span className="lbl">Records</span>
                <span className="val">{data ? data.length : '—'}</span>
              </div>
            </div>
            <div className="rq-list">
              {data ? data.map(u => (
                <div className="item" key={u.id}>
                  <span className="u">{u.name}</span>
                  <span className="v">{u.role}</span>
                </div>
              )) : (
                <div className="pg-empty">
                  {status === 'loading' ? 'fetching…' : status === 'error' ? 'retrying with backoff…' : '—'}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="pg-teach">
        <div className="pg-teach-head">
          <span className="pg-teach-eyebrow">What&apos;s actually happening</span>
          <span className="pg-teach-hint">↓ try each button, watch the state</span>
        </div>
        <ol className="pg-teach-list">
          <li>
            <span className="pg-num">01</span>
            <div>
              <div className="pg-label"><b>Refetch</b> <span className="pg-chip">network</span></div>
              <p>Forces a round-trip. 700ms of simulated latency, then the cache is refreshed with the new payload and the timestamp resets.</p>
            </div>
          </li>
          <li>
            <span className="pg-num">02</span>
            <div>
              <div className="pg-label"><b>Use cache</b> <span className="pg-chip good">instant · 0 ms</span></div>
              <p>If the cache is fresh (&lt; 8s old), we return the cached payload synchronously — no loading state, no network. <em>This is the whole point.</em></p>
            </div>
          </li>
          <li>
            <span className="pg-num">03</span>
            <div>
              <div className="pg-label"><b>Simulate error</b> <span className="pg-chip warn">retry · 800ms backoff</span></div>
              <p>60% chance of a failed request. The UI enters <code>error</code> state, then a retry fires with backoff — exactly the pattern production APIs need.</p>
            </div>
          </li>
          <li>
            <span className="pg-num">04</span>
            <div>
              <div className="pg-label"><b>Invalidate</b> <span className="pg-chip">tag-based</span></div>
              <p>Manually blows the cache — the moment the data you trusted is no longer true (a write, a mutation, a session change). In RTK Query this is a tag invalidation; here it&apos;s a ref reset.</p>
            </div>
          </li>
        </ol>
        <div className="pg-teach-note">
          <span className="pg-note-icon">✱</span>
          <span>This is the same pattern I use in Next.js server cache at <code>tenant:campaign</code> granularity — reads are O(1), the write path is the only source of staleness. More on that in <a href="#notes">Notes</a>.</span>
        </div>
      </div>
    </section>
  );
}
