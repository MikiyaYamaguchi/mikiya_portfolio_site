<template>
  <div class="home">
    <el-container :class="device">
      <el-header height="80px">
        <Header />
        <el-button class="nav-button" type="text" @click="clickCollapseButton()">
          <i class="el-icon-menu"></i>
        </el-button>
      </el-header>
      <div>
        <el-container class="contents">
          <el-aside :class="menuActive" width="150px">
            <SideMenu />
          </el-aside>
          <el-main>
            <Nuxt />
          </el-main>
        </el-container>
      </div>
      <Footer />
    </el-container>
  </div>
</template>

<script>
import Vue from "vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import SideMenu from "../components/SideMenu.vue";
export default Vue.extend({
  components: { Header, SideMenu, Footer },
  watch: {
    '$route': function (to, from) {
      if (to.path !== from.path) {
        if (this.$device.isMobile) {
          this.menuActive = "close";
        }
      }
    }
  },
  data () {
    return {
      menuActive: "close",
      isCollapse: false,
      device: ""
    };
  },
  mounted () {
    console.log(this.$router.name);
    if (this.$device.isDesktop) {
      this.menuActive = "open";
      this.isCollapse = false;
      this.device = "pc";
    } else {
      this.menuActive = "close";
      this.isCollapse = true
      this.device = "sp";
    }
  },
  methods: {
    clickCollapseButton () {
      this.isCollapse = !this.isCollapse;
      this.menuActive = this.isCollapse ? "close" : "open";
    }
  }
});
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  z-index: 100;
  width: 100%;
  background: transparent !important;
}
aside {
  position: fixed;
  z-index: 100;
  height: 100%;
}
.side-navi-bar:not(.el-menu--collapse) {
  width: 150px;
  height: 100%;
}
.contents {
  margin-top: 80px;
}
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
main {
  padding: 0 !important;
  margin-left: 150px;
}
.el-container {
  margin-bottom: 0;
}
.nav-button {
  position: fixed;
  top: 30px;
  left: 30px;
  z-index: 999;
  padding: 0;
}
.nav-button .el-icon-menu {
  font-size: 18px;
}
.el-aside.close {
  transform: translateX(-150px);
  transition: 0.5s;
}
.el-aside.open {
  transform: translateX(0);
  transition: 0.5s;
}
@media screen and (max-width: 900px) {
  .el-main {
    margin-left: 0 !important;
  }
}
</style>
