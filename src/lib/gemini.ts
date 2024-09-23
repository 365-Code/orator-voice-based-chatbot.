import { createGoogleGenerativeAI } from "@ai-sdk/google";

const geminiApiKey = process.env.GEMINI_API_KEY;

if (!geminiApiKey) {
  throw Error("Gemini API Key not set");
}

export const google = createGoogleGenerativeAI({
  apiKey: geminiApiKey,
});
