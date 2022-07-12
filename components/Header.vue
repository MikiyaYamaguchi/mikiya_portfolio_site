<template>
  <div class="container">
    <div class="header-logo">
      <a href="/">
        <img src="../assets/img/logo.png" alt="Mikiya Yamaguchi" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
.container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 100%;
  margin-left: 60px;
  @media screen and (max-width: 767px) {
    margin-left: 0;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
}
.header-logo img {
  max-width: 200px;
}
</style>
