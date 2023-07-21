<script setup>
import {reactive,ref} from "vue";
import {useUserStore} from "@/stores/user";
//消息弹出
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import {useRouter} from "vue-router";
//实例化pinia实例
const useUser = useUserStore()
//校验
//1.表单绑定
const form = reactive({
  account:'',
  password:'',
  agree:''
})
const rules = {
  account:
  [
      {required:true,message:'用户名不能为空',trigger:'blur'}
  ],
  password:[
    {required:true,message:"密码不能为空",trigger:'blur'},
    {min:6,max:14,message: "密码格式不对",trigger:'blur'}
  ],
  agree:[
    {
    validator:(rule,value,callback)=>{
      //2.自定义校验逻辑
      //勾选就通过，不勾选就不通过
      if(value){
        callback()
      }else{
        callback(new Error("请勾选协议"))
      }
    }
    }
  ]
}

//3.统一校验
const formRef = ref(null)
const router = useRouter()
function submit(){
  formRef.value.validate(async (value)=>{
    if(value){
      //全部成功的话调用接口
      //把form进行解构，之后传入接口中
      //登录
      //使用pinia来获取数据
      await useUser.getUserData(form)//请求有错误的话，会走请求拦截器的错误部分，返回一个Promise，相应的话也会相应错误信息
      //1.弹出信息
      ElMessage({
        message:"登录成功，欢迎来到库猴电商",
        type:"success"
      })
      //2.跳转页面
      router.replace({path:'/'})

    }
  })
}

//登录接口

</script>
<template>
   <div class="login">
     <div class="login-left">
       <div class="logo">
         <router-link to="/"><img src="@/assets/images/kuhou1.ico" alt="" style="background:#F28C28"></router-link>
       </div>
       <div class="welcome">
         <div class="lang">
           <ul>
             <li class="line-one">您好！</li>
             <li class="line-one">HELLO</li>
             <li class="line-one">안녕하세요！</li>
             <li class="line-one">こんにちは!</li>
             <li class="line-one">歡迎你！</li>
             <li class="line-one">您好！</li>
           </ul>
         </div>
         <p class="welcome1">库猴电商，您身边的赚钱工具，给您最优保障</p>

       </div>
       <div class="logo1">
         <img src="@/assets/images/kuhou1.ico" alt="" style="background: #F28C28">
       </div>
     </div>
     <div class="login-right">
       <p>欢迎来到 <span>库猴</span> ，非常高兴您的到来</p>
       <div class="account-box" style="width: 300px">
         <div class="form" >
           <el-form
               label-position="right"
               label-width="60px"
               :model="form"
               :rules="rules"
               ref="formRef"
                    status-icon>
             <el-form-item  label="账户" prop="account">
               <el-input v-model="form.account"/>
             </el-form-item>
             <el-form-item label="密码" prop="password">
               <el-input v-model="form.password"/>
             </el-form-item>
             <el-form-item label-width="22px" prop="agree">
               <el-checkbox  size="large" v-model="form.agree">
                 我已同意隐私条款和服务条款
               </el-checkbox>
             </el-form-item>
             <el-button size="large" class="subBtn" @click="submit">点击登录</el-button>
           </el-form>
         </div>
       </div>
     </div>
      
   </div>
</template>

<style lang="scss" scoped>
.login{
  display: flex;
  .login-left{
    padding: 20px 20px;
    width: 30%;
    height: 100vh;
    background-color: #F28C28;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .logo{

      a{
        display: inline-block;
        width: 80px;
        height: 80px;
        img{
          width: 80px;
          height: 80px;
        }
      }

    }
    .welcome{
      font-size: 28px;
      font-weight: 700;
      color: #ffffff;
      .lang{
        height: 40px;
        overflow: hidden;
        //做动画
        @keyframes rowup {
          from{
            transform: translate3d(0,0,0);
          }
          to{
            transform: translate3d(0,-240px,0);
          }
        }
        ul{
          li{
            animation: infinite rowup 8s ease;
            animation-delay: 1.5s;
            animation-fill-mode: forwards;
          }
        }
      }

    }
    
  }
  .login-right{
    margin-left: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    p{
      font-size: 30px;
      margin-bottom: 50px;
      span{
        color: #F28C28;
      }
    }
    .account-box{
      width: 400px;
      .form {
        width: 400px;
        padding: 0 20px 20px 20px;

        &-item {
          margin-bottom: 28px;

          .input {
            position: relative;
            height: 36px;

            >i {
              width: 34px;
              height: 34px;
              background: #cfcdcd;
              color: #fff;
              position: absolute;
              left: 1px;
              top: 1px;
              text-align: center;
              line-height: 34px;
              font-size: 18px;
            }

            input {
              padding-left: 44px;
              border: 1px solid #cfcdcd;
              height: 36px;
              line-height: 36px;
              width: 100%;

              &.error {
                border-color: $priceColor;
              }

              &.active,
              &:focus {
                border-color: #F28C28;
              }
            }

            .code {
              position: absolute;
              right: 1px;
              top: 1px;
              text-align: center;
              line-height: 34px;
              font-size: 14px;
              background: #f5f5f5;
              color: #666;
              width: 90px;
              height: 34px;
              cursor: pointer;
            }
          }

          >.error {
            position: absolute;
            font-size: 12px;
            line-height: 28px;
            color: $priceColor;

            i {
              font-size: 14px;
              margin-right: 2px;
            }
          }
        }

        .agree {
          a {
            color: #069;
          }
        }

        .btn {
          display: block;
          width: 100%;
          height: 40px;
          color: #fff;
          text-align: center;
          line-height: 40px;
          background: $xtxColor;

          &.disabled {
            background: #cfcdcd;
          }
        }
      }

      .action {
        padding: 20px 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .url {
          a {
            color: #999;
            margin-left: 10px;
          }
        }
      }
    }

    .subBtn {
      background: #F28C28;
      width: 100%;
      color: #fff;
      border-radius: 15px;
    }
    }

}

</style>

