/*
 * @Author: baipeiyun
 * @Date: 2022-03-18 16:34:36
 * @LastEditors: baipeiyun
 * @LastEditTime: 2022-03-19 19:59:44
 * @FilePath: /482mooc-react17/src/unauthenticated-app/register.tsx
 * @Description:
 */
import { useAuth } from "context/auth-context";
import React, { FormEvent } from "react";
import { Form, Input, Button } from "antd";

const apiUrl = process.env.REACT_APP_API_URL;
export const RegisterScreen = () => {
  const { user, register } = useAuth();
  // 用原生form的onSubmit调用
  // const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   // 注意这里的as HTMLInputElement
  //   const username = (event.currentTarget.elements[0] as HTMLInputElement)
  //     .value;

  //   const password = (event.currentTarget.elements[1] as HTMLInputElement)
  //     .value;

  //   register({ username, password });
  // };
  // 改成antd
  const handleSubmit = (values: { username: string; password: string }) => {
    register(values);
  };
  return (
    <Form onFinish={handleSubmit}>
      <Form.Item
        name={"username"}
        rules={[{ required: true, message: "请输入用户名" }]}
      >
        <Input type="text" id="username" placeholder="用户名" />
      </Form.Item>
      <Form.Item
        name={"password"}
        rules={[{ required: true, message: "请输入密码" }]}
      >
        <Input type="password" id="password" placeholder="密码" />
      </Form.Item>
      <Button type="primary" htmlType={"submit"}>
        注册
      </Button>
    </Form>
  );
};
