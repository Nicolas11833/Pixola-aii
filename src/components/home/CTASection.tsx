import { LinkButton } from '@/components/ui/Button';

export function CTASection() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl border border-base-border bg-brand-gradient-soft px-6 py-14 text-center sm:px-14">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-brand-blue/30 blur-3xl" />
        <h2 className="relative font-display text-3xl font-bold text-ink-primary sm:text-4xl">
          Sua próxima imagem está a um prompt de distância
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-ink-secondary">
          Junte-se a milhares de criadores que já usam o Pixora AI para gerar artes,
          logos e ilustrações todos os dias.
        </p>
        <div className="relative mt-8 flex justify-center">
          <LinkButton href="/gerador" size="lg">Começar a criar agora</LinkButton>
        </div>
      </div>
    </section>
  );
}
