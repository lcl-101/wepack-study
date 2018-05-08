import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import Header from './component/Header/Header';
import Dashboard from './component/Dashboard/Dashboard';
import style from './css/index.css';

const routes = {
  path: '/views/index/*',
  component: Header,
  childRoutes: [
    { path: '/Dashboard', component: Dashboard }
  ]
}

ReactDom.render(<Router history={browserHistory} routes={routes} />, document.getElementById('box'));
