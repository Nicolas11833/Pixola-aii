import { useParams } from 'react-router-dom';
import { Seo } from '@/components/seo/Seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { GeneratorApp } from '@/components/generator/GeneratorApp';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { AdSlot } from '@/components/ads/AdSlot';
import { IMAGE_STYLES } from '@/lib/constants';
import { buildPlaceholderImage } from '@/lib/placeholderImage';
import NotFound from './NotFound';

export default function StylePage() {
  const { estilo } = useParams<{ estilo: string }>();
  const style = IMAGE_STYLES.find((s) => s.id === estilo);

  if (!style) return <NotFound />;

  const previewImages = Array.from({ length: 4 }).map((_, i) =>
    buildPlaceholderImage({ prompt: `${style.label} exemplo ${i}`, style: style.id, ratio: '1:1', quality: 'padrao' })
  );

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: `Gerador de Imagens ${style.label} — Pixora AI`,
    applicationCategory: 'DesignApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'BRL' },
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <Seo
        title={`Gerador de Imagens ${style.label} com IA Grátis`}
        description={`Crie imagens no estilo ${style.label} com inteligência artificial. ${style.description} Gratuito e sem cadastro.`}
        path={`/estilos/${style.id}`}
        keywords={style.keywords.split(', ')}
      />
      <JsonLd data={jsonLd} />
      <Breadcrumb items={[{ label: 'Início', href: '/' }, { label: 'Estilos', href: '/gerador' }, { label: style.label }]} />

      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold text-ink-primary sm:text-4xl">
          {style.emoji} Gerador de Imagens {style.label} com IA
        </h1>
        <p className="mt-2 max-w-2xl text-ink-secondary">{style.description}</p>
      </div>

      <div className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {previewImages.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Exemplo de imagem gerada no estilo ${style.label}`}
            loading="lazy"
            className="aspect-square w-full rounded-xl border border-base-border/70 object-cover"
          />
        ))}
      </div>

      <AdSlot variant="banner" className="mb-10" />

      <GeneratorApp initialStyle={style.id} />

      <section className="mt-14 max-w-3xl">
        <h2 className="font-display text-2xl font-bold text-ink-primary">
          Por que escolher o estilo {style.label}?
        </h2>
        <p className="mt-3 leading-relaxed text-ink-secondary">
          O estilo {style.label} é um dos mais procurados na nossa plataforma. Ele funciona
          especialmente bem para quem busca {style.description.toLowerCase()} Basta descrever
          sua ideia no campo acima, manter o estilo {style.label} selecionado e escolher a
          proporção ideal para o seu uso — redes sociais, apresentações, capas ou projetos
          pessoais.
        </p>
      </section>
    </div>
  );
}
