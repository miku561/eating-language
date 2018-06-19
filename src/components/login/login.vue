<template>
  <div class="login">
    <div class="logo-wrap">
      <img src="./logo.png" alt="" class="logo-img">
    </div>
    <div class="form-part">
      <div class="form-group">
        <i class="icon icon-user"></i>
        <input type="text" placeholder="用户名" @keyup="showTest" v-model="loginData.username">
      </div>
      <div class="form-group">
        <i class="icon icon-pwd"></i>
        <input type="password" placeholder="password" v-model="loginData.password">
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
  data () {
    return {
      loginData: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      let that = this
      this.$axios({
        method: 'POST',
        url: '/api/login',
        data: {
          username: that.loginData.username,
          password: that.loginData.password
        }
      }).then((res) => {
        if (JSON.parse(res.data.success)) {
          alert('跳转首页')
        }
      })
    },
    showTest () {
    }
  }
}
</script>

<style scoped lang="scss">

</style>
