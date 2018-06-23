<template>
    <div class="">
      <router-link to="/">Home</router-link>
      <div @click="count">点击</div>
      <div>{{list.show}}</div>
      <div>{{not_show}}</div>
      <ul>
          <li v-for="item in list.getList">
              {{ item.id }}
          </li>
        </ul>
    </div>
</template>

<script>
import {mapState, mapGetters,mapActions} from 'vuex';
export default {
  components: {

  },
  data() {
      return {

      }
  },
  computed: {
    ...mapState({
      list:'list'
    }),
    ...mapGetters({
      not_show:'not_show'
    })
  },
  mounted() {

  },
  methods: {
    ...mapActions({
      getItemList:'getItemList',
      switch_dialog:'switch_dialog'
    }),
    count: function(){
      let that = this;
      that.switch_dialog();
    },
    getList(){
      let that = this;
      // this.$store.dispatch('getItemList');
      that.getItemList()
    }
  },
  created(){
    let that = this;
    that.getList();
  }
}
</script>
