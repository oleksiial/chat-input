import React from "react";

import s from "./messages.module.css";

type Props = {
  messages: string[];
};

const Messages: React.FC<Props> = ({ messages }) => (
  <div className={s.messagesContainer}>
    {messages.map((message, i) => (
      <div key={i} className={s.messageBox}>
        {message.split("\n").map((line, j) => (
          <p key={j}>{line}</p>
        ))}
      </div>
    ))}
  </div>
);

export default Messages;
