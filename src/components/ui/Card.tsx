import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

export function Card({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'rounded-xl2 border border-base-border bg-base-surface/80 backdrop-blur-sm shadow-card',
        className
      )}
      {...rest}
    />
  );
}
