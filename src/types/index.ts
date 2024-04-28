import React, { JSXElementConstructor } from "react";
import { NotificationInstance } from "antd/es/notification/interface";
import { MessageInstance } from "antd/es/message/interface";

export type NotificationType = "success" | "info" | "warning" | "error";

export type MessageType = "success" | "info" | "warning" | "error";

export type INotification = {
	api: NotificationInstance;
	contextNotificationHolder: React.ReactElement<
		unknown,
		string | JSXElementConstructor<unknown>
	>;
	openNotification: (
		type: NotificationType,
		message: string | React.ReactNode
	) => void;
};

export type IMessage = {
	messageApi: MessageInstance;
	contextMessageHolder: React.ReactElement<
		unknown,
		string | JSXElementConstructor<unknown>
	>;
	openMessage: (type: MessageType, content: string | React.ReactNode) => void;
};
