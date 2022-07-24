<!--
 * @Author: v833 2507301541@qq.com
 * @Date: 2022-07-05 23:40:51
 * @LastEditors: v833 2507301541@qq.com
 * @LastEditTime: 2022-07-11 23:52:33
 * @Description: login
-->
<template>
  <div class="login-container">
    <el-form class="login-form" ref="loginFormRef" :model="loginForm" :rules="loginRules">
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>
      <!-- username -->
      <el-form-item prop="userName">
        <span class="svg-container">
          <svg-icon icon="user" />
          <el-input placeholder="username" name="username" type="text" v-model="loginForm.userName"></el-input>
        </span>
      </el-form-item>
      <!-- password -->
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon="password" />
          <el-input placeholder="password" name="password" :type="passwordType" v-model="loginForm.password"></el-input>
          <span class="show-pwd" @click="onChangePwdType">
            <svg-icon :icon="passwordType === 'password' ? 'eye' : 'eye-open'" />
          </span>
        </span>
      </el-form-item>
      <!-- 登陆按钮 -->
      <el-button @click="handleLoginClick" type="primary" :loading="loading" style="width:100%;margin-bottom:30px">登陆
      </el-button>
    </el-form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { validatePassword } from './rules'
import { useStore } from 'vuex'

const loginForm = ref({
  userName: 'super-admin',
  password: '123456'
})

const loginRules = ref({
  userName: [{
    required: true,
    trigger: 'blur',
    message: '请输入用户名'
  }],
  password: [{
    required: true,
    trigger: 'blur',
    // message: '请输入密码',
    validator: validatePassword()
  }]
})

// 处理密码框类型
const passwordType = ref('password')
const onChangePwdType = () => {
  // console.log('passwordType: ', passwordType)
  passwordType.value === 'password' ? passwordType.value = 'text' : passwordType.value = 'password'
}

// login
const loading = ref(false)
const store = useStore()
// === vue2 this.$ref.loginFormRef
const loginFormRef = ref(null)
const handleLoginClick = () => {
  // 1. 进行表单校验
  loginFormRef.value.validate(async valid => {
    if (!valid) return
    loading.value = true
    try {
      store.dispatch('user/login', loginForm.value)
    } catch (error) {
      console.log('error: ', error)
    } finally {
      loading.value = false
    }
  })
  // 2. 触发登陆动作

  // 3. 进行登陆后处理
}

</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.login-container {
  min-height: 100vh;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;

    ::v-deep .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }

    ::v-deep .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;

      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;
      }
    }
  }

  .tips {
    font-size: 16px;
    line-height: 28px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }

    ::v-deep .lang-select {
      position: absolute;
      top: 4px;
      right: 0;
      background-color: white;
      font-size: 22px;
      padding: 4px;
      border-radius: 4px;
      cursor: pointer;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 11px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
