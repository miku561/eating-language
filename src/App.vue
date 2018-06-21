<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import util from 'static/tool'
export default {
  name: 'App',
  created: function () {
    let flag = util.getCookie('username')
    if (flag) {
      this.$router.push({
        path: './index'
      })
    } else {
      this.$router.push({
        path: './login'
      })
    }
  }
}
</script>

<style>
</style>
