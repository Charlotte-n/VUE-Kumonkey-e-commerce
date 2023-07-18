import {ref,onMounted} from "vue";
//获取路由参数相应的数据
import {onBeforeRouteUpdate, useRoute} from "vue-router";

import {getTopcategoryApi} from "@/apis/category";

export function useCategory(){
    const route = useRoute()
    const categoryList = ref({})
    const getCategory =async (id = route.params.id)=>{
        const res =await getTopcategoryApi(id)
        categoryList.value = res.data.result
    }
    onMounted(()=>getCategory())

//路由守卫
    onBeforeRouteUpdate((to)=>{
        getCategory(to.params.id)
    })
    return {
        categoryList
    }
}