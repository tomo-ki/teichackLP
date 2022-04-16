<template>
  <section id="value" class="flex flex-col items-center pb-20">
    <div class="sm:hidden mb-10">
      <img src="../../assets/img/index/Value/value_img.png" alt="">
    </div>
    <div class="flex flex-row-reverse items-center w-10/12 max-w-screen-xl">
      <!-- 左半分 -->
      <div class="w-full sm:w-6/12 flex mt-10 sm:mt-0">
        <!-- 「 -->
        <div class="w-1/12 h-10">
          <img src="../../assets/img/index/Common/corner.png" alt="" class="w-4 sm:w-7">
        </div>
        <!-- テキスト部分 -->
        <div class="w-10/12">
          <div class="mt-5 sm:mt-8">
            <h2>
              <img src="../../assets/img/index/Value/VALUE.png" alt="VALUE" class="h-9 sm:h-14">
            </h2>
          </div>
          <div class="-ml-4 sm:ml-0">
            <h3 class="text-2xl leading-loose mt-10 font-bold" style="color:#078C7A;">
              新しいをずっと
            </h3>
            <p class="text-base leading-7 sm:leading-8">
              私たちは、現状で満足することなくお客様の本質的な課題を理解し、表面的な解決策でなく芯を捉えたサービスを提供し続けます。
            </p>
          </div>
          <div class="-ml-4 sm:ml-0">
            <h3 class="text-2xl leading-loose mt-10 font-bold" style="color:#078C7A;">
              常に正しいことを選ぼう
            </h3>
            <p class="text-base leading-7 sm:leading-8">
              私たちは、すべてにおいて正しいかどうかを考え、常に正しい方を選択します。
            </p>
          </div>
          <div class="-ml-4 sm:ml-0">
            <h3 class="text-2xl leading-loose mt-10 font-bold" style="color:#078C7A;">
              実行が大切
            </h3>
            <p class="text-base leading-7 sm:leading-8">
              いくら「素晴らしいこと」「かっこいいこと」を掲げても、実行しなければ意味がない。私たちは、社会、お客様、社員、株主などのステークホルダーに対して有言実行をお約束します。
            </p>
          </div>
        </div>
      </div>
      <!-- 右半分 -->
      <div class="hidden sm:inline-block sm:w-6/12">
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
  },
}
</script>

<style scoped>
</style>
