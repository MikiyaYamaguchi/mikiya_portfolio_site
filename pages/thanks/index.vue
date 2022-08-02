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
}
</style>