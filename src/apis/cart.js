import httpIntrance from "@/utils/http";

//封装加入购物车接口
export const addCartApi =({skuId,count})=> {
    return httpIntrance({
        url:'/member/cart',
        method:'POST',
        data:{
            skuId,
            count
        }
    })
}

//封装获取购物车列表的结构
export  const getCartApi = ()=>{
    return httpIntrance({
        url:'/member/cart'
    })
}

//封装删除购物车的接口
export const deleteCartApi = (ids)=>{
    return httpIntrance({
        url:'/member/cart',
        method:'DELETE',
        data:{
            ids
        }

    })
}

//封装合并购物车的接口
export const mergeCartApi = (data)=>{
    return httpIntrance({
        url:'/member/cart/merge',
        method:'POST',
        data
    })
}