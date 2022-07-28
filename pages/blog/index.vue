<template>
  <div class="container">
    <h1>
      <span>B</span>
      <span>l</span>
      <span>o</span>
      <span>g</span>
    </h1>
    <div class="scroll w_open_fadein">
      <span></span>
      <p>Scroll</p>
    </div>
    <section class="blog_section">
      <scrollFadeIn v-for="item in tableBlogData" :key="item.id" class="row">
        <h2 class="blog_title">{{item.title}}</h2>
        <p class="blog_date">{{item.date}}</p>
        <div class="flex-wraper">
          <div class="col span-6">
            <div class="img_content">
              <figure>
                <img v-bind:src="item.thumbnail" v-bind:alt="item.title" />
              </figure>
            </div>
          </div>
          <div class="col span-6">
            <p class="blog_content">{{item.content | omittedText}}</p>
            <p class="more" @click="changePage(`${Path.BLOG_DETAIL}?id=${item.id}`)">MORE</p>
          </div>
        </div>
      </scrollFadeIn>
    </section>
  </div>
</template>

<script>
import Vue from "vue";
import "@/assets/scss/global.scss";
import blogApi from "~/api/index";
import { Path } from "~/constants";
import scrollFadeIn from "@/components/scrollFadeIn.vue";
export default Vue.extend({
  data () {
    return {
      Path: Path,
      tableBlogData: []
    };
  },
  filters: {
    omittedText (text) {
      return text.length > 150 ? text.slice(0, 150) + "…" : text;
    }
  },
  methods: {
    changePage (path) {
      this.$router.push({ path });
    },
    async getBlogData () {
      const res = await blogApi.getBlogData();
      for (let i = 0; i < res.data.length; i++) {
        res.data[i].date = this.$moment(res.data[i].date).format('YYYY年MM月DD日');
        res.data[i].content = res.data[i].content.replace(/\n/g, '\\n');
        res.data[i].content = res.data[i].content.replace(/\\n/g, '\n');
      }
      this.tableBlogData = res.data;
    }
  },
  mounted () {
    this.getBlogData();
  }
});
</script>

<style lang="scss" scoped>
.blog_section {
  .row {
    margin-bottom: 10%;
    .blog_title {
      margin-bottom: 1em;
    }
    .blog_date {
      margin-bottom: 1em;
      color: #808080;
    }
    .col {
      .img_content {
        height: 100%;
        figure {
          position: relative;
          height: 100%;
          img {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
      .blog_content {
        white-space: pre-line;
        max-height: 100%;
      }
      .more {
        position: relative;
        text-align: right;
        padding-right: 15px;
        cursor: pointer;
        &:after {
          content: "";
          border-top: 1px solid #000;
          border-right: 1px solid #000;
          width: 7px;
          height: 7px;
          transform: rotate(45deg);
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          margin: auto;
        }
      }
    }
  }
  @media screen and (min-width: 768px) {
    .row {
      .col {
        &:last-child {
          min-height: 400px;
          position: relative;
          padding-bottom: 30px;
          .more {
            position: absolute;
            bottom: 0;
            right: 0;
            margin: auto;
          }
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    .row {
      .col {
        .img_content {
          figure {
            padding-top: 66%;
          }
        }
      }
    }
  }
}
</style>
