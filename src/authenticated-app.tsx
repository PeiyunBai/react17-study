/*

 * @Author: baipeiyun
 * @Date: 2022-03-18 16:43:14
 * @LastEditors: baipeiyun
 * @LastEditTime: 2022-03-18 16:46:20
 * @FilePath: /482mooc-react17/src/authenticated-app.tsx
 * @Description: 登录后的页面
 */
import { ProjectListScreen } from "./screen/project-list/index";
import { useAuth } from "context/auth-context";
export const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <div>
      <button onClick={() => logout()}>登出</button>
      <ProjectListScreen />
    </div>
  );
};
