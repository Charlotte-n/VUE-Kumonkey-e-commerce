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

//二级分类商品列表数据的api
/**
 * @description: 获取导航数据
 * @data {
     categoryId: 1005000 ,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
   }
 * @return {*}
 */
export const getGoodListApi = (data)=>{
    return httpIntrance({
        url:'/category/goods/temporary',
        method:'POST',
        data
    })
}
//post提交需要携带参数
