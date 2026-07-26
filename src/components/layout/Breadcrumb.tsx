import { Link } from 'react-router-dom';
import { JsonLd } from '@/components/seo/JsonLd';
import { SITE_URL } from '@/lib/constants';

interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumb({ items }: { items: Crumb[] }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.href ? `${SITE_URL}${item.href}` : undefined,
    })),
  };

  return (
    <nav aria-label="breadcrumb" className="mb-6 text-sm text-ink-muted">
      <JsonLd data={jsonLd} />
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-1.5">
            {index > 0 && <span className="text-base-border">/</span>}
            {item.href ? (
              <Link to={item.href} className="hover:text-ink-primary transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-ink-secondary">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
