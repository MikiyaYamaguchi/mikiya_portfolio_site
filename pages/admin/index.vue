<template>
  <div class="container">
    <div class="logout_btn">
      <el-button type="warning" @click="$auth.logout()">ログアウト</el-button>
    </div>
    <h2>ブログ記事一覧</h2>
    <div class="new_button">
      <el-button type="primary" @click="changePage(Path.ADMIN_NEW)">新規投稿</el-button>
    </div>
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in tableBlogData" :key="item.id">
          <td>{{ item.date }}</td>
          <td>
            <span @click="changePage(`${Path.ADMIN_DETAIL}?id=${item.id}`)">{{ item.title }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Vue from "vue";
import blogApi from "~/api/index";
import { Path } from "~/constants";
import moment from 'moment';
export default Vue.extend({
  middleware: "auth",
  layout: 'admin_layout',
  data () {
    return {
      Path: Path,
      tableBlogData: []
    };
  },
  methods: {
    changePage (path) {
      this.$router.push({ path });
    },
    async getBlogData () {
      const res = await blogApi.getBlogData();
      for (let i = 0; i < res.data.length; i++) res.data[i].date = this.$moment(res.data[i].date).format('YYYY年MM月DD日');
      this.tableBlogData = res.data;
    }
  },
  mounted () {
    this.getBlogData();
  }
});
</script>

<style lang="scss" scoped>
h2 {
  margin: 1.5em 0 1em;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
}
.new_button {
  margin-bottom: 1em;
  text-align: right;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  tr {
    th {
      background: #dcdcdc;
    }
    th,
    td {
      border-top: 1px solid #dcdcdc;
      border-bottom: 1px solid #dcdcdc;
      padding: 1em 0.5em;
      text-align: left;
      span {
        cursor: pointer;
        text-decoration: underline;
        color: #339bf8;
        &:hover {
          text-decoration: none;
        }
      }
    }
  }
}
.logout_btn {
  text-align: right;
  padding: 2% 0;
}
</style>
