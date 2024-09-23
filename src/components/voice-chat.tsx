"use client";
import React, { useEffect, useState } from "react";
import Recorder from "./recorder";
import { Message, useChat } from "ai/react";
import BotSpeaking from "./bot-speaking";
import useDpTTS from "@/hooks/use-deepgram-tts";
import { ComboBox } from "@/components/ui/combo-box";
import { defaultVoice, voiceModels } from "@/lib/utils";
import ChatMessages from "./messages";
import BotProcessing from "./bot-processing";
import ThemeToggle from "./theme-toggle";
import Image from "next/image";
import Logo from "../../public/logo";

const VoiceChat = () => {
  const [voice, setVoice] = useState(defaultVoice.value);
  const [processing, setProcessing] = useState(false);

  const { isSpeaking, handleTextToVoice } = useDpTTS();
  const [textResponse, setTextResponse] = useState("");
  const [msgs, setMsgs] = useState<Message[]>([]);

  const { handleSubmit, setInput, input, messages } = useChat({
    api: "/api/chat",
    async onFinish(message) {
      if (message.role != "user") {
        setTextResponse(message.content);
        handleTextToVoice(message.content, voice);
      }
    },
  });

  useEffect(() => {
    if (input) {
      setProcessing(true);
      handleSubmit();
    }
    if (isSpeaking) {
      setProcessing(false);
    } else {
      setMsgs(messages);
    }
  }, [input, isSpeaking]);

  return (
    <div className="max-w-7xl mx-auto h-full flex flex-col overflow-hidden gap-4">
      <header className="flex items-center gap-4 justify-between">
        <div className="flex items-center gap-2">
          <Logo fill="#2563eb" size={40} />
          <span className="text-left sm:text-3xl font-medium">Orator</span>
        </div>
        <div className="flex items-center gap-4">
          <ComboBox
            onItemChange={(voice) => setVoice(voice)}
            defaultItem={defaultVoice.label}
            boxList={voiceModels}
          />
          <ThemeToggle />
        </div>
      </header>
      <ChatMessages messages={msgs} />
      <div className="flex flex-col justify-end items-center overflow-hidden">
        {!isSpeaking && !processing ? (
          <div className="animate-fadeIn">
            <Recorder recordingCompleted={(tsc) => setInput(tsc)} />
          </div>
        ) : processing ? (
          <BotProcessing />
        ) : (
          <BotSpeaking textResponse={textResponse} />
        )}
      </div>
    </div>
  );
};

export default VoiceChat;
