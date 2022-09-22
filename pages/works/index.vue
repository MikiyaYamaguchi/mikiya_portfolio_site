<template>
  <div class="container">
    <h1>
      <span>W</span>
      <span>o</span>
      <span>r</span>
      <span>k</span>
      <span>s</span>
    </h1>
    <div class="scroll w_open_fadein">
      <span></span>
      <p>Scroll</p>
    </div>
    <section class="sec01">
      <div class="row flex-wraper flex-wrap">
        <scrollFadeIn v-for="work in works" :key="work.id" class="col span-6">
          <figure>
            <a :href="work.link" target="_blank">
              <img :src="work.image" :alt="work.title" />
              <p class="title">{{ work.title }}</p>
              <p class="tec">{{ work.tec }}</p>
              <p class="text">{{ work.text }}</p>
              <p class="more">more</p>
            </a>
          </figure>
        </scrollFadeIn>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from "vue";
import "@/assets/scss/global.scss";
export default Vue.extend({
  data () {
    return {
      works: [
        {
          id: 1,
          title: "Daily Up",
          image: require("../../assets/img/dailyupblog.jpg"),
          link: "https://www.dailyupblog.com/",
          tec: "WordPress/HTML・CSS/JavaScript/PHP",
          text: "プログラミングなどに関して、勉強した知識を集積するために作ったブログサイト。\nVue.jsやNode.js、データベースなど新しく学んだことを集積・アウトプット・共有するためのナレッジサイトとして作成しました。\nGoogle adsence広告が導入されています。"
        },
        {
          id: 2,
          title: "How is the weather in JP",
          image: require("../../assets/img/howistheweather.jpg"),
          link: "https://howistheweather-jp.netlify.app/",
          tec: "Vue.js",
          text: "Vue.jsを使って何かしらアプリケーション的なものが作ってみたかったので、勉強のために制作しました。OpenWeatherのAPIを使用して、リアルタイムな天気情報を取得して表示しています。"
        },
        {
          id: 3,
          title: "Mikiya Yamaguchi ポートフォリオサイト（旧）",
          image: require("../../assets/img/mikiyama-original1503.com_mikiya_yamaguchi_portfolio.jpg"),
          link: "https://mikiyama-original1503.com/mikiya_yamaguchi_portfolio/top.html",
          tec: "HTML/CSS/JavaScript/PHP",
          text: "人生で初めて作ったポートフォリオサイトです。エンジニアとしてまだまだ駆け出しだった2019年に制作しました。荒削りなサイトですが、思い出のサイトです。"
        },
        {
          id: 4,
          title: "買い物メモ",
          image: require("../../assets/img/mikiyama-original1503.com_mikiya_yamaguchi_portfolio.jpg"),
          link: "https://kaimonomemo.netlify.app",
          tec: "Nuxt.js",
          text: "Nuxt.jsで制作した買い物に役立つ便利アプリです。まだプロトタイプなので、未完成です。共有機能などをつける予定です。"
        }
      ]
    }
  }
});
</script>

<style lang="scss" scoped>
.sec01 {
  .flex-wraper {
    .col {
      margin-top: 5%;
      &:nth-child(2n) {
        transition-delay: 0.2s;
      }
      figure {
        a {
          display: block;
          text-decoration: none;
          color: #000;
          img {
            margin-bottom: 20px;
            opacity: 1;
            transition: opacity 0.2s;
          }
          p {
            letter-spacing: 2.2px;
            white-space: pre-wrap;
            &.title {
              font-size: 24px;
              margin-bottom: 10px;
              font-weight: bold;
            }
            &.tec {
              font-size: 14px;
              color: #808080;
              margin-bottom: 10px;
            }
            &.more {
              position: relative;
              text-align: right;
              padding-right: 15px;
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
          &:hover {
            img {
              opacity: 0.8;
            }
          }
        }
      }
    }
  }
}
</style>
