import React, { useState } from "react";

import ChatInput from "../ChatInput";
import Messages from "../Messages";

import s from "./chatContainer.module.css";

const ChatContainer = () => {
  const [messages, setMessages] = useState<string[]>([
    "Integer vel vestibulum velit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Integer vel vestibulum velit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  ]);

  const addMessage = (message: string) => {
    setMessages((messages) => [message, ...messages]);
  };

  return (
    <div className={s.chatContainer}>
      <Messages messages={messages} />
      <ChatInput onSubmit={addMessage} />
    </div>
  );
};

export default ChatContainer;
