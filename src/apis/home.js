import httpIntrance from "@/utils/http";

//获取banner
export const getBannerApi = (parmars = {})=>{
    const {distributionSite = "1" } = parmars
   return  httpIntrance({
       url:'home/banner',
       params:{
           distributionSite
       }
   })
}
//获取新鲜好物
export  const getNewsApi = ()=>{
    return httpIntrance({
        url:'/home/new'
    })
}
//获取人气推荐
export  const getHotApi = ()=>{
    return httpIntrance({
        url:'/home/hot'
    })
}
//获取产品列表
export const getProductApi = ()=>{
    return httpIntrance({
        url:'/home/goods'
    })
}
