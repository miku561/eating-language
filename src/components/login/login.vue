<template>
  <div class="login">
    <div class="logo-wrap">
      <img src="./logo.png" alt="" class="logo-img">
    </div>
    <div class="form-part">
      <div class="form-group">
        <i class="icon icon-user"></i>
        <input type="text" placeholder="用户名" @blur="checkInp" v-model="loginData.username" @focus="clearInp('isRightUser')">
        <span v-if="isRightUser" class="red">请输入正确的用户名</span>
      </div>
      <div class="form-group">
        <i class="icon icon-pwd"></i>
        <input type="password" placeholder="password" @blur="checkPwd" v-model="loginData.password" @focus="clearInp('isRightPwd')">
        <span v-if="isRightPwd" class="red">请输入正确的密码</span>
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
import util from 'static/tool'
export default{
  data () {
    return {
      isRightUser: false,
      isRightPwd: false,
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
          util.setCookie('username', this.loginData.username, 7)
          util.setCookie('password', this.loginData.password, 7)
          this.$router.push({
            path: './index'
          })
        }
      })
    },
    clearInp (value) {
      this[value] = false
    },
    checkInp () {
      if (this.loginData.username.length < 5) {
        this.isRightUser = true
      }
    },
    checkPwd () {
      if (this.loginData.password.length < 8) {
        this.isRightPwd = true
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .red{
    color: #f00
  }
</style>
