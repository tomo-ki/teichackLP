<template>
  <section id="contact" class="flex justify-center">
    <div class="flex flex-col items-center w-10/12 max-w-screen-xl my-24">
      <div class="flex w-full sm:justify-center">
        <div>
          <img src="../../assets/img/index/Common/corner.png" alt="" class="w-4 sm:w-7">
        </div>
        <div class="mt-5 sm:mt-8 ml-5">
          <h2>
            <img src="../../assets/img/index/Contact/CONTACT.png" alt="CONTACT" class="h-9 sm:h-14">
          </h2>
        </div>
      </div>
      <div class="my-16 leading-7">
        <p>さまざまなご相談にお答えいたします。お問い合わせは下記のフォームよりご連絡ください。</p>
      </div>
      <div class="w-full text-center">
        <a href="https://www.teichack.com/contact.html">
          <ButtonL class="w-10/12 sm:w-4/12 text-sm sm:text-xl">お問い合わせはこちら</ButtonL>
        </a>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Contact',
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
