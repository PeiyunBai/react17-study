/*
 * @Author: baipeiyun
 * @Date: 2022-03-10 20:39:34
 * @LastEditors: baipeiyun
 * @LastEditTime: 2022-03-18 16:19:51
 * @FilePath: /482mooc-react17/src/context/auth-context.tsx
 * @Description:
 */

import React from "react";
import { useState } from "react";
import * as auth from "auth-provider";
import { User } from "../screen/project-list/search-panel";
import { ReactNode } from "react";
interface AuthForm {
  username: string;
  password: string;
}
const AuthContext = React.createContext<
  | {
      user: User | null;
      login: (form: AuthForm) => Promise<void>;
      register: (form: AuthForm) => Promise<void>;
      logout: () => Promise<void>;
    }
  | undefined
>(undefined);
AuthContext.displayName = "AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const login = (form: AuthForm) => auth.login(form).then(setUser);
  const register = (form: AuthForm) => auth.register(form).then(setUser);
  const logout = () => auth.logout().then(() => setUser(null));

  return (
    <AuthContext.Provider
      value={{ user, login, register, logout }}
      children={children}
    />
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("context 必须在provider中使用");
  }
  return context;
};
