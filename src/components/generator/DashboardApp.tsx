import { useImageHistory } from '@/hooks/useImageHistory';
import { useRateLimit } from '@/hooks/useRateLimit';
import { Card } from '@/components/ui/Card';
import { LinkButton } from '@/components/ui/Button';
import { HistoryPanel } from './HistoryPanel';
import { IMAGE_STYLES } from '@/lib/constants';

export function DashboardApp() {
  const { history, hydrated, toggleFavorite, removeImage, clearHistory } = useImageHistory();
  const { used, total, remaining } = useRateLimit();

  const favoriteCount = history.filter((h) => h.favorite).length;
  const favoriteStyle = history.length
    ? Object.entries(
        history.reduce<Record<string, number>>((acc, img) => {
          acc[img.style] = (acc[img.style] ?? 0) + 1;
          return acc;
        }, {})
      ).sort((a, b) => b[1] - a[1])[0]?.[0]
    : undefined;

  const styleLabel = IMAGE_STYLES.find((s) => s.id === favoriteStyle)?.label ?? '—';

  if (!hydrated) {
    return <div className="h-40 animate-pulse rounded-2xl bg-base-surface/50" />;
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <StatCard label="Imagens geradas" value={history.length} />
        <StatCard label="Favoritas" value={favoriteCount} />
        <StatCard label="Gerações hoje" value={`${used}/${total}`} />
        <StatCard label="Restantes hoje" value={remaining} />
      </div>

      <Card className="p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="font-display text-lg font-semibold text-ink-primary">Suas criações</h2>
            <p className="text-sm text-ink-muted">
              Estilo mais usado: <span className="text-ink-secondary">{styleLabel}</span>
            </p>
          </div>
          <div className="flex gap-2">
            <LinkButton href="/gerador" size="sm">Gerar nova imagem</LinkButton>
            {history.length > 0 && (
              <button
                onClick={clearHistory}
                className="rounded-full border border-base-border px-3.5 py-2 text-xs text-ink-muted hover:text-red-300 hover:border-red-500/40"
              >
                Limpar histórico
              </button>
            )}
          </div>
        </div>

        <div className="mt-6">
          <HistoryPanel history={history} onToggleFavorite={toggleFavorite} onRemove={removeImage} />
        </div>
      </Card>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string | number }) {
  return (
    <Card className="p-4">
      <p className="text-xs text-ink-muted">{label}</p>
      <p className="mt-1 font-display text-2xl font-bold text-ink-primary">{value}</p>
    </Card>
  );
}
