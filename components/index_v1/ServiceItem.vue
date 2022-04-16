<template>
  <section id="service" class="flex justify-center sm:mt-32" style="height:900px;">
    <div class="flex w-10/12 max-w-screen-xl relative">
      <!-- 左半分 -->
      <div class="w-full sm:w-6/12 flex absolute">
        <!-- 「 -->
        <div class="w-1/12 h-10">
          <img src="../../assets/img/index/Common/corner.png" alt="" class="w-4 sm:w-7">
        </div>
        <!-- テキスト部分 -->
        <div class="w-11/12 sm:w-8/12">
          <div class="mt-5 sm:mt-8">
            <h2>
              <img src="../../assets/img/index/Service/Service.png" alt="SERVICE" class="h-9 sm:h-14">
            </h2>
          </div>
          <div class="my-10 sm:my-16 sm:ml-16 h-12 sm:h-14 ">
            <img src="../../assets/img/index/Common/onestep_line.png" alt="+one step" class="h-12 sm:h-14 object-fill absolute sm:static">
          </div>
          <div>
            <h3 class="text-2xl sm:text-3xl leading-loose sm:leading-loose text-center sm:text-left">
              定額の<span style="color:#078C7A;">集客</span>と<span style="color:#078C7A;">定着</span>に特化した<br class="hidden"/>ワンストップツール
            </h3>
          </div>
          <div class="sm:hidden mt-5" style="height:350px;">
            <img src="../../assets/img/index/Service/service_device_SP.png" alt="" class="sm:hidden absolute w-screen left-0">
          </div>
          <div class="my-10">
            <h4 class="text-base leading-8">
              コミュニティ形成、新規採用、従業員定着支援が一元管理出来る、公式LINE拡張ツールです。
            </h4>
          </div>
          <div class="my-10 sm:my-20 text-center">
            <a href="https://plus-onestep.com/" target="_blank">
              <ButtonL class="w-full">詳しく見る</ButtonL>
            </a>
          </div>
        </div>
      </div>
      <!-- 右半分（画像部分） -->
      <div class="w-8/12 absolute -right-16 -top-7 hidden sm:inline-block">
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
  },
}
</script>

<style scoped>
</style>
