<script setup>
import HomePannel from "@/views/Home/components/HomePannel.vue";
import {getNewsApi} from "@/apis/home";
import {ref,onMounted} from "vue";

const NewsList = ref([])
const getNews = async ()=>{
  const res = await getNewsApi()
  NewsList.value = res.data.result
}
onMounted(()=>{
  getNews()
})
</script>

<template>
  <HomePannel title="新鲜好物" sub-title="新鲜出炉 品质靠谱">
<!--    写内容-->
    <ul class="goods-list">
      <li v-for="item in NewsList" :key="item.id">
        <router-link to="/">
          <img v-lazy-img="item.picture" alt="">
          <p class="name">{{ item.name }}</p>
          <p class="price">￥{{item.price}}</p>

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
        width:280px;
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
    }
  }
}
</style>