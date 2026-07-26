import { useState } from 'react';
import { GeneratedImage } from '@/types';
import { cn } from '@/lib/utils';
import { AdSlot } from '@/components/ads/AdSlot';

export function HistoryPanel({
  history,
  onToggleFavorite,
  onRemove,
}: {
  history: GeneratedImage[];
  onToggleFavorite: (id: string) => void;
  onRemove: (id: string) => void;
}) {
  const [tab, setTab] = useState<'todas' | 'favoritas'>('todas');
  const list = tab === 'favoritas' ? history.filter((h) => h.favorite) : history;

  if (history.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-base-border/70 p-8 text-center text-sm text-ink-muted">
        Seu histórico está vazio. As imagens que você gerar vão aparecer aqui.
      </div>
    );
  }

  return (
    <div>
      <div className="mb-4 flex items-center gap-2">
        {(['todas', 'favoritas'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={cn(
              'rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors',
              tab === t ? 'bg-brand-gradient text-white' : 'bg-base-raised text-ink-muted hover:text-ink-primary'
            )}
          >
            {t === 'todas' ? `Todas (${history.length})` : `Favoritas (${history.filter((h) => h.favorite).length})`}
          </button>
        ))}
      </div>

      {list.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-base-border/70 p-8 text-center text-sm text-ink-muted">
          Nenhuma imagem favoritada ainda.
        </p>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {list.slice(0, 8).map((img) => (
              <HistoryThumb key={img.id} image={img} onToggleFavorite={onToggleFavorite} onRemove={onRemove} />
            ))}
          </div>

          {list.length > 8 && (
            <>
              <AdSlot variant="inline" className="my-6" />
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                {list.slice(8).map((img) => (
                  <HistoryThumb key={img.id} image={img} onToggleFavorite={onToggleFavorite} onRemove={onRemove} />
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

function HistoryThumb({
  image,
  onToggleFavorite,
  onRemove,
}: {
  image: GeneratedImage;
  onToggleFavorite: (id: string) => void;
  onRemove: (id: string) => void;
}) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-base-border/70">
      <img src={image.src} alt={`Histórico: ${image.prompt}`} loading="lazy" className="aspect-square w-full object-cover" />
      <div className="absolute inset-0 flex flex-col justify-between bg-black/0 p-2 opacity-0 transition-all group-hover:bg-black/60 group-hover:opacity-100">
        <div className="flex justify-end gap-1">
          <button onClick={() => onToggleFavorite(image.id)} className="rounded-md bg-black/50 px-1.5 py-1 text-xs text-white" aria-label="Favoritar">
            {image.favorite ? '★' : '☆'}
          </button>
          <button onClick={() => onRemove(image.id)} className="rounded-md bg-black/50 px-1.5 py-1 text-xs text-white" aria-label="Remover do histórico">
            ✕
          </button>
        </div>
        <p className="line-clamp-2 text-[10px] text-white/90">{image.prompt}</p>
      </div>
    </div>
  );
}
