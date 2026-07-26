import { cn } from '@/lib/utils';
import { TextareaHTMLAttributes } from 'react';

export function Textarea({ className, ...rest }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        'w-full resize-none rounded-2xl border border-base-border bg-base-deep/80 px-4 py-3.5 text-ink-primary placeholder:text-ink-muted focus:border-brand-blue/70 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-colors font-body text-[15px] leading-relaxed',
        className
      )}
      {...rest}
    />
  );
}
