## webpack整理+demo

1. 单文件入口
2. 多文件入口
3. bable-loader，react，jsx语法识别
4. 样式处理style-loader, css-loader, 加入webpack-dev-server服务器
5. 将require导入更改为import, 加入图片处理style-loader和url-loader,开启CSS Module全局变量
6. 加入UglifyJSPlugin代码压缩,DefinePlugin设置环境变量 例如mac env NODE_ENV='product' ../node_modules/.bin/webpack'
7. 测试require.ensure按需加载，代码分片并异步加载分片后的代码

> “__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
