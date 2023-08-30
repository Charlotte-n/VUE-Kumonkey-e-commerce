<script setup>
import {getSubCategoryApi,getGoodListApi} from "@/apis/category";
import {onBeforeRouteUpdate, useRoute} from "vue-router";
import {ref,onMounted} from "vue";
import GoodsItems from "@/views/Home/components/GoodsItems.vue";

// 获取二级分类的面包屑导航分类
const route = useRoute()
const SubCategoryList = ref({})
const getSubCategory = async ()=>{
  const res = await getSubCategoryApi(route.params.id)
  SubCategoryList.value = res.data.result
  console.log(res)
}
onMounted(()=>getSubCategory())

//获取商品列表数据
let goodsList = ref([])
const reqData = ref({
  categoryId:route.params.id,
  page:1,
  pageSize:20,
  sortField: 'publishTime'
})
const getGoodList = async ()=>{
  const res =await getGoodListApi(reqData.value)
  goodsList.value = res.data.result.items
}
onMounted(()=>getGoodList())

//列表筛选功能
function tabChange(){
  reqData.value.page = 1
  getGoodList()
}

//列表的无线加载功能
const disabled = ref(false)
async function load(){
  reqData.value.page++
  //获得新数据
  const res = await getGoodListApi(reqData.value)
  //新数据和老数据进行拼接
  goodsList.value = [...goodsList.value,...res.data.result.items]
  //停止监听
  if(res.data.result.items.length === 0){
    disabled.value=true
  }
}
onBeforeRouteUpdate(()=>{
  getGoodList()
})

</script>

<template>
<!--整体布局-->
  <div class="subCategory">
    <div class="container">
<!--      面包屑-->
      <div class="bread">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: `/category/${SubCategoryList.parentId}` }">{{SubCategoryList.parentName}}</el-breadcrumb-item>
          <el-breadcrumb-item>{{SubCategoryList.name}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
<!--      导航-->
      <div class="sub">
        <el-tabs
                 v-model="reqData.sortField"
                 type="card"
                 class="demo-tabs"
                 @tab-change="tabChange">
          <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
          <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
          <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
        </el-tabs>
      </div>
<!--      商品列表-->
      <div class="goods" v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
        <GoodsItems v-for="item in goodsList" :key="item.id" :item="item"></GoodsItems>
      </div>
      <div class="jiazai" v-if="!disabled">
        loading.......
      </div>
      <div class="warn" v-if="disabled">
        亲亲,没有更多了
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
.subCategory{
  margin-top: 15px;
  .container{
    .bread{
      margin-bottom: 15px;
    }
    .sub{
      background-color: #ffffff;
      padding: 15px 15px;
      border-radius: 5px;
    }
    .goods{
      background-color: #fff;
      display: flex;
      flex-wrap: wrap;
    }
    .jiazai{
      padding-bottom: 15px;
      background-color: #fff;
      font-size: 15px;
      color: #F28C28;
      text-align: center;
    }
    .warn{
      padding-bottom: 15px;
      background-color: #fff;
      text-align: center;
      color: #F28C28;
      font-size: 15px;

    }
  }
}
</style>