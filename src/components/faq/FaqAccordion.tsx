import { useState } from 'react';
import { FaqItem } from '@/types';
import { JsonLd } from '@/components/seo/JsonLd';
import { cn } from '@/lib/utils';

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  return (
    <div className="mx-auto max-w-3xl divide-y divide-base-border/70 rounded-2xl border border-base-border/70 bg-base-surface/60">
      <JsonLd data={jsonLd} />
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              onClick={() => setOpenIndex(open ? null : index)}
              aria-expanded={open}
            >
              <span className="font-medium text-ink-primary">{item.question}</span>
              <span className={cn('shrink-0 text-lg text-brand-blueSoft transition-transform duration-200', open && 'rotate-45')}>+</span>
            </button>
            <div className={cn('grid transition-all duration-300 ease-out', open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0')}>
              <div className="overflow-hidden">
                <p className="px-5 pb-4 text-sm leading-relaxed text-ink-muted">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
