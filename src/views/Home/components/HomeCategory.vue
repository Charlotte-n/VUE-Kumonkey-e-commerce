<script setup>
import {useCategoryStore} from "@/stores/Category";
const CategoryStore = useCategoryStore()
</script>

<template>
<div class="home-category">
  <div class="menu">
    <ul>
      <li v-for="item in CategoryStore.items" :key="item.id" class="left-nav">
        <router-link to="/">{{item.name}}</router-link>
        <router-link to="/" v-for="i in item.children.slice(0,1)" :key="i.id">{{i.name}}</router-link>
        <i>></i>
<!--        layer区域-->
        <div class="layer">
          <h4>分类推荐</h4>
          <ul>
            <li v-for="i in item.goods" :key="i.id">
              <router-link to="/">
                <img :src="i.picture" alt="" />
                <div class="info">
                  <p class="title1">{{i.name}}</p>
                  <p class="title2">{{i.desc}}</p>
                  <p class="price"><i>￥</i>{{i.price}}</p>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
        </div>
</div>
</template>

<style scoped lang="scss">
.home-category{
  width: 200px;
  height: 420px;
  background-color: #F28C28;
  margin-top: 10px;
  border-radius: 15px;
  color: rgba(255,255,255,0.8);
  .menu{
    position: relative;
    ul{
      display: flex;
      flex-wrap: wrap;
      width: 160px;
      align-items: center;
      margin: auto;
      &:hover{
        .layer{
          display: block;
        }
      }
      .left-nav{
        display: flex;
        //来控制之间的空隙一样
        justify-content: space-between;
        width: 170px;
        border-bottom: 1px solid hsla(0,0%,100%,.3);
        padding: 15px 0 10px 0;
        &:nth-child(n){
          padding-left: 2px;
        }
        &:last-child{
          border-bottom: none;
        }
        &:hover{
          background-color: #fff;
          //z-index: -1;
          color:#F28C28;
          border-radius: 5px;
          a{
            color:#F28C28;
          }

        }
        a{
          color: rgba(255,255,255,0.8);
        }

       .layer{
         display: none;
         position: absolute;
         left:200px;
         top: 0;
         width: 1045px;
         height: 420px;
         border-radius: 5px;
         background-color:  rgba(255, 255, 255);
         color: #000;
         z-index: 999;


         h4{
           padding: 15px 15px 0 15px;

           font-size: 20px;
         }
         ul{
           width: 100%;
           display: flex;
           flex-wrap: wrap;
           li{
             width: 310px;
             height: 110px;
             margin-left: 15px;
             margin-bottom: 15px;
             //border: 1px solid #eee;
             //border-radius: 4px;
             background: #fff;
             &:nth-child(3n){
               margin-right: 0px;
             }
             a{
               display: flex;
               //justify-content: center;
               align-items: center;
               width: 100%;
               height: 100%;
               img{
                 width: 80px;
                 height: 80px;
                 border-radius: 5px;
               }
               .info{
                 //color: #000;
                 padding-left: 15px;
                 line-height: 24px;
                 //overflow: hidden;
                 width: 100%;
                 height: 98px;

                 .title1{
                     font-size: 12px;
                     color: #666;
                 }
                 .title2{
                   font-size:10px ;
                   color: #999;
                 }
                 .price{
                   font-size: 12px;
                   color: $priceColor;
                 }
                 i{
                   font-size: 12px;
                 }
               }
             }
           }
         }
       }
        //当点击li的时候，显示layer，首先layer是none显示的
        &:hover {
          .layer {
            display: block;
          }
        }
      }
    }
  }
}

</style>