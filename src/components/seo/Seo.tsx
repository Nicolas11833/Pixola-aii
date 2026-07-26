import { useEffect } from 'react';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

interface SeoProps {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
}

function setMeta(nameOrProp: 'name' | 'property', key: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${nameOrProp}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(nameOrProp, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function setCanonical(url: string) {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
}

/**
 * Componente de SEO client-side. Como este é um projeto Vite (SPA), estas
 * tags são aplicadas depois que o JavaScript carrega no navegador — ao
 * contrário de uma versão com servidor (Next.js/SSR), onde elas já vêm
 * prontas no HTML. Buscadores modernos (Googlebot) executam JavaScript e
 * costumam indexar corretamente, mas o tempo de indexação tende a ser
 * maior. Para máxima performance de SEO/SSR, considere migrar para um
 * framework com renderização no servidor no futuro.
 */
export function Seo({ title, description, path = '/', keywords = [], noIndex = false }: SeoProps) {
  useEffect(() => {
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    const url = `${SITE_URL}${path}`;

    document.title = fullTitle;
    setMeta('name', 'description', description);
    if (keywords.length) setMeta('name', 'keywords', keywords.join(', '));
    setMeta('name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow');
    setCanonical(url);

    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:site_name', SITE_NAME);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:locale', 'pt_BR');

    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', description);
  }, [title, description, path, keywords, noIndex]);

  return null;
}
