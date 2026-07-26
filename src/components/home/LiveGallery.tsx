import { buildPlaceholderImage } from '@/lib/placeholderImage';
import { IMAGE_STYLES } from '@/lib/constants';

const SAMPLE_PROMPTS = [
  'astronauta observando uma nebulosa roxa',
  'raposa samurai sob cerejeiras ao entardecer',
  'cidade flutuante cyberpunk com neon azul',
  'logotipo minimalista de montanha para app',
  'castelo mágico entre nuvens douradas',
  'retrato realista em luz de estúdio',
  'robô jardineiro em floresta ghibli',
  'personagem anime com espada de cristal',
  'planeta pixel art com estação espacial',
  'pintura a óleo de um farol na tempestade',
  'dragão de gelo sobre montanhas nevadas',
  'carro voador em avenida cyberpunk chuvosa',
];

function buildRow(offset: number) {
  return SAMPLE_PROMPTS.map((prompt, i) => {
    const style = IMAGE_STYLES[(i + offset) % IMAGE_STYLES.length];
    return {
      prompt,
      style: style.label,
      src: buildPlaceholderImage({ prompt, style: style.id, ratio: '1:1', quality: 'padrao' }),
    };
  });
}

function MarqueeRow({ items, reverse }: { items: ReturnType<typeof buildRow>; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div
      className="flex w-max gap-4 animate-marquee-slow"
      style={reverse ? { animationDirection: 'reverse' } : undefined}
    >
      {doubled.map((item, i) => (
        <figure
          key={`${item.prompt}-${i}`}
          className="group relative h-32 w-32 shrink-0 overflow-hidden rounded-2xl border border-base-border/70 sm:h-40 sm:w-40"
        >
          <img
            src={item.src}
            alt={`Imagem gerada por IA: ${item.prompt}, estilo ${item.style}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-2.5 py-2 text-[10px] text-white/90 opacity-0 transition-opacity group-hover:opacity-100">
            {item.style}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export function LiveGallery() {
  const rowA = buildRow(0);
  const rowB = buildRow(4);

  return (
    <section className="relative py-4 sm:py-8" aria-label="Galeria de imagens geradas pela comunidade">
      <div className="mask-fade-x space-y-4">
        <MarqueeRow items={rowA} />
        <MarqueeRow items={rowB} reverse />
      </div>
    </section>
  );
}
