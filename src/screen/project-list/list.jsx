/*
 * @Author: baipeiyun
 * @Date: 2022-03-07 11:14:36
 * @LastEditors: baipeiyun
 * @LastEditTime: 2022-03-07 17:22:17
 * @FilePath: /482mooc-react17/src/screen/project-list/list.jsx
 * @Description:
 */
import React from "react";
export const List = ({ list, users }) => {
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
