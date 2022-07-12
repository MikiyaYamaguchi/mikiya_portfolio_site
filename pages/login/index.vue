<template>
  <div class="container">
    <div>
      <p class="main_txt">ログインする</p>
      <form @submit.prevent="userLogin">
        <div class="input_wrap">
          <label for="email">ID：</label>
          <input type="email" v-model="form.id" />
        </div>
        <div class="input_wrap">
          <label for="password">パスワード：</label>
          <input type="password" v-model="form.password" />
        </div>
        <div class="input_wrap">
          <button type="submit">ログイン</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  layout: 'admin_layout',
  data () {
    return {
      form: {
        id: "",
        password: ""
      }
    }
  },
  methods: {
    userLogin () {
      this.$auth.loginWith('local', {
        data: this.form
      })
    }
  }
});
</script>

<style lang="scss" scoped>
.main_txt {
  font-size: 35px;
  font-weight: bold;
  margin-bottom: 1em;
  text-align: center;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
h1 {
  margin-bottom: 0.7em;
}
form > * {
  margin-bottom: 4%;
}
form {
  .input_wrap {
    text-align: right;
    &:last-child {
      text-align: center;
    }
  }
  label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  input {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
    width: 400px;
  }
  button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    -webkit-appearance: none;
    appearance: button;
    text-align: center;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    color: #fff;
    background-color: #409eff;
    border: none;
    width: 100%;
    &:hover {
      background: #66b1ff;
      color: #fff;
    }
  }
}
</style>
