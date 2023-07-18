import { useIntersectionObserver } from '@vueuse/core'

export const LazyPlugin =  {
    install(app) {
        // 配置此应用
        app.directive('lazy-img',{
            mounted(el,binding){
                const { stop } = useIntersectionObserver(
                    el,
                    ([{ isIntersecting }]) => {
                       if(isIntersecting){
                           el.src = binding.value
                           stop()
                       }
                    },
                )
            }
        })
    }
}










