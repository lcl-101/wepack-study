import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, hashHistory} from 'react-router';
import Header from './component/Header/Header';
import Dashboard from './component/Dashboard/Dashboard';
import style from './css/index.css';

const routes = {
  path: '/',         // 访问 '/' 路径，component组件 App 就会加载到 document.getElementById('app')
  component: Header,
  childRoutes: [
    { path: '/Dashboard', component: Dashboard}
  ]
}
// hashHistory:表示路由切换是由URL中'/#/'的'#'部分发生hash变化来触发，例: http://localhost:8080/#/
ReactDom.render(<Router history={hashHistory} routes={routes} />, document.getElementById('box'));
