/*
 * @Author: baipeiyun
 * @Date: 2022-03-07 11:14:36
 * @LastEditors: baipeiyun
 * @LastEditTime: 2022-03-07 18:37:35
 * @FilePath: /482mooc-react17/src/screen/project-list/list.tsx
 * @Description:
 */
import React from "react";
import { User } from "./search-panel";
interface Project {
  id: string;
  name: string;
  personId: string;
  pin: boolean;
  organization: string;
}
interface ListProps {
  list: Project[];
  users: User[];
}
export const List = ({ list, users }: ListProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map((project) => (
          <tr key={project.id}>
            <td>{project.name}</td>
            <td>
              {users.find((user) => user.id === project.personId)?.name ||
                "未知"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
