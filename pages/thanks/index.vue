<template>
  <section>
    <div class="container">
      <p>お問い合わせありがとうございました。</p>
      <p @click="changePage(Path.HOME)">トップへ戻る</p>
    </div>
  </section>
</template>

<script>
import Vue from 'vue';
import { Path } from "~/constants";
import "@/assets/scss/global.scss";
export default Vue.extend({
  data () {
    return {
      Path: Path,
    }
  },
  methods: {
    changePage (path) {
      this.$router.push({ path });
    },
  }
})
</script>

<style lang="scss" scoped>
p {
  &:first-child {
    margin-bottom: 5%;
  }
  &:last-child {
    position: relative;
    padding-left: 15px;
    cursor: pointer;
    &:before {
      content: "";
      width: 6px;
      height: 6px;
      border-top: 1px solid #000;
      border-right: 1px solid #000;
      transform: rotate(45deg);
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      margin: auto;
    }
  }
}
</style>