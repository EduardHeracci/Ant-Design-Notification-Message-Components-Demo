import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { MessageProvider, NotificationProvider } from "./_context";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<MessageProvider>
			<NotificationProvider>
				<App />
			</NotificationProvider>
		</MessageProvider>
	</React.StrictMode>
);
