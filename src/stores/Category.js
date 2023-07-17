import { ref } from 'vue'
import { defineStore } from 'pinia'
import {getCategoryApi} from '@/apis/layout'
export const useCategoryStore = defineStore('Category', () => {
    //导航列表的数据管理
    //获取一级导航的数据
    const items = ref([])
    //action获取导航数据的方法
    const getCategory = async()=>{
        const res = await getCategoryApi()
        items.value = res.data.result
    }
    return {
        items,
        getCategory
    }
})
