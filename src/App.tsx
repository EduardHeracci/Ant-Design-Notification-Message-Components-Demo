import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Col, Row } from "antd";
import { NotificationFeedback } from "./enum";
import { useMessageContext, useNotificationContext } from "./-hooks";

function App() {
	const { contextNotificationHolder, openNotification } =
		useNotificationContext();
	const { contextMessageHolder, openMessage } = useMessageContext();

	return (
		<>
			{contextMessageHolder}
			{contextNotificationHolder}
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<Row gutter={24}>
					<Col>
						<button
							onClick={() => {
								openNotification(
									NotificationFeedback.Success,
									"This is Success Notification"
								);
								openMessage(
									NotificationFeedback.Success,
									"This is Success Message"
								);
							}}
						>
							{NotificationFeedback.Success.toUpperCase()}
						</button>
					</Col>
					<Col>
						<button
							onClick={() => {
								openNotification(
									NotificationFeedback.Info,
									"This is Info Notification"
								);
								openMessage(NotificationFeedback.Info, "This is Info Message");
							}}
						>
							{NotificationFeedback.Info.toUpperCase()}
						</button>
					</Col>
					<Col
						onClick={() => {
							openNotification(
								NotificationFeedback.Warning,
								"This is Warning Notification"
							);
							openMessage(
								NotificationFeedback.Warning,
								"This is Warning Message"
							);
						}}
					>
						<button>{NotificationFeedback.Warning.toUpperCase()}</button>
					</Col>
					<Col
						onClick={() => {
							openNotification(
								NotificationFeedback.Error,
								"This is Error Notification"
							);
							openMessage(NotificationFeedback.Error, "This is Error Message");
						}}
					>
						<button>{NotificationFeedback.Error.toUpperCase()}</button>
					</Col>
				</Row>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

export default App;
