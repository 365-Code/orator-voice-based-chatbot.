"use client";
import { Button } from "@/components/ui/button";
import { Card, CardDescription } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import useWebSR from "@/hooks/use-web-sr";
import { Pause, Play, X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

type Props = {
  recordingCompleted: (input: string) => void;
};

const Recorder = ({ recordingCompleted }: Props) => {
  const [start, setStart] = useState(false);

  const {
    startRecording,
    stopRecording,
    fullTranscript,
    toggleRecording,
    isRecording,
    isRecordingComplete,
  } = useWebSR({ continuous: true });

  const handleRecordingComplete = () => {
    setTimeout(() => {
      setStart(true);
      if (fullTranscript) {
        recordingCompleted(fullTranscript);
      }
      stopRecording();
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <Card className="text-center line-clamp-1 px-4 py-3 shadow-lg shadow-primary-foreground rounded-lg">
        <CardDescription className=" text-sm md:text-base font-medium">
          {/* {interimTranscript
            ? interimTranscript */}
          {fullTranscript ? (
            fullTranscript
          ) : isRecording ? (
            "Listening..."
          ) : start ? (
            "Start Recording"
          ) : (
            <span className="italic">Hello! How can I assist you today?</span>
          )}
        </CardDescription>
      </Card>
      <TooltipProvider>
        <div className="flex items-center justify-center gap-2">
          <Tooltip>
            <TooltipTrigger
              onClick={toggleRecording}
              className={`relative w-[50px] h-[50px] bg-primary text-primary-foreground rounded-full flex items-center justify-center transition-all transform ${
                isRecording ? "scale-110" : "scale-100"
              } ${!isRecordingComplete ? "block" : "hidden"}`}
              aria-label={isRecording ? "Pause" : "Play"}
            >
              {isRecording ? <Pause size={20} /> : <Play size={20} />}
            </TooltipTrigger>
            <TooltipContent>{isRecording ? "Pause" : "Play"}</TooltipContent>
          </Tooltip>
          <Button
            onClick={isRecording ? handleRecordingComplete : startRecording}
            className="relative w-[120px] h-[120px] shadow-md rounded-full hover:bg-black bg-black overflow-hidden"
            aria-label={isRecording ? "Stop Recording" : "Start Recording"}
          >
            <Image
              unoptimized={true}
              src={
                isRecording
                  ? "/assets/aura-orb.gif"
                  : isRecordingComplete
                  ? "/assets/aura-idle.gif"
                  : "/assets/aura-listening.gif"
              }
              alt={isRecording ? "aura-listening" : "aura-idle"}
              width={500}
              height={500}
              className="w-full h-full pointer-events-none object-scale-down object-center absolute scale-[2] top-0 left-0"
            />
          </Button>
          {!isRecordingComplete && (
            <Tooltip>
              <TooltipTrigger
                onClick={stopRecording}
                className={`relative w-[50px] h-[50px] bg-red-500 hover:bg-red-600  rounded-full flex items-center justify-center transition-all transform ${
                  !isRecordingComplete ? "visible" : "invisible"
                }`}
                aria-label={"Stop"}
              >
                <X size={20} />
              </TooltipTrigger>
              <TooltipContent>Stop</TooltipContent>
            </Tooltip>
          )}
        </div>
      </TooltipProvider>
    </div>
  );
};

export default Recorder;
