<template>
  <div class="top-category">
    <div class="container">
      <!--  面包屑导航-->
      <div class="bread">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{categoryList.name}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div >
      <!--      banner图-->
      <div class="banner">
        <el-carousel arrow="always" height="500px">
          <el-carousel-item v-for="item in getBannerList" :key="item.id">
            <img :src="item.imgUrl" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
<!--      分类导航的渲染-->
      <div class="sub-list">
        <h3>全部分类</h3>
        <ul class="list">
          <li v-for="item in categoryList.children" :key="item.id">
            <router-link :to="`/category/sub/${item.id}`">
              <img :src="item.picture" />
              <p>{{item.name}}</p>
            </router-link>
          </li>
        </ul>
      </div>
<!--      根据分类导航的内容渲染内容-->
      <div class="ref-goods" v-for="i in categoryList.children" :key="i.id">
        <div class="head">
          <h3>{{i.name}}</h3>
          <p>库猴电商，给你最优保障</p>
        </div>
        <div class="body">
              <GoodsItems v-for="good in i.goods" :key="good.id" :item="good"></GoodsItems>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
//获得数据
import GoodsItems from "@/views/Home/components/GoodsItems.vue";
import {useBanner} from "@/views/Category/Hooks/useBanner";
import {useCategory} from "@/views/Category/Hooks/useCategory";
//将返回结果解构出来
const {getBannerList} = useBanner()
const {categoryList} = useCategory()
</script>

<style scoped lang="scss">
.top-category{
  margin-top: 15px;
  .container{

    .bread{
      margin-bottom: 15px;
    }
    .banner{
      height: 500px;
      img{
        width: 100%;
        height: 500px;
        border-radius: 5px;
      }
    }
    .sub-list{
      margin-top: 15px;
      background-color: #fff;
      h3{
        font-weight: normal;
        text-align: center;
        font-size: 20px;
        padding: 20px 0;
      }
      .list{
        display: flex;
        flex-wrap: wrap;
        li{
          padding: 0 15px;
          width: 120px;
          height: 150px;
          a{
            img{
              width: 100px;
              height: 100px;
              background: white;

            }
            p{
              text-align: center;
              margin-top: 15px;
            }
          }
          transition: 0.5s all;
          &:hover{
              transform: translate3d(0,-3px,0);
              color: #F28C28;
            a{
              color: #F28C28;
            }
          }
        }
      }
    }
    .ref-goods{
      margin-top: 15px;
      background-color: #fff;
      .head{
        padding-top: 15px;
        text-align: center;
        h3{
          font-size: 20px;
          font-weight: normal;
        }
        p{
          color: #999999;
          margin-top: 10px;
        }
      }
      .body{
        display: flex;
        margin:15px;
      }
    }

  }
}
</style>
