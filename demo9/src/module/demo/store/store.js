import Vue from 'vue';
import vuex from 'vuex';
import list from './list/index';

Vue.use(vuex);

export default new vuex.Store({//store对象
  modules: {
    list
  }
})
