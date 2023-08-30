<script setup>

import HomePannel from "@/views/Home/components/HomePannel.vue";
import {getHotApi} from "@/apis/home";
import {onMounted,ref} from "vue";
const HotList = ref([])
const getHot = async ()=>{
  const res = await getHotApi()
  HotList.value = res.data.result
}

onMounted(()=>{
  getHot()
})
</script>

<template>
  <HomePannel title="人气推荐" sub-title="人气推荐 不容错过">
    <ul class="goods-list">
      <li v-for="item in HotList" :key="item.id">
        <router-link :to="`/`">
          <img v-lazy-img="item.picture" alt="">
          <p class="name">{{ item.title }}</p>
          <p class="subtitle">{{item.alt}}</p>

        </router-link>
      </li>
    </ul>
  </HomePannel>
</template>

<style scoped lang="scss">
.goods-list{
  display: flex;
  padding-left: 15px;
  padding-right: 15px;
  justify-content: space-between;
  height: 406px;
  li{
    width: 280px;
    height: 380px;

    background: rgb(255, 245, 238);
    transition: all .5s;

    &:hover {
    //添加动画盒子阴影
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    a{
      img{
        width: 280px;
        height: 306px;
      }
      p{
        font-size: 16px;
        padding-top: 12px;
        text-align: center;
        text-overflow: ellipsis;//还有这个
        overflow: hidden;
        white-space: nowrap;//查一下这个是什么
      }
      .price{
        color: $priceColor;
      }
      .subtitle{
        color: #999999;
        font-size: 14px;
      }
    }
  }
}

</style>