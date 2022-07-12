<template>
  <div class="container">
    <div class="logout_btn">
      <el-button type="warning" @click="$auth.logout()">ログアウト</el-button>
    </div>
    <h2>ブログ記事編集</h2>
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="タイトル">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="本文">
        <el-input type="textarea" :rows="30" v-model="form.content"></el-input>
      </el-form-item>
      <el-form-item label="サムネイル画像">
        <el-upload
          class="upload-demo"
          drag
          action="#"
          :on-success="onSuccess"
          :before-upload="handleBefore"
          multiple
          :limit="1"
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">
            Drop file here or
            <em>click to upload</em>
          </div>
          <div class="el-upload__tip" slot="tip">jpg/png files with a size less than 500kb</div>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button @click="putData()" type="primary">更新</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Vue from "vue";
import "@/assets/scss/global.scss";
import blogApi from "~/api/index";
import { Path } from "~/constants";
import axios from "axios";
export default Vue.extend({
  middleware: "auth",
  layout: 'admin_layout',
  data () {
    return {
      Path: Path,
      form: {
        title: '',
        content: '',
        thumbnail: ''
      },
      fileList: null
    }
  },
  methods: {
    changePage (path) {
      this.$router.push({ path });
    },
    async getIdBlogData () {
      const res = await blogApi.getIdBlogData(this.id);
      this.form = res.data[0];
    },
    async putBlogData () {
      await blogApi.putBlogData(this.id, this.form);
    },
    async uploadImgData () {
      await blogApi.uploadImgData(
        this.fileList
      );
    },
    putData () {
      this.uploadImgData();
      this.putBlogData();
      this.changePage(Path.ADMIN);
    },
    onSuccess (res, file) {
      this.fileList = file.raw;
      this.form.thumbnail = `http://localhost:5000/public/images/${file.raw.name}`;
      console.log(this.form.thumbnail);
    },
    handleBefore (file) {
      const fileType =
        file.type === "image/jpeg" ||
        file.type === "image/jpg" ||
        file.type === "image/png";
      const isLt100KB = file.size / 1024 < 500;

      if (!fileType) {
        this.$message.error(
          "アイコンは拡張子が jpeg/jpg/png でないと登録できません。"
        );
      }
      if (!isLt100KB) {
        this.$message.error(
          "アイコンはサイズが 500KB 以内でないと登録できません。"
        );
      }
      return fileType && isLt100KB;
    }
  },
  mounted () {
    this.id = this.$route.query.id;
    this.getIdBlogData();
  }
});
</script>

<style lang="scss" scoped>
h2 {
  margin-bottom: 1.5em;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
}
.logout_btn {
  text-align: right;
  padding: 2% 0;
}
</style>
