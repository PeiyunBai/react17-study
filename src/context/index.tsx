/*
 * @Author: baipeiyun
 * @Date: 2022-03-10 20:39:24
 * @LastEditors: baipeiyun
 * @LastEditTime: 2022-03-18 14:36:03
 * @FilePath: /482mooc-react17/src/context/index.ts
 * @Description:
 */
import React, { ReactNode } from "react";
import { AuthProvider } from "context/auth-context";
export const AppProviders = ({ children }: { children: ReactNode }) => {
  return <AuthProvider>{children}</AuthProvider>;
};
