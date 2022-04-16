<template>
  <button
    @click="onClick"
    class="pl-8 pr-16 py-6 leading-none"
  >
    <slot class="text-sm font-bold sm:text-xl">ボタンLサイズ</slot>
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
  position: relative;
  display: inline-block;
  background: linear-gradient(to left, #078C7A, #0D81B0);
  color: white;
  padding-right: 4rem;
  padding-left: 2rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  line-height: 2rem;
  line-height: 1;
  border-radius: 36px;
  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
button::before {
  position: absolute;
  top: -1px;
  right: -1px;
  bottom: -1px;
  left: -1px;
  z-index: 10;
  content: '';
  background: white;
  opacity: 0.5;
  transform-origin: right top;
  transform: scale(0, 1);
  /* transition: transform .3s; */
  border-radius: 0.5rem;
}
button:hover::before {
  transform-origin: left top;
  transform: scale(1, 1);
  transition: transform .3s;
}
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
</style>