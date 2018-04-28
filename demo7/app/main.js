import React from 'react';
import ReactDom from 'react-dom';
import Demo from './compontent/Demo/Demo';
ReactDom.render(
  <Demo />,
  document.getElementById('box')
);

// require.ensure(['./compontent/list/a'], function(require) {
//   var content = require('./compontent/list/a');
//   document.open();
//   document.write('<h1>' + content + '</h1>');
//   document.close();
// });
