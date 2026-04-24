export interface NavSection { id: string; label: string; num: string }
export interface Metric { val: number; suf: string; label: string }
export interface ExpertiseItem { k: 'PERF' | 'STATE' | 'API' | 'SCALE' | 'AI'; title: string; body: string; badges: string[] }
export interface CaseWin { v: string; l: string }
export interface CaseHardPart { title: string; body: string }
export interface Case { idx: string; name: string; title: string; tagline: string; role: string; desc: string; tags: string[]; wins: CaseWin[]; hardPart?: CaseHardPart }
export interface Logo { name: string; context: string; kind: 'mercedes' | 'dots' | 'letters' | 'img'; img?: string }
export interface Testimonial { quote: string; who: string; role: string; where: string; draft?: boolean }
export interface Note { kind: 'essay' | 'short'; date: string; title: string; dek: string; body: string[] }
export interface Role { role: string; company: string; when: string; body: string; stack: string[] }
export interface Command { group: string; icon: string; label: string; action: string; hint: string }
export interface IconProps { size?: number; style?: React.CSSProperties }

export const NAV_SECTIONS: NavSection[] = [
  { id: 'work', label: 'Work', num: '01' },
  { id: 'expertise', label: 'Expertise', num: '02' },
  { id: 'experience', label: 'Experience', num: '03' },
  { id: 'playground', label: 'Playground', num: '04' },
  { id: 'notes', label: 'Notes', num: '05' },
  { id: 'contact', label: 'Contact', num: '06' },
];

export const METRICS: Metric[] = [
  { val: 8, suf: 'yrs', label: 'Production React & TypeScript' },
  { val: 92, suf: '+', label: 'Lighthouse across Perf / A11y / Best Practices' },
  { val: 87, suf: '%', label: 'Content production time reduction — AI automation' },
  { val: 20, suf: '+', label: 'Enterprise projects shipped to production' },
];

export const EXPERTISE: ExpertiseItem[] = [
  {
    k: 'PERF',
    title: 'Core Web Vitals by design',
    body: 'I engineer for performance from day one — not as an afterthought. SSR/SSG strategy, route-based code splitting, lazy-loading below-the-fold, preloaded critical assets, eliminated render-blocking resources. Sub-2s mobile on enterprise deployments.',
    badges: ['LCP ≤ 2.5s', 'CLS ≤ 0.1', 'INP ≤ 200ms', 'Lighthouse 92+'],
  },
  {
    k: 'STATE',
    title: 'State with intentionality',
    body: 'Server state via RTK Query — auto-caching, tag-based invalidation, background refetch, optimistic updates. Local UI state close to the component with useState and useReducer. Redux Toolkit where cross-cutting concerns genuinely demand it. Lean bundles, predictable components.',
    badges: ['RTK Query', 'Redux Toolkit', 'Zustand', 'useReducer'],
  },
  {
    k: 'API',
    title: 'Resilient data layers',
    body: 'Typed API clients with Axios interceptors for auth injection and error normalisation. Request deduplication, retry with exponential backoff, response caching that prevents redundant network calls. GraphQL where clients shape data; REST where simplicity wins.',
    badges: ['tRPC', 'GraphQL', 'REST', 'Zod'],
  },
  {
    k: 'SCALE',
    title: 'Architecture for teams, not just today',
    body: 'Feature-based folder structure, strict component boundaries, shared design tokens, Storybook-driven development across multiple enterprise teams. Code a new engineer can navigate on day one — and ship to on day two.',
    badges: ['Monorepo', 'Storybook', 'Design tokens', 'A11y WCAG 2.1 AA'],
  },
  {
    k: 'AI',
    title: 'Frontend-embedded AI that ships',
    body: "I ship AI features the way I ship UI — with the same rigor. LLM orchestration (Claude, GPT-4o, Gemini) through tool calling and multi-step agent loops. Streaming into real interfaces, not chat widgets. The hard part isn't connecting the APIs — it's making the output reliable enough that a non-technical user trusts it without reviewing every result. That's where I operate.",
    badges: ['Claude', 'GPT-4o', 'Langbase', 'Agent loops', 'Tool calling'],
  },
];

export const CASES: Case[] = [
  {
    idx: '01',
    name: 'SPEAR',
    title: 'Community Platform',
    tagline: 'Mobile-first community & rewards platform',
    role: 'Senior Frontend Engineer · Architecture + UI System',
    desc: 'A production Next.js community platform launched as a white-label tenant on the Decommerce stack. Built the design system, the authenticated feed, shop, and rewards flows, mobile-web-first with sub-2s cold load on 4G. Tenant brand tokens drive every surface — colors, type, spacing, component variants — with zero duplicated code per tenant.',
    tags: ['Next.js', 'TypeScript', 'Design Tokens', 'RTK Query', 'Storybook'],
    wins: [
      { v: '< 2s', l: 'Cold load on 4G enterprise mobile' },
      { v: '1 kit', l: 'Tokens drive every tenant surface' },
      { v: '98', l: 'Accessibility Lighthouse score' },
    ],
    hardPart: {
      title: 'The hard part — per-tenant design config, without a refetch on every render',
      body: 'Every tenant ships with its own brand tokens, layout config, and feature flags. Fetching that config on each navigation would have burned latency and requests on something that changes maybe once a week. I moved the config into the Next.js server cache — tenant-scoped keys, cached indefinitely, invalidated via a tagged write path that only fires when an admin saves a change in the dashboard. Pages render instantly with the right brand on the first byte, and the cache stays honest because the write path is the only thing that can touch it.',
    },
  },
  {
    idx: '02',
    name: 'TBO',
    title: 'Performance Rescue',
    tagline: 'A fashion storefront, dragged back under the 2.5s line',
    role: 'Frontend Engineer · Performance Audit + Optimization',
    desc: "A focused perf engagement on a fashion storefront: audit, diagnose, ship. Found LCP blown out by unoptimized hero imagery, CLS from late-arriving fonts, and render-blocking scripts killing TTI. Shipped wins in four weeks — preload critical resources, split the client bundle, fix image pipeline, eliminate layout shift. The client has since migrated to a Shopify theme; these numbers reflect the engagement.",
    tags: ['Next.js', 'Gatsby', 'Web Vitals', 'Image pipeline', 'SSG'],
    wins: [
      { v: '50 → 96', l: 'Lighthouse performance score' },
      { v: '-62%', l: 'LCP on product detail pages' },
      { v: '< 0.01', l: 'Cumulative Layout Shift after fix' },
    ],
    hardPart: {
      title: 'The hard part — the boring wins, done carefully',
      body: "No single change moved the score; a stack of unglamorous ones did. The image pipeline was serving original PNG/JPEGs at desktop dimensions to phones — I moved to responsive sources with modern formats and correct `sizes`. A pile of third-party scripts were blocking first render — audited each, deferred what could be deferred, moved the rest into `useEffect` so they never touch the critical path. Render-time was dying to expensive recomputations on every render — memoised what was hot, lifted what was stable. And because it was a Gatsby project, I pushed as much of the content pipeline as possible to build-time SSG so the browser got HTML, not a loading state. Four weeks, 50 → 96.",
    },
  },
  {
    idx: '03',
    name: 'Growth Engine',
    title: 'AI-powered growth platform',
    tagline: 'Full-stack SaaS — multi-tenant white-label',
    role: 'Full Stack Lead · Architecture + Shipping',
    desc: 'White-label SaaS for enterprise clients across Europe. Architected Next.js frontend, multi-tenant infrastructure, gamified growth engine, AI-powered page builder, Visual Micro-Apps, and AI call automation via Vapi + n8n.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'BullMQ', 'Claude API', 'OpenAI'],
    wins: [
      { v: '87%', l: 'Cut content production time with AI pipelines' },
      { v: '9 → 0', l: 'Production incidents / quarter' },
      { v: '600+', l: 'Automated AI calls per month at scale' },
    ],
    hardPart: {
      title: 'The hard part — cache granularity at tenant × campaign',
      body: 'A tenant can run dozens of campaigns, and each campaign owns its own design config, missions, rewards, and targeting rules. One cache key per tenant was too coarse — changing one campaign would blow the cache for every other campaign on that tenant. I keyed the Next.js server cache at `tenant:campaign` and invalidated only that exact tuple on config writes. Missions and rewards inherit the same pattern. Result: editors see their changes instantly on the campaign they touched, every other campaign keeps rendering from cache.',
    },
  },
  {
    idx: '04',
    name: 'Klaire',
    title: 'AI Onboarding Agent',
    tagline: 'One week of enterprise setup, compressed to 20 minutes',
    role: 'Full Stack Engineer · AI Orchestration + Frontend',
    desc: 'Enterprise clients were spending a full week setting up every new campaign on our platform — design, copy, SEO, legal docs, missions — done manually, every time. I built Klaire: an AI agent embedded directly in the platform. Client pastes a URL, Puppeteer scrapes their brand headlessly, Langbase orchestrates the pipeline, GPT-4o writes everything, a live mobile preview updates in real time. Ran in production for enterprise clients across retail, automotive, healthcare, and publishing in DE, EU, and the US.',
    tags: ['NestJS', 'Next.js', 'Langbase', 'GPT-4o', 'Puppeteer', 'Tool calling'],
    wins: [
      { v: '1 week → 20 min', l: 'Enterprise campaign setup time' },
      { v: '0', l: 'Developer hours per new client onboarding' },
      { v: 'DE · EU · US', l: 'Enterprise clients live in production' },
    ],
    hardPart: {
      title: 'The hard part — making AI reliable enough to trust without review',
      body: "Connecting the tools was easy — Puppeteer, Langbase, GPT-4o, the frontend preview. The real work was making the output reliable enough that a non-technical client could finish onboarding without a developer checking every generated string. That meant strict schemas on every LLM call, tool calling for anything that touches the database, retries on malformed output, and a validation layer between the model and the UI that refuses bad data instead of rendering it. The thing I'm most proud of has nothing to do with the AI stack — it's that someone with zero technical background could open Klaire and finish in 20 minutes. Removing the need for a developer was the whole product.",
    },
  },
];

export const LOGOS: Logo[] = [
  { name: 'Mercedes-Benz', context: 'Growth Engine · 2023', kind: 'mercedes' },
  { name: 'Sonova', context: 'Enterprise community · 2022', kind: 'img', img: '/images/sonova.svg' },
  { name: 'Thalia', context: 'Internal engagement · 2023', kind: 'img', img: '/images/thalia.svg' },
  { name: 'TBO Clothing', context: 'Community commerce · 2023', kind: 'img', img: '/images/TBO_logo_White.avif' },
  { name: 'Syngenta', context: 'Growth Engine · 2023-2025', kind: 'img', img: '/images/sygenta.svg' },
  { name: 'Decommerce', context: 'Platform employer · 2022 →', kind: 'img', img: '/images/decommerce.avif' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Faisal rebuilt the frontend of our white-label platform while we kept shipping to enterprise clients. Zero regressions, zero production incidents in the quarter after launch. The kind of senior engineer you let own the architecture and then stop worrying about it.',
    who: 'Wang Xi',
    role: 'Engineering Lead',
    where: 'Decommerce',
  },
  {
    quote: "Klaire was the single biggest operational shift we've had. Client onboarding went from a week of back-and-forth with our team to twenty minutes the client does themselves. Faisal architected the whole thing — orchestration, frontend, the reliability layer — and it ran in production for enterprise clients across Europe.",
    who: 'Allan Perrottet',
    role: 'Co-founder',
    where: 'Decommerce',
  },
  {
    quote: "Faisal's templates on ThemeForest set the bar for the team. Clean markup, pixel-accurate, genuinely responsive when 'responsive' was still a buzzword — and every one of them sold in the hundreds to low thousands. He makes frontend look easy.",
    who: 'Hassan Javed',
    role: 'Founder & Technical Lead',
    where: 'AcroEx',
  },
];

export const NOTES: Note[] = [
  {
    kind: 'essay',
    date: '2024',
    title: 'Cache invalidation is a product decision, not a technical one',
    dek: 'Notes from three years of multi-tenant platforms',
    body: [
      "Every multi-tenant platform I've shipped comes back to the same question: how fine-grained does your cache need to be? Get it wrong in either direction and the product tells on you.",
      'Too coarse — `cache per tenant` — and one admin editing a single campaign nukes the cached pages for every other campaign they own. The editor sees an instant update. Every other editor on the tenant sees a cold render they did not cause.',
      "Too granular — `cache per page per tenant per user` — and you haven't really cached anything. You've just paid for Redis.",
      'The answer is almost never technical. It is: what is the smallest unit of content an editor actually edits? For SPEAR, it was the tenant design config. For Growth Engine, it was the `tenant:campaign` tuple. That tuple becomes the cache key, and the only path that invalidates it is the save endpoint in the admin.',
      'Two properties fall out of this: writes are the only source of staleness (reads are pure), and reads stay O(1) on a warm cache. Editors see their own changes instantly. Everyone else sees the cached page until the moment an edit they care about lands.',
      "That's the whole trick. Pick the right key, put the invalidation on the write path, and stop touching it.",
    ],
  },
  {
    kind: 'essay',
    date: '2025',
    title: "The hard part of AI automation isn't connecting the tools",
    dek: 'Notes from a B2B outbound pipeline running 6,316 executions a week',
    body: [
      "A few months ago I built a fully automated B2B outbound pipeline in n8n. Input: a company name in a Google Sheet. Output: a personalised email draft sitting in Gmail, ready for a human to glance at and send. Zero manual work in between.",
      "The pipeline runs six connected workflows. Apollo finds the right contact. Claude scores the matches and picks the target. PhantomBuster scrapes LinkedIn activity. Google Custom Search pulls public signals. Claude builds an intelligence profile, drafts a cold email, and writes the Gmail draft. A second workflow handles follow-ups — day two tries a Vapi AI phone call first and only falls back to email if unanswered, day five sends a concise second touch. A third polls Gmail every minute, classifies replies, updates the sheet. A fourth deduplicates so no lead ever gets emailed twice.",
      "None of that is the hard part. Connecting APIs is plumbing. n8n makes plumbing trivial.",
      "The hard part is making AI decisions reliable enough to trust without checking every single output. A classifier that's 92% accurate sounds great until you realise that 8% failure rate means dozens of bad labels a week on a pipeline doing thousands of runs. An LLM-written email that's good 19 times out of 20 still embarrasses you on the twentieth if nobody reads it.",
      "The answer isn't one trick, it's a layered one. Strict schemas on every LLM output so bad data fails loud instead of silent. Tool calling for anything that touches a database, so the model proposes and the code disposes. Validation gates between stages that refuse to move forward on malformed input. And one human-in-the-loop checkpoint at the point of irreversibility — the Gmail send button — because that's the exact place where a human's skim costs you seconds and catches the 5% the model got wrong.",
      "Self-hosted on GCP, because cloud n8n hits limits fast on a pipeline moving this much volume. 6,316 executions in a week. Instead of a rep reaching five qualified leads a day, the system reaches a hundred.",
      "That's the real engineering problem in AI automation: not whether the model can do the task, but how you build a system that catches the model when it can't.",
    ],
  },
];

export const ROLES: Role[] = [
  {
    role: 'Senior Frontend Engineer — Full Stack & AI',
    company: 'Decommerce',
    when: '2022 — Present',
    body: "Lead the frontend of a white-label B2B SaaS community platform shipped to enterprise clients across Europe — Mercedes-Benz, Sonova, Thalia, TBO Clothing. Built the multi-tenant design system: tokenised brand config per tenant, a Storybook-driven component library, and a theming engine that lets a new brand ship in hours. Architected the Next.js frontend with per-tenant × per-campaign server caching, feed/shop/rewards flows at sub-2s cold load, and the white-labelling layer. Built the operator UI for the AI Page Builder (Claude/GPT-4o), the authoring surface for Visual Micro-Apps, and the dashboards for the outbound AI-call automation. Reached into NestJS, BullMQ, and the cache invalidation layer whenever the frontend needed the backend to move with it. Cut content production time by 87%; drove production incidents from 9/quarter to zero.",
    stack: ['Next.js', 'React', 'TypeScript', 'Storybook', 'RTK Query', 'NestJS', 'Redis', 'BullMQ', 'Claude', 'GPT-4o'],
  },
  {
    role: 'Senior React Developer',
    company: 'ComOn Enterprise LLC',
    when: '2021 — 2022',
    body: 'Overhauled a React codebase scoring under 50 on Lighthouse, applying performance optimisation, code-splitting, and rendering fixes to push scores to 92+. Led architecture migration to a headless ecommerce stack with Gatsby.js, delivering sub-second page loads. Established a shared Storybook component library, eliminating duplicate UI across three teams and cutting design-to-code turnaround from days to hours.',
    stack: ['React', 'Gatsby', 'Storybook', 'GraphQL', 'TypeScript'],
  },
  {
    role: 'Frontend Lead — React Native & AR',
    company: 'Smart Reality',
    when: '2018 — 2020',
    body: 'Led a 5-engineer team to ship an AR educational mobile app from zero to launch in 11 months, reaching 1,000+ downloads with a 4.2-star rating. Architected the React Native shell that embedded Unity 3D AR containers — the bridge layer, state sync, and the frontend patterns that let a non-native team ship a native-feeling product.',
    stack: ['React Native', 'Unity 3D', 'Node.js', 'MongoDB'],
  },
  {
    role: 'Frontend Developer',
    company: 'AcroEx',
    when: '2016 — 2018',
    body: 'Shipped 11 commercial HTML/CSS/WordPress templates on ThemeForest, each generating 100 – 1,000+ sales — establishing a foundation in responsive, cross-browser frontend development at scale.',
    stack: ['HTML', 'CSS', 'JavaScript', 'WordPress', 'PHP'],
  },
];

export const COMMANDS: Command[] = [
  { group: 'Navigation', icon: 'home', label: 'Go to top', action: 'scroll:top', hint: '↑' },
  { group: 'Navigation', icon: 'work', label: 'Go to Work', action: 'scroll:work', hint: 'G W' },
  { group: 'Navigation', icon: 'exp', label: 'Go to Expertise', action: 'scroll:expertise', hint: 'G E' },
  { group: 'Navigation', icon: 'history', label: 'Go to Experience', action: 'scroll:experience', hint: 'G H' },
  { group: 'Navigation', icon: 'play', label: 'Go to Playground', action: 'scroll:playground', hint: 'G P' },
  { group: 'Navigation', icon: 'work', label: 'Go to Notes', action: 'scroll:notes', hint: 'G N' },
  { group: 'Navigation', icon: 'contact', label: 'Go to Contact', action: 'scroll:contact', hint: 'G C' },
  { group: 'Actions', icon: 'mail', label: 'Email Faisal', action: 'href:mailto:faisalaqdas@gmail.com', hint: '↵' },
  { group: 'Actions', icon: 'github', label: 'Open GitHub', action: 'href:https://github.com/faisal212', hint: '↵' },
  { group: 'Actions', icon: 'linkedin', label: 'Open LinkedIn', action: 'href:https://linkedin.com/in/faisalaqdas', hint: '↵' },
  { group: 'Actions', icon: 'download', label: 'Download Resume', action: 'download:resume', hint: '↵' },
  { group: 'Theme', icon: 'zap', label: 'Toggle reduce motion', action: 'toggle:motion', hint: 'M' },
  { group: 'Theme', icon: 'target', label: 'Cycle accent color', action: 'toggle:accent', hint: 'A' },
];
