/*
import { User } from './screen/project-list/search-panel';
 * @Author: baipeiyun
 * @Date: 2022-03-10 20:23:22
 * @LastEditors: baipeiyun
 * @LastEditTime: 2022-03-18 10:51:14
 * @FilePath: /482mooc-react17/src/auth-provider.ts
 * @Description: 帮助操控token
 */

// 在真实环境中，如果使用firebase这种第三方auth服务的话，本文件不需要开发者开发
import { User } from "screen/project-list/search-panel";
const apiUrl = process.env.REACT_APP_API_URL;
const localStorageKey = "__auth_provider_token__";
export const getToken = () => window.localStorage.getItem(localStorageKey);
export const handleUserResponse = ({ user }: { user: User }) => {
  window.localStorage.setItem(localStorageKey, user.token || "");
  return user;
};

export const login = (data: { username: string; password: string }) => {
  //  fetch传参 （了解）
  return fetch(`${apiUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (response) => {
    if (response.ok) {
      return handleUserResponse(await response.json());
    } else {
      return Promise.reject(data);
    }
  });
};

export const register = (data: { username: string; password: string }) => {
  //  fetch传参 （了解）
  return fetch(`${apiUrl}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (response) => {
    if (response.ok) {
      return handleUserResponse(await response.json());
    } else {
      return Promise.reject(data);
    }
  });
};

export const logout = async () =>
  window.localStorage.removeItem(localStorageKey);
