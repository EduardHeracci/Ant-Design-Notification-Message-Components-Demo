import { useContext } from "react";
import { INotification } from "../types";
import { NotificationContext } from "../_context/NotificationProvider";

export const useNotificationContext = (): INotification => {
  const context = useContext(NotificationContext);
  if (context === null) {
    throw new Error("useNotification must be used within a NotificationProvider");
  }

  return context;
};
