/*
 * @Author: baipeiyun
 * @Date: 2022-03-07 11:14:29
 * @LastEditors: baipeiyun
 * @LastEditTime: 2022-03-07 17:19:12
 * @FilePath: /482mooc-react17/src/screen/project-list/index.jsx
 * @Description:
 */
import React, { useEffect, useState } from "react";
import { SearchPanel } from "./search-panel";
import { List } from "./list";
import { cleanObject, useMount, useDebounce } from "utils/index";
import qs from "qs";

const apiUrl = process.env.REACT_APP_API_URL;
console.log(apiUrl);

export const ProjectListScreen = () => {
  const [users, setUsers] = useState([]);
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const debounceParam = useDebounce(param, 2000);
  const [list, setList] = useState([]);

  // 当param改变时获取
  useEffect(() => {
    fetch(
      `${apiUrl}/projects?${qs.stringify(cleanObject(debounceParam))}`
    ).then(async (response) => {
      if (response.ok) {
        setList(await response.json());
      }
    });
  }, [debounceParam]);

  useMount(() => {
    fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    });
  });

  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List list={list} users={users} />
    </div>
  );
};
