import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface Option {
  id: string;
  label: string;
  description?: string;
  icon?: ReactNode;
}

export function OptionGrid({
  options,
  value,
  onChange,
  columns = 3,
  compact = false,
}: {
  options: Option[];
  value: string;
  onChange: (id: string) => void;
  columns?: number;
  compact?: boolean;
}) {
  return (
    <div className="grid gap-2.5" style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}>
      {options.map((opt) => {
        const active = opt.id === value;
        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => onChange(opt.id)}
            aria-pressed={active}
            className={cn(
              'group relative flex flex-col items-start rounded-xl border px-3.5 py-3 text-left transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-blue',
              compact ? 'py-2.5' : 'py-3',
              active
                ? 'border-brand-blue/70 bg-brand-gradient-soft shadow-glow'
                : 'border-base-border bg-base-deep/60 hover:border-brand-blue/40 hover:bg-base-raised/60'
            )}
          >
            {opt.icon && <span className="mb-1 text-lg leading-none">{opt.icon}</span>}
            <span className={cn('text-sm font-medium', active ? 'text-white' : 'text-ink-primary')}>
              {opt.label}
            </span>
            {opt.description && (
              <span className="mt-0.5 text-xs text-ink-muted line-clamp-1">{opt.description}</span>
            )}
          </button>
        );
      })}
    </div>
  );
}
