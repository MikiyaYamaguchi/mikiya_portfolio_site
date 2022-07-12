<template>
  <div>
    <div class="top-bg-design"></div>
    <div class="container">
      <p v-bind:class="{ active : isActive }">
        <span>Welcome to my site!</span>
        <span>
          This site is a portfolio site
          <label class="sp-only inline">of beginner's level engineer</label>
        </span>
        <span class="pc-only">of beginner engineer</span>
        <span>Mikiya Yamaguchi</span>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import "@/assets/scss/global.scss";
export default Vue.extend({
  data() {
    return {
      isActive: false
    };
  },
  mounted() {
    this.isActive = true;
  }
});
</script>

<style lang="scss" scoped>
.top-bg-design {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  height: 200vh;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 40%,
    rgba(51, 155, 248, 1) 70%,
    rgba(71, 110, 201, 1) 100%,
    rgba(0, 212, 255, 1) 100%
  );
  z-index: -1;
  animation: bgFadeIn 2s;
}
.container {
  height: 100%;
  padding: 0;
  p {
    font-size: 50px;
    font-weight: bold;
    letter-spacing: 1px;
    line-height: 1.5;
    height: calc(100vh - 80px);
    padding: 10% 0 0 5%;
    font-family: "Noto Sans JP", sans-serif;
    > span {
      opacity: 0;
      transform: translateX(50px);
      display: block;
      &:last-child {
        font-size: 70px;
      }
    }
    &.active {
      span {
        opacity: 1;
        transform: translateX(0);
        transition: 1s;
        &:first-child {
          transition-delay: 1s;
        }
        &:nth-child(2) {
          transition-delay: 1.5s;
        }
        &:nth-child(3) {
          transition-delay: 2s;
        }
        &:last-child {
          transition-delay: 2.5s;
        }
      }
    }
  }
}
@keyframes bgFadeIn {
  0% {
    transform: translate(100vh, 100vh);
  }
  100% {
    transform: translate(0, 0);
  }
}
@media screen and (max-width: 767px) {
  .container {
    p {
      font-size: 30px;
      padding: 10% 10px 0 10px;
      > span {
        &:last-child {
          font-size: 45px;
        }
      }
      &.active {
        span {
          &:last-child {
            transition-delay: 2s;
          }
        }
      }
    }
  }
}
</style>
