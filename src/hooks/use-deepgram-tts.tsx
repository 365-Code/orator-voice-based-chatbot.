import React, { useRef } from "react";

const useDpTTS = () => {
  const [isSpeaking, setIsSpeaking] = React.useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const handleTextToVoice = async (content: string, voice?: string) => {
    try {
      const response = await fetch("/api/deepgram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content, voice }),
      });

      if (!response.ok) {
        throw Error("Deepgram error");
      }

      const audioBlob = await response.blob();

      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);
      audioRef.current = audio;
      setIsSpeaking(true);
      audio.play();
      audio.onended = () => {
        setIsSpeaking(false);
        URL.revokeObjectURL(audioUrl); // Cleanup
      };
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleTextToVoice,
    isSpeaking,
    audio: audioRef.current,
  };
};

export default useDpTTS;
