/*
 * @Author: baipeiyun
 * @Date: 2022-01-14 17:59:38
 * @LastEditors: baipeiyun
 * @LastEditTime: 2022-03-18 16:45:00
 * @FilePath: /482mooc-react17/src/App.tsx
 * @Description:
 */
import React from "react";
// import "./App.css";

// import { ProjectListScreen } from "screen/project-list";
// import { TryUseArray } from "screen/try-use-array";

import { useAuth } from "context/auth-context";
import { AuthenticatedApp } from "./authenticated-app";
import { UnauthenticatedApp } from "./unauthenticated-app/index";

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      {/* <ProjectListScreen /> */}
      {/* <TryUseArray /> */}

      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
