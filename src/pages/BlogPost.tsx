import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { Seo } from '@/components/seo/Seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { AdSlot } from '@/components/ads/AdSlot';
import { PostCard } from '@/components/blog/PostCard';
import { getPostBySlug, getRelatedPosts } from '@/lib/blogData';
import { formatDate } from '@/lib/utils';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import NotFound from './NotFound';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) return <NotFound />;

  const related = getRelatedPosts(post.slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: { '@type': 'Organization', name: SITE_NAME },
    publisher: { '@type': 'Organization', name: SITE_NAME },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <Seo title={post.title} description={post.excerpt} path={`/blog/${post.slug}`} keywords={post.tags} />
      <JsonLd data={jsonLd} />
      <Breadcrumb items={[{ label: 'Início', href: '/' }, { label: 'Blog', href: '/blog' }, { label: post.title }]} />

      <div className="mb-8 h-48 w-full rounded-2xl sm:h-64" style={{ background: `linear-gradient(135deg, ${post.cover[0]}, ${post.cover[1]})` }} />

      <p className="text-xs uppercase tracking-wider text-brand-blueSoft">{post.category}</p>
      <h1 className="mt-2 font-display text-3xl font-bold text-ink-primary sm:text-4xl">{post.title}</h1>
      <div className="mt-3 flex items-center gap-3 text-sm text-ink-muted">
        <span>{formatDate(post.publishedAt)}</span>
        <span>·</span>
        <span>{post.readMinutes} min de leitura</span>
      </div>

      <article className="prose-invert mt-8 space-y-5 text-[15px] leading-relaxed text-ink-secondary">
        {post.content.map((paragraph, index) => (
          <Fragment key={index}>
            <p>{paragraph}</p>
            {index === 1 && <AdSlot variant="inline" className="!my-8" />}
          </Fragment>
        ))}
      </article>

      <div className="mt-8 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-base-raised px-3 py-1 text-xs text-ink-muted">#{tag}</span>
        ))}
      </div>

      <AdSlot variant="banner" className="my-10" />

      {related.length > 0 && (
        <section>
          <h2 className="font-display text-xl font-semibold text-ink-primary">Continue lendo</h2>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {related.map((r) => (
              <PostCard key={r.slug} post={r} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
