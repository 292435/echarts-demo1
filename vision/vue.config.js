module.exports = {
  devServer: {
    port: 3700, //  端口号的配置
    open: true // 自动打开浏览器
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:8999', // 后台接口地址
    //     ws: true, // 如果要代理 websockets，配置这个参数
    //     // secure: false, // 如果是https接口，需要配置这个参数
    //     changeOrigin: true, // 是否跨域
    //     pathRewrite: {
    //       // 重写路径
    //       '^/api': ''
    //     }
    //   }
    // }
  },
  publicPath: './' // 告诉webpack打包的index.html引入其他资源文件以./开头, 不要默认/开头
}
