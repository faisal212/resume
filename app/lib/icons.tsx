import type { CSSProperties, ReactNode } from 'react'

export interface IconProps { size?: number; style?: CSSProperties }

function Icon({ children, size = 16, style }: { children: ReactNode; size?: number; style?: CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
         style={style}>
      {children}
    </svg>
  );
}

export const IconArrow = (p: IconProps) => (<Icon {...p}><path d="M5 12h14M13 6l6 6-6 6"/></Icon>);
export const IconArrowDown = (p: IconProps) => (<Icon {...p}><path d="M12 5v14M6 13l6 6 6-6"/></Icon>);
export const IconDownload = (p: IconProps) => (<Icon {...p}><path d="M12 3v12M7 11l5 5 5-5M5 21h14"/></Icon>);
export const IconGitHub = (p: IconProps) => (<Icon {...p}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></Icon>);
export const IconLinkedIn = (p: IconProps) => (<Icon {...p}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></Icon>);
export const IconMail = (p: IconProps) => (<Icon {...p}><path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zM22 8l-10 7L2 8"/></Icon>);
export const IconCode = (p: IconProps) => (<Icon {...p}><path d="M8 18l-6-6 6-6M16 6l6 6-6 6"/></Icon>);
export const IconLayers = (p: IconProps) => (<Icon {...p}><path d="M12 2l10 6-10 6-10-6 10-6zM2 12l10 6 10-6M2 18l10 6 10-6"/></Icon>);
export const IconZap = (p: IconProps) => (<Icon {...p}><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></Icon>);
export const IconDatabase = (p: IconProps) => (<Icon {...p}><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v7c0 1.7 4 3 9 3s9-1.3 9-3V5M3 12v7c0 1.7 4 3 9 3s9-1.3 9-3v-7"/></Icon>);
export const IconBox = (p: IconProps) => (<Icon {...p}><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.3 7L12 12l8.7-5M12 22V12"/></Icon>);
export const IconTarget = (p: IconProps) => (<Icon {...p}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></Icon>);
export const IconSearch = (p: IconProps) => (<Icon {...p}><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.3-4.3"/></Icon>);
export const IconSparkle = (p: IconProps) => (<Icon {...p}><path d="M12 2v6M12 16v6M2 12h6M16 12h6M5 5l4 4M15 15l4 4M19 5l-4 4M9 15l-4 4"/></Icon>);
export const IconTerminal = (p: IconProps) => (<Icon {...p}><path d="M4 17l6-6-6-6M12 19h8"/></Icon>);
export const IconHome = (p: IconProps) => (<Icon {...p}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2h-4v-7h-6v7H5a2 2 0 0 1-2-2V9z"/></Icon>);
