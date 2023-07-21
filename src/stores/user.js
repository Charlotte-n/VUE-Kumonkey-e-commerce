import {defineStore} from "pinia";
import {getLoginApi} from "@/apis/user";
import {ref} from "vue";
import {useCartStore} from "@/stores/addCart";
import {mergeCartApi} from "@/apis/cart";
//pinia管理用户数据
export const useUserStore = defineStore('user',()=>{
    //存储数据state
    const userData = ref({})
    const cart = useCartStore()
    //获取数据的action
    //登录时的操作
    const getUserData =async ({account,password})=>{
      const res = await getLoginApi({account,password})
        userData.value = res.data.result
        //调用合并购物车接口,用map方法对数组里的内容进行筛选之后再返回回来以数组的形式
        await mergeCartApi(cart.cartList.map(item=>{
            return {
                skuId:item.skuId,
                selected:item.selected,
                count:item.count
            }
        }))
        //更新购物车数据
        await cart.updateCart()

    }
    //退出登录时清除用户信息
    const clearUserInfo = ()=>{
        userData.value = {}
        useCartStore().ClearCart()

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