import { createOpenAI } from "@ai-sdk/openai";

const openAIApiKey = process.env.OPENAI_API_KEY;

if (!openAIApiKey) {
  throw Error("OpenAI API Key not set");
}

export const openai = createOpenAI({
  apiKey: openAIApiKey,
});
