<template>
  <div class="login">
    <div class="title-box">
      <img src="../../images/return.png" alt="" class="goback">
      <p class="title">登陆</p>
      <p class="register">注册</p>
    </div>
    <div class="logo">
      <img src="../../images/icon.png" alt="">
    </div>
    <div class="login_form">
      <input type="text" class="phone input-item" placeholder="手机号码">
      <input type="text" class="password input-item" placeholder="密码">
    </div>
  </div>
</template>

<script>

</script>

<style lang="less">
  .title-box{
    position: relative;
    width: 100%;
    height: 1rem;
    border-bottom: 1px solid #e0e0e0;
    .goback{
      display: block;
      position: absolute;
      left: 0.3rem;
      top: 0;
      bottom: 0;
      margin: auto;
      width: 0.23rem;
      height: 0.42rem;
    }
    .title{
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      width: 0.72rem;
      height: 0.36rem;
      line-height: 0.36rem;
      font-size: 0.36rem;
      color: #333333;
    }
    .register{
      position: absolute;
      right: 0.21rem;
      top: 0;
      bottom: 0;
      width: .57rem;
      height: .28rem;
      height: .28rem;
      line-height: 1rem;
      font-size: .28rem;
      color: #0e7238;
    }
  }
  .logo{
    position: relative;
    img{
      position: absolute;
      left:0;
      right: 0;
      top: 0.4rem;
      margin: auto;
      width: 1.63rem;
      height: 1.63rem;
    }
  }
  .login_form{
    position: relative;
    .input-item{
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      width: 6.9rem;
      height: .6rem;
      border: 0;
      border-bottom: 1px solid #0e7238;
    }
    .phone{
      top: 2.8rem;
    }
    .password{
      top: 4.0rem;
    }
  }
</style>
