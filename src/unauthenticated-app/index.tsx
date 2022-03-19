/*

 * @Author: baipeiyun
 * @Date: 2022-03-18 16:32:47
 * @LastEditors: baipeiyun
 * @LastEditTime: 2022-03-19 20:00:47
 * @FilePath: /482mooc-react17/src/unauthenticated-app/index.tsx
 * @Description:
 */
import React, { useState } from "react";
import { RegisterScreen } from "./register";
import { LoginScreen } from "./login";
import { Card } from "antd";
export const UnauthenticatedApp = () => {
  const [isRegister, setRegister] = useState(false);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card>
        {isRegister ? <RegisterScreen /> : <LoginScreen />}
        <button onClick={() => setRegister(!isRegister)}>
          切换到{isRegister ? "登录" : "注册"}
        </button>
      </Card>
    </div>
  );
};
