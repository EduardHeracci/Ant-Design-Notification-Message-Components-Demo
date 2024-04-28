import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Col, Row } from "antd";
import { NotificationFeedback } from "./enum";
import { useMessageContext, useNotificationContext } from "./_hooks";

function App() {
  const { contextNotificationHolder, openNotification } = useNotificationContext();
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
        <a href="https://ant.design" target="_blank">
          <img
            src="https://camo.githubusercontent.com/70ec62b59182d7ecbc34f6cfe6f043d6ca17b133c398871ef1cdab0fa4d1e424/68747470733a2f2f67772e616c697061796f626a656374732e636f6d2f7a6f732f726d73706f7274616c2f4b4470677667754d704766716148506a6963524b2e737667"
            className="logo-ant-design"
            alt="Ant Design logo"
          />
        </a>
      </div>
      <h1>Vite + React + Ant Design</h1>
      <div className="card">
        <Row gutter={24}>
          <Col span={6}>
            <button
              onClick={() => {
                openNotification(NotificationFeedback.Success, "This is Success Notification");
                openMessage(NotificationFeedback.Success, "This is Success Message");
              }}>
              {NotificationFeedback.Success.toUpperCase()}
            </button>
          </Col>
          <Col span={6}>
            <button
              onClick={() => {
                openNotification(NotificationFeedback.Info, "This is Info Notification");
                openMessage(NotificationFeedback.Info, "This is Info Message");
              }}>
              {NotificationFeedback.Info.toUpperCase()}
            </button>
          </Col>
          <Col
            span={6}
            onClick={() => {
              openNotification(NotificationFeedback.Warning, "This is Warning Notification");
              openMessage(NotificationFeedback.Warning, "This is Warning Message");
            }}>
            <button>{NotificationFeedback.Warning.toUpperCase()}</button>
          </Col>
          <Col
            span={6}
            onClick={() => {
              openNotification(NotificationFeedback.Error, "This is Error Notification");
              openMessage(NotificationFeedback.Error, "This is Error Message");
            }}>
            <button>{NotificationFeedback.Error.toUpperCase()}</button>
          </Col>
        </Row>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
