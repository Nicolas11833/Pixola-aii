import { Card } from '@/components/ui/Card';

const FEATURES = [
  { icon: '⚡', title: 'Geração em segundos', description: 'Infraestrutura otimizada para entregar sua imagem quase instantaneamente, sem filas de espera.' },
  { icon: '🎨', title: '10 estilos visuais', description: 'De fotos realistas a mundos de fantasia — escolha o estilo certo para cada projeto.' },
  { icon: '📱', title: 'Funciona em qualquer tela', description: 'Interface pensada primeiro para o celular, com a mesma qualidade no desktop.' },
  { icon: '🗂️', title: 'Histórico automático', description: 'Toda imagem gerada fica salva no seu histórico, pronta para baixar ou reaproveitar.' },
  { icon: '⭐', title: 'Favoritos e prompts salvos', description: 'Marque suas melhores criações e copie o prompt original com um clique.' },
  { icon: '🔒', title: 'Sem cadastro obrigatório', description: 'Comece a gerar imediatamente. Crie uma conta apenas quando quiser mais recursos.' },
];

export function Features() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-bold text-ink-primary sm:text-4xl">
          Tudo o que você precisa para criar
        </h2>
        <p className="mt-3 text-ink-secondary">
          Um gerador de imagens completo, rápido e pensado para o seu fluxo de criação.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature) => (
          <Card key={feature.title} className="p-6 transition-colors hover:border-brand-blue/40">
            <span className="text-2xl">{feature.icon}</span>
            <h3 className="mt-4 font-display text-lg font-semibold text-ink-primary">{feature.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">{feature.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
