import { Seo } from '@/components/seo/Seo';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { ContactForm } from '@/components/contact/ContactForm';

export default function Contact() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 lg:px-8">
      <Seo title="Contato" description="Fale com a equipe do Pixora AI para dúvidas, parcerias ou suporte." path="/contato" />
      <Breadcrumb items={[{ label: 'Início', href: '/' }, { label: 'Contato' }]} />
      <h1 className="font-display text-3xl font-bold text-ink-primary sm:text-4xl">Contato</h1>
      <p className="mt-2 text-ink-secondary">
        Dúvidas, sugestões ou parcerias? Preencha o formulário abaixo e nossa equipe
        retornará em breve.
      </p>
      <div className="mt-8">
        <ContactForm />
      </div>
    </div>
  );
}
