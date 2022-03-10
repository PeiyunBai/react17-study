/*
 * @Author: baipeiyun
 * @Date: 2022-03-09 14:44:31
 * @LastEditors: baipeiyun
 * @LastEditTime: 2022-03-10 14:21:33
 * @FilePath: /482mooc-react17/src/screen/login/index.tsx
 * @Description:
 */
import React, { FormEvent } from "react";
const apiUrl = process.env.REACT_APP_API_URL;
export const LoginScreen = () => {
  const login = (param: { username: string; password: string }) => {
    //  fetch传参 （了解）
    fetch(`${apiUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(param),
    }).then(async (response) => {
      if (response.ok) {
      }
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // 注意这里的as HTMLInputElement
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;

    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;

    login({ username, password });
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
      <button type="submit">登录</button>
    </form>
  );
};
