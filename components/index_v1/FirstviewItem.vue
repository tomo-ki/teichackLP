<template>
  <section id="firstview" class="">
    <div class="relative sm:h-screen pt-16 sm:pt-0">
      <img src="../../assets/img/index/Firstview/firstview_PC.png" alt="" class="hidden sm:inline-block h-screen w-full absolute object-cover">
      <img src="../../assets/img/index/Firstview/firstview_SP.png" alt="" class="sm:hidden w-full  object-cover">
      <!-- PC版「定着でつくる、ひかる未来 -->
      <div class="hidden sm:inline-block absolute left-2/4 top-2/4 transform -translate-y-1/2">
        <h1 class="">
          <img src="../../assets/img/index/Firstview/firstview_text1.png" alt="定着でつくる、" class="h-20 fadeIn1">
          <br>
          <img src="../../assets/img/index/Firstview/firstview_text2.png" alt="ひかる未来" class="h-20 ml-48 fadeIn2">
        </h1>
      </div>
      <!-- SP版「定着でつくる、ひかる未来 -->
      <div class="sm:hidden absolute left-1/3 top-24 transform -translate-x-1/4">
        <h1 class="">
          <img src="../../assets/img/index/Firstview/firstview_text1.png" alt="定着でつくる、" class="h-9 sm:h-20 fadeIn1">
          <br>
          <img src="../../assets/img/index/Firstview/firstview_text2.png" alt="ひかる未来" class="h-9 sm:h-20 ml-28 -mt-5 fadeIn2">
        </h1>
      </div>
      <!-- 動くscrollマーク -->
      <div class="hidden sm:inline-block absolute left-2/4 bottom-0 scrolldown">
        <img src="../../assets/img/index/Firstview/firstview_scroll.png" alt="scroll" class="h-16">
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Firstview',
  components: {
  },
  computed: {
  },
  data(){
    return {
    }
  },
  methods: {
  },
}
</script>

<style scoped>
.scrolldown{
  /*描画位置※位置は適宜調整してください*/
  /* position:absolute; */
  /*矢印の動き1秒かけて永遠にループ*/
  animation: arrowmove 1s ease-in-out infinite;
}
/*下からの距離が変化して全体が下→上→下に動く*/
@keyframes arrowmove{
  0%{bottom:1%;}
  50%{bottom:3%;}
  100%{bottom:1%;}
}


.fadeIn1, .fadeIn2{
animation-name: fadeInAnime;/*1で解説*/
animation-fill-mode:backwards;/*2で解説*/
animation-duration:2.0s;/*3で解説*/
animation-iteration-count:1;/*4で解説*/
animation-timing-function:ease-in-out;/*5で解説*/
animation-direction:normal;/*7で解説*/
}
.fadeIn1{
  animation-delay: 1.0s;/*6で解説*/
}
.fadeIn2{
  animation-delay: 1.5s;/*6で解説*/
}

@keyframes fadeInAnime{
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
