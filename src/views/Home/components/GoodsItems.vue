<script setup>
defineProps({
  item:{
    type:Object,
    default:()=>{}
  }
})
</script>

<template>
  <router-link to="/">
                  <img :src="item.picture" alt="">
                  <p class="name">{{item.name}}</p>
                  <p class="desc">{{item.desc}}</p>
                  <p class="price">￥<span>{{item.price}}</span></p>
  </router-link>
</template>

<style scoped lang="scss">
a{
  display: block;
  width: 240px;
  height: 300px;
  text-align: center;
  img{
    width: 160px;
    height: 160px;
  }

  p {
    width: 160px;
    margin: auto;
    font-size: 16px;
    padding-top: 10px;
    //把多余的字变为省略号
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .name{
    font-size: 16px;
  }
  .desc{
    color: #999;
    height: 29px;
    font-size: 14px;
  }
  .price{
    color: $priceColor;
    font-size: 16px;
  }
  transition: all .5s;
  &:hover{
    transform: translate3d(0,-3px,0);
    box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
  }
}
</style>