import XtxSku from "@/components/XtxSku/index.vue";
import ImageView from "@/components/ImageView/ImageView.vue";

//进行注册,注册全局组件
export const componentPlugin = {
    install(app){
        app.component('ImageView',ImageView)
        app.component('XtxSku',XtxSku)
    }
}