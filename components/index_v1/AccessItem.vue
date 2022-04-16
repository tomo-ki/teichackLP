<template>
  <section id="access" class="flex justify-center pb-20">
    <div class="flex w-full">
      <div class="flex w-full">
        <!-- 「 -->
        <div class="w-1/12 h-10">
          <img src="../../assets/img/index/Common/corner.png" alt="" class="w-4 sm:w-7">
        </div>
        <!-- テキスト部分 -->
        <div class="w-10/12">
          <div class="mt-5 sm:mt-8 mb-8 sm:mb-16">
            <h2>
              <img src="../../assets/img/index/Access/ACCESS.png" alt="ACCESS" class="h-9 sm:h-10">
            </h2>
          </div>
          <div class="text-base w-full overflow-x-hidden">
            <div class="h-64 sm:h-96 sm:w-full mb-10 overflow-hidden">
              <!-- PC版 -->
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12962.900285356694!2d139.7031765!3d35.683771!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4c29acbd1e78fe7!2z5qCq5byP5Lya56S-44OG44Kk44OB44Oj44Kv!5e0!3m2!1sja!2sjp!4v1649299609457!5m2!1sja!2sjp" class="hidden sm:block w-full sm:h-96" style="border:0; height:720px; margin-top: -170px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              <!-- SP版 -->
              <div class="h-64 w-screen absolute left-0 overflow-hidden">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12962.900285356694!2d139.7031765!3d35.683771!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4c29acbd1e78fe7!2z5qCq5byP5Lya56S-44OG44Kk44OB44Oj44Kv!5e0!3m2!1sja!2sjp!4v1649299609457!5m2!1sja!2sjp" class="sm:hidden w-full h-64" style="border:0; height:650px; margin-top: -170px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
            <div class="">
              <p class="leading-8">
                JR「代々木駅」より徒歩1分
                <br>
                都営大江戸線「代々木駅」より徒歩3分
                <br>
                JR「新宿駅」より徒歩8分
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Access',
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
