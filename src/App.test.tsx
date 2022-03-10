/*
 * @Author: baipeiyun
 * @Date: 2022-01-14 17:59:38
 * @LastEditors: baipeiyun
 * @LastEditTime: 2022-03-10 20:08:23
 * @FilePath: /482mooc-react17/src/App.test.tsx
 * @Description:
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
