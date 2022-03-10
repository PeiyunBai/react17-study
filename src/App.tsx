/*
 * @Author: baipeiyun
 * @Date: 2022-01-14 17:59:38
 * @LastEditors: baipeiyun
 * @LastEditTime: 2022-03-09 14:56:36
 * @FilePath: /482mooc-react17/src/App.tsx
 * @Description:
 */
import React from "react";
import "./App.css";

// import { ProjectListScreen } from "screen/project-list";
// import { TryUseArray } from "screen/try-use-array";
import { LoginScreen } from "./screen/login/index";

function App() {
  return (
    <div className="App">
      {/* <ProjectListScreen /> */}
      {/* <TryUseArray /> */}
      <LoginScreen />
    </div>
  );
}

export default App;
