<template>
  <section id="vision" class="flex flex-col items-center pb-20">
    <div class="my-16 sm:hidden">
      <img src="../../assets/img/index/Vision/vision_img.png" alt="" class="w-screen">
    </div>
    <div class="flex items-center w-10/12 max-w-screen-xl">
      <!-- 左半分 -->
      <div class="w-full sm:w-6/12 flex">
        <!-- 「 -->
        <div class="w-1/12 h-10">
          <img src="../../assets/img/index/Common/corner.png" alt="" class="w-4 sm:w-7">
        </div>
        <!-- テキスト部分 -->
        <div class="w-11/12">
          <div class="mt-5 sm:mt-8">
            <h2>
              <img src="../../assets/img/index/Vision/Vision.png" alt="VISION" class="h-9 sm:h-14">
            </h2>
          </div>
          <div>
            <h3 class="text-xl sm:text-3xl leading-loose sm:leading-loose mt-10">
              「テイチャク」を根付かせることで、
              <br class="hidden xl:inline-block"/>
              <span class="pl-3"></span> 世界を照らすひかりとなり、
              <br class="hidden xl:inline-block"/>
              「はたらくよろこび」を創出する
            </h3>
          </div>
          <div class="my-8 w-11/12">
            <p class="text-base leading-8 ml-3">
              我々は、ひとりひとり大切に、1mmでもハートに刺さるサービスを提供。「今、そして、これまでにないサービスを！」
            </p>
            <p class="text-base leading-8 ml-3 mt-6">
              定着という取り組みを標準化させることで、働く人々が豊かな生活を送れるよう我々は挑戦を続けます。
            </p>
          </div>
        </div>
      </div>
      <!-- 右半分 -->
      <div class="hidden sm:inline-block sm:w-6/12 sm:flex sm:justify-end items-center">
        <img src="../../assets/img/index/Vision/vision_img.png" alt="" class="w-11/12 object-cover">
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Vision',
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
  },
}
</script>

<style scoped>
</style>
