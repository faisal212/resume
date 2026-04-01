type StatItemProps = {
  value: string;
  label: string;
};

export function StatItem({ value, label }: StatItemProps) {
  return (
    <div className="text-center">
      <p className="text-2xl font-bold text-text-primary md:text-3xl">
        {value}
      </p>
      <p className="mt-1 text-xs text-text-secondary md:text-sm">{label}</p>
    </div>
  );
}
