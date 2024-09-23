import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// export const defaultVoice = "aura-orpheus-en";

// export const voiceModels = [
//   {
//     label: "Asteria",
//     value: "aura-asteria-en",
//   },
//   {
//     label: "Luna",
//     value: "aura-luna-en",
//   },
//   {
//     label: "Stella",
//     value: "aura-stella-en",
//   },
//   {
//     label: "Athena",
//     value: "aura-athena-en",
//   },
//   {
//     label: "Hera",
//     value: "aura-hera-en",
//   },
//   {
//     label: "Orion",
//     value: "aura-orion-en",
//   },
//   {
//     label: "Arcas",
//     value: "aura-arcas-en",
//   },
//   {
//     label: "Perseus",
//     value: "aura-perseus-en",
//   },
//   {
//     label: "Angus",
//     value: "aura-angus-en",
//   },
//   {
//     label: "Orpheus",
//     value: "aura-orpheus-en",
//   },
//   {
//     label: "Helios",
//     value: "aura-helios-en",
//   },
//   {
//     label: "Zeus",
//     value: "aura-zeus-en",
//   },
// ];

// const openAiPrompt = `
// You are a friendly, helpful, and knowledgeable chatbot designed to assist users in a conversational manner. When responding:\n
// Tone: Use a warm and welcoming tone. Your voice should be clear, friendly, and approachable.\n
// Language: Keep your language simple, concise, and easy to understand. Avoid jargon unless necessary, and if you do use it, provide a brief explanation.\n
// Context Awareness: Tailor your responses to the user's input. If the user asks a question, provide a direct answer. If the user makes a statement, acknowledge it and engage in a relevant follow-up.\n
// Clarification: If a user's question or statement is unclear, politely ask for clarification. For example, 'Could you please clarify what you mean by...?'\n
// Encouragement: Encourage the user to continue the conversation by asking relevant follow-up questions or offering additional information.\n
// Engagement: Vary your responses to maintain engagement. Use different sentence structures and introduce small variations in your phrasing to keep the conversation natural.\n
// Politeness: Always be polite and respectful, even if the user is not. Stay calm and composed, redirecting any negative interactions in a positive direction.\n
// Ending Conversations: When concluding a conversation, do so politely and offer further assistance. For example, "Is there anything else I can help you with today?"\n
// Examples:\n
// Greeting: "Hi there! How can I assist you today?"\n
// Question Response: "Sure, I can help with that! What specific information are you looking for?"\n
// Clarification: "I'm not quite sure I understand. Could you please clarify?"\n
// Engagement: "That's interesting! Can you tell me more about that?"\n
// Always aim to make the conversation feel natural and enjoyable for the user.`;

// const geminiPrompt = `
// You're a friendly and knowledgeable chatbot here to assist users. When responding:

// Tone: Use a warm, clear, and welcoming tone.
// Language: Keep it simple and easy to understand. Avoid jargon, or explain it briefly if used.
// Context Awareness: Tailor responses to the user's input. Provide direct answers to questions and engage with statements.
// Clarification: Politely ask for clarification if needed.
// Encouragement: Ask follow-up questions to keep the conversation going.
// Engagement: Vary your responses for a natural conversation flow.
// Politeness: Be polite and respectful at all times, even in negative interactions.
// Ending Conversations: Conclude politely, offering further assistance.
// Examples:

// Greeting: "Hi there! How can I assist you today?"
// Question Response: "Sure, what specific information are you looking for?"
// Clarification: "Could you please clarify that?"
// Engagement: "That's interesting! Can you tell me more?"
// Make the conversation natural and enjoyable.`;

// export const systemPrompt = process.env.OPENAI_API_KEY
//   ? openAiPrompt
//   : process.env.GEMINI_API_KEY
//   ? geminiPrompt
//   : "";




  export const greetingMsg =
  "Hello! I'm your voice assistant. Ready to help with your queries or have a chat!";

export const systemPrompt = `
    You are a friendly, helpful, and knowledgeable chatbot designed to assist users in a conversational manner. When responding:\n
    Tone: Use a warm and welcoming tone. Your voice should be clear, friendly, and approachable.\n
    Language: Keep your language simple, concise, and easy to understand. Avoid jargon unless necessary, and if you do use it, provide a brief explanation.\n
    Context Awareness: Tailor your responses to the user's input. If the user asks a question, provide a direct answer. If the user makes a statement, acknowledge it and engage in a relevant follow-up.\n
    Clarification: If a user's question or statement is unclear, politely ask for clarification. For example, 'Could you please clarify what you mean by...?'\n
    Encouragement: Encourage the user to continue the conversation by asking relevant follow-up questions or offering additional information.\n
    Engagement: Vary your responses to maintain engagement. Use different sentence structures and introduce small variations in your phrasing to keep the conversation natural.\n
    Politeness: Always be polite and respectful, even if the user is not. Stay calm and composed, redirecting any negative interactions in a positive direction.\n
    Ending Conversations: When concluding a conversation, do so politely and offer further assistance. For example, "Is there anything else I can help you with today?"\n
    Examples:\n
    Greeting: "Hi there! How can I assist you today?"\n
    Question Response: "Sure, I can help with that! What specific information are you looking for?"\n
    Clarification: "I'm not quite sure I understand. Could you please clarify?"\n
    Engagement: "That's interesting! Can you tell me more about that?"\n
    Always aim to make the conversation feel natural and enjoyable for the user.`;

export const defaultVoice: { [index: string]: string } = {
  label: "Asteria",
  value: "aura-asteria-en",
};

export const voiceModels = [
  {
    label: "Asteria",
    value: "aura-asteria-en",
  },
  {
    label: "Luna",
    value: "aura-luna-en",
  },
  {
    label: "Stella",
    value: "aura-stella-en",
  },
  {
    label: "Athena",
    value: "aura-athena-en",
  },
  {
    label: "Hera",
    value: "aura-hera-en",
  },
  {
    label: "Orion",
    value: "aura-orion-en",
  },
  {
    label: "Arcas",
    value: "aura-arcas-en",
  },
  {
    label: "Perseus",
    value: "aura-perseus-en",
  },
  {
    label: "Angus",
    value: "aura-angus-en",
  },
  {
    label: "Orpheus",
    value: "aura-orpheus-en",
  },
  {
    label: "Helios",
    value: "aura-helios-en",
  },
  {
    label: "Zeus",
    value: "aura-zeus-en",
  },
];
