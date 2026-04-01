import { SERVICE_ICON_MAP, AppDesignIcon } from "./icons";

type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
};

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  const IconComponent = SERVICE_ICON_MAP[icon] ?? AppDesignIcon;

  return (
    <div className="rounded-2xl border border-border bg-bg-card p-6 transition-colors hover:border-accent/50">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/15">
        <IconComponent className="h-7 w-7 text-accent" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-text-primary">{title}</h3>
      <p className="text-sm leading-relaxed text-text-secondary">
        {description}
      </p>
    </div>
  );
}
