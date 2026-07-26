import { AspectRatioOption, FaqItem, ImageStyle, QualityOption } from '@/types';

export const SITE_NAME = 'Pixora AI';
export const SITE_URL = 'https://www.pixora-ai.com.br';
export const SITE_DESCRIPTION =
  'Gere imagens com inteligência artificial em segundos. Crie artes realistas, anime, 3D, logos e muito mais gratuitamente com o Pixora AI.';

export const IMAGE_STYLES: ImageStyle[] = [
  {
    id: 'realista',
    label: 'Realista',
    description: 'Fotografias hiper-realistas com luz e textura naturais.',
    emoji: '📷',
    gradient: ['#4F7CFF', '#7C9CFF'],
    keywords: 'gerador de imagem realista com ia, foto realista ia',
  },
  {
    id: 'anime',
    label: 'Anime',
    description: 'Personagens e cenas no estilo anime japonês vibrante.',
    emoji: '🎌',
    gradient: ['#E85DA8', '#9B5DE5'],
    keywords: 'gerador de anime com ia, criar personagem anime ia',
  },
  {
    id: '3d',
    label: '3D',
    description: 'Renderizações tridimensionais com profundidade e volume.',
    emoji: '🧊',
    gradient: ['#4F7CFF', '#9B5DE5'],
    keywords: 'gerador de imagem 3d com ia, render 3d ia',
  },
  {
    id: 'cartoon',
    label: 'Cartoon',
    description: 'Ilustrações divertidas com traços de desenho animado.',
    emoji: '🎨',
    gradient: ['#F2A65A', '#E85DA8'],
    keywords: 'gerador de cartoon com ia, criar desenho animado ia',
  },
  {
    id: 'pixel-art',
    label: 'Pixel Art',
    description: 'Arte pixelada nostálgica inspirada em jogos retrô.',
    emoji: '👾',
    gradient: ['#5AD1C9', '#4F7CFF'],
    keywords: 'gerador de pixel art com ia, criar pixel art online',
  },
  {
    id: 'logo',
    label: 'Logo',
    description: 'Logotipos limpos e profissionais para sua marca.',
    emoji: '🔷',
    gradient: ['#9B5DE5', '#4F7CFF'],
    keywords: 'gerador de logo com ia, criar logotipo com inteligência artificial',
  },
  {
    id: 'ghibli',
    label: 'Ghibli',
    description: 'Cenários encantados com a estética de estúdios japoneses clássicos.',
    emoji: '🍃',
    gradient: ['#7BC96F', '#4F7CFF'],
    keywords: 'gerador estilo ghibli ia, transformar foto em ghibli',
  },
  {
    id: 'pintura-digital',
    label: 'Pintura Digital',
    description: 'Pinceladas artísticas com textura de tela e óleo.',
    emoji: '🖌️',
    gradient: ['#E85DA8', '#F2A65A'],
    keywords: 'gerador de pintura digital ia, arte digital com inteligência artificial',
  },
  {
    id: 'cyberpunk',
    label: 'Cyberpunk',
    description: 'Neon, metal e futuro distópico em alta definição.',
    emoji: '🌆',
    gradient: ['#9B5DE5', '#E85DA8'],
    keywords: 'gerador de imagem cyberpunk ia, criar arte cyberpunk',
  },
  {
    id: 'fantasia',
    label: 'Fantasy',
    description: 'Mundos épicos, criaturas e magia em cada detalhe.',
    emoji: '🐉',
    gradient: ['#4F7CFF', '#5AD1C9'],
    keywords: 'gerador de imagem fantasia ia, criar arte fantasy com ia',
  },
];

export const ASPECT_RATIOS: AspectRatioOption[] = [
  { id: '1:1', label: 'Quadrado', ratio: '1:1', w: 1024, h: 1024 },
  { id: '16:9', label: 'Paisagem', ratio: '16:9', w: 1344, h: 756 },
  { id: '9:16', label: 'Retrato (Stories)', ratio: '9:16', w: 756, h: 1344 },
  { id: '4:3', label: 'Foto clássica', ratio: '4:3', w: 1152, h: 864 },
  { id: '3:4', label: 'Vertical', ratio: '3:4', w: 864, h: 1152 },
];

export const QUALITIES: QualityOption[] = [
  { id: 'padrao', label: 'Padrão', description: 'Rápida e ideal para testar ideias', credits: 1 },
  { id: 'alta', label: 'Alta', description: 'Mais detalhes e nitidez', credits: 2 },
  { id: 'ultra', label: 'Ultra HD', description: 'Máxima qualidade para uso profissional', credits: 4 },
];

export const DAILY_FREE_LIMIT = 8;

export const MAIN_NAV = [
  { href: '/gerador', label: 'Gerador' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
  { href: '/sobre', label: 'Sobre' },
];

export const FOOTER_LINKS = {
  produto: [
    { href: '/gerador', label: 'Gerador de imagens' },
    { href: '/dashboard', label: 'Meu painel' },
    { href: '/faq', label: 'Perguntas frequentes' },
  ],
  estilos: IMAGE_STYLES.slice(0, 6).map((s) => ({
    href: `/estilos/${s.id}`,
    label: `Gerador ${s.label}`,
  })),
  empresa: [
    { href: '/sobre', label: 'Sobre nós' },
    { href: '/blog', label: 'Blog' },
    { href: '/contato', label: 'Contato' },
  ],
  legal: [
    { href: '/privacidade', label: 'Política de Privacidade' },
    { href: '/termos', label: 'Termos de Uso' },
  ],
};

export const HOME_FAQ: FaqItem[] = [
  {
    question: 'O Pixora AI é gratuito?',
    answer: `Sim. Todo visitante pode gerar até ${DAILY_FREE_LIMIT} imagens por dia gratuitamente, sem necessidade de cartão de crédito. Basta escrever sua descrição e escolher um estilo.`,
  },
  {
    question: 'Preciso saber programar ou desenhar para usar?',
    answer:
      'Não. Basta descrever em texto o que você imagina, escolher o estilo visual, a proporção e a qualidade desejada. A inteligência artificial cuida do resto em segundos.',
  },
  {
    question: 'Posso usar as imagens geradas comercialmente?',
    answer:
      'Sim, as imagens geradas na sua conta podem ser usadas em projetos pessoais e comerciais. Consulte nossos Termos de Uso para detalhes sobre licenciamento e restrições.',
  },
  {
    question: 'Quais estilos de imagem estão disponíveis?',
    answer:
      'Oferecemos 10 estilos: Realista, Anime, 3D, Cartoon, Pixel Art, Logo, Ghibli, Pintura Digital, Cyberpunk e Fantasy — com novos estilos sendo adicionados regularmente.',
  },
  {
    question: 'As imagens ficam salvas no meu histórico?',
    answer:
      'Sim. Toda imagem gerada é salva automaticamente no seu histórico local, onde você pode revisitar, baixar, favoritar ou copiar o prompt original a qualquer momento.',
  },
  {
    question: 'Existe limite de gerações por dia?',
    answer: `Para garantir estabilidade e qualidade para todos os usuários, o plano gratuito permite ${DAILY_FREE_LIMIT} gerações diárias por navegador. Planos com mais créditos estão a caminho.`,
  },
];
