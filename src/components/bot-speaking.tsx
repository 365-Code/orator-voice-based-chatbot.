"use client";
import { Button } from "@/components/ui/button";
import { Card, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const BotSpeaking = ({ textResponse }: { textResponse: string }) => {
  const [displayedText, setDisplayedText] = React.useState(""); // Initial empty text
  const typingSpeed = 50; // Adjust typing speed (ms)

  React.useEffect(() => {
    let index = 0;

    // Function to simulate typing effect
    const typeText = () => {
      if (index < textResponse.length) {
        setDisplayedText((prev) => prev + textResponse[index] || "");
        index++;
      }
    };

    // Typing effect interval
    const intervalId = setInterval(typeText, typingSpeed);

    // Clear the interval when the component unmounts or when textResponse changes
    return () => clearInterval(intervalId);
  }, []); // Re-run effect if textResponse changes

  return (
    <div className="flex flex-1 justify-end overflow-hidden flex-col items-center gap-4">
      <Card className="bg-gradient-to-br max-h-full bg-blue-600/90 shadow-md shadow-blue-800/40 text-center overflow-y-auto content-end p-4 py-3 rounded-lg border-none">
        <CardDescription className="text-sm md:text-base font-medium text-white">
          {displayedText}
        </CardDescription>
      </Card>
      <Button className="relative w-[120px] h-[120px] shadow-md rounded-full hover:bg-black bg-black overflow-hidden">
        <Image
          unoptimized={true}
          src={"/assets/aura-speaking.gif"}
          width={500}
          alt="aura-speaking"
          height={500}
          className="w-full h-full pointer-events-none object-scale-down object-center absolute scale-[2] top-0 left-0"
        />
      </Button>
    </div>
  );
};

export default BotSpeaking;
