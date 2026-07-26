import { cn } from '@/lib/utils';

export type AdSlotVariant = 'banner' | 'inline' | 'sidebar' | 'footer' | 'square';

const dimensions: Record<AdSlotVariant, string> = {
  banner: 'min-h-[100px] w-full max-w-3xl',
  inline: 'min-h-[120px] w-full',
  sidebar: 'min-h-[600px] w-full max-w-[300px]',
  footer: 'min-h-[90px] w-full',
  square: 'min-h-[250px] w-full max-w-[300px]',
};

/**
 * AdSlot — componente central de anúncios.
 * ------------------------------------------------------------------
 * Todo espaço publicitário do site passa por este componente único.
 * Quando a conta do Google AdSense for aprovada:
 *
 *  1. Adicione o script do AdSense em `index.html` (<head>) — já há um
 *     comentário indicando onde.
 *  2. Substitua o bloco `<div data-ad-placeholder>` abaixo pelo
 *     <ins className="adsbygoogle" ... /> com o `data-ad-slot` real, e
 *     chame `(window.adsbygoogle = window.adsbygoogle || []).push({})`
 *     em um useEffect.
 *
 * Nenhuma outra parte do site precisa ser alterada.
 */
export function AdSlot({
  variant = 'inline',
  label = 'Publicidade',
  className,
  slotId,
}: {
  variant?: AdSlotVariant;
  label?: string;
  className?: string;
  slotId?: string;
}) {
  return (
    <div
      className={cn(
        'mx-auto flex flex-col items-center justify-center gap-1 rounded-xl border border-dashed border-base-border bg-base-surface/40 py-4',
        dimensions[variant],
        className
      )}
      data-ad-placeholder
      data-ad-slot={slotId}
      aria-label={label}
    >
      <span className="text-[10px] uppercase tracking-widest text-ink-muted">{label}</span>
      <span className="text-xs text-ink-muted/70">Espaço reservado — Google AdSense</span>
    </div>
  );
}
