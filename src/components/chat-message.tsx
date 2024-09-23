"use client";

import { Message } from "ai";
import React, { useEffect, useRef } from "react";
import { Card, CardDescription } from "@/components/ui/card";

interface Props {
  message: Message;
  index?: number;
  len?: number;
}

const ChatMessage = ({ message, index, len }: Props) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView(true);
    }
  }, []);

  return (
    <Card
      ref={index == len ? scrollRef : null}
      className={` ${
        message.role == "user"
          ? "ml-auto shadow-sm shadow-primary/20"
          : "mr-auto bg-blue-600/90 shadow-md shadow-blue-800/40"
      } p-4 max-w-[90%] border-none`}
    >
      <CardDescription
        className={`font-medium ${
          message.role != "user" && "text-white"
        } text-base `}
      >
        {message.content}
      </CardDescription>
    </Card>
  );
};

export default ChatMessage;
