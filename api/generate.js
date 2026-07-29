import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Método não permitido",
    });
  }

  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({
        error: "Prompt não informado.",
      });
    }

    const result = await client.images.generate({
      model: "gpt-image-1",
      prompt,
      size: "1024x1024",
    });

    if (!result?.data?.[0]?.b64_json) {
      return res.status(500).json({
        error: "A OpenAI não retornou nenhuma imagem.",
      });
    }

    return res.status(200).json({
      image: result.data[0].b64_json,
    });
  } catch (e) {
    console.error("Erro da OpenAI:", e);

    return res.status(500).json({
      error:
        e?.message ||
        e?.error?.message ||
        e?.response?.data?.error?.message ||
        JSON.stringify(e),
    });
  }
}
