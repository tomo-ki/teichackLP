<template>
  <div id="news">
    <main class="overflow-hidden">
      <HeaderItem/>
      <FirstviewItem/>
      <HeaderSPItem class="sm:hidden"/>
      <ServiceItem/>
      <VisionItem/>
      <ValueItem/>
      <img src="../assets/img/index/Common/waiwai_SP.png" alt="" class="sm:hidden w-screen object-contain">
      <div class="sm:flex w-10/12 max-w-screen-xl m-auto pt-20" style="border-top:1px solid #BCDCDA">
        <CompanyItem class="sm:w-6/12"/>
        <AccessItem class="sm:w-6/12"/>
      </div>
      <img src="../assets/img/index/Common/waiwai_PC.png" alt="" class="hidden sm:inline-block w-full object-cover">
      <div class="w-full " style="border-bottom:1px solid #BCDCDA"></div>
      <ContactItem/>
      <FooterItem/>
    </main>
  </div>
</template>

<script>
export default {
  name: 'news',
  components: {
    HeaderItem:()=>import('@/components/index_v1/HeaderItem.vue'),
    FirstviewItem:()=>import('@/components/index_v1/FirstviewItem.vue'),
    HeaderSPItem:()=>import('@/components/index_v1/HeaderSPItem.vue'),
    ServiceItem:()=>import('@/components/index_v1/ServiceItem.vue'),
    VisionItem:()=>import('@/components/index_v1/VisionItem.vue'),
    ValueItem:()=>import('@/components/index_v1/ValueItem.vue'),
    CompanyItem:()=>import('@/components/index_v1/CompanyItem.vue'),
    AccessItem:()=>import('@/components/index_v1/AccessItem.vue'),
    ContactItem:()=>import('@/components/index_v1/ContactItem.vue'),
    FooterItem:()=>import('@/components/index_v1/FooterItem.vue'),
  },
  data(){
    return {
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  }
}
</script>
<style scoped>
  #home{
    font-family: 'Noto Sans JP', sans-serif;
  }
</style>

