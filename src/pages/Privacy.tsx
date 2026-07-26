import { Seo } from '@/components/seo/Seo';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { SITE_NAME } from '@/lib/constants';

export default function Privacy() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <Seo title="Política de Privacidade" description={`Entenda como o ${SITE_NAME} coleta, usa e protege seus dados.`} path="/privacidade" />
      <Breadcrumb items={[{ label: 'Início', href: '/' }, { label: 'Política de Privacidade' }]} />
      <h1 className="font-display text-3xl font-bold text-ink-primary sm:text-4xl">Política de Privacidade</h1>
      <p className="mt-2 text-sm text-ink-muted">Última atualização: julho de 2026</p>

      <div className="prose-invert mt-8 space-y-6 text-sm leading-relaxed text-ink-secondary">
        <section>
          <h2 className="font-display text-lg font-semibold text-ink-primary">1. Introdução</h2>
          <p className="mt-2">
            Esta Política de Privacidade descreve como o {SITE_NAME} ("nós", "site" ou
            "plataforma") coleta, utiliza e protege as informações dos visitantes e
            usuários do serviço. Ao utilizar o {SITE_NAME}, você concorda com as práticas
            descritas neste documento.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-ink-primary">2. Informações que coletamos</h2>
          <p className="mt-2">
            Armazenamos localmente, no seu próprio navegador, o histórico de imagens
            geradas, favoritos e a contagem de uso diário. Esses dados não são enviados
            aos nossos servidores e podem ser apagados a qualquer momento limpando os
            dados do navegador.
          </p>
          <p className="mt-2">
            Também podemos coletar automaticamente dados técnicos, como endereço IP,
            tipo de navegador e páginas visitadas, com finalidade de segurança,
            prevenção de abuso e melhoria do serviço.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-ink-primary">3. Cookies e publicidade</h2>
          <p className="mt-2">
            Utilizamos ou podemos vir a utilizar cookies e tecnologias semelhantes para
            fins de funcionamento do site e exibição de publicidade, incluindo anúncios
            fornecidos pelo Google AdSense. O Google e seus parceiros podem usar cookies
            para veicular anúncios com base em visitas anteriores do usuário a este ou
            outros sites.
          </p>
          <p className="mt-2">
            Você pode desativar a personalização de anúncios visitando as configurações
            de anúncios do Google, disponíveis em{' '}
            <span className="text-ink-primary">adssettings.google.com</span>.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-ink-primary">4. Uso das informações</h2>
          <p className="mt-2">
            As informações coletadas são utilizadas exclusivamente para operar,
            proteger e melhorar o serviço, incluindo prevenção de uso abusivo do
            gerador de imagens e cumprimento de limites diários de uso gratuito.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-ink-primary">5. Compartilhamento de dados</h2>
          <p className="mt-2">
            Não vendemos dados pessoais. Dados técnicos podem ser compartilhados com
            provedores de infraestrutura e publicidade estritamente para o funcionamento
            do site, sempre em conformidade com a legislação aplicável.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-ink-primary">6. Seus direitos</h2>
          <p className="mt-2">
            Você pode solicitar informações sobre os dados tratados, bem como sua
            correção ou exclusão, entrando em contato pela nossa página de{' '}
            <span className="text-ink-primary">Contato</span>.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-ink-primary">7. Alterações nesta política</h2>
          <p className="mt-2">
            Podemos atualizar esta Política de Privacidade periodicamente. Recomendamos
            revisá-la com frequência para se manter informado sobre como protegemos suas
            informações.
          </p>
        </section>
      </div>
    </div>
  );
}
