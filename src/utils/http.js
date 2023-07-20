import axios from "axios";
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'

const httpIntrance  = axios.create({
    baseURL:'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout:5000
})

//拦截器
httpIntrance.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

// 添加响应拦截器
httpIntrance.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    ElMessage({
        type:'warning',
        message:error.response.data.message
    })
    return Promise.reject(error);
 });

 export default httpIntrance