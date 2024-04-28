import { useContext } from "react";
import { IMessage } from "../types";
import { MessageContext } from "../_context/MessageProvider";

export const useMessageContext = () => {
  const { contextMessageHolder, openMessage } = useContext(MessageContext) as IMessage;

  return { contextMessageHolder, openMessage };
};
