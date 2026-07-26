import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface BaseProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}

const variants: Record<string, string> = {
  primary: 'bg-brand-gradient text-white shadow-glow hover:brightness-110 active:brightness-95',
  secondary: 'bg-base-raised text-ink-primary border border-base-border hover:border-brand-blue/60',
  ghost: 'bg-transparent text-ink-secondary hover:text-ink-primary hover:bg-base-raised/60',
  outline: 'bg-transparent border border-base-border text-ink-primary hover:border-brand-purple/60',
};

const sizes: Record<string, string> = {
  sm: 'text-sm px-3.5 py-2 gap-1.5',
  md: 'text-sm px-5 py-2.5 gap-2',
  lg: 'text-base px-7 py-3.5 gap-2.5',
};

const base =
  'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue';

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  icon,
  ...rest
}: BaseProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {icon}
      {children}
    </button>
  );
}

export function LinkButton({
  href,
  variant = 'primary',
  size = 'md',
  children,
  className,
  icon,
}: BaseProps & { href: string }) {
  return (
    <Link to={href} className={cn(base, variants[variant], sizes[size], className)}>
      {icon}
      {children}
    </Link>
  );
}
