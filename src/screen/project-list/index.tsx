/*
 * @Author: baipeiyun
 * @Date: 2022-03-07 11:14:29
 * @LastEditors: baipeiyun
 * @LastEditTime: 2022-03-18 18:50:21
 * @FilePath: /482mooc-react17/src/screen/project-list/index.tsx
 * @Description:
 */
import React, { useEffect, useState } from "react";
import { SearchPanel } from "./search-panel";
import { List } from "./list";
import { cleanObject, useMount, useDebounce } from "utils/index";
import qs from "qs";
import { useHttp } from "utils/http";

const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {
  const [users, setUsers] = useState([]);
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const debounceParam = useDebounce(param, 500);
  const [list, setList] = useState([]);
  const client = useHttp();

  // 当param改变时获取
  useEffect(() => {
    // 使用封装的http改造
    client("projects", { data: cleanObject(debounceParam) }).then(setList);
    // 单独写fetch请求
    // fetch(
    //   `${apiUrl}/projects?${qs.stringify(cleanObject(debounceParam))}`
    // ).then(async (response) => {
    //   if (response.ok) {
    //     setList(await response.json());
    //   }
    // });
  }, [debounceParam]);

  useMount(() => {
    client("users").then(setUsers);
  });

  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List list={list} users={users} />
    </div>
  );
};
