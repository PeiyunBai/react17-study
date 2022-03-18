/*
 * @Author: baipeiyun
 * @Date: 2022-03-18 16:34:36
 * @LastEditors: baipeiyun
 * @LastEditTime: 2022-03-18 16:37:45
 * @FilePath: /482mooc-react17/src/unauthenticated-app/register.tsx
 * @Description:
 */
import { useAuth } from "context/auth-context";
import React, { FormEvent } from "react";
const apiUrl = process.env.REACT_APP_API_URL;
export const RegisterScreen = () => {
  const { user, register } = useAuth();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // 注意这里的as HTMLInputElement
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;

    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;

    register({ username, password });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">用户名</label>
        <input type="text" id="username" />
      </div>
      <div>
        <label htmlFor="password">密码</label>
        <input type="password" id="password" />
      </div>
      <button type="submit">注册</button>
    </form>
  );
};
