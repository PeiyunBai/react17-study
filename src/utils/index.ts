/*
 * @Author: baipeiyun
 * @Date: 2022-03-07 15:47:07
 * @LastEditors: baipeiyun
 * @LastEditTime: 2022-03-07 18:45:30
 * @FilePath: /482mooc-react17/src/utils/index.ts
 * @Description:
 */
import { useEffect, useState } from "react";

export const isFalsy = (value: any) => (value === 0 ? false : value);

// 清空object中为空的值
export const cleanObject = (object: object) => {
  const result = { ...object };

  Object.keys(object).forEach((key) => {
    // @ts-ignore
    const value = object[key];
    if (!isFalsy(value)) {
      // @ts-ignore
      delete result[key];
    }
  });

  return result;
};

// 把页面加载，只执行一次的逻辑抽象出来
export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

// 自定义防抖
export const useDebounce = (value: any, delay?: number) => {
  const [debouncedvalue, setDebouncedValue] = useState(value);

  useEffect(() => {
    //  每次在value变化以后，设置一个定时器
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    // 每次在上一个useEffect处理完以后再运行
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedvalue;
};
