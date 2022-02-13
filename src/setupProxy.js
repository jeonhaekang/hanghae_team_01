const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    // 불러오려는 server 의 api path
    "/user",
    createProxyMiddleware({
      target: "http://3.39.0.192:8080", // server 주소를 넣어주면 된다.
      changeOrigin: true,
    })
  );
};
