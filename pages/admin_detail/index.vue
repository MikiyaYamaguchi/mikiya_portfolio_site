<template>
  <div class="container">
    <div class="logout_btn">
      <el-button type="warning" @click="$auth.logout()">ログアウト</el-button>
    </div>
    <div class="edit_button">
      <el-button type="danger" @click="centerDialogVisible = true">削除</el-button>
      <el-dialog :visible.sync="centerDialogVisible" width="30%" center>
        <span>本当に削除しますか？</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="centerDialogVisible = false">キャンセル</el-button>
          <el-button type="danger" @click="deleteData(id)">削除する</el-button>
        </span>
      </el-dialog>
      <el-button type="primary" @click="changePage(`${Path.ADMIN_EDIT}?id=${id}`)">編集</el-button>
    </div>
    <h2>{{ blogData.title }}</h2>
    <p>サムネイル画像：</p>
    <div class="img_content">
      <figure>
        <img v-bind:src="blogData.thumbnail" v-bind:alt="blogData.title" />
      </figure>
    </div>
    <p class="date">{{ blogData.date }}</p>
    <p>{{ blogData.content }}</p>
  </div>
</template>

<script>
import Vue from "vue";
import "@/assets/scss/global.scss";
import { Path } from "~/constants";
import blogApi from "~/api/index";
import moment from 'moment';
export default Vue.extend({
  middleware: "auth",
  layout: 'admin_layout',
  data () {
    return {
      Path: Path,
      centerDialogVisible: false,
      id: "",
      blogData: []
    }
  },
  methods: {
    changePage (path) {
      this.$router.push({ path });
    },
    async getIdBlogData () {
      const res = await blogApi.getIdBlogData(this.id);
      this.blogData = res.data[0];
      this.blogData.date = this.$moment(res.data[0].date).format('YYYY年MM月DD日');
      this.blogData.content.replace(/\n/g, '\\n');
      this.blogData.content.replace(/\\n/g, '\n');
    },
    async deleteBlogData (id) {
      await blogApi.deleteBlogData(id);
    },
    deleteData (id) {
      this.deleteBlogData(this.id);
      this.changePage(Path.ADMIN);
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
.date {
  margin-bottom: 3%;
}
.date + p {
  white-space: pre-line;
}

.edit_button {
  text-align: right;
}

.img_content {
  margin-bottom: 3%;
  img {
    max-width: 30%;
  }
}
.logout_btn {
  text-align: right;
  padding: 2% 0;
}
</style>
