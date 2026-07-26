export type StyleId =
  | 'realista'
  | 'anime'
  | '3d'
  | 'cartoon'
  | 'pixel-art'
  | 'logo'
  | 'ghibli'
  | 'pintura-digital'
  | 'cyberpunk'
  | 'fantasia';

export interface ImageStyle {
  id: StyleId;
  label: string;
  description: string;
  emoji: string;
  gradient: [string, string];
  keywords: string;
}

export type AspectRatioId = '1:1' | '16:9' | '9:16' | '4:3' | '3:4';

export interface AspectRatioOption {
  id: AspectRatioId;
  label: string;
  ratio: string;
  w: number;
  h: number;
}

export type QualityId = 'padrao' | 'alta' | 'ultra';

export interface QualityOption {
  id: QualityId;
  label: string;
  description: string;
  credits: number;
}

export interface GeneratedImage {
  id: string;
  prompt: string;
  style: StyleId;
  ratio: AspectRatioId;
  quality: QualityId;
  src: string;
  createdAt: number;
  favorite?: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  cover: [string, string];
  category: string;
  readMinutes: number;
  publishedAt: string;
  tags: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SeoData {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  noIndex?: boolean;
}
