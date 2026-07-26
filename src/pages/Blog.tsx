import { Seo } from '@/components/seo/Seo';
import { PostCard } from '@/components/blog/PostCard';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { AdSlot } from '@/components/ads/AdSlot';
import { BLOG_POSTS } from '@/lib/blogData';

export default function Blog() {
  const [first, ...rest] = BLOG_POSTS;
  const secondBatch = rest.slice(0, 2);
  const thirdBatch = rest.slice(2);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <Seo
        title="Blog — Guias e Dicas sobre Geração de Imagens com IA"
        description="Aprenda a criar prompts melhores, conheça os estilos disponíveis e descubra tendências de geração de imagens com inteligência artificial."
        path="/blog"
        keywords={['blog ia', 'como usar ia para criar imagens', 'dicas de prompt']}
      />
      <Breadcrumb items={[{ label: 'Início', href: '/' }, { label: 'Blog' }]} />
      <h1 className="font-display text-3xl font-bold text-ink-primary sm:text-4xl">Blog</h1>
      <p className="mt-2 max-w-2xl text-ink-secondary">
        Guias práticos, comparativos de estilo e dicas para tirar o máximo proveito da
        geração de imagens com IA.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {first && <PostCard post={first} />}
        {secondBatch.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      <AdSlot variant="banner" className="my-10" />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {thirdBatch.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
