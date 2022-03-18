/*

 * @Author: baipeiyun
 * @Date: 2022-03-18 16:32:47
 * @LastEditors: baipeiyun
 * @LastEditTime: 2022-03-18 16:40:49
 * @FilePath: /482mooc-react17/src/unauthenticated-app/index.tsx
 * @Description:
 */
import React, { useState } from "react";
import { RegisterScreen } from "./register";
import { LoginScreen } from "./login";
export const UnauthenticatedApp = () => {
  const [isRegister, setRegister] = useState(false);

  return (
    <div>
      {isRegister ? <RegisterScreen /> : <LoginScreen />}
      <button onClick={() => setRegister(!isRegister)}>
        切换到{isRegister ? "登录" : "注册"}
      </button>
    </div>
  );
};
