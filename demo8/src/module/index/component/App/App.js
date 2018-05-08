import React,{Component} from 'react';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import Header from "../Header/Header"

class App extends Component {
  render(){
    return(
      <div>
        <Header />
      </div>
    )
  }
}

export default App;
