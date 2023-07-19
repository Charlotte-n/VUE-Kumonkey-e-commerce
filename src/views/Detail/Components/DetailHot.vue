<script setup>
import {getHotGoodsAPI} from "@/apis/detail";
import {ref,onMounted} from "vue";
import {useRoute} from "vue-router";
import {computed} from "vue";
const route = useRoute()
const HotGoodsList = ref([])



const props = defineProps({
  hotType:{
    type:Number
}
})

const TYPEMAP = {
  1:'24小时热榜',
  2:'周热榜'
}
const title = computed(()=>TYPEMAP[props.hotType])
//调用接口
const getHotGoods =async ()=>{
  const res = await getHotGoodsAPI({
    id:route.params.id,
    type: props.hotType
  })
  HotGoodsList.value = res.data.result
}

onMounted(()=>getHotGoods())
</script>

<template>
<div class="goods-hot">
  <h3>{{title}}</h3>
  <router-link to="/" v-for="i in HotGoodsList" :key="i.id">
    <img :src="i.picture" alt="">
    <p class="hot-title">{{i.name}}</p>
    <p class="sub-hot-title">{{i.desc}}</p>
    <p class="hot-price">{{i.price}}</p>
  </router-link>

</div>
</template>

<style lang="scss">
.goods-hot{
  text-align: center;
  background-color: #fff;
  margin-bottom: 10px;
  h3{
    margin:15px auto;
    width: 200px;
    height: 50px;
    border-radius: 10px;
    background-color:  $helpColor;
    color: #ffffff;
    font-size: 18px;
    line-height: 50px;
  }
  a{
    img{
      width: 160px;
      height: 160px;
    }
    p{
      width: 160px;
      margin: auto;
      padding-top: 8px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .hot-title{
      font-size: 15px;
    }
    .sub-hot-title{
      color: #999999;
      font-size: 12px;
    }
    .hot-price{
      color: $priceColor;
      font-size: 15px;
      padding-bottom: 15px;
      &::before{
        content: "￥";
      }
    }
  }
}
</style>