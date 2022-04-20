<template>
  <section id="value" class="flex flex-col items-center pb-20">
    <div class="sm:hidden mb-10 fadeIn" v-scroll="handleScroll8">
      <img src="../../assets/img/index/Value/value_img.png" alt="">
    </div>
    <div class="flex flex-row-reverse items-center w-10/12 max-w-screen-xl">
      <!-- 左半分 -->
      <div class="w-full sm:w-6/12 flex mt-10 sm:mt-0">
        <!-- 「 -->
        <div class="w-1/12 h-10 fadeIn" v-scroll="handleScroll1">
          <img src="../../assets/img/index/Common/corner.png" alt="" class="w-4 sm:w-7">
        </div>
        <!-- テキスト部分 -->
        <div class="w-10/12">
          <div class="mt-5 sm:mt-8 fadeIn" v-scroll="handleScroll1">
            <h2>
              <img src="../../assets/img/index/Value/VALUE.png" alt="VALUE" class="h-9 sm:h-14">
            </h2>
          </div>
          <div class="-ml-4 sm:ml-0">
            <h3 class="text-2xl leading-loose mt-10 font-bold fadeIn" style="color:#078C7A;" v-scroll="handleScroll2" >
              新しいをずっと
            </h3>
            <p class="text-base leading-7 sm:leading-8 fadeIn" v-scroll="handleScroll3">
              私たちは、現状で満足することなくお客様の本質的な課題を理解し、表面的な解決策でなく芯を捉えたサービスを提供し続けます。
            </p>
          </div>
          <div class="-ml-4 sm:ml-0">
            <h3 class="text-2xl leading-loose mt-10 font-bold fadeIn" style="color:#078C7A;" v-scroll="handleScroll4">
              常に正しいことを選ぼう
            </h3>
            <p class="text-base leading-7 sm:leading-8 fadeIn" v-scroll="handleScroll5">
              私たちは、すべてにおいて正しいかどうかを考え、常に正しい方を選択します。
            </p>
          </div>
          <div class="-ml-4 sm:ml-0">
            <h3 class="text-2xl leading-loose mt-10 font-bold fadeIn" v-scroll="handleScroll6" style="color:#078C7A;">
              実行が大切
            </h3>
            <p class="text-base leading-7 sm:leading-8 fadeIn" v-scroll="handleScroll7">
              いくら「素晴らしいこと」「かっこいいこと」を掲げても、実行しなければ意味がない。私たちは、社会、お客様、社員、株主などのステークホルダーに対して有言実行をお約束します。
            </p>
          </div>
        </div>
      </div>
      <!-- 右半分 -->
      <div class="hidden sm:inline-block sm:w-6/12 fadeInL" v-scroll="handleScrollL">
        <img src="../../assets/img/index/Value/value_img.png" alt="" class="sm:w-11/12 object-cover">
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Value',
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
        if (window.scrollY > 2000) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(0, 0, 0);"
        );
        }
      }else{
        // スマホ版
        if (window.scrollY > 2700) {
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
        if (window.scrollY > 2100) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(0, 0, 0); color:#078C7A;"
        );
        }
      }else{
        // スマホ版
        if (window.scrollY > 2800) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(0, 0, 0); color:#078C7A;"
        );
        }
      }
    },
    handleScroll3: function(evt, el) {
      console.log(window.scrollY);
      if(window.innerWidth >= 640){
        // PC版
        if (window.scrollY > 2150) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(0, 0, 0);"
        );
        }
      }else{
        // スマホ版
        if (window.scrollY > 2850) {
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
        if (window.scrollY > 2200) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(0, 0, 0); color:#078C7A;"
        );
        }
      }else{
        // スマホ版
        if (window.scrollY > 2900) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(0, 0, 0); color:#078C7A;"
        );
        }
      }
    },
    handleScroll5: function(evt, el) {
      console.log(window.scrollY);
      if(window.innerWidth >= 640){
        // PC版
        if (window.scrollY > 2250) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(0, 0, 0);"
        );
        }
      }else{
        // スマホ版
        if (window.scrollY > 2950) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(0, 0, 0);"
        );
        }
      }
    },
    handleScroll6: function(evt, el) {
      console.log(window.scrollY);
      if(window.innerWidth >= 640){
        // PC版
        if (window.scrollY > 2300) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(0, 0, 0); color:#078C7A;"
        );
        }
      }else{
        // スマホ版
        if (window.scrollY > 3000) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(0, 0, 0); color:#078C7A;"
        );
        }
      }
    },
    handleScroll7: function(evt, el) {
      console.log(window.scrollY);
      if(window.innerWidth >= 640){
        // PC版
        if (window.scrollY > 2350) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(0, 0, 0);"
        );
        }
      }else{
        // スマホ版
        if (window.scrollY > 3050) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(0, 0, 0);"
        );
        }
      }
    },
    handleScroll8: function(evt, el) {
      console.log(window.scrollY);
      // スマホ版
      if (window.scrollY > 2350) {
      el.setAttribute(
        "style",
        "opacity: 1; transform: translate3d(0, 0, 0);"
      );
      }
    },
    handleScrollL: function(evt, el) {
      console.log(window.scrollY);
      // PC版
      if (window.scrollY > 2000) {
      el.setAttribute(
        "style",
        "opacity: 1; transform: translate3d(0, 0, 0);"
      );
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
.fadeInL{
  opacity: 0;
  transform: translate3d(-180px, 0, 0);
  transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
}
</style>
