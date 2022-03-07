/*
 * @Author: baipeiyun
 * @Date: 2022-03-03 15:15:56
 * @LastEditors: baipeiyun
 * @LastEditTime: 2022-03-07 15:45:20
 * @FilePath: /482mooc-react17/src/screen/project-list/search-panel.jsx
 * @Description:
 */
import React from "react";

export const SearchPanel = ({ param, setParam, users }) => {
  return (
    <div>
      <input
        type="text"
        value={param.name}
        onChange={(e) =>
          setParam({
            ...param,
            name: e.target.value,
          })
        }
      />
      <select
        value={param.personId}
        onChange={(e) =>
          setParam({
            ...param,
            personId: e.target.value,
          })
        }
      >
        <option value={""}>负责人</option>
        {users.map((item) => (
          <option value={item.id} key={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};
