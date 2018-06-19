import Vue from 'vue';
import VueRouter from 'vue-router';

import demo from './components/index.vue';

const router = new VueRouter({
  routes:[
    {
      path:'/',
      title:'home',
      component: demo
    }
  ]
})

let vm = new Vue({
  router,
  el: '#app',
  render: h => h(demo)
})
