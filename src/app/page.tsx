// import VoiceChat from "@/components/chat";
import VoiceChat from "@/components/voice-chat";
import React from "react";

declare global {
  interface Window {
    webkitSpeechRecognition: any;
  }
}

const Page = () => {
  return (
    <main className="h-screen p-4 sm:p-6">
      <VoiceChat />
    </main>
  );
  // return <VoiceChat />;
};

export default Page;
