<script setup>
import HomePannel from "@/views/Home/components/HomePannel.vue";
import { getProductApi} from "@/apis/home";
import {ref,onMounted} from "vue";
import GoodsItems from "@/views/Home/components/GoodsItems.vue";

const ProudctList = ref([])
const getProduct = async ()=>{
  const res =await getProductApi()
  ProudctList.value = res.data.result
}
onMounted(()=>getProduct())
</script>

<template>
<div class="home-product">
  <div class="container">
    <HomePannel :title="item.name" v-for="item in ProudctList" :key="item.id">
      <div class="good">
        <div class="left">
          <router-link :to="`/detail/${item.id}`">
            <img :src="item.picture" alt="">
            <strong class="label">
              <span>{{item.name}}</span>
              <span>{{item.saleInfo}}</span>
            </strong>
          </router-link>
        </div>
        <ul class="right">
          <li v-for="i in item.goods" :key="i.id">
            <GoodsItems :item="i"></GoodsItems>
<!--            <router-link to="/">-->
<!--              <img :src="i.picture" alt="">-->
<!--              <p class="name">{{i.name}}</p>-->
<!--              <p class="desc">{{i.desc}}</p>-->
<!--              <p class="price">￥<span>{{i.price}}</span></p>-->
<!--            </router-link>-->
<!--            <div class="layer">-->
<!--              -->
<!--            </div>-->
          </li>
        </ul>
      </div>
    </HomePannel>
  </div>
</div>
</template>

<style scoped lang="scss">
.home-product{

  .container{
    .good{
      display: flex;
      justify-content: space-between;
      .left{
        width: 240px;
        height: 610px;
        padding-bottom: 10px;
        padding-left: 15px;
        a{
          position: relative;
          img{
            width: 100%;
            height: 100%;
          }
          .label{
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 188px;
            height: 66px;
            //background-color:#fff;
            display: flex;

            span{
              color: #fff;
              text-align: center;
              line-height: 66px;
              &:first-child{
                background-color: #000;
                width: 76px;
              }
              &:last-child{
                flex: 1;
                background-color: rgba(0,0,0,.5);
              }
            }
          }
        }
      }
      .right{
        width: 990px;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;

        li{
          width: 240px;
          height: 300px;
          text-align: center;
          transition: all .5s;
          &:hover {
            transform: translate3d(0, -3px, 0);
            box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
          }
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
          }
        }
        //.layer{
        //  display: none;
        //  width: 240px;
        //  height: 120px;
        //  background-color: #F28C28;
        //}

      }
    }
  }
}
</style>