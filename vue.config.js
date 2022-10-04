const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: "localhost",//配置本项目运行主机
    port: 8080,//配置本项目运行端口
    //配置代理服务器来解决跨域问题
    proxy: {
      "/": {
        target: "http://localhost:80", //配置要替换的后台接口地址
        changOrigin: true, //配置允许改变Origin
        ws: false, // proxy websockets
        pathRewrite: {
        },
      },
    },
  },
})
