import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { MAIN_NAV } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { LinkButton } from '@/components/ui/Button';

export function Header() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-base-border/70 bg-base-void/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-gradient text-sm font-bold text-white shadow-glow">
            P
          </span>
          <span className="font-display text-lg font-semibold text-ink-primary">
            Pixora <span className="text-brand-blueSoft">AI</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {MAIN_NAV.map((item) => {
            const active = location.pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                  active
                    ? 'bg-base-raised text-ink-primary'
                    : 'text-ink-secondary hover:text-ink-primary hover:bg-base-raised/60'
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link to="/dashboard" className="text-sm font-medium text-ink-secondary hover:text-ink-primary transition-colors">
            Meu painel
          </Link>
          <LinkButton href="/gerador" size="sm">
            Gerar imagem grátis
          </LinkButton>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-ink-primary md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          <span className="relative block h-4 w-5">
            <span className={cn('absolute left-0 top-0 h-0.5 w-5 bg-current transition-transform', open && 'translate-y-[7px] rotate-45')} />
            <span className={cn('absolute left-0 top-1.5 h-0.5 w-5 bg-current transition-opacity', open && 'opacity-0')} />
            <span className={cn('absolute left-0 top-3 h-0.5 w-5 bg-current transition-transform', open && '-translate-y-[7px] -rotate-45')} />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-base-border/70 bg-base-void px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {MAIN_NAV.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-secondary hover:bg-base-raised hover:text-ink-primary"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/dashboard"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-secondary hover:bg-base-raised hover:text-ink-primary"
            >
              Meu painel
            </Link>
            <LinkButton href="/gerador" className="mt-2 w-full justify-center">
              Gerar imagem grátis
            </LinkButton>
          </nav>
        </div>
      )}
    </header>
  );
}
