<template>
  <section id="company" class="flex justify-center pb-20">
    <div class="flex w-full">
      <div class="flex w-full">
        <!-- 「 -->
        <div class="w-1/12 h-10 fadeIn" v-scroll="handleScroll1">
          <img src="../../assets/img/index/Common/corner.png" alt="" class="w-4 sm:w-7">
        </div>
        <!-- テキスト部分 -->
        <div class="w-10/12">
          <div class="mt-5 sm:mt-8 mb-8 sm:mb-16 fadeIn" v-scroll="handleScroll1">
            <h2>
              <img src="../../assets/img/index/Company/Company.png" alt="COMPANY" class="h-9 sm:h-10">
            </h2>
          </div>
          <div class="text-base w-full">
            <div class="flex w-full py-4 fadeIn" style="border-bottom:1px solid #BCDCDA" v-scroll="handleScroll2">
              <p class="w-4/12">企業名</p>
              <p class="w-8/12">株式会社テイチャク</p>
            </div>
            <div class="flex w-full py-4 fadeIn" style="border-bottom:1px solid #BCDCDA" v-scroll="handleScroll3">
              <p class="w-4/12">代表取締役</p>
              <p class="w-8/12">磯野　哲也</p>
            </div>
            <div class="flex w-full py-4 fadeIn" style="border-bottom:1px solid #BCDCDA" v-scroll="handleScroll4">
              <p class="w-4/12">設立</p>
              <p class="w-8/12">2019年（令和元年）11月</p>
            </div>
            <div class="flex w-full py-4 fadeIn" style="border-bottom:1px solid #BCDCDA" v-scroll="handleScroll5">
              <p class="w-4/12">資本金</p>
              <p class="w-8/12">6,500万円</p>
            </div>
            <div class="flex w-full py-4 fadeIn" style="border-bottom:1px solid #BCDCDA" v-scroll="handleScroll6">
              <p class="w-4/12">所在地</p>
              <p class="w-8/12 leading-8">
                〒151-0051
                <br>
                東京都渋谷区千駄ヶ谷5丁目23番地6号
                <br>
                平沢ビル301
              </p>
            </div>
            <div class="flex w-full py-4 fadeIn" style="border-bottom:1px solid #BCDCDA" v-scroll="handleScroll7">
              <p class="w-4/12">電話番号</p>
              <p class="w-8/12">03-6457-4810（代表）</p>
            </div>
            <div class="flex w-full py-4 fadeIn" style="border-bottom:1px solid #BCDCDA" v-scroll="handleScroll8">
              <p class="w-4/12">事業内容</p>
              <p class="w-8/12 leading-8">+one stepの企画・開発・運営<br>従業員の離職防止に関する業務<br>有料職業紹介事業（13-ユ-312894）</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Company',
  components: {
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
      if(window.innerWidth >= 640){
        // PC版
        if (window.scrollY > 2500) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(0, 0, 0);"
        );
        }
      }else{
        // スマホ版
        if (window.scrollY > 3500) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(0, 0, 0);"
        );
        }
      }
    },
    handleScroll2: function(evt, el) {
      console.log(window.scrollY);
      if(window.innerWidth >= 640){
        // PC版
        if (window.scrollY > 2600) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(0, 0, 0); border-bottom:1px solid #BCDCDA"
        );
        }
      }else{
        // スマホ版
        if (window.scrollY > 3650) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(0, 0, 0); border-bottom:1px solid #BCDCDA"
        );
        }
      }
    },
    handleScroll3: function(evt, el) {
      console.log(window.scrollY);
      if(window.innerWidth >= 640){
        // PC版
        if (window.scrollY > 2650) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(0, 0, 0); border-bottom:1px solid #BCDCDA"
        );
        }
      }else{
        // スマホ版
        if (window.scrollY > 3700) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(0, 0, 0); border-bottom:1px solid #BCDCDA"
        );
        }
      }
    },
    handleScroll4: function(evt, el) {
      console.log(window.scrollY);
      if(window.innerWidth >= 640){
        // PC版
        if (window.scrollY > 2700) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(0, 0, 0); border-bottom:1px solid #BCDCDA"
        );
        }
      }else{
        // スマホ版
        if (window.scrollY > 3750) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(0, 0, 0); border-bottom:1px solid #BCDCDA"
        );
        }
      }
    },
    handleScroll5: function(evt, el) {
      console.log(window.scrollY);
      if(window.innerWidth >= 640){
        // PC版
        if (window.scrollY > 2750) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(0, 0, 0); border-bottom:1px solid #BCDCDA"
        );
        }
      }else{
        // スマホ版
        if (window.scrollY > 3800) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(0, 0, 0); border-bottom:1px solid #BCDCDA"
        );
        }
      }
    },
    handleScroll6: function(evt, el) {
      console.log(window.scrollY);
      if(window.innerWidth >= 640){
        // PC版
        if (window.scrollY > 2800) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(0, 0, 0); border-bottom:1px solid #BCDCDA"
        );
        }
      }else{
        // スマホ版
        if (window.scrollY > 3850) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(0, 0, 0); border-bottom:1px solid #BCDCDA"
        );
        }
      }
    },
    handleScroll7: function(evt, el) {
      console.log(window.scrollY);
      if(window.innerWidth >= 640){
        // PC版
        if (window.scrollY > 2850) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(0, 0, 0); border-bottom:1px solid #BCDCDA"
        );
        }
      }else{
        // スマホ版
        if (window.scrollY > 4050) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(0, 0, 0); border-bottom:1px solid #BCDCDA"
        );
        }
      }
    },
    handleScroll8: function(evt, el) {
      console.log(window.scrollY);
      if(window.innerWidth >= 640){
        // PC版
        if (window.scrollY > 2900) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(0, 0, 0); border-bottom:1px solid #BCDCDA"
        );
        }
      }else{
        // スマホ版
        if (window.scrollY > 4100) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(0, 0, 0); border-bottom:1px solid #BCDCDA"
        );
        }
      }
    },
  },
}
</script>

<style scoped>
.fadeIn{
  opacity: 0;
  transform: translate3d(0, 180px, 0);
  transition: 1.0s all cubic-bezier(0.39, 0.575, 0.565, 1);
}
</style>
