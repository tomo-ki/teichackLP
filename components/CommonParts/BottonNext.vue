<template>
  <button
    @click="onClick"
    class="pl-8 pr-16 py-6 sm:py-6 leading-none text-sm sm:text-xl"
  >
    <span class="span1"></span>
    <span class="span2"></span>
    <span class="btn-span"><slot class="">ボタンLサイズ</slot></span>
  </button>
</template>
<script>
export default {
  name: "ButtonL",
  props: {
    buttonName: {
      type: String,
      default: "null",
    },
  },
  methods: {
    onClick(event) {
      this.$emit('click', event) // このメソッド内で$emitでイベントを定義する第一引数にイベント名、以降の引数に追加の引数を渡す
    }
  }
};
</script>
<style scoped>
button{
  /*アニメーションの起点とするためrelativeを指定*/
  position: relative;
  overflow: hidden;
  /*ボタンの形状*/
  text-decoration: none;
  display: inline-block;
  background: linear-gradient(to left, #078C7A, #0D81B0);
  outline: none;
  /*アニメーションの指定*/
  transition: ease .2s;
  border-radius: 36px;
  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.btn-span{
  position: relative;
  z-index: 3;/*z-indexの数値をあげて文字を背景よりも手前に表示*/
  color:white;
}
button:hover .btn-span,
button:active .btn-span{
  color:#078C7A;
}

/*== 背景が流れる（中央から外） */
button:before {
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
  border-radius: 36px;
}

/*hoverした際の形状*/
button:hover:before,
button:active:before{
  transform:scale(1, 1);
}

/* やじるし */
.span1,
.span2{
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  content: "";
  vertical-align: middle;
}
.span1{
  right: 40px;
  width: 18px;
  height: 2px;
  padding: 0;
  border-radius: 1px;
  background: white;
}
.span2{
  right: 40px;
  width: 15px;
  height: 15px;
  border-top: 2px solid white;
  border-right: 2px solid white;
  border-radius: 2px;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
button:hover .span1,
button:active .span1{
  background: #078C7A;
  z-index: 5;
}
button:hover .span2,
button:active .span2{
  z-index: 5;
  border-top: 2px solid #078C7A;
  border-right: 2px solid #078C7A;
}
</style>