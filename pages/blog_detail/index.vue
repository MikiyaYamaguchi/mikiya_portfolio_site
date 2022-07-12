<template>
  <section>
    <div class="container">
      <h2 class="blog_title">{{ blogData.title }}</h2>
      <p class="blog_date">{{ blogData.date }}</p>
      <div class="img_content">
        <figure>
          <img v-bind:src="blogData.thumbnail" v-bind:alt="blogData.title" />
        </figure>
      </div>
      <p class="blog_content">{{ blogData.content }}</p>
    </div>
  </section>
</template>

<script>
import Vue from 'vue';
import "@/assets/scss/global.scss";
import { Path } from "~/constants";
import blogApi from "~/api/index";
import moment from 'moment';
export default Vue.extend({
  data () {
    return {
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
      console.log(res.data[0]);
      this.blogData.date = this.$moment(res.data[0].date).format('YYYY年MM月DD日');
      this.blogData.content.replace(/\n/g, '\\n');
      this.blogData.content.replace(/\\n/g, '\n');
    },
  },
  mounted () {
    this.id = this.$route.query.id;
    this.getIdBlogData();
  }
});
</script>

<style lang="scss" scoped>
.blog_date {
  margin-bottom: 1em;
  color: #808080;
}
.img_content {
  margin-bottom: 5%;
}
.blog_content {
  white-space: pre-line;
}
</style>
