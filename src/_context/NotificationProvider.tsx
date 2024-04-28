import React, { createContext } from "react";
import { INotification, NotificationType } from "../types/index";
import { notification } from "antd";

export const NotificationContext = createContext<INotification | null>(null);

export const NotificationProvider = ({ children }: React.PropsWithChildren) => {
  const [notificationApi, contextNotificationHolder] = notification.useNotification();

  const openNotification = (type: NotificationType, message: string | React.ReactNode) => {
    notificationApi[type]({
      message,
      style: { marginBottom: -7 },
      duration: 3,
    });
  };

  return (
    <NotificationContext.Provider
      value={{ notificationApi, contextNotificationHolder, openNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};
