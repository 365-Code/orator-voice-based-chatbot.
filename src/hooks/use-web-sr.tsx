"use client";
import React, { useState } from "react";

type Props = {
  continuous?: boolean;
  interimResults?: boolean;
};

const useWebSR = (props: Props = {}) => {
  const [isRecording, setIsRecording] = useState(false);
  const [isRecordingComplete, setIsRecordingComplete] = useState(true);
  const [transcript, setTranscript] = useState("");
  const [fullTranscript, setFullTranscript] = useState("");

  const recordRef = React.useRef<any | null>(null);

  React.useEffect(() => {
    if (recordRef.current) {
      stopRecording();
    }
  }, []);

  const startRecording = () => {
    setIsRecording(true);
    setIsRecordingComplete(false);
    recordRef.current = new window.webkitSpeechRecognition();
    recordRef.current.continuous = props.continuous || true;
    recordRef.current.interimResults = props.interimResults || true;
    recordRef.current.onresult = (e: any) => {
      let interimTranscript = "";
      for (let i = e.resultIndex; i < e.results.length; i++) {
        if (e.results[i].isFinal) {
          setFullTranscript((prev) => prev + e.results[i][0].transcript);
        } else {
          interimTranscript += e.results[i][0].transcript;
        }
      }
      setTranscript(interimTranscript);
    };
    recordRef.current.start();
  };

  const stopRecording = () => {
    if (!recordRef.current) return;
    setIsRecording(false);
    setTimeout(() => {
      recordRef.current.stop();
      setFullTranscript("");
      setTranscript("");
    }, 1500);
    setIsRecordingComplete(true);
  };

  const toggleRecording = () => {
    if (isRecording) {
      recordRef.current.stop();
      setIsRecording(false);
    } else {
      recordRef.current.start();
      setIsRecording(true);
    }
  };

  return {
    startRecording,
    stopRecording,
    fullTranscript,
    interimTranscript: transcript,
    toggleRecording,
    isRecording,
    isRecordingComplete,
  };
};

export default useWebSR;
