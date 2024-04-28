import { useContext } from "react";
import { IMessage } from "../types";
import { MessageContext } from "../_context/MessageProvider";

export const useMessageContext = (): IMessage => {
  const context = useContext(MessageContext);
  if (context === null) {
    throw new Error("useMessage must be used within a MessageProvider");
  }

  return context;
};
