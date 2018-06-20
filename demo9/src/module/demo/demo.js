import Vue from 'vue';
import vuex from 'vuex'
import VueRouter from 'vue-router';

import Index from './containers/Index.vue';
import Rooter from './rooter.js';

Vue.use(vuex);
var store = new vuex.Store({//store对象
    state:{
        show:false,
        j:true
    }
})

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
