import { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { AdSlot } from '@/components/ads/AdSlot';
import { StyleSelector } from './StyleSelector';
import { RatioSelector } from './RatioSelector';
import { QualitySelector } from './QualitySelector';
import { GeneratedResult } from './GeneratedResult';
import { HistoryPanel } from './HistoryPanel';
import { useImageHistory } from '@/hooks/useImageHistory';
import { useRateLimit } from '@/hooks/useRateLimit';
import { AspectRatioId, GeneratedImage, QualityId, StyleId } from '@/types';
import { uid } from '@/lib/utils';
import { generateImage, GenerationError } from '@/lib/generateImage';

const PROMPT_MAX = 500;
const SUGGESTIONS = [
  'Lobo místico sob a lua cheia, névoa azul',
  'Xícara de café flutuando com respingos congelados',
  'Skyline futurista ao entardecer, estilo cyberpunk',
  'Logotipo circular minimalista para app de meditação',
];

export function GeneratorApp({ initialStyle }: { initialStyle?: StyleId }) {
  const [prompt, setPrompt] = useState('');
  const [style, setStyle] = useState<StyleId>(initialStyle ?? 'realista');
  const [ratio, setRatio] = useState<AspectRatioId>('1:1');
  const [quality, setQuality] = useState<QualityId>('padrao');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<GeneratedImage | null>(null);

  const { history, addImage, toggleFavorite, removeImage } = useImageHistory();
  const { remaining, limitReached, registerUsage, total } = useRateLimit();

  const handleGenerate = async () => {
    setError(null);

    if (limitReached) {
      setError(`Você atingiu o limite gratuito de ${total} imagens por dia. Volte amanhã ou aguarde nossos planos pagos.`);
      return;
    }

    setLoading(true);
    try {
      const { src } = await generateImage({ prompt, style, ratio, quality });

      const image: GeneratedImage = {
        id: uid(),
        prompt,
        style,
        ratio,
        quality,
        src,
        createdAt: Date.now(),
      };

      setResult(image);
      addImage(image);
      registerUsage();
    } catch (err) {
      setError(err instanceof GenerationError ? err.message : 'Erro inesperado ao gerar imagem.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
      <div className="space-y-6">
        <Card className="p-5 sm:p-6">
          <label htmlFor="prompt" className="mb-2 block text-sm font-medium text-ink-primary">
            Descreva a imagem que você quer criar
          </label>
          <Textarea
            id="prompt"
            rows={4}
            maxLength={PROMPT_MAX}
            placeholder="Ex: um leão de crina dourada em uma savana ao pôr do sol, luz cinematográfica"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <div className="mt-1.5 flex items-center justify-between text-xs text-ink-muted">
            <span>{prompt.length}/{PROMPT_MAX}</span>
            <span>{remaining} de {total} gerações restantes hoje</span>
          </div>

          <div className="mt-2 flex flex-wrap gap-2">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setPrompt(s)}
                className="rounded-full border border-base-border px-3 py-1 text-xs text-ink-muted hover:border-brand-blue/50 hover:text-ink-primary"
              >
                {s}
              </button>
            ))}
          </div>

          <div className="mt-6 space-y-6">
            <StyleSelector value={style} onChange={setStyle} />
            <RatioSelector value={ratio} onChange={setRatio} />
            <QualitySelector value={quality} onChange={setQuality} />
          </div>

          {error && (
            <p className="mt-4 rounded-lg border border-red-500/30 bg-red-500/10 px-3.5 py-2.5 text-sm text-red-300">
              {error}
            </p>
          )}

          <Button size="lg" className="mt-6 w-full" onClick={handleGenerate} disabled={loading}>
            {loading ? 'Gerando imagem…' : 'Gerar imagem'}
          </Button>

          {limitReached && !error && (
            <div className="mt-3">
              <Badge tone="default">Limite diário atingido — volte amanhã</Badge>
            </div>
          )}
        </Card>

        {result && <GeneratedResult image={result} onToggleFavorite={toggleFavorite} />}

        <AdSlot variant="inline" />

        <Card className="p-5 sm:p-6">
          <h2 className="font-display text-lg font-semibold text-ink-primary">Histórico</h2>
          <p className="mb-4 mt-1 text-sm text-ink-muted">
            Suas últimas criações ficam salvas neste navegador.
          </p>
          <HistoryPanel history={history} onToggleFavorite={toggleFavorite} onRemove={removeImage} />
        </Card>
      </div>

      <aside className="hidden lg:block">
        <div className="sticky top-24 space-y-6">
          <AdSlot variant="sidebar" />
          <Card className="p-5">
            <h3 className="font-display text-sm font-semibold text-ink-primary">Dicas para um bom prompt</h3>
            <ul className="mt-3 space-y-2 text-xs leading-relaxed text-ink-muted">
              <li>• Descreva sujeito, ambiente e iluminação.</li>
              <li>• Use adjetivos concretos em vez de vagos.</li>
              <li>• Combine o estilo com o clima da cena.</li>
              <li>• Teste variações mudando uma palavra por vez.</li>
            </ul>
          </Card>
        </div>
      </aside>
    </div>
  );
}
