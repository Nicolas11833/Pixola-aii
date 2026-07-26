import { IMAGE_STYLES } from './constants';
import { AspectRatioId, QualityId, StyleId } from '@/types';

/**
 * ATENÇÃO — INTEGRAÇÃO COM API REAL
 * ---------------------------------
 * Esta função simula a geração de imagem localmente (SVG determinístico)
 * para que o produto funcione de ponta a ponta sem depender de uma API paga.
 *
 * Para integrar um provedor real (Stability AI, Replicate, OpenAI Images,
 * Ideogram, etc.), edite `src/lib/generateImage.ts` e troque a chamada a
 * esta função por uma requisição HTTP ao provedor escolhido. Como este é um
 * projeto front-end puro (Vite/SPA), a chamada deve ser feita a partir do
 * navegador para um backend seu (Supabase Edge Function, Cloudflare Worker,
 * etc.) que guarde a chave da API em segredo — nunca exponha a chave da API
 * de geração de imagem diretamente no código do front-end.
 */

function hashString(input: string) {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (hash << 5) - hash + input.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function ratioToViewbox(ratio: AspectRatioId): [number, number] {
  const map: Record<AspectRatioId, [number, number]> = {
    '1:1': [1024, 1024],
    '16:9': [1344, 756],
    '9:16': [756, 1344],
    '4:3': [1152, 864],
    '3:4': [864, 1152],
  };
  return map[ratio];
}

export function buildPlaceholderImage({
  prompt,
  style,
  ratio,
}: {
  prompt: string;
  style: StyleId;
  ratio: AspectRatioId;
  quality: QualityId;
}) {
  const styleConfig = IMAGE_STYLES.find((s) => s.id === style) ?? IMAGE_STYLES[0];
  const [w, h] = ratioToViewbox(ratio);
  const seed = hashString(prompt + style + ratio);
  const rand = (min: number, max: number, salt: number) => {
    const x = Math.sin(seed + salt) * 10000;
    const frac = x - Math.floor(x);
    return min + frac * (max - min);
  };

  const blobs = Array.from({ length: 5 })
    .map((_, i) => {
      const cx = rand(0, w, i * 13.1);
      const cy = rand(0, h, i * 27.3);
      const r = rand(w * 0.18, w * 0.42, i * 7.7);
      const colorA = styleConfig.gradient[i % 2];
      return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${colorA}" opacity="0.55" />`;
    })
    .join('');

  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${styleConfig.gradient[0]}" stop-opacity="0.9" />
        <stop offset="100%" stop-color="${styleConfig.gradient[1]}" stop-opacity="0.9" />
      </linearGradient>
      <filter id="blur"><feGaussianBlur stdDeviation="${w * 0.04}" /></filter>
    </defs>
    <rect width="100%" height="100%" fill="#0A0C14" />
    <rect width="100%" height="100%" fill="url(#bg)" opacity="0.35" />
    <g filter="url(#blur)">${blobs}</g>
    <rect width="100%" height="100%" fill="#0A0C14" opacity="0.08" />
  </svg>`;

  const encoded = window.btoa(unescape(encodeURIComponent(svg)));
  return `data:image/svg+xml;base64,${encoded}`;
}
