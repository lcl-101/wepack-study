import React,{Component} from 'react';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import Dashboard from '../Dashboard/Dashboard'

class Header extends Component {
  render(){
    return(
      <div className="">
        <ul>
          <li><Link to="/app">Dashboard</Link></li>
        </ul>
      </div>
    )
  }
}
export default Header;
