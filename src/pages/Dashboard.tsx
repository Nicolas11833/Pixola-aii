import { Seo } from '@/components/seo/Seo';
import { DashboardApp } from '@/components/generator/DashboardApp';
import { Breadcrumb } from '@/components/layout/Breadcrumb';

export default function Dashboard() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <Seo
        title="Meu Painel"
        description="Acompanhe suas imagens geradas, favoritos e uso diário no Pixora AI."
        path="/dashboard"
        noIndex
      />
      <Breadcrumb items={[{ label: 'Início', href: '/' }, { label: 'Meu painel' }]} />
      <h1 className="font-display text-3xl font-bold text-ink-primary sm:text-4xl">Meu painel</h1>
      <p className="mt-2 max-w-2xl text-ink-secondary">
        Um resumo rápido da sua atividade e das suas imagens geradas neste navegador.
      </p>
      <div className="mt-8">
        <DashboardApp />
      </div>
    </div>
  );
}
