import { DownloadIcon } from "./icons";

type ButtonProps = {
  variant?: "primary" | "outline";
  href?: string;
  type?: "button" | "submit";
  children: React.ReactNode;
  showDownloadIcon?: boolean;
  download?: boolean;
  target?: string;
  className?: string;
};

export function Button({
  variant = "primary",
  href,
  type,
  children,
  showDownloadIcon,
  download,
  target,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary";

  const variants = {
    primary: "bg-accent text-white hover:bg-accent-hover",
    outline:
      "border border-text-primary text-text-primary hover:bg-accent hover:text-white hover:border-accent",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(download ? { download: true } : {})}
        {...(target ? { target, rel: "noopener noreferrer" } : {})}
      >
        {showDownloadIcon && <DownloadIcon className="h-4 w-4" />}
        {children}
      </a>
    );
  }

  return (
    <button type={type ?? "button"} className={classes}>
      {showDownloadIcon && <DownloadIcon className="h-4 w-4" />}
      {children}
    </button>
  );
}
