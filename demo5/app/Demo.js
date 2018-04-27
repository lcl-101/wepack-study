import './app.css';
import React, {Component} from 'react';
import img1 from './img/102.JPG';
console.log('lcl+'+img1);

class Demo extends Component{
  render() {
    return (
      <div className="">
        <h1 className="demo">
          demo5
        </h1>
        <img src={img1} alt="" />
      </div>
    )
  }
}

export default Demo;
