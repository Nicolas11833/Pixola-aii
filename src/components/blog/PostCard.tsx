import { Link } from 'react-router-dom';
import { BlogPost } from '@/types';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { formatDate } from '@/lib/utils';

export function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link to={`/blog/${post.slug}`} className="group block">
      <Card className="h-full overflow-hidden transition-colors group-hover:border-brand-blue/40">
        <div className="h-36 w-full" style={{ background: `linear-gradient(135deg, ${post.cover[0]}, ${post.cover[1]})` }} />
        <div className="p-5">
          <Badge tone="default" className="mb-3">{post.category}</Badge>
          <h3 className="font-display text-lg font-semibold leading-snug text-ink-primary group-hover:text-brand-blueSoft">
            {post.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm text-ink-muted">{post.excerpt}</p>
          <div className="mt-4 flex items-center justify-between text-xs text-ink-muted">
            <span>{formatDate(post.publishedAt)}</span>
            <span>{post.readMinutes} min de leitura</span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
