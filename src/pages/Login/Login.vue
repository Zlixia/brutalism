<template>
  <div class="login">
    <div class="login-wrap">
      <!-- 头部 -->
      <div class="login-head">
        <img src="./images/login-bg.png">
        <p class="title">亲爱的居民，欢迎回来</p>
      </div>
      <!-- 登录手机号验证 -->
      <div class="login-main">
        <div class="type">手机号</div>
        <div class="input-wrap">
          <div class="input-group">
            <div class="input-row">
              <input type="text" placeholder="请输入手机号">
            </div>
            <div class="input-row">
              <input type="password" placeholder="请输入密码">
            </div>
          </div>
        </div>
      </div>
      <!-- 忘记密码 -->
      <div class="login-tips">
        <span class="to-forget">忘记密码</span>
      </div>
      <!-- 登录 -->
      <div class="login-btn" @click="login">登录</div>
      <!-- 注册 -->
      <div class="to-register">还不是居民？去注册</div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    //登录
    login () {

    }
  }
}
</script>

<style lang="less" scoped>
.login-wrap {
  position: absolute;
  left: 0;
  top:0;
  bottom: 0;
  right: 0;
  background:url('./images/bg.png');
  padding: 0.29333rem .4rem 0;
  color: #4d4d4d;
}
.login-head {
  text-align: center;
  margin-bottom: .53333rem;
  font-size: .4rem;
  img{
    width: 3.2rem;
    height: .9333rem;
  }
  p{
    margin-top: .133333rem;
    line-height: .64rem;
  }
}
.login-main {
  font-size: .42666rem;
  .type {
    font-size: .453333rem;
    text-align: center;
    position: relative;
    padding-bottom: .426667rem;
  }
  .type::after {
    content: " ";
    position: absolute;
    width: 0;
    height: 0;
    border-left: .2133rem solid transparent;
    border-right: .2133rem solid transparent;
    border-bottom: .2133rem solid #2d2d2d;
    bottom: 0;
    left: 50%;
  }
  .input-wrap {
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    padding: .0266666rem 0;
    .input-group {
      border-bottom: 1px solid black;
      margin-bottom: 3px;
      .input-row{
        border-top: 1px solid black;
        height: 1.49333rem;
        line-height: 1.49333rem;
        margin-top: 2px;
      }
    }
  }
}
input {
  border: 0;
  outline: none;
  height: 1.4933rem;
  line-height: 1.4933rem;
  font-size: .42666rem;
  box-sizing: border-box;
  width: 100%;
  background: transparent;
}
.login-tips {
  margin-top: .1333rem;
  height: .5333rem;
  line-height: .5333rem;
  text-align: right;
  font-size: .4rem;
}
.login-btn {
  height: 1.28rem;
  line-height: 1.28rem;
  font-size: .426666rem;
  text-align: center;
  margin-top: .266667rem;
  background-color: #4d4d4d;
  color:#fff;
}
.to-register {
  position: fixed;
  left: 0;
  bottom:0;
  width: 100%;
  height:1.3333rem;
  line-height: 1.3333rem;
  text-align: center;
  font-size: .426666rem;
  background: rgba(0, 0, 0, 0.1);
  box-shadow: 0 0.026666rem 0.2666rem #333;
}
</style>

