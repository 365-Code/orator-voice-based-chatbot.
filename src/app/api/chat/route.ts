import { streamText } from "ai";
import { systemPrompt } from "@/lib/utils";
import { google } from "@/lib/gemini";
import { openai } from "@/lib/openai";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = await streamText({
      model: google("gemini-1.5-pro"),
      // model: openai("gpt-4o-mini"),
      messages: messages,
      system: systemPrompt,
      // prompt: systemPrompt
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error("Error in POST handler:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
