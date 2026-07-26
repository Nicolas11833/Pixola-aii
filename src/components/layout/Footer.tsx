import { Link } from 'react-router-dom';
import { FOOTER_LINKS, SITE_NAME } from '@/lib/constants';
import { AdSlot } from '@/components/ads/AdSlot';

export function Footer() {
  return (
    <footer className="border-t border-base-border/70 bg-base-deep">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <AdSlot variant="footer" label="Publicidade" className="mb-10" />

        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-gradient text-xs font-bold text-white">
                P
              </span>
              <span className="font-display text-base font-semibold text-ink-primary">{SITE_NAME}</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              Geração de imagens com inteligência artificial, direto do navegador.
            </p>
          </div>

          <FooterColumn title="Produto" links={FOOTER_LINKS.produto} />
          <FooterColumn title="Estilos" links={FOOTER_LINKS.estilos} />
          <FooterColumn title="Empresa" links={FOOTER_LINKS.empresa} />
          <FooterColumn title="Legal" links={FOOTER_LINKS.legal} />
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-base-border/70 pt-6 text-xs text-ink-muted sm:flex-row">
          <p>© {new Date().getFullYear()} {SITE_NAME}. Todos os direitos reservados.</p>
          <p>Feito com Vite + React · Hospedado para milhões de acessos.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-ink-primary">{title}</h3>
      <ul className="mt-3 space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link to={link.href} className="text-sm text-ink-muted hover:text-ink-primary transition-colors">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
