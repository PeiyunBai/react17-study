/*
 * @Author: baipeiyun
 * @Date: 2022-03-07 11:14:36
 * @LastEditors: baipeiyun
 * @LastEditTime: 2022-03-19 20:08:52
 * @FilePath: /482mooc-react17/src/screen/project-list/list.tsx
 * @Description:
 */
import React from "react";
import { User } from "./search-panel";
import { Table } from "antd";
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
    <Table
      pagination={false}
      columns={[
        {
          title: "名称",
          dataIndex: "name",
          sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
          title: "负责人",
          render(value, project) {
            return (
              <span>
                {users.find((user: User) => user.id === project.personId)
                  ?.name || "未知"}
              </span>
            );
          },
        },
      ]}
      dataSource={list}
    ></Table>
  );
};
