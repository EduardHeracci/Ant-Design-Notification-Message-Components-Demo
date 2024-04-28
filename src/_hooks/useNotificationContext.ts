import { useContext } from "react";
import { INotification } from "../types";
import { NotificationContext } from "../_context";

export const useNotificationContext = () => {
  const { notificationApi, contextNotificationHolder, openNotification } = useContext(
    NotificationContext
  ) as INotification;

  return { notificationApi, contextNotificationHolder, openNotification };
};
