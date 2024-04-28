import { useContext } from "react";
import { IMessage } from "../types";
import { MessageContext } from "../_context";

export const useMessageContext = () => {
  const { messageApi, contextMessageHolder, openMessage } = useContext(MessageContext) as IMessage;

  return { messageApi, contextMessageHolder, openMessage };
};
