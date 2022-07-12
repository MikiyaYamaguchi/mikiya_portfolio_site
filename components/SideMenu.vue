<template>
  <el-menu
    default-active="0"
    class="side-navi-bar"
    background-color="#fff"
    active-text-color="#339BF8"
  >
    <el-menu-item index="1" @click="changePage(Path.PROFILE)">
      <i class="el-icon-user-solid"></i>
      <span>Profile</span>
    </el-menu-item>
    <el-menu-item index="2" @click="changePage(Path.WORKS)">
      <i class="el-icon-collection"></i>
      <span>Works</span>
    </el-menu-item>
    <el-menu-item index="3" @click="changePage(Path.BLOG)">
      <i class="el-icon-notebook-2"></i>
      <span>Blog</span>
    </el-menu-item>
    <el-menu-item index="4" @click="changePage(Path.CONTACT)">
      <i class="el-icon-s-promotion"></i>
      <span>Contact</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
import Vue from "vue";
import { Path } from "~/constants";
export default Vue.extend({
  data () {
    return {
      Path: Path
    };
  },
  methods: {
    changePage: function (path) {
      this.$router.push({ path });
    }
  }
});
</script>

<style scoped>
aside ul {
  height: 100%;
}
.el-menu {
  border-right: none;
}
</style>
