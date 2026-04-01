type IconProps = { className?: string };

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function GitHubIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function DribbbleIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702C16.86.786 14.555 0 12.003 0c-.84 0-1.653.1-2.404.3zm10.335 3.483c-.218.29-1.91 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export function DownloadIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function AppDesignIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  );
}

export function FigmaIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.019-3.019-3.019h-3.117V7.51zm0 0" />
      <path d="M8.148 24c2.476 0 4.49-2.014 4.49-4.49v-4.49H8.148c-2.476 0-4.49 2.014-4.49 4.49S5.672 24 8.148 24zm0-7.51h3.117v3.019c0 1.665-1.354 3.019-3.019 3.019s-3.019-1.354-3.019-3.019 1.354-3.019 2.921-3.019zm0 0" />
      <path d="M8.148 8.981h4.588v7.023H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.533 4.49-4.533zm0 1.471c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h3.117V10.452H8.148zm0 0" />
      <path d="M8.148 0h4.588v8.981H8.148C5.672 8.981 3.658 6.967 3.658 4.49S5.672 0 8.148 0zm0 1.471c-1.665 0-3.019 1.354-3.019 3.019s1.354 3.019 3.019 3.019h3.117V1.471H8.148zm0 0" />
      <path d="M15.852 8.981c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49-4.49-2.014-4.49-4.49 2.014-4.49 4.49-4.49zm0 1.471c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019 3.019-1.354 3.019-3.019-1.354-3.019-3.019-3.019zm0 0" />
    </svg>
  );
}

export function AdobeXDIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.042 0h15.916C22.178 0 24 1.822 24 4.042v15.916C24 22.178 22.178 24 19.958 24H4.042C1.822 24 0 22.178 0 19.958V4.042C0 1.822 1.822 0 4.042 0z" opacity="0.15" />
      <path d="M12.956 6.474l-2.98 4.878 3.152 5.174c.036.072.054.144.036.198a.16.16 0 0 1-.162.09h-2.016c-.198 0-.324-.036-.396-.198-.36-.756-.72-1.512-1.098-2.268-.378-.756-.774-1.53-1.188-2.34h-.018c-.36.792-.756 1.566-1.134 2.34-.396.774-.774 1.548-1.152 2.304-.072.126-.18.162-.324.162H3.804c-.054 0-.108.018-.126-.036-.036-.054-.018-.126.018-.198l3.042-4.986L3.75 6.492c-.054-.072-.072-.144-.036-.18.036-.054.108-.072.18-.072h1.98c.072 0 .126.018.162.036.054.018.09.054.126.126.324.756.684 1.512 1.062 2.268.378.756.738 1.494 1.116 2.232h.018c.36-.756.738-1.494 1.098-2.232.36-.738.72-1.494 1.062-2.232.018-.054.054-.09.09-.126a.277.277 0 0 1 .162-.036h1.854c.09 0 .144.036.162.09.018.054 0 .108-.036.198zm1.08 10.332V7.38c0-.126.054-.198.198-.198h1.674c.144 0 .198.054.198.198v1.332h.036c.468-1.044 1.332-1.692 2.538-1.692.09 0 .162 0 .27.018.09.018.162.036.216.054.09.036.126.09.126.216v1.728c0 .126-.054.162-.198.126a3.82 3.82 0 0 0-.27-.036 2.42 2.42 0 0 0-.378-.018c-.45 0-.846.09-1.188.27-.342.18-.612.45-.792.81-.198.378-.288.828-.288 1.35v5.268c0 .144-.054.198-.198.198h-1.746c-.09 0-.144-.018-.162-.054a.313.313 0 0 1-.036-.162z" />
    </svg>
  );
}

export function PhotoshopIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 .3v23.4h24V.3H0zm1 1h22v21.4H1V1.3zm4.8 14.4V7.2h3c.7 0 1.3.1 1.8.3.5.2.8.6 1.1 1 .3.4.4 1 .4 1.6 0 .6-.1 1.1-.4 1.5-.3.4-.6.7-1.1.9-.5.2-1 .3-1.7.3H7.3v3h-1.5zm1.5-4.3h1.4c.6 0 1-.1 1.3-.4.3-.3.5-.6.5-1.1 0-.5-.2-.8-.5-1.1-.3-.3-.7-.4-1.3-.4H7.3v3zm9.5 1c-.2-.4-.5-.6-.8-.8-.3-.2-.7-.3-1.2-.3-.3 0-.5.1-.7.2-.2.1-.3.3-.3.5s.1.4.3.5c.2.1.6.3 1.1.4.6.2 1.1.3 1.5.5.4.2.7.5.9.8.2.3.3.7.3 1.2 0 .5-.1.9-.4 1.3-.3.4-.6.6-1.1.8-.5.2-1 .3-1.6.3-.7 0-1.4-.1-1.9-.4-.5-.3-.9-.7-1.2-1.2l1.2-.7c.2.3.4.6.7.8.3.2.7.3 1.1.3.3 0 .6-.1.8-.2.2-.1.3-.3.3-.6 0-.2-.1-.4-.3-.5-.2-.1-.6-.3-1.1-.4-.6-.2-1.1-.3-1.5-.5-.4-.2-.7-.5-.9-.8-.2-.3-.3-.7-.3-1.2 0-.5.1-.9.3-1.2.2-.3.6-.6 1-.8.4-.2.9-.3 1.5-.3.6 0 1.2.1 1.7.4.5.2.9.6 1.1 1l-1.2.7z" />
    </svg>
  );
}

export function IllustratorIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 .3v23.4h24V.3H0zm1 1h22v21.4H1V1.3zm8.4 14.4l-.8-2.5H5.9l-.8 2.5H3.5L6.4 7h1.8l2.9 8.7h-1.7zm-1.2-3.7l-1-3.2-.1-.4c0 .1-.1.3-.1.4l-1 3.2h2.2zm5.5-3.5c-.3 0-.5-.1-.7-.3-.2-.2-.3-.4-.3-.7 0-.3.1-.5.3-.7.2-.2.4-.3.7-.3.3 0 .5.1.7.3.2.2.3.4.3.7 0 .3-.1.5-.3.7-.2.2-.4.3-.7.3zm-.7 7.2V9.3h1.5v6.4h-1.5z" />
    </svg>
  );
}

// --- Dev skill & service icons ---

export function FrontendIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

export function BackendIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  );
}

export function AIIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z" />
      <path d="M16 16H8a4 4 0 0 0-4 4v0h16v0a4 4 0 0 0-4-4z" />
      <circle cx="9" cy="7" r="0.5" fill="currentColor" />
      <circle cx="15" cy="7" r="0.5" fill="currentColor" />
      <path d="M9 12h6" />
    </svg>
  );
}

export function ReactIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="2.139"/>
      <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1"/>
      <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(120 12 12)"/>
    </svg>
  );
}

export function TypeScriptIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.42.276.69.394.57.24.904.362c.464.18.887.37 1.27.572.382.2.715.43.996.687.28.258.502.556.664.896.163.34.245.745.245 1.22 0 .529-.087.985-.26 1.37-.173.384-.416.698-.723.94a3.107 3.107 0 0 1-1.094.546 4.89 4.89 0 0 1-1.373.178c-.625 0-1.204-.055-1.74-.166a6.04 6.04 0 0 1-1.46-.494v-2.6a4.81 4.81 0 0 0 .84.504c.306.14.614.254.92.34a5.5 5.5 0 0 0 .88.184c.282.03.534.046.756.046.29 0 .536-.023.738-.07a1.3 1.3 0 0 0 .474-.195.68.68 0 0 0 .252-.312.986.986 0 0 0 .076-.39c0-.212-.06-.396-.182-.556a1.8 1.8 0 0 0-.502-.43 5.37 5.37 0 0 0-.774-.39 23.478 23.478 0 0 0-1.008-.402c-.44-.172-.84-.368-1.204-.588a3.7 3.7 0 0 1-.913-.747 3.01 3.01 0 0 1-.58-.978 3.563 3.563 0 0 1-.2-1.23c0-.514.099-.966.296-1.356a2.81 2.81 0 0 1 .836-.993 3.89 3.89 0 0 1 1.276-.614 5.565 5.565 0 0 1 1.62-.222zM7.3 10.4H5.205v8.4h-2.25v-8.4H.86V8.4H7.3z" />
    </svg>
  );
}

export function CloudIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  );
}

export function SaaSIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18" />
      <path d="M9 21V9" />
    </svg>
  );
}

export const SOCIAL_ICON_MAP: Record<string, React.ComponentType<IconProps>> = {
  instagram: InstagramIcon,
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  dribbble: DribbbleIcon,
};

export const SKILL_ICON_MAP: Record<string, React.ComponentType<IconProps>> = {
  frontend: FrontendIcon,
  react: ReactIcon,
  backend: BackendIcon,
  ai: AIIcon,
  typescript: TypeScriptIcon,
  app: AppDesignIcon,
};

export const SERVICE_ICON_MAP: Record<string, React.ComponentType<IconProps>> = {
  frontend: FrontendIcon,
  backend: BackendIcon,
  ai: AIIcon,
  saas: SaaSIcon,
  app: AppDesignIcon,
  cloud: CloudIcon,
};
