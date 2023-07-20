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
    return {
        userData,
        getUserData
    }
},
    {
        persist: true,
    }
)