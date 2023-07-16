<template>
    <LayoutNav></LayoutNav>
    <LayoutHeader></LayoutHeader>
    <h1>我是首页
        <router-view></router-view>
    </h1>
    <LayoutFooter></LayoutFooter>
    
</template>
<script setup>
import LayoutFooter from "./components/LayoutFooter.vue";
import LayoutHeader from "./components/LayoutHeader.vue";
import LayoutNav from "./components/LayoutNav.vue";
</script>

<style>

</style>