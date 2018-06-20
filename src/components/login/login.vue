<template>
  <div class="login">
    <div class="logo-wrap">
      <img src="./logo.png" alt="" class="logo-img">
    </div>
    <div class="form-part">
      <div class="form-group">
        <i class="icon icon-user"></i>
        <input type="text" placeholder="用户名" @blur="checkInp" v-model="loginData.username">
      </div>
      <div class="form-group">
        <i class="icon icon-pwd"></i>
        <input type="password" placeholder="password" @blur="checkPwd" v-model="loginData.password">
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
          this.$router.push({
            path: './index'
          })
        }
      })
    },
    checkInp () {
      if (this.loginData.username.length < 5) {
        console.log('请输入正确的用户名')
      }
    },
    checkPwd () {
      if (this.loginData.password.length < 8) {
        console.log('请输入正确的密码')
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
