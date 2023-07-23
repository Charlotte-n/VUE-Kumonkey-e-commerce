import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/index.vue'
import Login from '@/views/Login/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategoty/index.vue'
import Detail from '@/views/Detail/index.vue'
import CartList from '@/views/CartList/index.vue'
import CheckOrder from '@/views/CheckOrder/index.vue'
import Pay from '@/views/pay/index.vue'
import PayBack from "@/views/pay/PayBack.vue";
import UserMain from '@/views/UserMain/index.vue'
import userInfo from "@/views/UserMain/components/userInfo.vue"
import userOrder from "@/views/UserMain/components/userOrder.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component:Layout,
      children:[
        {
          path:'',
          component:Home
        },
        {
          path:'category/:id',
          component:Category,
        },
        {
          path:'category/sub/:id',
          component:SubCategory,
        },
        {
          path:'detail/:id',
          component:Detail
        },
        {
          path:'cartlist',
          component:CartList
        },
        {
          path:'checkorder',
          component:CheckOrder
        },
        {
         path:'pay',
         component:Pay
        },
        {
        path:'paycallback',
          component:PayBack
        },{
        path:'member',
          component:UserMain,
          children:[
            {
              path:'',
              component:userInfo
            },
            {
              path:'order',
              component:userOrder
            }
          ]
        }
      ]
    },
    {
      path:'/login',
      component:Login,
    }
  ],
  scrollBehavior(){
    return {top:0}
  }
})

export default router
