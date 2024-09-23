type Props = {
  content: string;
  voice?: string;
  onStop: () => void;
};

export const handleTextToVoice = async ({ content, voice, onStop }: Props) => {
  if (process.env.NEXT_PUBLIC_MODE == "UI") return;

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
    audio.play();

    audio.onended = () => {
      URL.revokeObjectURL(audioUrl); // Cleanup
      if (onStop) {
        onStop();
      }
    };
  } catch (error) {
    console.log(error);
  }
};
