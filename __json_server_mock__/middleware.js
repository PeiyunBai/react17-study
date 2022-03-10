/*
 * @Author: baipeiyun
 * @Date: 2022-03-10 14:24:40
 * @LastEditors: baipeiyun
 * @LastEditTime: 2022-03-10 14:42:35
 * @FilePath: /482mooc-react17/__json_server_mock__/middleware.js
 * @Description:
 */

module.exports = (req, res, next) => {
  if (req.method === "POST" && req.path === "/login") {
    if (req.body.username === "jack" && req.body.password === "123456") {
      return res.status(200).json({
        user: {
          token: "123",
        },
      });
    } else {
      return res.status(400).json({ message: "用户名或者密码错误" });
    }
  }
  next();
};
