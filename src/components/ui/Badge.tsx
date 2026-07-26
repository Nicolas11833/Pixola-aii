import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

export function Badge({
  children,
  className,
  tone = 'default',
}: {
  children: ReactNode;
  className?: string;
  tone?: 'default' | 'brand' | 'success';
}) {
  const tones = {
    default: 'bg-base-raised text-ink-secondary border-base-border',
    brand: 'bg-brand-gradient-soft text-brand-blueSoft border-brand-blue/30',
    success: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
  };
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium',
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
