import { LinkButton } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { DAILY_FREE_LIMIT } from '@/lib/constants';

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-16 sm:px-6 sm:pt-24 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <div className="flex justify-center animate-fadeUp">
          <Badge tone="brand">✨ {DAILY_FREE_LIMIT} gerações grátis todos os dias</Badge>
        </div>

        <h1
          className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-ink-primary sm:text-5xl lg:text-6xl animate-fadeUp"
          style={{ animationDelay: '80ms' }}
        >
          Descreva. Escolha um estilo.
          <br />
          <span className="text-gradient">Veja sua imagem nascer.</span>
        </h1>

        <p
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-secondary sm:text-lg animate-fadeUp"
          style={{ animationDelay: '160ms' }}
        >
          O Pixora AI transforma qualquer ideia em texto em uma imagem original em
          segundos — realista, anime, 3D, logos e mais oito estilos, sem precisar
          instalar nada ou saber desenhar.
        </p>

        <div
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row animate-fadeUp"
          style={{ animationDelay: '240ms' }}
        >
          <LinkButton href="/gerador" size="lg">
            Gerar minha primeira imagem →
          </LinkButton>
          <LinkButton href="/faq" size="lg" variant="outline">
            Como funciona
          </LinkButton>
        </div>

        <p className="mt-5 text-xs text-ink-muted animate-fadeUp" style={{ animationDelay: '300ms' }}>
          Sem cartão de crédito · Sem instalação · Resultado em segundos
        </p>
      </div>
    </section>
  );
}
