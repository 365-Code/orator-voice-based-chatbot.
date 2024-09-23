import React from "react";
import ChatMessage from "./chat-message";
import { Message } from "ai";

interface Props {
  messages: Message[];
}

const ChatMessages = ({ messages }: Props) => {
  return (
    <div
      className={`
        flex-1 flex h-full p-1 overflow-y-auto custom-scrollbar scroll-smooth flex-col gap-2 md:p-4 md:rounded-xl`}
    >
      {messages.map((msg, i) => (
        <ChatMessage
          key={msg.id}
          message={msg}
          index={i}
          len={messages.length - 1}
        />
      ))}
    </div>
  );
};

export default ChatMessages;
