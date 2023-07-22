import httpIntrance from "@/utils/http";

//封装支付页的接口
export const payAip = (id)=>{
    return httpIntrance({
        url:`/member/order/${id}`
    })
}