## webpack整理+demo
> 作者：李成龙 554675188@qq.com <br/>
> ps: changeLog 注明更新内容


<pre>       
  ┌───┐   ┌───┬───┬───┬───┐ ┌───┬───┬───┬───┐ ┌───┬───┬───┬───┐ ┌───┬───┬───┐
  │Esc│   │ F1│ F2│ F3│ F4│ │ F5│ F6│ F7│ F8│ │ F9│F10│F11│F12│ │P/S│S L│P/B│  ┌┐    ┌┐    ┌┐
  └───┘   └───┴───┴───┴───┘ └───┴───┴───┴───┘ └───┴───┴───┴───┘ └───┴───┴───┘  └┘    └┘    └┘
  ┌───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───────┐ ┌───┬───┬───┐ ┌───┬───┬───┬───┐
  │~ `│! 1│@ 2│# 3│$ 4│% 5│^ 6│& 7│* 8│( 9│) 0│_ -│+ =│ BacSp │ │Ins│Hom│PUp│ │N L│ / │ * │ - │
  ├───┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─────┤ ├───┼───┼───┤ ├───┼───┼───┼───┤
  │ Tab │ Q │ W │ E │ R │ T │ Y │ U │ I │ O │ P │{ [│} ]│ | \ │ │Del│End│PDn│ │ 7 │ 8 │ 9 │   │
  ├─────┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴─────┤ └───┴───┴───┘ ├───┼───┼───┤ + │
  │ Caps │ A │ S │ D │ F │ G │ H │ J │ K │ L │: ;│" '│ Enter  │               │ 4 │ 5 │ 6 │   │
  ├──────┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴────────┤     ┌───┐     ├───┼───┼───┼───┤
  │ Shift  │ Z │ X │ C │ V │ B │ N │ M │< ,│> .│? /│  Shift   │     │ ↑ │     │ 1 │ 2 │ 3 │   │
  ├─────┬──┴─┬─┴──┬┴───┴───┴───┴───┴───┴──┬┴───┼───┴┬────┬────┤ ┌───┼───┼───┐ ├───┴───┼───┤ E││
  │ Ctrl│    │Alt │         Space         │ Alt│    │    │Ctrl│ │ ← │ ↓ │ → │ │   0   │ . │←─┘│
  └─────┴────┴────┴───────────────────────┴────┴────┴────┴────┘ └───┴───┴───┘ └───────┴───┴───┘
</pre>

> 安装依赖

```
npm install
```

> 启动本地服务

#### 安装了全局webpack 和 webpack-dev-server

```
1. cd demo1
2. webpack
3. webpack-dev-server
```

#### 没有安装全局webpack 和 webpack-dev-server

```
1. cd demo1
2. ../node_modules/.bin/webpack
3. ../node_modules/.bin/webpack-dev-server
```

> changeLog

1. demo1: 单文件入口
2. demo2: 多文件入口
3. demo3: bable-loader，react，jsx语法识别
4. demo4: 样式处理style-loader, css-loader, 加入webpack-dev-server服务器
5. demo5: 将require导入更改为import, 加入图片处理style-loader和url-loader,开启CSS Module全局变量
6. demo6: 加入UglifyJSPlugin代码压缩,DefinePlugin设置环境变量 例如mac env NODE_ENV='product' ../node_modules/.bin/webpack' 或者 env NODE_ENV=production ../node_modules/.bin/webpack --progress --colors 可以显示打包进度
7. demo7: 测试require.ensure按需加载（require.ensure在webpack3.5.5以后已经不在使用了），代码分片并异步加载分片后的代码，CommonsChunkPlugin提取出第三方库
8. demo8: 完整的项目目录搭建（完善中，基本目录构建已经搭完）
9. demo9: 基于vue，vuex，vue-router提要完整demo项目
