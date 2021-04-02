# 《webpack入门知识》
## webpack的作用包括哪些？
* 将一个或者多个JS文件/CSS文件打包成对应文件
* 压缩代码
* 将高版本的JS转译文低版本的JS
## webpack-dev-server 的作用包括哪些？
* 文件内容变化就自动转译代码，并自动刷新页面
* 提供 server 方便开发预览
## webpack 打包 JS 代码需要用到什么 loader？
无需安装额外 loader，webpack 自带此功能
## webpack 将 CSS 文件引入到 JS 中，并转为 style 标签插入到 head 标签里，需要用到什么 loader？
style-loader 和 css-loader
## webpack 将 CSS 代码提取成单独的文件，需要用到什么 plugin？
MiniCssExtractPlugin
## webpack 自动生成 HTML 需要用到什么 plugin？
HtmlWebpackPlugin
## 怎样运行两个webpack.config.js？
在package.json中添加生产和开发运行命令时，添加--config + 不同的文件名即可。同时可以将生产和开发配置中相同的部分提取出来形成webpack.config.base.js文件，再通过继承实现不同功能。
## 理解文件名中hash的用途
hash是用来进行文件缓存的。在http响应头中设置Cache-Control就可以设置文件的缓存，它可以提高文件响应的速度。每对文件进行改动就会生成新的hash值，再上传时浏览器会放弃原先的hash值改为新的hash值，实现缓存改变。
## loader和plugin有什么区别？
loader是加载器，用来加载文件，比如babel-loader将js文件加载为低版本浏览器支持的js，style/css-loader将css文件加载为style标签；
plugin是插件，用来扩展webpack功能，比如htmlWebpackPlugin用来生成html文件，MiniCssExtractPlugin用来将多个css文件打包成一个css文件。