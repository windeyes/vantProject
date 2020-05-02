<template>
  <div class="login_container">
    <!-- 退出开始 -->
    <div class="out">
      <i class="iconfont iconicon-test"></i>
    </div>
    <!-- 退出js -->
    <!-- logo开始 -->
    <div class="appLogo">
      <i class="iconfont iconnew"></i>
    </div>
    <!-- logojs -->
    <!-- 输入框开始 -->
    <xuInput
      :placeholder="'用户名/手机密码'"
      :rules="/^\w{3,6}$/"
      v-model="user.username"
      :msg="'请输入3-6位的用户名'"
    />
    <xuInput :placeholder="'密码'" :rules="/^\w{3,5}$/" v-model="user.password" :msg="'请输入3-5位的密码'" />
    <!-- 输入框js -->
    <!-- 登录按钮ks -->
    <van-button
    class="loginBtn"
    color="red"
    round
    to
    size="large"
    @click="login"
    >登录</van-button>
    <!-- 登录按钮js -->
  </div>
</template>

<script>
import xuInput from '@/components/login/xuInput'
import { login } from '@/utils/api.js'
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      trueInput: false
    }
  },
  components: {
    xuInput
  },
  methods: {
    login () {
      if (
        /^\w{3,6}$/.test(this.user.username) &&
        /^\w{3,5}$/.test(this.user.password)
      ) {
        this.trueInput = true
        login(this.user).then(res => {
          console.log(res)
          if (res.data.statusCode === 401) {
            this.$toast(res.data.message)
          } else {
            this.$router.push('/index')
            window.localStorage.setItem('token', res.data.data.token)
            window.localStorage.setItem('user', res.data.data.user)
          }
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login_container {
  padding: 20px;
  .out .iconicon-test {
    font-size: 40px;
  }
  .appLogo {
    margin: 20px auto;
    text-align: center;
    .iconnew {
      font-size: 160px;
      color: red;
    }
  }
  .loginBtn {
    margin-top: 40px;
  }
}
</style>
