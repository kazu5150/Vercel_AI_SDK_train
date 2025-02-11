import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

export async function POST(req: Request) {
  // クライアントからのリクエストデータをJSONとして読み取る
  const { messages } = await req.json();

  // GPT-3.5などOpenAIモデルを使ってストリーミング応答を生成
  const result = streamText({
    model: openai('gpt-3.5-turbo'),
    messages,
  });

  // ストリーミング形式でフロントエンドに返す
  return result.toDataStreamResponse();
}
