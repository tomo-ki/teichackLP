<template>
  <section id="header_sp" >
    <div class="h-28">
      <div id="fixed-header" class="flex flex-wrap bg-white">
        <div class="w-6/12 h-14 text-center text-base" style="border:solid 1px #DDDDDD; border-right:none; border-left:none;"><button @click="onClick" v-scroll-to="'#service'" class="h-full w-full menu"><span>SERVICE</span></button></div>
        <div class="w-6/12 h-14 text-center text-base" style="border:solid 1px #DDDDDD; border-right:none;"><button @click="onClick" v-scroll-to="'#vision'" class="h-full w-full menu"><span>VISION</span></button></div>
        <div class="w-6/12 h-14 text-center text-base" style="border:solid 1px #DDDDDD; border-top:none; border-right:none; border-left:none;"><button @click="onClick" v-scroll-to="'#company'" class="h-full w-full menu"><span>COMPANY</span></button></div>
        <div class="w-6/12 h-14 text-center text-base" style="border:solid 1px #DDDDDD; border-right:none; border-top:none;"><button @click="onClick" v-scroll-to="'#news'" class="h-full w-full menu"><span>NEWS</span></button></div>
      </div>
    </div>
    <div class="text-center pt-8 pb-20">
      <a href="https://www.teichack.com/contact.html" target="_blank">
        <ButtonL class="py-6 text-base w-8/12">CONTACT</ButtonL>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeaderSP',
  components: {
    ButtonL:()=>import('~/components/CommonParts/BottonNone.vue'),
  },
  data(){
    return {
      valMenu: false,
    }
  },
  mounted(){
    //スクロール途中からヘッダーを出現させるための設定を関数でまとめる
    (function() {
      //上スクロールしたら現れて下スクロールしたら隠れる
      const fh = document.getElementById('fixed-header');
      const isUp = (function() {
        const scrollElement = document.scrollingElement;
        let flag, prePoint, scrollPoint;
        return function() {
          scrollPoint = scrollElement.scrollTop;
          flag = prePoint > scrollPoint ? true : false;
          prePoint = scrollPoint;
          return flag;
        }
      }());
      window.addEventListener('scroll', () => {
        if (window.pageYOffset > 600) {
          if (isUp()) {
            fh.classList.add('is-show');
          } else {
            fh.classList.remove('is-show')
          }
        } else {
          fh.classList.remove('is-show');
        }
      })
    }());
  },
  methods: {
    menuToggle(){
      if(this.valMenu == false){
        this.valMenu = true;
      }
      else{
        this.valMenu = false;
      }
    },
    scrollTop(){
      if(window.innerWidth <= 640){
        if(this.valMenu == true){
          this.menuToggle()
        }
      }
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

<style scoped>

/*== ボタン共通設定 */
.menu{
  /*アニメーションの起点とするためrelativeを指定*/
  position: relative;
  overflow: hidden;
  /*ボタンの形状*/
  text-decoration: none;
  display: inline-block;
  text-align: center;
  outline: none;
  /*アニメーションの指定*/
  transition: ease .2s;
}

/*ボタン内spanの形状*/
.menu span {
  position: relative;
  z-index: 3; /* z-indexの数値をあげて文字を背景よりも手前に表示 */
  color:#333;
}

/*== 背景が流れる（中央から外） */
.menu:before {
  content: '';
    /*絶対配置で位置を指定*/
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
    /*色や形状*/
  background: #B7DED8;
  width: 100%;
  height: 100%;
    /*アニメーション*/
  transition: transform .3s cubic-bezier(0.8, 0, 0.2, 1) 0s;
  transform: scale(0, 0);
  transform-origin:center;
}

/*hoverした際の形状*/
.menu:hover:before{
  transform:scale(1, 1);
}


#fixed-header {
  width: 100%;
  z-index: 10;

}
#fixed-header.is-show {
  top: 64px;
  position: fixed;
  animation-name:fadeDownAnime;
  animation-duration:0.5s;
  animation-fill-mode:forwards;
  opacity:0;
}

/* 上から */
.fadeDown{
animation-name:fadeDownAnime;
animation-duration:0.5s;
animation-fill-mode:forwards;
opacity:0;
}

@keyframes fadeDownAnime{
  from {
    opacity: 0;
  transform: translateY(-100px);
  }

  to {
    opacity: 1;
  transform: translateY(0);
  }
}

</style>