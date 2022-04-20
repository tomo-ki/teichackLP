<template>
  <section id="service" class="flex justify-center sm:mt-32" style="height:900px;">
    <div class="flex w-10/12 max-w-screen-xl relative">
      <!-- 左半分 -->
      <div class="w-full sm:w-6/12 flex absolute">
        <!-- 「 -->
        <div class="w-1/12 h-10 fadeIn" v-scroll="handleScroll1">
          <img src="../../assets/img/index/Common/corner.png" alt="" class="w-4 sm:w-7">
        </div>
        <!-- テキスト部分 -->
        <div class="w-11/12 sm:w-8/12">
          <div class="mt-5 sm:mt-8 fadeIn" v-scroll="handleScroll1">
            <h2>
              <img src="../../assets/img/index/Service/Service.png" alt="SERVICE" class="h-9 sm:h-14">
            </h2>
          </div>
          <div class="my-10 sm:my-16 sm:ml-16 h-12 sm:h-14 fadeIn" v-scroll="handleScroll2">
            <img src="../../assets/img/index/Common/onestep_line.png" alt="+one step" class="h-12 sm:h-14 object-fill absolute sm:static">
          </div>
          <div class="fadeIn" v-scroll="handleScroll3">
            <h3 class="text-2xl sm:text-3xl leading-loose sm:leading-loose text-center sm:text-left">
              定額の<span style="color:#078C7A;">集客</span>と<span style="color:#078C7A;">定着</span>に特化した<br class="hidden"/>ワンストップツール
            </h3>
          </div>
          <div class="sm:hidden mt-5 fadeIn" style="height:350px;" v-scroll="handleScroll6">
            <img src="../../assets/img/index/Service/service_device_SP.png" alt="" class="sm:hidden w-screen left-0">
          </div>
          <div class="my-10 fadeIn" v-scroll="handleScroll4">
            <h4 class="text-base leading-8">
              コミュニティ形成、新規採用、従業員定着支援が一元管理出来る、公式LINE拡張ツールです。
            </h4>
          </div>
          <div class="my-10 sm:my-20 text-center fadeIn" v-scroll="handleScroll5">
            <a href="https://plus-onestep.com/" target="_blank">
              <ButtonL class="w-full">詳しく見る</ButtonL>
            </a>
          </div>
        </div>
      </div>
      <!-- 右半分（画像部分） -->
      <div class="w-8/12 absolute -right-16 -top-7 hidden sm:inline-block fadeInR" v-scroll="handleScrollR">
        <img src="../../assets/img/index/Service/service_device_PC.png" alt="">
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Service',
  components: {
    ButtonL:()=>import('~/components/CommonParts/BottonNext.vue'),
  },
  computed: {
  },
  data(){
    return {
    }
  },
  methods: {
    handleScroll1: function(evt, el) {
      console.log(window.scrollY);
      if (window.scrollY > 100) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(0, 0, 0);"
        );
      }
    },
    handleScroll2: function(evt, el) {
      console.log(window.scrollY);
      if(window.innerWidth >= 640){
        // PC版
        if (window.scrollY > 600) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(0, 0, 0);"
        );
        }
      }else{
        // スマホ版
        if (window.scrollY > 400) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(0, 0, 0);"
        );
        }
      }
    },
    handleScroll3: function(evt, el) {
      console.log(window.scrollY);
      if(window.innerWidth >= 640){
        // PC版
        if (window.scrollY > 700) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(0, 0, 0);"
        );
        }
      }else{
        // スマホ版
        if (window.scrollY > 600) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(0, 0, 0);"
        );
        }
      }
    },
    handleScroll4: function(evt, el) {
      console.log(window.scrollY);
      if(window.innerWidth >= 640){
        // PC版
        if (window.scrollY > 800) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(0, 0, 0);"
        );
        }
      }else{
        // スマホ版
        if (window.scrollY > 1000) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(0, 0, 0);"
        );
        }
      }
    },
    handleScroll5: function(evt, el) {
      console.log(window.scrollY);
      if(window.innerWidth >= 640){
        // PC版
        if (window.scrollY > 900) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(0, 0, 0);"
        );
        }
      }else{
        // スマホ版
        if (window.scrollY > 1200) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(0, 0, 0);"
        );
        }
      }
    },
    handleScroll6: function(evt, el) {
      console.log(window.scrollY);
      if (window.scrollY > 800) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(0, 0, 0);"
        );
      }
    },
    handleScrollR: function(evt, el) {
      console.log(window.scrollY);
      if (window.scrollY > 600) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(0, 0, 0);"
        );
      }
    },
  }
}
</script>

<style scoped>
.fadeIn{
  opacity: 0;
  transform: translate3d(0, 180px, 0);
  transition: 1.0s all cubic-bezier(0.39, 0.575, 0.565, 1);
}
.fadeInR{
  opacity: 0;
  transform: translate3d(180px, 0, 0);
  transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
}
</style>
