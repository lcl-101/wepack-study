import Axios from 'axios';

var url = 'https://api.github.com/repos/';
var owner = 'lcl-101';
var repo = 'webpack-blog'

//state
const state = {
  show:false,
  getList:''
}
//getters
const getters = {
  not_show(state){
    return !state.show;
  }
}
//actions
const actions = {
  switch_dialog(context){
    context.commit('switch_dialog');
  },
  //获取列表数据
  getItemList({commit, state}){
    return new Promise((resolve, reject) => {
      Axios.get(url+owner+'/'+repo+'/'+'issues')
        .then(function(res){
          console.log(res);
          if(res.status == 200){
            resolve(res);
            commit('getList',res.data);
          }else {
            reject(res);
            commit('getList','');
          }
        }).catch(function (error) {
          reject(error);
          commit('getList','');
        });
    })
  }
}
//mutations
const mutations = {
  switch_dialog(state){
    state.show = state.show?false:true;
  },
  getList(state,data){
    state.getList = data;
    console.log(state);
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
