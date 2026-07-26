import { Seo } from '@/components/seo/Seo';
import { LinkButton } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 text-center">
      <Seo title="Página não encontrada" description="A página que você procura não existe." path="/404" noIndex />
      <p className="font-display text-6xl font-bold text-gradient">404</p>
      <h1 className="mt-4 font-display text-2xl font-semibold text-ink-primary">Esta página não foi encontrada</h1>
      <p className="mt-2 text-ink-secondary">
        O link pode estar quebrado ou a página pode ter sido movida. Que tal criar uma
        imagem enquanto está por aqui?
      </p>
      <div className="mt-6 flex gap-3">
        <LinkButton href="/">Voltar ao início</LinkButton>
        <LinkButton href="/gerador" variant="outline">Ir para o gerador</LinkButton>
      </div>
    </div>
  );
}
