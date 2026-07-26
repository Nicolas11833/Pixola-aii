import { Seo } from '@/components/seo/Seo';
import { Hero } from '@/components/home/Hero';
import { LiveGallery } from '@/components/home/LiveGallery';
import { Features } from '@/components/home/Features';
import { StylesShowcase } from '@/components/home/StylesShowcase';
import { CTASection } from '@/components/home/CTASection';
import { FaqAccordion } from '@/components/faq/FaqAccordion';
import { AdSlot } from '@/components/ads/AdSlot';
import { HOME_FAQ, SITE_DESCRIPTION, SITE_NAME } from '@/lib/constants';

export default function Home() {
  return (
    <>
      <Seo title={`${SITE_NAME} — Gerador de Imagens com Inteligência Artificial`} description={SITE_DESCRIPTION} path="/" />

      <Hero />
      <LiveGallery />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AdSlot variant="banner" className="my-10" />
      </div>

      <Features />
      <StylesShowcase />

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-ink-primary sm:text-4xl">
            Perguntas frequentes
          </h2>
          <p className="mt-3 text-ink-secondary">
            Tudo o que você precisa saber antes de começar a gerar suas imagens.
          </p>
        </div>
        <div className="mt-10">
          <FaqAccordion items={HOME_FAQ} />
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AdSlot variant="banner" className="mb-10" />
      </div>

      <CTASection />
    </>
  );
}
