<script setup>
import {getBannerApi} from "@/apis/home";
import {onMounted,ref} from "vue";
const getBannerList = ref([])
const getBanner = async ()=>{
  const res = await getBannerApi()
  getBannerList.value = res.data.result
  // console.log(getBannerList)
}
onMounted(()=>getBanner())


</script>

<template>
<div class="app-Banner">
  <el-carousel arrow="always" height="420px">
    <el-carousel-item v-for="item in getBannerList" :key="item.id">
      <img :src="item.imgUrl" alt="">
    </el-carousel-item>
  </el-carousel>
</div>
</template>


<style scoped lang="scss">
.app-Banner{
  margin-top: 10px;
  height: 420px;
  width: 1024px;
  margin-left: 15px;
  img{
    width: 100%;
    height: 420px;
    border-radius: 5px;
  }
}

</style>