import { useState } from 'react';
import { GeneratedImage } from '@/types';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { IMAGE_STYLES } from '@/lib/constants';

export function GeneratedResult({
  image,
  onToggleFavorite,
}: {
  image: GeneratedImage;
  onToggleFavorite: (id: string) => void;
}) {
  const [copied, setCopied] = useState(false);
  const style = IMAGE_STYLES.find((s) => s.id === image.style);

  const handleCopyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(image.prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = image.src;
    link.download = `pixora-ai-${image.id}.svg`;
    link.click();
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: 'Imagem gerada com Pixora AI', text: image.prompt });
      } catch {
        // usuário cancelou o compartilhamento
      }
    } else {
      await handleCopyPrompt();
    }
  };

  return (
    <Card className="overflow-hidden p-4 sm:p-5" id="resultado">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-ink-primary">Sua imagem está pronta</p>
        {style && (
          <span className="rounded-full bg-base-raised px-3 py-1 text-xs text-ink-muted">
            {style.emoji} {style.label}
          </span>
        )}
      </div>

      <div className="mt-4 overflow-hidden rounded-xl border border-base-border/70">
        <img src={image.src} alt={`Imagem gerada por IA a partir do prompt: ${image.prompt}`} className="w-full object-cover" />
      </div>

      <p className="mt-3 line-clamp-2 font-mono text-xs text-ink-muted">{image.prompt}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        <Button size="sm" variant="secondary" onClick={handleDownload}>⬇ Baixar</Button>
        <Button size="sm" variant="secondary" onClick={handleShare}>↗ Compartilhar</Button>
        <Button size="sm" variant="secondary" onClick={handleCopyPrompt}>{copied ? '✓ Copiado' : '⧉ Copiar prompt'}</Button>
        <Button size="sm" variant={image.favorite ? 'primary' : 'secondary'} onClick={() => onToggleFavorite(image.id)}>
          {image.favorite ? '★ Favoritado' : '☆ Favoritar'}
        </Button>
      </div>
    </Card>
  );
}
