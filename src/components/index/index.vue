<template>
  <div class="index">
    <p>这是主页</p>
    <button @click="add">add</button>
    <button @click="decrease">decrease</button>
    <button @click="oddAdd">oddAdd</button>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  // 得到计算后的值
  computed: mapGetters(['count', 'getOdd']),
  // 发生点击事件触发不同函数
  methods: mapActions(['add', 'decrease', 'oddAdd'])
}
</script>

<style scoped lang="scss">
  .index p{
    color: #39c5bb
  }
</style>
