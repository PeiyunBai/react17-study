/*
 * @Author: baipeiyun
 * @Date: 2022-03-18 16:50:53
 * @LastEditors: baipeiyun
 * @LastEditTime: 2022-03-18 18:49:51
 * @FilePath: /482mooc-react17/src/utils/http.ts
 * @Description:
 */
import qs from "qs";
import * as auth from "../auth-provider";
import { useAuth } from "context/auth-context";
const apiUrl = process.env.REACT_APP_API_URL;
interface Config extends RequestInit {
  token?: string;
  data?: object;
}
export const http = async (
  endpoint: string,
  { data, token, headers, ...customConfig }: Config = {}
) => {
  // 默认请求方式为get
  const config = {
    method: "GET",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": data ? "application/json" : "",
    },
    ...customConfig,
  };

  //如果是get，则将参数拼接在url上
  if (config.method.toUpperCase() === "GET") {
    endpoint += `?${qs.stringify(data)}`;
  } else {
    config.body = JSON.stringify(data || {});
  }

  //   返回fetch请求
  return window
    .fetch(`${apiUrl}/${endpoint}`, config)
    .then(async (response) => {
      // 判断401权限
      if (response.status === 401) {
        await auth.logout();
        window.location.reload();
        return Promise.reject({ message: "请重新登录" });
      }
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        //   因为fetch不会抛出状态错误的异常，所以这里需要手动抛出异常。只有在断网，网络连接异常时，fetch的catch会抛出异常
        //  axios就不一样，可以直接捕捉到401的异常
        return Promise.reject(data);
      }
    });
};

export const useHttp = () => {
  const { user } = useAuth();
  return (...[endpoint, config]: Parameters<typeof http>) =>
    http(endpoint, { ...config, token: user?.token });
};
