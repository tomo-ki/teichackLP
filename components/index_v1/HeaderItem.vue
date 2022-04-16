<template>
  <section id="header" >
    <!-- PC版 -->
    <div class="sm:flex items-center justify-between px-0 fixed bg-white sm:bg-opacity-70 w-full z-20 h-16">
      <div class="w-full h-full sm:w-6/12 flex items-center justify-center sm:justify-start sm:ml-10">
        <button @click="scrollTop()" class="cursor-pointer">
          <img src="../../assets/img/index/Logo/teichack_logo_normal.png" alt="+one step" class="h-10">
        </button>
      </div>
      <div class="hidden sm:block h-full w-6/12 flex justify-end">
        <div class="flex text-base items-center justify-end h-full w-full">
          <div class="w-3/12 text-center" style="color:#707070;"><button @click="onClick" v-scroll-to="'#service'">SERVICE</button></div>
          <div class="w-3/12 text-center" style="color:#707070;"><button @click="onClick" v-scroll-to="'#vision'">VISION</button></div>
          <div class="w-3/12 text-center" style="color:#707070;"><button @click="onClick" v-scroll-to="'#company'">COMPANY</button></div>
          <!-- <div class="w-2/12 text-center" style="color:#707070;"><button @click="onClick" v-scroll-to="'#news'">NEWS</button></div> -->
          <div class="w-3/12 h-full text-center" style="background: linear-gradient(to left, #078C7A, #0D81B0);">
            <a href="https://www.teichack.com/contact.html">
              <button class="text-white h-full w-full col-btn"><span class="col-btn_span">CONTACT</span></button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Header',
  components: {
  },
  data(){
    return {
      valMenu: false,
    }
  },
  methods: {
    scrollTop(){
      scrollTo({
        top: 0,
        behavior: "smooth"
      })
    },
    onClick(event) {
      this.$emit('click', event)
    },
  }
}
</script>

<style>
.col-btn{
  position: relative;
  overflow: hidden;
  /*ボタンの形状*/
  text-decoration: none;
  display: inline-block;
  background: linear-gradient(to left, #078C7A, #0D81B0);
  outline: none;
  /*アニメーションの指定*/
  transition: ease .2s;
}
.col-btn_span{
  position: relative;
  z-index: 3;/*z-indexの数値をあげて文字を背景よりも手前に表示*/
  color:white;
}
.col-btn:hover .col-btn_span{
  color:#078C7A;
}

/*== 背景が流れる（中央から外） */
.col-btn:before {
  content: '';
    /*絶対配置で位置を指定*/
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
    /*色や形状*/
  background: white;
  width: 100%;
  height: 100%;
    /*アニメーション*/
  transition: transform .3s cubic-bezier(0.8, 0, 0.2, 1) 0s;
  transform: scale(0, 0);
  transform-origin:center;
  border: 3px solid #078C7A;
}

/*hoverした際の形状*/
.col-btn:hover:before{
  transform:scale(1, 1);
}


</style>
