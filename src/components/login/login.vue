<template>
  <div class="login">
    <div class="logo-wrap">
      <img src="./logo.png" alt="" class="logo-img">
    </div>
    <div class="form-part">
      <div class="form-group">
        <i class="icon icon-user"></i>
        <input type="text" placeholder="用户名">
      </div>
      <div class="form-group">
        <i class="icon icon-pwd"></i>
        <input type="password" placeholder="password">
      </div>
      <div class="form-group">
        <button class="submit-btn" @click="login">登 录</button>
      </div>
      <div class="form-group">
        <span class="forget-pwd fl">注册</span>
        <span class="forget-pwd fr">忘记密码</span>
      </div>
    </div>
  </div>
</template>

<script >
export default{
  methods: {
    login () {
      this.$axios({
        method: 'POST',
        url: 'http://47.96.101.254/bootdo-wms/login',
        data: {
          'username': 'admin',
          'password': '111111'
        }
      }).then((res) => {
        console.log(res)
      })
    }
  }
}
</script>

<style scoped lang="scss">

</style>
