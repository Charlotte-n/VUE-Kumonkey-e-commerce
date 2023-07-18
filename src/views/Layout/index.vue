<template>
  <LayoutFixed></LayoutFixed>
    <LayoutNav></LayoutNav>
    <LayoutHeader></LayoutHeader>

<!--        <router-view :key="$route.fullPath"></router-view>-->
  <router-view></router-view>

    <LayoutFooter></LayoutFooter>
    
</template>
<script setup>
import LayoutFooter from "./components/LayoutFooter.vue";
import LayoutHeader from "./components/LayoutHeader.vue";
import LayoutNav from "./components/LayoutNav.vue";
import LayoutFixed from "@/views/Layout/components/LayoutFixed.vue";
import { useCategoryStore } from '@/stores/Category.js'
import { onMounted } from "vue";
//进行调用pinia管理的数据
const CategotyStore = useCategoryStore()
//调用一下数据，发送请求
onMounted(()=>CategotyStore.getCategory())
</script>

<style>

</style>