<template>
  <section id="footer" class="flex flex-col items-center w-full py-10 text-white" style="background: linear-gradient(to left, #078C7A, #0D81B0);">
    <div>
      <img src="../../assets/img/index/Logo/teichack_logo_white.png" alt="TEICHACK" class="h-12">
    </div>
    <div>
      <h2 class="text-sm mt-6 text-base font-medium">株式会社テイチャク</h2>
    </div>
    <div>
      <h3 class="text-sm mt-6 text-center ">
        〒151-0051
        <br class="sm:hidden inline-block">
        東京都渋谷区千駄ヶ谷5丁目23番6号平沢ビル301</h3>
    </div>
    <!-- <div class="flex flex-col sm:flex-row sm:justify-center my-10 text-sm w-9/10 text-center"> -->
      <!-- <div class="px-6 pb-3 pt-6 sm:py-3  border-t sm:border-t-0 sm:border-r" style="border-color:white;">
        <a href="http://www.teichack.com/" target="_blank">会社概要</a>
      </div> -->
      <!-- <div class="px-6 py-2" style="border-right:1px solid #515151;">
        <a href="#">利用規約</a>
      </div> -->
      <!-- <div class="px-6 py-3 sm:border-r" style="border-color:white;">
        <router-link to="/privacy.html" target="_blank">プライバシーポリシー</router-link>
      </div>
      <div class="px-6 pt-3 pb-6 sm:py-3 border-b sm:border-b-0" style="border-color:white;">
        <router-link to="/contact.html" target="_blank">お問い合わせ</router-link>
      </div> -->
    <!-- </div> -->
    <!-- <div>
      SNSアイコンたち
    </div> -->
    <div>
      <small>
        &copy; TEICHACK Inc.All Rights Reserved.
      </small>
    </div>
    <router-view/>
  </section>
</template>

<script>
export default {
  name: 'Footer',
  components: {
  },
  data(){
    return {
    }
  }
}
</script>

<style>

</style>
