<template>
  <div class="index">
    <div class="flex-wrap" v-for="(item, index) in indexObj" :key="index">
      <div class="flex-head">
        <img :src="item.kindImg" alt="">
      </div>
      <div class="flex-item">{{ item.kindName }}</div>
      <div class="flex-item">当前已有{{item.totalNum}}种食材</div>
    </div>
  </div>
</template>

<script>
// import {mapGetters, mapActions} from 'vuex'
export default {
  // // 得到计算后的值
  // computed: mapGetters(['count', 'getOdd']),
  // // 发生点击事件触发不同函数
  // methods: mapActions(['add', 'decrease', 'oddAdd'])
  data () {
    return {
      indexObj: null
    }
  },
  created: function () {
    this.$axios({
      method: 'POST',
      url: '/api/index'
    }).then((res) => {
      this.indexObj = res.data.indexObj
    })
  }
}
</script>

<style scoped lang="scss">
  @import url("../../assets/base.scss");
  .index p{
    color: #39c5bb
  }

</style>
