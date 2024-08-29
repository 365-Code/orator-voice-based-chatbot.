"use client";
import React, { useEffect, useState } from "react";
import Recorder from "./recorder";
import ChatMessages from "./messages";
import { Message } from "ai";
import { useChat } from "ai/react";
import { Button } from "./ui/button";
import Header from "./header";

// type Message = {
//   role: "user" | "assistant";
//   content: string;
// };

const initMsg: Message[] = [
  {
    id: crypto.randomUUID(),
    role: "assistant",
    content: "Hello, How are you",
  },
  {
    id: crypto.randomUUID(),
    role: "assistant",
    content: "How can I assist you today",
  },
];

const nxtMsgs: Message[] = [
  {
    id: "2zbHMbw",
    role: "user",
    content: "Give brief description about next years.",
  },
  {
    id: "ixesu0e",
    role: "assistant",
    content:
      'Sure! Could you please clarify what you mean by "n…ing year? Let me know so I can assist you better!',
  },
  { id: "xUwO0Qi", role: "user", content: "A description about Next JS." },
  {
    id: "ZwLuyhT",
    role: "assistant",
    content:
      "Absolutely! Next.js is a popular React framework t…ng specific you would like to know about Next.js?",
  },
  { id: "5rYdwh2", role: "user", content: "Tell me a joke in one line." },
  {
    id: "BgO73UB",
    role: "assistant",
    content:
      "Sure! Why did the scarecrow win an award? Because …his field! 😄 Would you like to hear another one?",
  },
];

const Chat = () => {
  const { messages, handleSubmit, setInput, input } = useChat({
    async onFinish(message) {
      if (message.role != "user") {
        await handleTextToVoice(message.content);
      }
    },
  });

  const handleTextToVoice = async (content: string) => {
    if (process.env.NEXT_PUBLIC_MODE == "UI") return;

    try {
      const response = await fetch("/api/deepgram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content }),
      });

      if (!response.ok) {
        throw Error("Deepgram error");
      }

      const audioBlob = await response.blob();

      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);
      audio.play();

      audio.onended = () => {
        URL.revokeObjectURL(audioUrl); // Cleanup
      };
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (input) {
      if (process.env.NEXT_PUBLIC_MODE == "UI") return;
      handleSubmit();
    }
  }, [input]);

  return (
    <div className="h-screen overflow-hidden p-6">
      <div className="max-w-7xl mx-auto h-full flex flex-col overflow-hidden gap-4">
        <Header />
        <ChatMessages
          messages={[...initMsg, ...nxtMsgs, ...nxtMsgs, ...messages]}
        />
        <Recorder
          recordingCompleted={(tsc) => {
            console.log("TEST = ", tsc);
            setInput(tsc);
          }}
        />
      </div>
    </div>
  );
};

export default Chat;
