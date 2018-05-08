import React,{Component} from 'react';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import Dashboard from '../Dashboard/Dashboard';

class Header extends Component {
  render(){
    return(
      <div className="">
        <h1>App</h1>
        {/* 把 <a> 变成 <Link> */}
        <ul>
          <li><Link to="/Dashboard">About</Link></li>
        </ul>
        {/*
          接着用 `this.props.children` 替换 `<Child>`
          router 会帮我们找到这个 children
        */}
        {this.props.children}
      </div>
    )
  }
}
export default Header;
