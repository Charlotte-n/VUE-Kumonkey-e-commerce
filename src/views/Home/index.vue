<template>
  <div class="container">
    <HomeCategory></HomeCategory>
    <HomeBanner></HomeBanner>
  </div>
  <HomeNews></HomeNews>
  <HomeHot></HomeHot>
  <HomeProduct></HomeProduct>
<!--  测试home-pannel-->



</template>

<script setup>
import HomeCategory from "@/views/Home/components/HomeCategory.vue";
import HomeBanner from "@/views/Home/components/HomeBanner.vue";
import HomeNews from "@/views/Home/components/HomeNews.vue";
import HomeHot from "@/views/Home/components/HomeHot.vue";
import HomeProduct from "@/views/Home/components/HomeProduct.vue";
import HomePannel from "@/views/Home/components/HomePannel.vue";


</script>

<style lang="scss" scoped>
.container{
  display: flex;
  justify-content: space-between;
}

</style>

