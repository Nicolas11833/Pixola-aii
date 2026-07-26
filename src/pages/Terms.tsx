import { Seo } from '@/components/seo/Seo';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { DAILY_FREE_LIMIT, SITE_NAME } from '@/lib/constants';

export default function Terms() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <Seo
        title="Termos de Uso"
        description={`Condições de uso do ${SITE_NAME}, incluindo limites de geração, licenciamento de imagens e responsabilidades do usuário.`}
        path="/termos"
      />
      <Breadcrumb items={[{ label: 'Início', href: '/' }, { label: 'Termos de Uso' }]} />
      <h1 className="font-display text-3xl font-bold text-ink-primary sm:text-4xl">Termos de Uso</h1>
      <p className="mt-2 text-sm text-ink-muted">Última atualização: julho de 2026</p>

      <div className="prose-invert mt-8 space-y-6 text-sm leading-relaxed text-ink-secondary">
        <section>
          <h2 className="font-display text-lg font-semibold text-ink-primary">1. Aceitação</h2>
          <p className="mt-2">
            Ao acessar e utilizar o {SITE_NAME}, você concorda com estes Termos de Uso. Se
            você não concordar com qualquer parte destes termos, não deverá utilizar o
            serviço.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-ink-primary">2. O serviço</h2>
          <p className="mt-2">
            O {SITE_NAME} é uma plataforma de geração de imagens por inteligência
            artificial a partir de descrições em texto fornecidas pelo usuário. O plano
            gratuito permite até {DAILY_FREE_LIMIT} gerações por dia, por navegador,
            podendo ser ajustado a qualquer momento.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-ink-primary">3. Uso aceitável</h2>
          <p className="mt-2">É proibido utilizar o {SITE_NAME} para gerar conteúdo que:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Viole leis aplicáveis ou direitos de terceiros;</li>
            <li>Contenha discurso de ódio, violência extrema ou material sexual envolvendo menores;</li>
            <li>Tenha como objetivo enganar, difamar ou assediar pessoas reais;</li>
            <li>Infrinja marcas registradas ou direitos autorais de terceiros.</li>
          </ul>
          <p className="mt-2">
            Reservamo-nos o direito de suspender o acesso de usuários que violem estas
            regras, sem aviso prévio.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-ink-primary">4. Propriedade e licenciamento das imagens</h2>
          <p className="mt-2">
            As imagens geradas através da sua conta podem ser usadas para fins pessoais e
            comerciais, na medida permitida pela legislação de direitos autorais
            aplicável a conteúdo gerado por inteligência artificial em sua jurisdição.
            O {SITE_NAME} não garante exclusividade sobre as imagens geradas, já que
            descrições semelhantes podem gerar resultados semelhantes para outros
            usuários.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-ink-primary">5. Limitação de responsabilidade</h2>
          <p className="mt-2">
            O serviço é fornecido "como está", sem garantias de disponibilidade
            ininterrupta ou de que os resultados gerados atenderão perfeitamente às
            expectativas do usuário. Não nos responsabilizamos por danos indiretos
            decorrentes do uso do serviço.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-ink-primary">6. Publicidade</h2>
          <p className="mt-2">
            O {SITE_NAME} pode exibir anúncios de terceiros, incluindo por meio do Google
            AdSense, para manter o serviço gratuito. O usuário reconhece e aceita a
            presença de publicidade nas páginas do site.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-ink-primary">7. Alterações nos termos</h2>
          <p className="mt-2">
            Podemos atualizar estes Termos de Uso a qualquer momento. O uso contínuo do
            serviço após alterações constitui aceitação dos novos termos.
          </p>
        </section>
      </div>
    </div>
  );
}
