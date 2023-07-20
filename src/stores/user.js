import {defineStore} from "pinia";
import {getLoginApi} from "@/apis/user";
import {ref} from "vue";
//pinia管理用户数据
export const useUserStore = defineStore('user',()=>{
    //存储数据
    const userData = ref({})
    //获取数据
    const getUserData =async ({account,password})=>{
      const res = await getLoginApi({account,password})
        userData.value = res.data.result
    }
    //退出登录时清除用户信息
    const clearUserInfo = ()=>{
        userData.value = {}
    }
    return {
        userData,
        getUserData,
        clearUserInfo
    }
},
    {
        persist: true,
    }
)