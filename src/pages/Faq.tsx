import { Seo } from '@/components/seo/Seo';
import { FaqAccordion } from '@/components/faq/FaqAccordion';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { AdSlot } from '@/components/ads/AdSlot';
import { HOME_FAQ } from '@/lib/constants';
import { FaqItem } from '@/types';

const EXTRA_FAQ: FaqItem[] = [
  {
    question: 'Preciso criar uma conta para usar o Pixora AI?',
    answer:
      'Não. Você pode gerar imagens imediatamente, sem cadastro. Uma conta futura trará recursos extras, como sincronização entre dispositivos.',
  },
  {
    question: 'Meu histórico é salvo na nuvem?',
    answer:
      'Atualmente o histórico é salvo localmente no seu navegador. Ao trocar de dispositivo ou limpar os dados do navegador, o histórico não é mantido.',
  },
  {
    question: 'O que acontece se eu atingir o limite diário?',
    answer:
      'Você poderá gerar novamente após a renovação diária do limite. Também estamos preparando planos pagos com mais gerações e recursos avançados.',
  },
];

export default function Faq() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <Seo
        title="Perguntas Frequentes"
        description="Tire suas dúvidas sobre o Pixora AI: gerações gratuitas, estilos, uso comercial e mais."
        path="/faq"
      />
      <Breadcrumb items={[{ label: 'Início', href: '/' }, { label: 'FAQ' }]} />
      <h1 className="font-display text-3xl font-bold text-ink-primary sm:text-4xl">Perguntas frequentes</h1>
      <p className="mt-2 text-ink-secondary">
        Reunimos as dúvidas mais comuns sobre o Pixora AI. Não encontrou o que procurava?
        Fale com a gente pela página de contato.
      </p>

      <div className="mt-8">
        <FaqAccordion items={[...HOME_FAQ, ...EXTRA_FAQ]} />
      </div>

      <AdSlot variant="banner" className="mt-10" />
    </div>
  );
}
