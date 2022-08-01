<template>
  <div class="container">
    <h1>
      <span>C</span>
      <span>o</span>
      <span>n</span>
      <span>t</span>
      <span>a</span>
      <span>c</span>
      <span>t</span>
    </h1>
    <div class="scroll w_open_fadein">
      <span></span>
      <p>Scroll</p>
    </div>
    <section>
      <scrollFadeIn>
        <div class="row">
          <p>私に少しでも興味を持っていただけたのならば、是非下記フォームでお問い合わせください。何でも大歓迎です。</p>
        </div>
        <client-only>
          <form action="/" class="contact_form" name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="NAME_OF_YOUR_FORM" />
            <div class="contact_item">
              <label for="name">お名前</label>
              <input type="text" id="name" name="name" v-model="name" autocomplete="name" />
            </div>
            <div class="contact_item">
              <label for="email">メールアドレス</label>
              <input type="email" id="email" name="email" v-model="email" autocomplete="email" />
            </div>
            <div class="contact_item">
              <label for="message">お問い合わせ内容</label>
              <textarea id="message" rows="12" name="message" v-model="message"></textarea>
            </div>
            <div class="contact_submit">
              <button type="submit">送信</button>
            </div>
          </form>
        </client-only>
      </scrollFadeIn>
    </section>
  </div>
</template>

<script>
import Vue from "vue";
import "@/assets/scss/global.scss";
export default Vue.extend({
  data () {
    return {
      name: '',
      email: '',
      message: ''
    }
  }
});
</script>

<style lang="scss" scoped>
.contact_form {
  .contact_item {
    display: flex;
    &:not(:last-child) {
      margin-bottom: 3%;
    }
    label {
      width: 120px;
      margin-right: 20px;
      text-align: right;
      vertical-align: middle;
      float: left;
      font-size: 14px;
      line-height: 40px;
      box-sizing: border-box;
    }
    input,
    textarea {
      -webkit-appearance: none;
      background-color: #fff;
      background-image: none;
      border-radius: 4px;
      border: 1px solid #d3d3d3;
      box-sizing: border-box;
      color: #606266;
      display: inline-block;
      font-size: inherit;
      outline: 0;
      transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      width: calc(100% - 120px + 20px);
    }
    input {
      height: 40px;
      line-height: 40px;
      padding: 0 15px;
    }
    textarea {
      padding: 10px 15px;
    }
  }
  .contact_submit {
    margin-left: 135px;
    button {
      display: inline-block;
      line-height: 1;
      white-space: nowrap;
      cursor: pointer;
      color: #fff;
      background-color: #409eff;
      border: none;
      -webkit-appearance: none;
      text-align: center;
      box-sizing: border-box;
      outline: 0;
      margin: 0;
      transition: 0.1s;
      font-weight: 500;
      padding: 13px 50px;
      font-size: 14px;
      border-radius: 4px;
    }
  }
  @media screen and (max-width: 767px) {
    .contact_item {
      display: block;
      &:not(:last-child) {
        margin-bottom: 5%;
      }
      label {
        width: 100%;
        text-align: left;
        margin-right: 0;
      }
      input,
      textarea {
        width: 100%;
      }
    }
    .contact_submit {
      margin: 0;
      text-align: center;
    }
  }
}
</style>
