<template>
  <div>
    <p>お問い合わせありがとうございました。</p>
    <p @click="changePage(Path.HOME)">トップへ戻る</p>
  </div>
</template>

<script>
import Vue from 'vue';
import { Path } from "~/constants";
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
</style>