const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://lifia.kro.kr",
      changeOrigin: true,
    })
  );
};
