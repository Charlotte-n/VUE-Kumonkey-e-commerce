import httpIntrance from "@/utils/http";

//封装一级分类数据的api
export const getTopcategoryApi = (id)=>{
    return httpIntrance({
        url:'/category',
        params:{
            id
        }
    })
}

//封装二级分类数据的api
export const getSubCategoryApi = (id)=>{
    return httpIntrance({
        url:'/category/sub/filter',
        params:{
            id
        }
    })
}