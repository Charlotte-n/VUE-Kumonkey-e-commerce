import {defineStore} from "pinia";
import {ref,computed} from 'vue'
import {useUserStore} from "@/stores/user";
import {addCartApi,getCartApi,deleteCartApi} from "@/apis/cart";

export const useCartStore = defineStore('cart',()=>{
    //管理state
    const cartList = ref([])
        const isLogin= computed(()=>useUserStore().userData.token)
    //action,添加商品

    //获取最新的购物车列表
   const updateCart =async ()=>{
        //2.调用获取购物车列表接口
        const res =await getCartApi()
        //3.进行覆盖
        cartList.value = res.data.result
    }
     const addCart = async(goods)=>{
        //如果是登录状态就调用本地接口
        if(isLogin.value){
            const{skuId,count} = goods
            //1.调用添加购物车接口
            await addCartApi({skuId,count})
            updateCart()
        }else{
            //进行判断：如果购物车列表里存在该商品，就count+1，没有直接加进去
            let item = cartList.value.find((item)=>item.skuId === goods.skuId)
            if(item){
                item.count += goods.count
            }else{
                cartList.value.push(goods)
            }
        }
    }
    //删除商品
    const removeCart = async (skuId)=>{
        if(isLogin.value){
            await deleteCartApi([skuId])
             updateCart()
        }else{
            /*
        思路
        1.在cartList里面找到该商品，进行删除
        2.怎样找到该商品，使用下标。 findIndexsplice进行删除/使用数组里的过滤方法
         */
            const index = cartList.value.findIndex(item=>item.skuId === skuId)
            cartList.value.splice(index,1)
        }

    }
    //修改单选框
    function single(selected,skuId){
        const item = cartList.value.find(item=>item.skuId === skuId)
        item.selected = selected
    }
    //全选功能
    function AllChecked(selected){
        //传入大复选框的值
        //控制小复选框的值
        cartList.value.forEach(item=>item.selected = selected)
    }
    //清空购物车模块
    function ClearCart(){
        cartList.value = []
    }

    //计算属性：求总的数量和总价
    //1.总的数量，就是所有商品的count相加
    const allCount =   computed(()=>cartList.value.reduce((a,b)=>a+b.count,0))
    //2.总的价格，就是count*price再求和
    const allPrice = computed(()=>cartList.value.reduce((a,b)=>a+b.count*b.price,0))
    //3.选择的数量
    const selectCount = computed(()=>cartList.value.filter(item=>item.selected).reduce((a,b)=>a+b.count,0))
    //4。选择的价格
        const selectPrice = computed(()=>cartList.value.filter(item=>item.selected).reduce((a,b)=>a+b.count*b.price,0))

    //单选框
    const isAll = computed(()=>cartList.value.every(item=>item.selected))
    return {
        cartList,
        addCart,
        removeCart,
        allCount,allPrice,
        single,
        AllChecked,
        isAll,
        selectCount,
        selectPrice,
        ClearCart,
        updateCart
    }
},{
        persist: true,
    }

)