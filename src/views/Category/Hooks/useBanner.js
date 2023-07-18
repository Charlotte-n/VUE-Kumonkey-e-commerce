import {ref,onMounted} from "vue";
import {getBannerApi} from "@/apis/home";

export function useBanner(){
    //获取banner
    const getBannerList = ref([])
    const getBanner = async ()=>{
        const res = await getBannerApi({distributionSite:"2"})
        getBannerList.value = res.data.result
    }
    onMounted(()=>getBanner())
    return {
        getBannerList
    }
}
