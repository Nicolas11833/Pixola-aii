import { FormEvent, useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Textarea } from '@/components/ui/Textarea';

/**
 * Este formulário ainda não está conectado a um serviço de e-mail.
 * Para ativar o envio real, crie uma função de backend (ex: Supabase Edge
 * Function ou Cloudflare Worker) integrando um provedor como Resend,
 * SendGrid ou Postmark, e troque o `setTimeout` abaixo por uma chamada
 * `fetch` para esse endpoint.
 */
export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('sent'), 900);
  };

  if (status === 'sent') {
    return (
      <Card className="p-6 text-center">
        <p className="font-display text-lg font-semibold text-ink-primary">Mensagem enviada!</p>
        <p className="mt-2 text-sm text-ink-muted">
          Obrigado por entrar em contato. Nossa equipe responde em até 2 dias úteis.
        </p>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="nome" className="mb-1.5 block text-sm font-medium text-ink-primary">Nome</label>
          <input
            id="nome"
            required
            className="w-full rounded-xl border border-base-border bg-base-deep/80 px-4 py-2.5 text-sm text-ink-primary placeholder:text-ink-muted focus:border-brand-blue/70 focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
            placeholder="Seu nome"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink-primary">E-mail</label>
          <input
            id="email"
            type="email"
            required
            className="w-full rounded-xl border border-base-border bg-base-deep/80 px-4 py-2.5 text-sm text-ink-primary placeholder:text-ink-muted focus:border-brand-blue/70 focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
            placeholder="voce@email.com"
          />
        </div>
        <div>
          <label htmlFor="mensagem" className="mb-1.5 block text-sm font-medium text-ink-primary">Mensagem</label>
          <Textarea id="mensagem" required rows={5} placeholder="Como podemos ajudar?" />
        </div>
        <Button type="submit" className="w-full" disabled={status === 'sending'}>
          {status === 'sending' ? 'Enviando…' : 'Enviar mensagem'}
        </Button>
      </form>
    </Card>
  );
}
