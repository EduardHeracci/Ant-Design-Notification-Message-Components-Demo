import { useContext } from "react";
import { IMessage } from "../types";
import { MessageContext } from "../_context/MessageProvider";

export const useMessageContext = () => {
  const { messageApi, contextMessageHolder, openMessage } = useContext(MessageContext) as IMessage;

  return { messageApi, contextMessageHolder, openMessage };
};
