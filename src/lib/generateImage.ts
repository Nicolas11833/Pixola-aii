import { AspectRatioId, QualityId, StyleId } from "@/types";

export class GenerationError extends Error {}

interface GenerateParams {
  prompt: string;
  style: StyleId;
  ratio: AspectRatioId;
  quality: QualityId;
}

export async function generateImage(params: GenerateParams): Promise<{ src: string }> {
  const response = await fetch("/api/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: `${params.prompt}. Estilo: ${params.style}. Proporção: ${params.ratio}. Qualidade: ${params.quality}.`,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new GenerationError(data.error || "Erro ao gerar imagem.");
  }

  return {
    src: `data:image/png;base64,${data.image}`,
  };
}
