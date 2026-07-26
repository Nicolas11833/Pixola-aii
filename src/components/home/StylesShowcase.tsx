import { Link } from 'react-router-dom';
import { IMAGE_STYLES } from '@/lib/constants';
import { buildPlaceholderImage } from '@/lib/placeholderImage';

export function StylesShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-bold text-ink-primary sm:text-4xl">
          Explore os estilos disponíveis
        </h2>
        <p className="mt-3 text-ink-secondary">
          Cada estilo tem seu próprio gerador dedicado, otimizado para o resultado que você busca.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {IMAGE_STYLES.map((style) => {
          const preview = buildPlaceholderImage({ prompt: `${style.label} showcase`, style: style.id, ratio: '1:1', quality: 'padrao' });
          return (
            <Link
              key={style.id}
              to={`/estilos/${style.id}`}
              className="group relative overflow-hidden rounded-2xl border border-base-border/70 bg-base-surface transition-all hover:border-brand-blue/50 hover:shadow-glow"
            >
              <div className="aspect-square w-full overflow-hidden">
                <img
                  src={preview}
                  alt={`Gerador de imagem estilo ${style.label} com IA`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-3">
                <p className="flex items-center gap-1.5 text-sm font-medium text-white">
                  <span>{style.emoji}</span> {style.label}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
