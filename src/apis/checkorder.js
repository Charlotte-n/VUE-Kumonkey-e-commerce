import httpIntrance from "@/utils/http";

//封装结算页的api
export const checkorderApi = ()=>{
    return httpIntrance({
        url:'/member/order/pre'
    })
}

//创建订单接口
export const createOrder = (data)=>{
    return httpIntrance({
        url:'/member/order',
        method:'POST',
        data
    })
}