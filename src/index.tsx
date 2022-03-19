/*
 * @Author: baipeiyun
 * @Date: 2022-01-14 17:59:38
 * @LastEditors: baipeiyun
 * @LastEditTime: 2022-03-19 19:22:28
 * @FilePath: /482mooc-react17/src/index.tsx
 * @Description:
 */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { loadDevTools } from "jira-dev-tool";
import { AppProviders } from "context/index";
import "antd/dist/antd.less";

loadDevTools(() => {
  ReactDOM.render(
    <React.StrictMode>
      <AppProviders>
        <App />
      </AppProviders>
    </React.StrictMode>,
    document.getElementById("root")
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
