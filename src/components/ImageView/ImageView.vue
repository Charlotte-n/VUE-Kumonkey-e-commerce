<script setup>
import {ref,watch} from "vue";
import {useMouseInElement} from "@vueuse/core";
// 图片列表
//图片适配,接收外界传入的数据
defineProps({
  imageList:{
    type:Array,
    default:()=>[]
  }
})
// const imageList = [
//   "https://yanxuan-item.nosdn.127.net/d917c92e663c5ed0bb577c7ded73e4ec.png",
//   "https://yanxuan-item.nosdn.127.net/e801b9572f0b0c02a52952b01adab967.jpg",
//   "https://yanxuan-item.nosdn.127.net/b52c447ad472d51adbdde1a83f550ac2.jpg",
//   "https://yanxuan-item.nosdn.127.net/f93243224dc37674dfca5874fe089c60.jpg",
//   "https://yanxuan-item.nosdn.127.net/f881cfe7de9a576aaeea6ee0d1d24823.jpg"
// ]

//1.小图片切换大图片
const activeIndex = ref(0)
function enter(i){
  activeIndex.value = i
}

//2.获取鼠标相应位置
const target = ref(null)
const { elementX,elementY,isOutside} = useMouseInElement(target)

//3.鼠标移动滑块也移动
const left = ref(0)
const top = ref(0)
//大图
const PositionX = ref(0)
const PositionY = ref(0)
watch([elementX,elementY,isOutside],()=>{
  //如果鼠标没有进去，下面的就不执行
  if(!isOutside.value) {
    //处理有效移动范围
    //横向
    if (elementX.value >= 100 && elementX.value <= 300) {
      left.value = elementX.value - 100
    }
    //纵向
    if (elementY.value >= 100 && elementY.value <= 300) {
      top.value = elementY.value - 100
    }
    //边界的控制
    if (elementX.value > 300) {
      left.value = 200
    }
    if (elementY.value > 300) {
      top.value = 200
    }
    if (elementX.value < 100) {
      left.value = 0
    }
    if (elementY.value < 100) {
      top.value = 0
    }
    //处理大图
    PositionX.value = -left.value * 2
    PositionY.value = -top.value * 2
  }
  return

})

</script>

<template>
<div class="goods-image">
<!--  {{!isOutside}}-->

<!--  中图-->
<!--  进行绑定-->
  <div class="middle" ref="target">
    <img :src="imageList[activeIndex]" alt="">
    <div class="layer" v-show="!isOutside" :style="{left:`${left}px`,top:`${top}px`}"></div>

  </div>
<!--  小图-->
  <div class="small">
    <ul>
      <li v-for="(item,i) in imageList" :key="item" @mouseenter="enter(i)" :class="{active:i === activeIndex}">
        <img :src="item" alt="">
      </li>
    </ul>
  </div>
<!--  大图-->
  <div class="large" :style="
        {
      backgroundImage: `url(${imageList[activeIndex]})`,
        backgroundPositionX: `${PositionX}px`,
        backgroundPositionY: `${PositionY}px`,

    }
    " v-show="!isOutside">
  </div>

</div>
</template>

<style scoped lang="scss">
.goods-image{
  margin-left: 15px;
  margin-bottom: 15px;
  display: flex;
  position: relative;
  .middle{
    position: relative;
    margin-right: 15px;
    img{
      width: 400px;
      height: 400px;
      border-radius: 5px;
    }
    .layer{
      position: absolute;
      width: 200px;
      height: 200px;
      left: 0;
      top: 0;
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
  .small{
    ul{
      li{

        width: 68px;
        height: 68px;
        margin-bottom: 15px;
        img{
          width: 68px;
          height: 68px;
          border-radius: 5px;

        }
        &:hover{
          border:2px solid #F28C28;
          border-radius: 5px;
        }
        &.active{
          border:2px solid #F28C28;
          border-radius: 5px;
        }
      }
    }
  }
  .large{
    //display: none;
    position: absolute;
    top: 0;
    left: 412px;
    width: 400px;
    height: 400px;
    z-index: 500;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-repeat: no-repeat;
    border-radius: 5px;
    // 背景图:盒子的大小 = 2:1  将来控制背景图的移动来实现放大的效果查看 background-position
    background-size: 800px 800px;

  }
}

</style>