<script setup>
import {getSubCategoryApi} from "@/apis/category";
import {useRoute} from "vue-router";
import {ref,onMounted} from "vue";

// 获取二级分类的面包屑导航分类
const route = useRoute()
const SubCategoryList = ref({})
const getSubCategory = async ()=>{
  const res = await getSubCategoryApi(route.params.id)
  SubCategoryList.value = res.data.result
}
onMounted(()=>getSubCategory())


</script>

<template>
<!--整体布局-->
  <div class="subCategory">
    <div class="container">
<!--      面包屑-->
      <div class="bread">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/' }">{{SubCategoryList.parentName}}</el-breadcrumb-item>
          <el-breadcrumb-item>{{SubCategoryList.name}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
<!--      导航-->
      <div class="sub">
        <el-tabs>
          <el-tab-pane label="最新商品" name="first">最新商品</el-tab-pane>
          <el-tab-pane label="最高人气" name="second">最高人气</el-tab-pane>
          <el-tab-pane label="评论最多" name="third">评论最多</el-tab-pane>
        </el-tabs>
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
  }
}
</style>