# Pixora AI — Vite + React + TypeScript (compatível com Lovable)

SaaS de geração de imagens com IA. Esta versão usa **Vite + React + TypeScript +
Tailwind CSS + react-router-dom** — sem Next.js, sem App Router e sem API Routes,
para funcionar nativamente no [Lovable](https://lovable.dev) e em qualquer
hospedagem estática (Vercel, Netlify, Cloudflare Pages, etc.).

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:5173](http://localhost:5173).

Build de produção:

```bash
npm run build
npm run preview
```

## Estrutura do projeto

```
index.html               Ponto de entrada HTML (fontes, meta tags, favicon)
vite.config.ts           Configuração do Vite (alias @/ → ./src)
tailwind.config.ts       Tema (cores, gradientes, animações)
tsconfig.json / tsconfig.app.json / tsconfig.node.json

public/
  favicon.svg
  robots.txt              Estático — SPA não gera robots.txt dinamicamente
  sitemap.xml             Estático — atualize manualmente ao criar novas páginas

src/
  main.tsx                Bootstrap do React + BrowserRouter
  App.tsx                 Definição de todas as rotas (react-router-dom)
  index.css               Tailwind + estilos globais

  pages/                  Uma página por rota (equivalentes às antigas app/*/page.tsx)
    Home.tsx, Generator.tsx, Dashboard.tsx, StylePage.tsx,
    Blog.tsx, BlogPost.tsx, Faq.tsx, About.tsx, Contact.tsx,
    Privacy.tsx, Terms.tsx, NotFound.tsx

  components/
    ui/                   Button, Card, Badge, Textarea, OptionGrid
    layout/               Header, Footer, Layout (Outlet), Breadcrumb
    ads/                  AdSlot — componente único de anúncios
    seo/                  Seo.tsx (title/meta via useEffect) e JsonLd.tsx
    home/, generator/, blog/, faq/, contact/

  hooks/                  useImageHistory, useRateLimit (localStorage)
  lib/                    constants, utils, blogData, placeholderImage, generateImage
  types/                  Tipagens compartilhadas
```

## O que mudou em relação à versão Next.js

- **Roteamento**: `react-router-dom` (`<Routes>`/`<Route>`) no lugar do App Router.
  Rotas dinâmicas (`/estilos/:estilo`, `/blog/:slug`) usam `useParams`.
- **Sem API Routes**: a geração de imagem roda inteiramente no navegador, em
  `src/lib/generateImage.ts`. Não há mais `/api/generate` nem rate limit no
  servidor — o limite diário existe apenas no cliente (`useRateLimit`, via
  `localStorage`). Isso é adequado para uma demonstração, mas **não impede
  que alguém tecnicamente hábil contorne o limite**; para um limite robusto de
  verdade, você precisará de um backend (ver seção abaixo).
- **SEO client-side**: como não há servidor renderizando HTML, `src/components/seo/Seo.tsx`
  aplica `<title>`, meta description, Open Graph e canonical via `useEffect`,
  e `sitemap.xml`/`robots.txt` são arquivos estáticos em `public/`.

### Importante sobre SEO em SPA

Esta é uma Single Page Application: o conteúdo é montado pelo JavaScript no
navegador, não entregue pronto pelo servidor. O Googlebot consegue executar
JavaScript e indexar SPAs modernas, mas a indexação tende a ser mais lenta e
menos previsível do que com renderização no servidor (SSR/SSG). Se o
posicionamento no Google for uma prioridade máxima do produto, o ideal a
médio prazo é migrar para um framework com SSR (Next.js, Remix, Astro) ou
usar pré-renderização estática. A versão Next.js entregue anteriormente já
resolve isso — esta versão prioriza compatibilidade com o Lovable.

## Integrando uma API de geração de imagens real

Hoje `src/lib/placeholderImage.ts` cria uma imagem SVG determinística no
navegador, para o produto funcionar de ponta a ponta sem custo.

Para conectar um provedor real (Stability AI, Replicate, OpenAI Images etc.):

1. **Nunca chame a API paga diretamente do front-end** com uma chave secreta —
   ela ficaria visível no navegador de qualquer visitante.
2. Crie um pequeno backend (Supabase Edge Function, Cloudflare Worker, ou uma
   função serverless na Vercel/Netlify) que guarde a chave em uma variável de
   ambiente do lado do servidor e faça a chamada à API de geração.
3. Em `src/lib/generateImage.ts`, troque a chamada a `buildPlaceholderImage`
   por um `fetch` para esse backend.
4. Nenhum outro arquivo do front-end precisa mudar — todos os componentes já
   consomem apenas `{ src }`.

## Ativando o Google AdSense

1. Após aprovação da conta, cole o script oficial do AdSense em `index.html`
   (já há um comentário indicando o local exato).
2. Abra `src/components/ads/AdSlot.tsx` e substitua o
   `<div data-ad-placeholder>` pelo bloco `<ins className="adsbygoogle" ... />`
   com o `data-ad-slot` real.
3. Todos os espaços de anúncio do site (home, gerador, histórico, rodapé,
   lateral, entre posts do blog) já usam esse componente único.

## Importando este projeto no Lovable

O Lovable **não tem um botão nativo de "importar repositório existente"** —
segundo a documentação oficial, só é possível exportar do Lovable para o
GitHub, não o contrário. O caminho que funciona é o chamado "truque do `.git`":

```bash
# 1. Extraia este zip em uma pasta, ex: pixora-ai
cd pixora-ai

# 2. No site do Lovable, crie um projeto novo qualquer (um prompt genérico
#    serve) e, nas configurações do projeto, conecte-o a um repositório
#    GitHub novo e vazio (Settings → Connectors → GitHub).

# 3. Clone esse repositório vazio que o Lovable criou, em outra pasta:
git clone https://github.com/SEU-USUARIO/NOME-DO-REPO.git lovable-import
cd lovable-import

# 4. Copie todo o conteúdo deste projeto para dentro do clone,
#    preservando a pasta .git:
cp -r ../pixora-ai/. .

# 5. Envie as mudanças:
git add .
git commit -m "Importar projeto Pixora AI"
git push origin main

# 6. Volte ao Lovable e atualize o projeto — ele vai adotar este código
#    como a nova fonte de verdade e você poderá seguir editando por lá.
```

## Deploy fora do Lovable

Como é um projeto Vite padrão, também pode ser publicado diretamente em
Vercel, Netlify ou Cloudflare Pages:

```bash
npm run build
```

O resultado fica em `dist/` — aponte a hospedagem para essa pasta (comando de
build: `npm run build`, diretório de saída: `dist`).
