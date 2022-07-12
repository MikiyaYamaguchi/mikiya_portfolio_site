<template>
  <div v-scroll="handleScroll" class="box">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  methods: {
    handleScroll: (evt, el) => {
      let top = el.getBoundingClientRect().top;
      if (window.scrollY > top + window.pageYOffset - 700) {
        el.classList.add("isView");
        return true;
      }
      return false;
    }
  }
});
</script>

<style lang="scss" scoped>
.box {
  opacity: 0;
  transform: scale(0);
  transition: 1.5s;
}
.box.isView {
  opacity: 1;
  transform: scale(1);
}
</style>
