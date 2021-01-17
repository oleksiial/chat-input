import React, { useRef, useState } from "react";
import { useIonViewDidEnter } from "@ionic/react";

import { StyledTextarea } from "./StyledTextarea";
import StyledSendButton from "./StyledSendButton";

import s from "./chatInput.module.css";

type Props = {
  onSubmit: (message: string) => void;
};

const Input: React.FC<Props> = ({ onSubmit }) => {
  const [text, setText] = useState<string>("");
  const inputRef = useRef<HTMLIonTextareaElement>(null);

  // autofocus attribute doesnt work. https://github.com/ionic-team/ionic-framework/issues/18132#issuecomment-642838820
  useIonViewDidEnter(() => {
    setTimeout(async () => {
      if (inputRef.current) {
        inputRef.current.setFocus();

        // autogrow attribute doesnt work in chrome as well. https://forum.ionicframework.com/t/strange-behaviour-of-ion-textarea-with-auto-grow/175353
        // Every other page load the height of textarea is set to 0px
        const inputElement = await inputRef.current.getInputElement();
        if (inputElement.style.height === "0px") {
          inputElement.style.height = "auto";
          if (inputElement.parentElement?.style.height === "0px") {
            inputElement.parentElement.style.height = "auto";
          }
        }
      }
    }, 100);
  });

  const sendMessage = () => {
    if (text.trim() !== "") {
      onSubmit(text);
    }
    setText("");
  };

  const handleSendClicked = (e: React.MouseEvent<HTMLIonButtonElement>) => {
    inputRef.current?.setFocus();
    sendMessage();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLIonTextareaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className={s.chatInput}>
      <div className={s.textareaContainer}>
        <StyledTextarea
          ref={inputRef}
          autoGrow
          value={text}
          placeholder="Type a message"
          onIonChange={(e) => setText(e.detail.value!)}
          onKeyDown={handleKeyDown}
          inputMode="text"
          rows={1}
        ></StyledTextarea>
      </div>
      <StyledSendButton onClick={handleSendClicked} />
    </div>
  );
};

export default Input;
