import { Fragment } from 'react';

export default function Marquee() {
  const items = [
    'REACT', 'TYPESCRIPT', 'NEXT.JS', 'REACT QUERY', 'TRPC', 'GRAPHQL',
    'NODE.JS', 'POSTGRESQL', 'REDIS', 'BULLMQ', 'STORYBOOK', 'TAILWIND',
    'VITE', 'ZOD', 'WCAG 2.1 AA', 'CORE WEB VITALS', 'CLAUDE API', 'OPENAI',
  ];
  const row = (
    <span>
      {items.map((t, i) => (
        <Fragment key={i}>
          <span>{t}</span>
          <span className="dot">✦</span>
        </Fragment>
      ))}
    </span>
  );
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row}{row}
      </div>
    </div>
  );
}
