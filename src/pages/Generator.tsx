import { Seo } from '@/components/seo/Seo';
import { GeneratorApp } from '@/components/generator/GeneratorApp';
import { Breadcrumb } from '@/components/layout/Breadcrumb';

export default function Generator() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <Seo
        title="Gerador de Imagens com IA Grátis"
        description="Crie imagens com inteligência artificial gratuitamente. Escolha estilo, proporção e qualidade, e gere sua arte em segundos."
        path="/gerador"
        keywords={['gerador de imagens com ia', 'criar imagem com inteligência artificial', 'gerador de imagem gratis', 'texto para imagem ia']}
      />
      <Breadcrumb items={[{ label: 'Início', href: '/' }, { label: 'Gerador' }]} />
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold text-ink-primary sm:text-4xl">
          Gerador de imagens com IA
        </h1>
        <p className="mt-2 max-w-2xl text-ink-secondary">
          Escreva sua ideia, escolha o estilo, a proporção e a qualidade — e receba sua
          imagem gerada por inteligência artificial em segundos.
        </p>
      </div>
      <GeneratorApp />
    </div>
  );
}
