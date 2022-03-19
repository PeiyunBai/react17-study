/*
 * @Author: baipeiyun
 * @Date: 2022-03-19 19:27:52
 * @LastEditors: baipeiyun
 * @LastEditTime: 2022-03-19 19:45:06
 * @FilePath: /482mooc-react17/craco.config.js
 * @Description:
 */
const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "rgb(0,82,204)",
              "@font-size-base": "16px",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
