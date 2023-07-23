<template>
  <div class="app-topnav">
<!--    判断是否是登录状态，使用token来进行-->
        <template v-if="useUser.userData.token">
          <div class="container">
            <ul>
              <li><a href="javascript:;">{{useUser.userData.account}}</a></li>
              <li>
                <el-popconfirm
                    title="确定要退出吗"
                    confirm-button-text="确认"
                    cancel-button-text="取消"
                @confirm="confirm">
                  <template #reference>
                    <a href="javascript:;" @click="clearCart">退出登录</a>
                  </template>
                </el-popconfirm>
              </li>
              <li><a href="javascript:;">我的订单</a></li>
              <li><a :href="'/member/user'">会员中心</a></li>
              <li><a href="javascript:;">帮助中心</a></li>
              <li><a href="javascript:;">在线客服</a></li>
            </ul>
          </div>

        </template>
    <template v-else>
      <ul>
        <li><a href="/login">请先登录</a></li>
        <li><a href="javascript:;">帮助中心</a></li>
        <li><a href="javascript:;">在线客服</a></li>
      </ul>

    </template>
    </div>
</template>

<script setup>
import {useUserStore} from "@/stores/user";
import {useRouter} from "vue-router";


const useUser = useUserStore()
const router = useRouter()
const confirm = ()=>{
  //退出业务实现
  //1.清除用户信息
  useUser.clearUserInfo()
  //2.退回登陆页面
  router.push({path:`/login`})

}

</script>

<style lang="scss" scoped>
.app-topnav{
    background-color:  	#FF7518;
    ul{
        display: flex;
        justify-content: flex-end;
        height: 53px;
        align-items: center;
        li{
            a{
                padding: 0 15px;
                border-right: 1px solid #fff;
                color: #fff;
                font-size: 14px;
                &:hover{
                    color: #333;
                }
                
            }
            &:last-child{
                a{
                    border: none;
                }
            }
        }
    }
}

</style>