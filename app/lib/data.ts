export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface Skill {
  name: string;
  percentage: number;
  icon: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  color: string;
  image?: string;
  images?: string[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface Experience {
  title: string;
  company: string;
  startYear: string;
  endYear: string;
  description: string;
  current: boolean;
}

export const PERSONAL_INFO = {
  name: "Faisal Aqdas",
  firstName: "Faisal",
  title: "Full Stack & AI Automation Engineer",
  greeting: "Hi I am",
  bio: "Full Stack & AI Automation Engineer with 8 years of production experience, including 4+ years building and scaling a white-label B2B SaaS platform to enterprise clients across Europe. I specialize in shipping AI-powered systems — Claude API, OpenAI, Vapi — that eliminate manual workflows at scale, with a proven track record of cutting content production time by 87%, scaling outreach to 600+ automated calls/month, and driving production incidents from 9/quarter to zero. I own entire product surfaces end-to-end, from React/Next.js frontends to GCP infrastructure, in fast-moving remote environments.",
  aboutSubtitle:
    "Building scalable full-stack applications and AI-powered automation systems.",
  email: "faisalaqdas@gmail.com",
  phone: "+92 348 404 6426",
  linkedin: "https://www.linkedin.com/in/faisalaqdas",
  designedBy: "Designed & Built by Faisal Aqdas",
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About me", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact me", href: "#contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/faisalaqdas",
    icon: "linkedin",
  },
  { name: "GitHub", href: "https://github.com/faisal212", icon: "github" },
];

export const STATS: Stat[] = [
  { value: "8+", label: "Years Experience" },
  { value: "20+", label: "Projects Shipped" },
  { value: "4+", label: "Enterprise Clients" },
];

export const SERVICES: Service[] = [
  {
    icon: "frontend",
    title: "Frontend Development",
    description:
      "Pixel-perfect React & Next.js applications with SSR, PWA capabilities, and component libraries — achieving sub-2s mobile load times.",
  },
  {
    icon: "backend",
    title: "Backend Development",
    description:
      "Scalable Node.js APIs, multi-tenant architectures, PostgreSQL, Redis, BullMQ job queues, and real-time event-driven systems.",
  },
  {
    icon: "ai",
    title: "AI Automation",
    description:
      "AI-powered workflow engines, Claude/OpenAI integrations, no-code automation builders, AI call systems via Vapi + n8n.",
  },
  {
    icon: "saas",
    title: "SaaS Development",
    description:
      "White-label multi-tenant platforms with theming systems, analytics dashboards, growth engines, and enterprise client onboarding.",
  },
  {
    icon: "app",
    title: "Full Stack Apps",
    description:
      "End-to-end product development from design to deployment — page builders, community platforms, gamification, and CRM tools.",
  },
  {
    icon: "app",
    title: "Mobile Development",
    description:
      "Cross-platform React Native apps with Unity 3D AR integration, achieving 1,000+ downloads and 4.2-star ratings on app stores.",
  },
];

export const SKILLS: Skill[] = [
  { name: "Frontend", percentage: 100, icon: "frontend" },
  { name: "React/Next.js", percentage: 100, icon: "react" },
  { name: "Backend", percentage: 70, icon: "backend" },
  { name: "AI Automation", percentage: 70, icon: "ai" },
  { name: "TypeScript", percentage: 95, icon: "typescript" },
  { name: "Mobile Dev", percentage: 75, icon: "app" },
];

export const EXPERIENCES: Experience[] = [
  {
    title: "Full Stack & AI Automation Engineer",
    company: "Decommerce",
    startYear: "2022",
    endYear: "Present",
    description:
      "Built a white-label B2B SaaS community platform for enterprise clients across Europe (TBO Clothing, Sonova, Thalia). Architected the full Next.js frontend, multi-tenant infrastructure, gamified growth engine, AI-powered page builder, Visual Micro-Apps Automation Engine with Claude/OpenAI, and outbound AI call automation via Vapi + n8n. Reduced content production time by 87% and drove production incidents from 9/quarter to zero.",
    current: true,
  },
  {
    title: "Experienced React Developer",
    company: "ComOn Enterprise LLC",
    startYear: "2021",
    endYear: "2022",
    description:
      "Delivered 4 production Next.js applications with SSR and PWA capabilities, achieving sub-2s mobile load times. Built a Storybook component library of 35+ reusable components adopted across 3 projects, reducing UI development time by 38%.",
    current: false,
  },
  {
    title: "Full Stack Engineer & Team Lead",
    company: "Smart Reality",
    startYear: "2018",
    endYear: "2020",
    description:
      "Led a 5-engineer team to ship an AR educational mobile app (React Native + Unity 3D) from zero to launch in 11 months, reaching 1,000+ downloads with a 4.2-star rating. Architected the React Native shell embedding Unity 3D AR containers.",
    current: false,
  },
  {
    title: "Frontend Developer",
    company: "AcroEx",
    startYear: "2016",
    endYear: "2018",
    description:
      "Shipped 11 commercial HTML/CSS/WordPress templates on ThemeForest, each generating 100–1,000+ sales — establishing a foundation in responsive, cross-browser frontend development at scale.",
    current: false,
  },
];

export const FILTER_CATEGORIES = [
  "All",
  "Frontend",
  "Full Stack",
  "AI Automation",
  "Mobile",
] as const;

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Community Platform",
    category: "Full Stack",
    color: "#1a0a2a",
    image: "/images/community.avif",
  },
  {
    id: 15,
    title: "N8N AI Lead Generation",
    category: "AI Automation",
    color: "#2a0a0a",
    image: "/images/n8n-lead-generation-1.png",
    images: ["/images/n8n-lead-generation-1.png", "/images/n8n-lead-generation-2.jpg"],
  },
  {
    id: 2,
    title: "AI Page Builder",
    category: "AI Automation",
    color: "#2a1a0a",
    image: "/images/ai-page-builder.png",
    images: ["/images/ai-page-builder.png", "/images/ai-page-builder-2.png"],
  },
  {
    id: 3,
    title: "Growth Engine",
    category: "Full Stack",
    color: "#0a2a1a",
    image: "/images/growth-engine-1.png",
    images: ["/images/growth-engine-1.png", "/images/growth-engine-2.png"],
  },
  {
    id: 4,
    title: "Automation Engine",
    category: "AI Automation",
    color: "#2a0a1a",
    image: "/images/automation-engine-1.png",
    images: ["/images/automation-engine-1.png", "/images/automation-engine-2.png"],
  },
  {
    id: 5,
    title: "Analytics Dashboard",
    category: "Frontend",
    color: "#1a2a0a",
    image: "/images/analytics-dashboard.png",
  },
  {
    id: 6,
    title: "AI Call System",
    category: "AI Automation",
    color: "#0a1a2a",
    image: "/images/voice-app-2.jpeg",
    images: ["/images/voice-app-2.jpeg", "/images/voice-app-1.png"],
  },
  {
    id: 7,
    title: "White-Label Theming",
    category: "Frontend + AI Automation",
    color: "#2a1a0a",
    image: "/images/whitelabel-theming-3.jpg",
    images: ["/images/whitelabel-theming-3.jpg", "/images/whitelabel-theming-1.jpg", "/images/whitelabel-theming-2.jpg"],
  },


  {
    id: 10,
    title: "AR Education App",
    category: "Mobile",
    color: "#2a0a1a",
    image: "/images/ar-app-1.png",
    images: ["/images/ar-app-1.png", "/images/ar-app-2.png", "/images/ar-app-3.png"],
  },

  {
    id: 12,
    title: "ThemeForest Templates",
    category: "Frontend",
    color: "#0a1a2a",
    image: "/images/themforest-1.jpg",
    images: ["/images/themforest-1.jpg", "/images/themeforest-2.jpg"],
  },
  {
    id: 13,
    title: "TBô Ecommerce",
    category: "Frontend",
    color: "#1a1a0a",
    image: "/images/tbo-ecommece-1.jpeg",
    images: ["/images/tbo-ecommece-1.jpeg", "/images/tbo-ecommece-2.jpeg"],
  },
  {
    id: 14,
    title: "Mindfit Mental Health",
    category: "Mobile",
    color: "#1a0a2a",
    image: "/images/minfit-1.webp",
    images: ["/images/minfit-1.webp", "/images/minfit-2.webp"],
  },
  {
    id: 16,
    title: "Avocado PK Ecommerce",
    category: "Frontend",
    color: "#1a2a0a",
    image: "/images/avacado-pk-2.jpg",
    images: ["/images/avacado-pk-2.jpg", "/images/avacado-pk-1.jpg"],
  },
];
