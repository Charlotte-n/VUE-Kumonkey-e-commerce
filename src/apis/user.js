import httpIntrance from "@/utils/http";

//封装登录接口
//解构
export const getLoginApi = ({account,password})=>{

        return httpIntrance({
            url:'/login',
            method:"POST",
            data:{
                account,
                password
            }
        })
}

//封装获取猜你喜欢的api
export const getLiketApi = ({limit=4})=>{
    return httpIntrance({
        url:'/goods/relevant',
        params: {
            limit
        }
    })
}