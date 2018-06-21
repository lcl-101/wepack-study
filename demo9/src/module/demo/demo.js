import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store/store';
import Index from './containers/Index.vue';
import Rooter from './rooter.js';

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes:Rooter
})

let vm = new Vue({
  store,
  router,
  el: '#app',
  render: h => h(Index)
})
