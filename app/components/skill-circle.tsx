import { SKILL_ICON_MAP } from "./icons";

type SkillCircleProps = {
  name: string;
  percentage: number;
  icon: string;
};

export function SkillCircle({ name, percentage, icon }: SkillCircleProps) {
  const size = 130;
  const strokeWidth = 5;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const targetOffset = circumference * (1 - percentage / 100);

  const IconComponent = SKILL_ICON_MAP[icon];

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="-rotate-90"
          aria-hidden="true"
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#2a2a2a"
            strokeWidth={strokeWidth}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#f97316"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            className="skill-circle-progress"
            style={
              {
                "--circumference": circumference,
                "--target-offset": targetOffset,
              } as React.CSSProperties
            }
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/20">
            {IconComponent && (
              <IconComponent className="h-6 w-6 text-accent" />
            )}
          </div>
          <span className="mt-1.5 text-xs font-bold text-text-primary">
            {percentage}%
          </span>
        </div>
      </div>
      <p className="text-xs text-text-secondary">{name}</p>
    </div>
  );
}
