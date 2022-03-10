/*
 * @Author: baipeiyun
 * @Date: 2022-03-07 20:29:13
 * @LastEditors: baipeiyun
 * @LastEditTime: 2022-03-10 18:43:13
 * @FilePath: /482mooc-react17/src/screen/try-use-array/index.tsx
 * @Description: 作业题
 */
import React from "react";
import { useArray } from "utils/index";
export const TryUseArray = () => {
  const persons: { name: string; age: number }[] = [
    {
      name: "jack",
      age: 25,
    },
    {
      name: "ma",
      age: 23,
    },
  ];
  const { value, add, removeIndex, clear } = useArray(persons);
  return (
    <div>
      <button onClick={() => add({ name: "john", age: 22 })}>add john</button>
      <button onClick={() => removeIndex(0)}>remove 0</button>
      <button onClick={() => clear()}>clear</button>
      {value.map((person: { age: number; name: string }, index: number) => (
        <div key={index}>
          <span>{index}</span>
          <span>{person.name}</span>
          <span>{person.age}</span>
        </div>
      ))}
    </div>
  );
};
