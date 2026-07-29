import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  try {
    const { prompt } = req.body;

    const result = await client.images.generate({
      model: "gpt-image-1",
      prompt,
      size: "1024x1024",
    });

    return res.status(200).json({
      image: result.data[0].b64_json,
    });
  } catch (e) {
    console.error(e);
    return res.status(500).json({
      error: "Erro ao gerar imagem",
    });
  }
}
