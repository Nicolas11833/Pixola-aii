import { buildPlaceholderImage } from './placeholderImage';
import { AspectRatioId, QualityId, StyleId } from '@/types';

export class GenerationError extends Error {}

// Filtro simples anti-spam: bloqueia payloads com marcações de código/HTML
// e prompts repetidos de caracteres únicos, sem impedir uso legítimo.
function looksLikeSpam(prompt: string) {
  const suspicious = /<script|https?:\/\//i.test(prompt);
  const repetitive = /^(.)\1{20,}$/.test(prompt.trim());
  return suspicious || repetitive;
}

interface GenerateParams {
  prompt: string;
  style: StyleId;
  ratio: AspectRatioId;
  quality: QualityId;
}

/**
 * generateImage — hoje roda 100% no navegador, sem backend.
 *
 * Para integrar uma API de geração real, substitua o corpo desta função
 * por uma chamada `fetch` ao seu backend (ex: Supabase Edge Function),
 * mantendo a mesma assinatura de retorno (`Promise<{ src: string }>`).
 * Nunca chame diretamente uma API paga de geração de imagem a partir do
 * front-end usando uma chave secreta — ela ficaria exposta no navegador.
 */
export async function generateImage(params: GenerateParams): Promise<{ src: string }> {
  if (params.prompt.trim().length < 4) {
    throw new GenerationError('Descreva sua ideia com um pouco mais de detalhe (mínimo 4 caracteres).');
  }

  if (looksLikeSpam(params.prompt)) {
    throw new GenerationError('Descrição não permitida.');
  }

  // Pequeno atraso simulado para reproduzir uma geração real.
  await new Promise((resolve) => setTimeout(resolve, 700));

  const src = buildPlaceholderImage(params);
  return { src };
}
