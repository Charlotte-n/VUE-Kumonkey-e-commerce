import axios from "axios";
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import {useUserStore} from "@/stores/user";
import router from "@/router";

const httpIntrance  = axios.create({
    baseURL:'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout:5000
})

//请求拦截器：一般设置token携带
httpIntrance.interceptors.request.use(function (config) {
    //1.从pinia中获取数据
    const useUser = useUserStore()
    //2.获取token
    const token = useUser.userData.token
    //3.拼接token，后端要求来的
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

// 添加响应拦截器
httpIntrance.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    const useUser = useUserStore()
    //统一错误处理
    ElMessage({
        type:'warning',
        message:error.response.data.message
    })
    //处理token失效问题
    if(error.response.status === 401){
        //清空用户信息
        useUser.clearUserInfo()
        //跳转到登录页面
        router.push('/login')
    }
    return Promise.reject(error);
 });

 export default httpIntrance