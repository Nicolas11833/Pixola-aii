import { Seo } from '@/components/seo/Seo';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { LinkButton } from '@/components/ui/Button';
import { AdSlot } from '@/components/ads/AdSlot';
import { SITE_NAME } from '@/lib/constants';

const VALUES = [
  {
    title: 'Acessibilidade em primeiro lugar',
    description:
      'Acreditamos que criar arte digital não deveria exigir equipamentos caros ou anos de prática. Por isso, oferecemos gerações gratuitas todos os dias.',
  },
  {
    title: 'Velocidade sem abrir mão da qualidade',
    description:
      'Cada detalhe da nossa infraestrutura é otimizado para entregar resultados rápidos, mesmo em picos de acesso.',
  },
  {
    title: 'Simplicidade acima de tudo',
    description:
      'Uma interface limpa, direta e sem distrações, para que sua atenção fique no que importa: a sua ideia.',
  },
];

export default function About() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <Seo
        title="Sobre nós"
        description={`Conheça a missão do ${SITE_NAME}: tornar a criação de imagens com inteligência artificial acessível para todos.`}
        path="/sobre"
      />
      <Breadcrumb items={[{ label: 'Início', href: '/' }, { label: 'Sobre' }]} />
      <h1 className="font-display text-3xl font-bold text-ink-primary sm:text-4xl">Sobre o {SITE_NAME}</h1>
      <p className="mt-4 max-w-2xl leading-relaxed text-ink-secondary">
        O {SITE_NAME} nasceu de uma ideia simples: qualquer pessoa deveria conseguir
        transformar uma ideia em imagem, apenas descrevendo-a em palavras. Construímos uma
        plataforma rápida, gratuita no dia a dia e pensada para funcionar perfeitamente
        tanto no computador quanto no celular.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {VALUES.map((value) => (
          <Card key={value.title} className="p-5">
            <h2 className="font-display text-base font-semibold text-ink-primary">{value.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">{value.description}</p>
          </Card>
        ))}
      </div>

      <AdSlot variant="banner" className="my-10" />

      <div className="rounded-2xl border border-base-border/70 bg-base-surface/60 p-8 text-center">
        <h2 className="font-display text-xl font-semibold text-ink-primary">
          Pronto para criar sua primeira imagem?
        </h2>
        <div className="mt-5 flex justify-center">
          <LinkButton href="/gerador">Experimentar agora</LinkButton>
        </div>
      </div>
    </div>
  );
}
