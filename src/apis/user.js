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