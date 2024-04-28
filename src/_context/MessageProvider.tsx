import React, { createContext } from "react";
import { IMessage, MessageType } from "../types/index";
import { message } from "antd";

export const MessageContext = createContext<IMessage | null>(null);

export const MessageProvider = ({ children }: React.PropsWithChildren) => {
  const [messageApi, contextMessageHolder] = message.useMessage();

  const openMessage = (type: MessageType, content: string | React.ReactNode) => {
    messageApi[type]({
      content,
      style: { marginBottom: -7 },
      duration: 3,
    });
  };

  return (
    <MessageContext.Provider value={{ messageApi, contextMessageHolder, openMessage }}>
      {children}
    </MessageContext.Provider>
  );
};
