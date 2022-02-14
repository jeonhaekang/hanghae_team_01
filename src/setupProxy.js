const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/user",
    createProxyMiddleware({
      target: "http://3.39.0.192:8080",
      changeOrigin: true,
    })
  );
};
